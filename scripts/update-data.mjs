#!/usr/bin/env node
// TeraStockX data updater.
// 1) Lists all common stocks on Nasdaq, NYSE, NYSE American and Cboe BZX (nasdaqtrader.com).
// 2) Maps tickers to SEC CIK numbers.
// 3) For every company downloads the official XBRL financial data from SEC EDGAR (10-K, 10-Q, 20-F, 40-F),
//    quotes and market caps (Nasdaq screener), exchange rates (ECB) and material 8-K events,
//    and writes it in the template format: data/companies/<TICKER>.json
// 4) Adds monthly price histories (parallel phase) and 12-month insider transactions (SEC Form 4 data sets).
// 5) Computes sector benchmarks, runs the analysis engine and writes data/index.json, data/news.json
//    and data/benchmarks.json.
//
// Usage:
//   SEC_USER_AGENT="Name email@example.com" node scripts/update-data.mjs     # all companies
//   node scripts/update-data.mjs --tickers AAPL,MSFT                          # selected tickers only
//   node scripts/update-data.mjs --limit 50                                   # first 50 (testing)
//   node scripts/update-data.mjs --skip-prices --skip-insiders                # skip optional phases
//   node scripts/update-data.mjs --index-only                                 # rebuild index files only

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, unlinkSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parseCompanyFacts } from "./sec-parse.mjs";
import { sectorFromSic, sectorFromNasdaq, profileFor } from "./sectors.mjs";
import { nasdaqScreener, nasdaqEtfScreener, etfSummary, priceHistory, priceBudgetLeft, fxToUsd, marketSession, extendedQuotes, browserJson, dailyCloses } from "./market.mjs";
import { UCITS, ucitsQuote, ucitsHistory, nasdaqMonthlyRows } from "./ucits.mjs";
import { majorEvents, recentFilings } from "./events.mjs";
import { headlineFor, classifyNews, tidyTitle } from "./news-headline.mjs";
import { fillMissingFilings } from "./xbrl-instance.mjs";
import { buildSeo } from "./seo.mjs";
import { buildPulse, INDEX_ETFS, STORY_CAP, isStoryNews, newsTime, closeDayBefore, closeOn } from "./pulse.mjs";
import { parseNasdaqListed, parseOtherListed, parseEtfs } from "./listings.mjs";
import { insiderActivity } from "./insider.mjs";
import { updateLogos, logoSet } from "./logos.mjs";
import { currentFilings, FINANCIAL_FORMS } from "./current-filings.mjs";
import { analyze, computeBenchmarks, scoreHistory, ENGINE_VERSION, ENGINE_SERIES, DIMENSIONS, dividendProfile } from "../assets/js/scoring.js";
import { backtest } from "./backtest.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA = join(ROOT, "data");
const COMPANIES = join(DATA, "companies");
const UA = process.env.SEC_USER_AGENT || "TeraStockX (github.com/TeraStockX/terastockx.github.io)";

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const indexOnly = args.includes("--index-only");
// Intraday mode: only current prices (stocks and ETFs), then the index and the market summary are rebuilt.
const quotesOnly = args.includes("--quotes-only");
const skipPrices = args.includes("--skip-prices");
const skipInsiders = args.includes("--skip-insiders");
const skipEtfDetails = args.includes("--skip-etf-details");
const skipLogos = args.includes("--skip-logos");
const skipFilings = args.includes("--skip-filings");
// Intraday runs keep the company files they refreshed in this folder (the workflow carries it from run to
// run), so a company is downloaded once after a new filing, not again in every run until the next daily update.
const OVERLAY = process.env.INTRADAY_OVERLAY || null;
const FILINGS_BUDGET_MS = 8 * 60000;
const limit = opt("--limit") ? Number(opt("--limit")) : Infinity;
const onlyTickers = opt("--tickers") ? new Set(opt("--tickers").split(",").map((s) => s.trim().toUpperCase()).filter(Boolean)) : null;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const readJson = (f) => JSON.parse(readFileSync(f, "utf8"));

async function get(url, type = "json", tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA, "Accept-Encoding": "gzip, deflate" }, signal: AbortSignal.timeout(60000) });
      if (res.status === 404) return null;
      if (res.ok) return type === "json" ? res.json() : res.text();
      if (res.status !== 429 && res.status < 500) throw new Error(`HTTP ${res.status}`);
    } catch (e) {
      if (i === tries - 1) throw e;
    }
    await sleep(1000 * 2 ** i);
  }
  return null;
}

const todayIso = () => new Date().toISOString().slice(0, 10);

// Market fields of a company without SEC financials (price and market cap from the screener only).
function quoteMarket(q, old) {
  return { price: q.price ?? old?.price ?? null, priceDate: todayIso(), marketCap: q.marketCap ?? old?.marketCap ?? null, changePct: q.changePct ?? null, ipoYear: q.ipoYear ?? old?.ipoYear ?? null, source: q.price ? "Nasdaq" : null };
}

// The latest periodic report (annual or quarterly) in the company's filing list.
const REPORT_FORMS = new Set(["10-K", "10-Q", "20-F", "40-F", "10-KT"]);
function latestReport(sub) {
  const r = sub?.filings?.recent;
  if (!r?.form) return null;
  for (let i = 0; i < r.form.length; i++) {
    if (REPORT_FORMS.has(r.form[i])) return { form: r.form[i], date: r.filingDate[i], period: r.reportDate?.[i] || null };
  }
  return null;
}

// ---------- News of large companies ----------

// Companies above this market cap get headlines for their recent 8-K filings (press release titles):
// leadership changes, results, deals and the major events.
const BIG_NEWS_CAP = 1e10;
const isBig = (marketCap) => (marketCap ?? 0) >= BIG_NEWS_CAP;
const EVENT_DAYS = 365;
const STORY_DAYS = 3; // news of the last days for the top stories

// How the news is read; companies read with an older version are read again by the intraday catch-up.
const NEWS_VERSION = 2;

// Recent 8-Ks with headlines; a headline is downloaded once and kept in the company file (the kind of news is
// worked out again every time, so better rules apply to the kept headlines too).
async function companyNews(sub, old) {
  const cached = new Map((old?.news || []).filter((n) => n.title).map((n) => [n.url, n]));
  const out = [];
  for (const f of recentFilings(sub)) {
    const hit = cached.get(f.url);
    if (hit) { const title = tidyTitle(hit.title); out.push({ ...f, title, lede: hit.lede ?? null, kind: classifyNews(f.items, `${title} ${hit.lede || ""}`) }); continue; }
    const h = await headlineFor(f, async (url, type) => { const r = await get(url, type); await sleep(110); return r; });
    out.push({ ...f, ...h });
  }
  return out;
}

// Major events with the headlines of the news; leadership changes of large companies (chief executive,
// chief financial officer, chair) are kept among the major events too, for 12 months like the others.
function eventsWithNews(events, news, old, now = new Date()) {
  const fresh = new Map((news || []).map((n) => [n.url, n]));
  const info = new Map();
  for (const e of old?.events || []) if (e.title || e.kind) info.set(e.url, e);
  for (const n of news || []) info.set(n.url, n);
  const out = events.map((e) => { const x = info.get(e.url); return x ? { ...e, title: x.title ?? null, kind: x.kind ?? null } : e; });
  const have = new Set(out.map((e) => e.url));
  // The news read now decides about its own filings; older leadership changes are kept from before.
  for (const e of [...(news || []), ...(old?.events || []).filter((x) => !fresh.has(x.url))]) {
    if (e.kind !== "leadership" || have.has(e.url) || (now - new Date(e.date)) / 86400000 > EVENT_DAYS) continue;
    have.add(e.url);
    out.push({ date: e.date, items: ["5.02"], severity: 4, url: e.url, title: e.title ?? null, kind: "leadership" });
  }
  return out.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)).slice(0, 14);
}

// Market session of this run's quotes (intraday runs): pre-market, open, after-hours or closed.
let SESSION = null;
// The screener's prices stay at the previous close for most of the day (Nasdaq refreshes them after the
// session), so the latest trades are read separately, 20 symbols per request: during the session for the
// companies above about $2 billion (this many, the largest first) and the largest funds; before the open and
// after the close for the largest companies and the index funds (pre-market, after-hours).
const LIVE_TOP = 2000, LIVE_ETFS = 100, EXT_TOP = 300;
const etDate = (d = new Date()) => d.toLocaleDateString("en-CA", { timeZone: "America/New_York" });

// The day's session quotes, kept between intraday runs (in the Actions cache, with the refreshed companies):
// after the close they are the day's closing prices and changes while the screener still shows the previous day.
function readDayQuotes() {
  const empty = { date: etDate(), q: {} };
  try {
    const f = OVERLAY && join(OVERLAY, "quotes.json");
    const d = f && existsSync(f) ? readJson(f) : null;
    return d?.date === empty.date && d.q ? d : empty;
  } catch {
    return empty;
  }
}
function writeDayQuotes(d) {
  if (!OVERLAY) return;
  mkdirSync(OVERLAY, { recursive: true });
  writeFileSync(join(OVERLAY, "quotes.json"), JSON.stringify(d) + "\n");
}

// Intraday: current prices only. Market cap moves with the price; everything else stays from the daily run.
async function updateQuotes(screener = null) {
  screener ||= await nasdaqScreener();
  const etfQuotes = await nasdaqEtfScreener();
  if (!screener.size) { console.warn("  no quotes; nothing updated"); return; }
  SESSION = await marketSession();
  const session = SESSION?.session || null;
  const day = readDayQuotes();
  const ef = join(DATA, "etfs.json");
  const etfData = existsSync(ef) ? readJson(ef) : null;
  const byCap = [...screener.entries()].filter(([, q]) => q.marketCap > 0).sort((a, b) => b[1].marketCap - a[1].marketCap).map(([t]) => ({ t }));
  const bigFunds = (etfData?.etfs || []).filter((r) => r.aum > 0).sort((a, b) => b.aum - a.aum).slice(0, LIVE_ETFS).map((r) => r.t);
  const funds = [...new Set([...INDEX_ETFS, ...(session === "open" ? bigFunds : [])])].map((t) => ({ t, etf: true }));
  let live = new Map();
  if (session === "open") live = await extendedQuotes([...byCap.slice(0, LIVE_TOP), ...funds]);
  else if (session === "pre" || session === "post") live = await extendedQuotes([...byCap.slice(0, EXT_TOP), ...funds]);
  if (session === "open" && live.size) {
    for (const [t, x] of live) if (Number.isFinite(x.changePct)) day.q[t] = [x.price, x.changePct];
    day.at = new Date().toISOString();
    writeDayQuotes(day);
  }
  const kept = Object.keys(day.q).length;
  // During and after the session the screener's change is the previous day's: a company without a quote of
  // the day has no change of the day (unless the live quotes are unavailable altogether).
  const screenerStale = (session === "open" && live.size > 50) || ((session === "post" || session === "closed") && kept > 50);
  const dayQuote = (t) => {
    const x = session === "open" ? live.get(t) : null;
    if (x && Number.isFinite(x.changePct)) return { price: x.price, changePct: x.changePct };
    const k = session !== "pre" ? day.q[t] : null;
    return k ? { price: k[0], changePct: k[1] } : null;
  };
  // Before the open: the pre-market change against the previous close, as Nasdaq reports it. After the
  // close: the after-hours change against the day's closing price.
  const extOf = (t) => {
    if (session !== "pre" && session !== "post") return undefined;
    const x = live.get(t);
    if (!x || !Number.isFinite(x.price)) return undefined;
    const close = session === "post" ? day.q[t]?.[0] : null;
    const changePct = close > 0 ? (x.price / close - 1) * 100 : x.changePct;
    return Number.isFinite(changePct) ? { session, price: x.price, changePct: +changePct.toFixed(2), at: x.at } : undefined;
  };
  let n = 0, fresh = 0;
  for (const f of readdirSync(COMPANIES)) {
    const c = readJson(join(COMPANIES, f));
    const q = screener.get(c.ticker);
    const d = dayQuote(c.ticker);
    const price = d?.price ?? q?.price;
    if (!Number.isFinite(price)) continue;
    const m = c.market || {};
    const ratio = Number.isFinite(m.price) && m.price > 0 ? price / m.price : null;
    // The screener's market cap belongs to its own (older) price.
    const marketCap = q?.marketCap > 0 && q.price > 0 ? q.marketCap * (price / q.price) : Number.isFinite(m.marketCap) && ratio ? m.marketCap * ratio : m.marketCap ?? null;
    const changePct = d ? d.changePct : screenerStale ? null : q?.changePct ?? null;
    c.market = { ...m, price, priceDate: todayIso(), changePct, marketCap, quoteTime: new Date().toISOString(), ext: extOf(c.ticker) };
    writeFileSync(join(COMPANIES, f), JSON.stringify(c) + "\n");
    n++;
    if (d) fresh++;
  }
  if (etfData) {
    for (const r of etfData.etfs) {
      const q = etfQuotes.get(r.t);
      const d = dayQuote(r.t);
      if (d) { r.px = d.price; r.dc = d.changePct; }
      else if (q && Number.isFinite(q.price)) { r.px = q.price; r.dc = screenerStale ? null : Number.isFinite(q.changePct) ? q.changePct : r.dc; }
      else if (screenerStale) r.dc = null;
      const x = extOf(r.t);
      if (x) { r.xc = x.changePct; r.xp = x.price; r.xs = x.session; } else { delete r.xc; delete r.xp; delete r.xs; }
    }
    etfData.quotesAt = new Date().toISOString();
    etfData.session = SESSION ? { session, previousTradeDate: SESSION.previousTradeDate } : null;
    writeFileSync(ef, JSON.stringify(etfData) + "\n");
  }
  console.log(`  quotes updated: ${n} companies (${fresh} with a quote of the day), ${etfQuotes.size} ETFs in the screener; session: ${session || "unknown"}; live quotes: ${live.size}, kept from today's session: ${kept}`);
}

// ---------- ETFs for European investors and ETF price history ----------

// European (UCITS) ETFs: prices (and, in the daily update, two years of monthly closes) from justETF. Intraday
// at most every 30 minutes, and not after the European close; the latest prices are carried between intraday
// runs in the Actions cache.
async function updateUcits({ history = false } = {}) {
  const file = join(DATA, "ucits.json");
  const kept = OVERLAY && join(OVERLAY, "ucits.json");
  const candidates = [file, kept].filter((f) => f && existsSync(f)).map((f) => { try { return readJson(f); } catch { return null; } }).filter(Boolean);
  const old = candidates.sort((a, b) => Date.parse(b.quotesAt || 0) - Date.parse(a.quotesAt || 0))[0] || { etfs: [] };
  const now = new Date();
  if (!history && old.quotesAt) {
    const age = now - Date.parse(old.quotesAt);
    const closed = now.getUTCHours() >= 17 && Date.parse(old.quotesAt) > Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 16, 40);
    if (age < 30 * 60000 || closed) { writeFileSync(file, JSON.stringify(old) + "\n"); return; }
  }
  const prev = new Map((old.etfs || []).map((e) => [e.t, e]));
  let ok = 0;
  const etfs = [];
  for (const e of UCITS) {
    const p = prev.get(e.t) || {};
    const q = await ucitsQuote(e, browserJson).catch(() => null);
    await sleep(250);
    let h = p.h;
    if (history) {
      const hh = await ucitsHistory(e, browserJson).catch(() => null);
      await sleep(250);
      if (hh?.length) h = hh;
    }
    if (q) ok++;
    etfs.push({ ...e, px: q?.px ?? p.px ?? null, dc: q ? q.dc : p.dc ?? null, date: q?.date ?? p.date ?? null, h });
  }
  const out = { generated: now.toISOString(), quotesAt: ok ? now.toISOString() : old.quotesAt || null, etfs };
  writeFileSync(file, JSON.stringify(out) + "\n");
  if (kept) { mkdirSync(OVERLAY, { recursive: true }); writeFileSync(kept, JSON.stringify(out) + "\n"); }
  console.log(`  European ETFs: ${ok} of ${UCITS.length} prices${history ? ", monthly closes" : ""}`);
}

// Monthly closes of the largest US-listed ETFs (by assets) for the portfolio charts.
const ETF_HISTORY_TOP = 300;
async function updateEtfHistory() {
  const ef = join(DATA, "etfs.json");
  if (!existsSync(ef)) return;
  const top = readJson(ef).etfs.filter((x) => x.aum > 0).sort((a, b) => b.aum - a.aum).slice(0, ETF_HISTORY_TOP);
  const to = new Date(), from = new Date(to.getFullYear(), to.getMonth() - 26, 1);
  const d = (x) => x.toISOString().slice(0, 10);
  const h = {};
  for (const x of top) {
    const j = await browserJson(`https://api.nasdaq.com/api/quote/${encodeURIComponent(x.t)}/historical?assetclass=etf&fromdate=${d(from)}&todate=${d(to)}&limit=9999`);
    const m = nasdaqMonthlyRows(j?.data?.tradesTable?.rows);
    if (m.length) h[x.t] = m;
    await sleep(150);
  }
  if (Object.keys(h).length) writeFileSync(join(DATA, "etf-history.json"), JSON.stringify({ generated: new Date().toISOString(), h }) + "\n");
  console.log(`  ETF price history: ${Object.keys(h).length} of ${top.length}`);
}

// Large companies whose recent news has not been read yet (when this was introduced, or a company that grew
// past the size limit): a limited number per intraday run, the largest first; the daily update reads all.
async function backfillNews(budgetMs = 150000) {
  const start = Date.now();
  const todo = [];
  for (const f of readdirSync(COMPANIES)) {
    const c = readJson(join(COMPANIES, f));
    if (c.cik && c.newsVersion !== NEWS_VERSION && isBig(c.market?.marketCap)) todo.push({ t: c.ticker, mc: c.market.marketCap });
  }
  if (!todo.length) return;
  todo.sort((a, b) => b.mc - a.mc);
  let n = 0;
  for (const { t } of todo) {
    if (Date.now() - start > budgetMs) break;
    const file = join(COMPANIES, `${t}.json`);
    const c = readJson(file);
    try {
      const sub = await get(`https://data.sec.gov/submissions/CIK${String(c.cik).padStart(10, "0")}.json`);
      await sleep(110);
      if (!sub) continue;
      c.news = await companyNews(sub, c);
      if (!c.news.length) delete c.news;
      c.events = eventsWithNews(majorEvents(sub), c.news, c);
      // Not marked as a refresh of the filings: a report that is still waiting for its download stays due.
      c.newsChecked = new Date().toISOString();
      c.newsVersion = NEWS_VERSION;
      writeFileSync(file, JSON.stringify(c) + "\n");
      if (OVERLAY) {
        mkdirSync(join(OVERLAY, "companies"), { recursive: true });
        writeFileSync(join(OVERLAY, "companies", `${t}.json`), readFileSync(file));
      }
      n++;
    } catch (e) {
      console.warn(`  ${t} news: ${e.message}`);
    }
  }
  console.log(`  news of large companies: ${n} read now, ${todo.length - n} left for the next runs`);
}

// ---------- Intraday: companies with new filings ----------

const retrievedAt = (c) => Math.max(Date.parse(c?.source?.retrieved || "") || 0, Date.parse(c?.eventsRetrieved || "") || 0);

// Company files refreshed by earlier intraday runs replace the daily ones while they are newer.
function applyOverlay() {
  const dir = OVERLAY && join(OVERLAY, "companies");
  if (!dir || !existsSync(dir)) return 0;
  let n = 0;
  for (const f of readdirSync(dir)) {
    const target = join(COMPANIES, f);
    let o = null;
    try { o = readJson(join(dir, f)); } catch {}
    const cur = existsSync(target) ? readJson(target) : null;
    if (o && cur && retrievedAt(o) >= retrievedAt(cur)) { writeFileSync(target, JSON.stringify(o) + "\n"); n++; }
    else unlinkSync(join(dir, f)); // the daily data has caught up (or the company is gone)
  }
  return n;
}

// Companies that filed an annual or quarterly report (full download: new figures and TeraScore) or a current
// report such as an 8-K (filing list only: events) after their data was downloaded.
async function refreshCurrentFilings(screener) {
  if (OVERLAY) mkdirSync(join(OVERLAY, "companies"), { recursive: true });
  const fromOverlay = applyOverlay();
  const byCik = new Map();
  for (const f of readdirSync(COMPANIES)) {
    if (!f.endsWith(".json")) continue;
    const c = readJson(join(COMPANIES, f));
    if (c.cik) byCik.set(String(c.cik).padStart(10, "0"), { ticker: c.ticker, name: c.name, exchange: c.exchange, cik: String(c.cik).padStart(10, "0"), at: retrievedAt(c) });
  }
  const hours = Number(process.env.FILINGS_SINCE_HOURS) || 26;
  const feed = await currentFilings({ get: async (url, type) => { const r = await get(url, type); await sleep(150); return r; }, since: new Date(Date.now() - hours * 3600000) });
  const todo = new Map();
  for (const e of feed) {
    const c = byCik.get(e.cik);
    if (!c || !(Date.parse(e.updated) > c.at)) continue;
    const t = todo.get(e.cik) || { c, full: false };
    if (FINANCIAL_FORMS.has(e.form)) t.full = true;
    todo.set(e.cik, t);
  }
  const list = [...todo.values()].sort((a, b) => Number(b.full) - Number(a.full)); // reports first
  console.log(`  new filings: ${feed.length} in the SEC feed, ${list.length} companies to refresh (${fromOverlay} kept from earlier runs today)`);
  if (!list.length) return;
  const fx = list.some((x) => x.full) ? await fxToUsd().catch(() => ({})) : {};
  const start = Date.now();
  let reports = 0, current = 0, failed = 0;
  for (const { c, full } of list) {
    if (Date.now() - start > FILINGS_BUDGET_MS) break;
    try {
      if (full) {
        await fetchCompany({ ticker: c.ticker, name: c.name, exchange: c.exchange }, { cik: c.cik }, screener.get(c.ticker) || {}, fx);
        reports++;
      } else {
        const sub = await get(`https://data.sec.gov/submissions/CIK${c.cik}.json`);
        await sleep(110);
        if (!sub) { failed++; continue; }
        const cur = readJson(join(COMPANIES, `${c.ticker}.json`));
        const news = isBig(cur.market?.marketCap) ? await companyNews(sub, cur).catch(() => cur.news) : undefined;
        cur.events = eventsWithNews(majorEvents(sub), news, cur);
        if (news) { cur.news = news.length ? news : undefined; cur.newsChecked = new Date().toISOString(); cur.newsVersion = NEWS_VERSION; }
        cur.lastReport = latestReport(sub) || cur.lastReport || null;
        cur.eventsRetrieved = new Date().toISOString();
        writeCompany(cur);
        current++;
      }
      if (OVERLAY) {
        mkdirSync(join(OVERLAY, "companies"), { recursive: true });
        writeFileSync(join(OVERLAY, "companies", `${c.ticker}.json`), readFileSync(join(COMPANIES, `${c.ticker}.json`)));
      }
    } catch (e) {
      failed++;
      console.warn(`  ${c.ticker}: ${e.message}`);
    }
  }
  console.log(`  refreshed: ${reports} with a new report, ${current} with a new current report${failed ? `, ${failed} errors` : ""}; ${list.length - reports - current - failed} left for the next run`);
  if (OVERLAY) writeFileSync(join(OVERLAY, "state.json"), JSON.stringify({ checked: new Date().toISOString(), reports, current, failed }) + "\n");
}

async function allListings() {
  const nasdaq = parseNasdaqListed(await get("https://www.nasdaqtrader.com/dynamic/SymDir/nasdaqlisted.txt", "text"));
  const other = parseOtherListed(await get("https://www.nasdaqtrader.com/dynamic/SymDir/otherlisted.txt", "text"));
  const seen = new Set();
  return [...nasdaq, ...other].filter((x) => !seen.has(x.ticker) && seen.add(x.ticker));
}

// Share classes of the listed securities (ticker → "A", "B", "C" … or "V" / "NV" for voting / non-voting),
// from the security names of the listings; refreshed by the daily run, fetched once by other runs.
const CLASSES_FILE = join(DATA, "classes.json");
function writeClasses(list) {
  const classes = Object.fromEntries(list.filter((x) => x.cls).map((x) => [x.ticker, x.cls]));
  const out = JSON.stringify({ generated: new Date().toISOString(), classes }) + "\n";
  writeFileSync(CLASSES_FILE, out);
  if (OVERLAY) { mkdirSync(OVERLAY, { recursive: true }); writeFileSync(join(OVERLAY, "classes.json"), out); }
}
async function ensureClasses() {
  const fresh = (f) => { try { return existsSync(f) && Date.now() - Date.parse(readJson(f).generated) < 3 * 86400000; } catch { return false; } };
  if (fresh(CLASSES_FILE)) return;
  const kept = OVERLAY && join(OVERLAY, "classes.json");
  if (kept && fresh(kept)) { writeFileSync(CLASSES_FILE, readFileSync(kept)); return; }
  try { writeClasses(await allListings()); } catch (e) { console.warn(`Share classes not updated: ${e.message}`); }
}

async function secTickers() {
  const j = await get("https://www.sec.gov/files/company_tickers_exchange.json");
  const map = new Map();
  for (const row of j.data) {
    const r = Object.fromEntries(j.fields.map((k, i) => [k, row[i]]));
    map.set(String(r.ticker).toUpperCase(), { cik: String(r.cik).padStart(10, "0"), name: r.name });
  }
  return map;
}

// Downloads one company from the SEC (company facts and filing list), parses it and saves its file.
// item: { ticker, name, exchange }; sec: { cik }; q: its Nasdaq quote (or {}); fx: currency -> USD rates.
async function fetchCompany(item, sec, q = {}, fx = {}) {
  const base = { schemaVersion: 3, ticker: item.ticker, name: item.name, exchange: item.exchange, currency: "USD", demo: false };
  const result = { ok: false, gapFilled: false };
  const cf = await get(`https://data.sec.gov/api/xbrl/companyfacts/CIK${sec.cik}.json`);
  await sleep(110); // SEC fair-access limit: max 10 requests / second
  const sub = await get(`https://data.sec.gov/submissions/CIK${sec.cik}.json`);
  await sleep(110);
  if (cf && sub) {
    const added = await fillMissingFilings(cf, sub, sec.cik, async (url, type) => { const r = await get(url, type); await sleep(110); return r; });
    if (added.length) { result.gapFilled = true; console.log(`  ${item.ticker}: read from the filing, missing in companyfacts: ${added.join(", ")}`); }
  }
  const parsed = cf ? parseCompanyFacts(cf) : { annual: [], currency: "USD" };
  result.ok = parsed.annual.length > 0;

  const sector = sectorFromSic(sub?.sic) || sectorFromNasdaq(q.sector);
  // Price history and insider data are added in later phases; until then the previous ones are kept.
  const file = join(COMPANIES, `${item.ticker}.json`);
  const old = existsSync(file) ? readJson(file) : null;
  const hist = old?.prices?.data?.length ? old.prices : null;
  const news = sub && isBig(q.marketCap ?? old?.market?.marketCap) ? await companyNews(sub, old).catch((e) => { console.warn(`  ${item.ticker} news: ${e.message}`); return old?.news; }) : undefined;
  const currency = parsed.currency || "USD";
  const price = q.price ?? (hist ? hist.data.at(-1)[1] : null);
  const shares = parsed.sharesOutstanding ?? null;
  // Price × shares is only safe for US-dollar filers: ADRs of foreign companies represent a ratio of shares.
  const marketCap = q.marketCap || (currency === "USD" && price && shares ? price * shares : null);

  writeCompany({
    ...base,
    // First day the company appeared in the listings (unknown for companies listed before this was recorded).
    firstSeen: old ? old.firstSeen : todayIso(),
    lastReport: latestReport(sub),
    name: sub?.name || cf?.entityName || item.name,
    cik: sec.cik,
    currency,
    country: q.country || sub?.addresses?.business?.stateOrCountryDescription || null,
    sicCode: sub?.sic ? Number(sub.sic) : null,
    sicDescription: sub?.sicDescription || null,
    sector,
    industry: q.industry || sub?.sicDescription || null,
    profile: profileFor(sub?.sic, sector),
    fiscalYearEndMonth: sub?.fiscalYearEnd ? Number(sub.fiscalYearEnd.slice(0, 2)) : null,
    source: { name: "SEC EDGAR XBRL company facts (10-K, 10-Q, 20-F, 40-F)", url: `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${sec.cik}`, retrieved: new Date().toISOString() },
    market: {
      price,
      priceDate: new Date().toISOString().slice(0, 10),
      marketCap,
      sharesOutstanding: shares,
      sharesOutstandingDate: parsed.sharesOutstandingDate ?? null,
      fxToUsd: currency === "USD" ? 1 : fx[currency] ?? null,
      source: q.price ? "Nasdaq" : hist?.source || null,
      changePct: q.changePct ?? null,
      ipoYear: q.ipoYear ?? old?.market?.ipoYear ?? null,
    },
    foreignPrivateIssuer: (sub?.filings?.recent?.form || []).some((f) => f === "20-F" || f === "40-F"),
    events: eventsWithNews(majorEvents(sub), news, old),
    news: news?.length ? news : undefined,
    newsChecked: news ? new Date().toISOString() : undefined,
    newsVersion: news ? NEWS_VERSION : undefined,
    insiders: old?.insiders ?? null,
    scoreHistory: old?.scoreHistory ?? undefined,
    prices: hist,
    splits: parsed.splits?.length ? parsed.splits : undefined,
    ttm: parsed.ttm,
    latestBalance: parsed.latestBalance,
    annual: parsed.annual,
    quarterly: parsed.quarterly?.length ? parsed.quarterly : undefined,
  });
  return result;
}

async function updateCompanies() {
  mkdirSync(COMPANIES, { recursive: true });
  console.log("Downloading listings…");
  let list = await allListings();
  writeClasses(list);
  const byEx = {};
  for (const x of list) byEx[x.exchange] = (byEx[x.exchange] || 0) + 1;
  console.log(`  ${list.length} common stocks`, byEx);
  const ciks = await secTickers();
  const screener = await nasdaqScreener();
  const fx = await fxToUsd();
  console.log(`  screener: ${screener.size} quotes; exchange rates: ${Object.keys(fx).length}`);
  // Exchange rates for the pages too (e.g. a portfolio screenshot that shows values in forints or euros).
  if (Object.keys(fx).length > 1) writeFileSync(join(DATA, "fx.json"), JSON.stringify({ generated: new Date().toISOString(), usdPer: Object.fromEntries(Object.entries(fx).map(([c, v]) => [c, +v.toPrecision(6)])) }) + "\n");
  if (onlyTickers) list = list.filter((x) => onlyTickers.has(x.ticker));
  list = list.slice(0, limit);

  let ok = 0, noData = 0, failed = 0, gapFilled = 0;
  for (const [i, item] of list.entries()) {
    const sec = ciks.get(item.ticker.replace(".", "-")) || ciks.get(item.ticker);
    const q = screener.get(item.ticker) || {};
    const base = { schemaVersion: 3, ticker: item.ticker, name: item.name, exchange: item.exchange, currency: "USD", demo: false };
    try {
      if (!sec) {
        noData++;
        const prev = existsSync(join(COMPANIES, `${item.ticker}.json`)) ? readJson(join(COMPANIES, `${item.ticker}.json`)) : null;
        writeCompany({ ...base, cik: null, sector: sectorFromNasdaq(q.sector), industry: q.industry || null, profile: "general", source: null, annual: [], note: "noSecFiling",
          firstSeen: prev ? prev.firstSeen : todayIso(), market: quoteMarket(q, prev?.market) });
        continue;
      }
      const r = await fetchCompany(item, sec, q, fx);
      if (r.ok) ok++; else noData++;
      if (r.gapFilled) gapFilled++;
    } catch (e) {
      failed++;
      console.warn(`  ERROR ${item.ticker}: ${e.message}`);
    }
    if ((i + 1) % 250 === 0) console.log(`  ${i + 1}/${list.length} processed`);
  }
  // A full run removes files of securities that are no longer listed (or are warrants/units).
  if (!onlyTickers && limit === Infinity) {
    const keep = new Set(list.map((x) => `${x.ticker}.json`));
    let removed = 0;
    for (const f of readdirSync(COMPANIES)) if (!keep.has(f)) { unlinkSync(join(COMPANIES, f)); removed++; }
    console.log(`  removed ${removed} delisted or non-share securities`);
  }
  const tickers = list.map((x) => x.ticker);
  if (!skipInsiders) await updateInsiders(tickers);
  const withPrices = skipPrices ? 0 : await updatePriceHistories(tickers);
  console.log(`Done: ${ok} with financials, ${noData} without data, ${failed} errors, ${gapFilled} filled from filings missing in companyfacts, ${withPrices} price histories updated.`);
}

// ETFs (portfolio only): daily price and one-year change; expense ratio, assets and yield weekly.
const ETF_DETAIL_BUDGET_MS = 25 * 60000;
async function updateEtfs() {
  const list = parseEtfs(await get("https://www.nasdaqtrader.com/dynamic/SymDir/nasdaqlisted.txt", "text"), await get("https://www.nasdaqtrader.com/dynamic/SymDir/otherlisted.txt", "text"));
  const quotes = await nasdaqEtfScreener();
  const file = join(DATA, "etfs.json");
  const prev = new Map((existsSync(file) ? readJson(file).etfs || [] : []).map((e) => [e.t, e]));
  const rows = list.map((x) => {
    const q = quotes.get(x.ticker) || {}, p = prev.get(x.ticker) || {};
    return { t: x.ticker, n: x.name, ex: x.exchange, px: q.price ?? p.px ?? null, dc: q.changePct ?? null, r1y: q.return1y ?? p.r1y ?? null, er: p.er ?? null, dy: p.dy ?? null, aum: p.aum ?? null };
  }).filter((r) => Number.isFinite(r.px));
  if (!skipEtfDetails) {
    const start = Date.now();
    let next = 0, done = 0;
    const worker = async () => {
      while (next < rows.length && Date.now() - start < ETF_DETAIL_BUDGET_MS) {
        const r = rows[next++];
        const d = await etfSummary(r.t);
        if (!d) continue;
        r.er = d.expenseRatio ?? r.er;
        r.dy = d.yield ?? r.dy;
        r.aum = d.aum ?? r.aum;
        done++;
      }
    };
    await Promise.all(Array.from({ length: 8 }, worker));
    console.log(`  ETF details: ${done} of ${rows.length}`);
  }
  const round = (v, d) => (Number.isFinite(v) ? +v.toFixed(d) : v);
  for (const r of rows) {
    r.r1y = round(r.r1y, 4); r.er = round(r.er, 5); r.dy = round(r.dy, 5);
    for (const k of Object.keys(r)) if (r[k] === null || r[k] === undefined) delete r[k];
  }
  writeFileSync(file, JSON.stringify({ generated: new Date().toISOString(), count: rows.length, etfs: rows }) + "\n");
  console.log(`data/etfs.json: ${rows.length} ETFs (${rows.filter((r) => r.dy).length} with yield, ${rows.filter((r) => r.er !== undefined).length} with expense ratio)`);
}

// Phase 2: insider transactions for every company from the SEC Form 4 data sets.
async function updateInsiders(tickers) {
  const activity = await insiderActivity({ userAgent: UA });
  if (!activity.size) { console.log("  insider data unavailable; previous data kept"); return; }
  let n = 0;
  for (const t of tickers) {
    const f = join(COMPANIES, `${t}.json`);
    if (!existsSync(f)) continue;
    const c = readJson(f);
    if (!c.cik) continue;
    c.insiders = activity.get(c.cik) || { none: true };
    if (!c.insiders.none) n++;
    writeFileSync(f, JSON.stringify(c) + "\n");
  }
  console.log(`  insider transactions: ${n} companies with open-market trades`);
}

// Phase 3: monthly price histories, largest companies first, several requests in parallel.
async function updatePriceHistories(tickers) {
  const files = tickers.map((t) => join(COMPANIES, `${t}.json`)).filter(existsSync);
  const companies = files.map((f) => ({ f, c: readJson(f) })).filter(({ c }) => c.annual?.length);
  companies.sort((a, b) => (b.c.market?.marketCap || 0) - (a.c.market?.marketCap || 0));
  let next = 0, updated = 0;
  const worker = async () => {
    while (next < companies.length && priceBudgetLeft()) {
      const { f, c } = companies[next++];
      const hist = await priceHistory(c.ticker);
      if (!hist) continue;
      c.prices = { interval: "1mo", adjusted: true, source: hist.source, data: hist.data };
      if (c.market && !c.market.price && hist.price) c.market.price = hist.price;
      writeFileSync(f, JSON.stringify(c) + "\n");
      if (++updated % 500 === 0) console.log(`  ${updated} price histories`);
    }
  };
  await Promise.all(Array.from({ length: Number(process.env.PRICE_CONCURRENCY || 6) }, worker));
  console.log(`  price histories: ${updated}/${companies.length} updated${priceBudgetLeft() ? "" : " (time budget reached; the rest keep their previous history)"}`);
  return updated;
}

function writeCompany(c) {
  // An empty result never overwrites existing financial data.
  const file = join(COMPANIES, `${c.ticker}.json`);
  if (!c.annual.length && existsSync(file)) {
    const old = readJson(file);
    if (old.annual?.length) return;
  }
  writeFileSync(file, JSON.stringify(c) + "\n");
}

// Weekly TeraScore snapshots kept per company (about two years).
const MAX_WEEKLY = 110;
const DAY = 86400000;
// Snapshots of the current methodology only (a snapshot without a series tag is from engine 2.0):
// scores of different engine versions are not compared.
const sameSeries = (w) => (w[3] || "2.0") === ENGINE_SERIES;
// Score change against the latest snapshot that is at least `days` old.
function changeSince(weekly, current, days, now) {
  const old = [...weekly].filter(sameSeries).reverse().find(([d]) => (now - new Date(d)) / DAY >= days);
  return old && Number.isFinite(current) ? current - old[1] : null;
}

// Backtest for the methodology page: recomputed by full and index runs; intraday runs reuse the last one
// (from the data folder or the intraday cache) and compute it only once after an engine change.
function ensureBacktest(all, benchmarks) {
  const file = join(DATA, "backtest.json");
  const kept = OVERLAY && join(OVERLAY, "backtest.json");
  const valid = (f) => { try { return existsSync(f) && readJson(f).engineVersion === ENGINE_VERSION; } catch { return false; } };
  if (quotesOnly && valid(file)) return;
  if (quotesOnly && kept && valid(kept)) { writeFileSync(file, readFileSync(kept)); return; }
  const t0 = Date.now();
  try {
    const out = JSON.stringify(backtest(all, benchmarks)) + "\n";
    writeFileSync(file, out);
    if (kept) { mkdirSync(OVERLAY, { recursive: true }); writeFileSync(kept, out); }
    console.log(`Backtest: ${((Date.now() - t0) / 1000).toFixed(1)} s`);
  } catch (e) { console.warn(`Backtest failed: ${e.message}`); }
}

// ---------- Top stories: closing prices before the news ----------

// The change since a news item (scripts/pulse.mjs) is measured from the last close before the news. That
// close is read once per news item from the daily price history of the company and kept between runs: in
// the data folder by the daily update, in the Actions cache (with the refreshed companies) by the intraday
// runs. News after the latest close needs none (the change of the day or of the extended session is shown).
const STORY_PRICES = "story-prices.json";
async function storyBases(news, rows, now = new Date(), { budgetMs = 60000, maxCompanies = 30 } = {}) {
  const kept = {};
  for (const f of [join(DATA, STORY_PRICES), OVERLAY ? join(OVERLAY, STORY_PRICES) : null]) {
    if (!f || !existsSync(f)) continue;
    try { Object.assign(kept, readJson(f).items || {}); } catch {}
  }
  const cap = new Map(rows.map((r) => [r.t, r.mc ?? 0]));
  const latest = closeDayBefore(now);
  const todo = new Map(); // ticker → [{ n, day }]
  for (const n of news) {
    const at = newsTime(n);
    if (!n.url || !at || !isStoryNews(n) || (cap.get(n.t) ?? 0) < STORY_CAP) continue;
    const k = kept[n.url];
    if (Number.isFinite(k?.pb) || (k?.tried && now - new Date(k.tried) < 30 * 60000)) continue;
    const day = closeDayBefore(at);
    if (day >= latest) continue;
    (todo.get(n.t) || todo.set(n.t, []).get(n.t)).push({ n, day });
  }
  const start = Date.now();
  let read = 0;
  for (const [t, list] of todo) {
    if (read >= maxCompanies || Date.now() - start > budgetMs) break;
    const closes = await dailyCloses(t).catch(() => []);
    read++;
    for (const { n, day } of list) {
      const hit = closeOn(closes, day);
      kept[n.url] = hit ? { t, at: newsTime(n), pb: hit[1], day: hit[0] } : { t, at: newsTime(n), tried: now.toISOString() };
    }
    await sleep(150);
  }
  for (const [url, k] of Object.entries(kept)) if (!(now - new Date(k.at) <= (STORY_DAYS + 3) * 86400000)) delete kept[url];
  for (const n of news) if (Number.isFinite(kept[n.url]?.pb)) n.pb = kept[n.url].pb;
  const out = JSON.stringify({ updated: now.toISOString(), items: kept }) + "\n";
  writeFileSync(join(DATA, STORY_PRICES), out);
  if (OVERLAY) { mkdirSync(OVERLAY, { recursive: true }); writeFileSync(join(OVERLAY, STORY_PRICES), out); }
  if (todo.size) console.log(`  top stories: closing prices before the news read for ${read} of ${todo.size} companies`);
}

async function buildIndex({ snapshot = false } = {}) {
  const files = readdirSync(COMPANIES).filter((f) => f.endsWith(".json"));
  const all = files.map((f) => readJson(join(COMPANIES, f)));
  const now = new Date();
  // TeraScore change since the previous day. The daily run compares with the index it replaces and stores
  // that as the day's baseline (p1); intraday and code-change rebuilds keep the baseline of the daily run.
  const prevIndexFile = join(DATA, "index.json");
  const prevRows = new Map();
  // After a methodology change the previous scores are not comparable: today's scores become the baseline.
  let sameEngine = true;
  if (existsSync(prevIndexFile)) {
    const pi = readJson(prevIndexFile);
    sameEngine = pi.engineVersion === ENGINE_VERSION;
    if (sameEngine) for (const r of pi.companies || []) prevRows.set(r.t, { o: Array.isArray(r.sc) ? r.sc[0] : r.sc?.overall, p1: r.p1 });
  }
  const keepBaseline = indexOnly || quotesOnly;
  const today = now.toISOString().slice(0, 10);

  // Pass 1: absolute metrics -> sector benchmarks (percentiles). Pass 2: scores relative to the sector.
  const benchmarks = computeBenchmarks(all.map((c) => ({ sector: c.sector, a: analyze(c) })));
  writeFileSync(join(DATA, "benchmarks.json"), JSON.stringify({ generated: new Date().toISOString(), engineVersion: ENGINE_VERSION, sectors: benchmarks }) + "\n");
  ensureBacktest(all, benchmarks);

  // Companies with several listed share classes (same SEC registrant): each row gets its class label.
  const classes = existsSync(CLASSES_FILE) ? readJson(CLASSES_FILE).classes || {} : {};
  const registrant = (c) => c.cik || c.name;
  const listed = new Map();
  for (const c of all) listed.set(registrant(c), (listed.get(registrant(c)) || 0) + 1);
  const shareClass = (c) => (listed.get(registrant(c)) > 1 ? classes[c.ticker] || c.ticker.match(/[.-]([A-Z])$/)?.[1] || null : null);

  const news = [];
  const recentNews = []; // headlines of large companies for the top stories
  const logos = logoSet(DATA);
  const companies = all.map((c) => {
    const a = analyze(c, { benchmarks });
    const row = { t: c.ticker, n: c.name, s: c.sector || null, ex: c.exchange || null };
    if (c.industry) row.i = c.industry;
    const cls = shareClass(c);
    if (cls) row.cl = cls;
    if (c.currency && c.currency !== "USD") row.cur = c.currency;
    if (c.demo) row.demo = true;
    if (logos.has(c.ticker)) row.lg = 1;
    if (a.ok) {
      row.y = a.latestYear;
      row.sc = ["overall", ...DIMENSIONS].map((k) => a.scores[k] ?? null);
      row.d = a.distress.level;
      row.o = a.outlook.level;
      if (a.styles.length) row.st = a.styles;
      row.cov = a.coverage;
      row.cm = a.completeness;
      if (a.profile !== "general") row.pf = a.profile === "financial" ? "f" : "r";
      if (a.metrics.marketCap) row.mc = Math.round(a.metrics.marketCap);
      if (Number.isFinite(a.metrics.peRatio)) row.pe = +a.metrics.peRatio.toFixed(1);
      if (Number.isFinite(a.metrics.dividendYield)) row.dy = +a.metrics.dividendYield.toFixed(4);
      const crit = a.flags.filter((f) => f.level === "critical").map((f) => f.id);
      if (crit.length) row.cf = crit;
      const dv = dividendProfile(c, a);
      if (dv.payer && Number.isFinite(dv.score)) row.ds = dv.score;
    }
    if (Number.isFinite(c.market?.price)) row.px = c.market.price;
    if (!row.mc && Number.isFinite(c.market?.marketCap) && c.market.marketCap > 0) row.mc = Math.round(c.market.marketCap);
    if (Number.isFinite(c.market?.changePct)) row.dc = +c.market.changePct.toFixed(2);
    // Pre-market or after-hours change of the largest companies (intraday runs outside the session).
    if (Number.isFinite(c.market?.ext?.changePct)) { row.xc = +c.market.ext.changePct.toFixed(2); row.xs = c.market.ext.session; }
    for (const n of c.news || []) if (now - new Date(n.at || n.date) <= STORY_DAYS * 86400000) recentNews.push({ t: c.ticker, ...n });
    if (c.firstSeen) row.fs = c.firstSeen;
    if (c.market?.ipoYear) row.ipo = c.market.ipoYear;
    if (c.lastReport?.date) row.lr = `${c.lastReport.date}|${c.lastReport.form}`;
    const prev = prevRows.get(c.ticker);
    const baseline = !sameEngine ? (a.ok ? a.scores.overall : null) : keepBaseline ? prev?.p1 : prev?.o;
    if (Number.isFinite(baseline)) row.p1 = baseline;
    if (Number.isFinite(baseline) && a.ok && Number.isFinite(a.scores.overall)) row.d1 = a.scores.overall - baseline;
    // Price against its 12-month high (monthly closes and the latest price) and the one-year change.
    const closes = (c.prices?.data || []).slice(-12).map((x) => x[1]).filter(Number.isFinite);
    const lastPrice = Number.isFinite(c.market?.price) ? c.market.price : closes.at(-1);
    if (closes.length >= 6 && Number.isFinite(lastPrice)) {
      const high = Math.max(...closes, lastPrice);
      if (high > 0) row.dd = +(lastPrice / high - 1).toFixed(4);
    }
    if (a.ok && Number.isFinite(a.metrics.priceReturn1y)) row.r1y = +a.metrics.priceReturn1y.toFixed(4);
    // TeraScore Changes: change against the previous fiscal year (point-in-time) and against weekly snapshots.
    const hist = a.ok ? scoreHistory(c, { benchmarks }) : [];
    if (hist.length >= 2) {
      row.ch = hist[hist.length - 1].overall - hist[hist.length - 2].overall;
      row.chy = hist[hist.length - 2].year;
    }
    const weekly = c.scoreHistory?.weekly || [];
    const cur = a.ok ? a.scores.overall : null;
    // The trend keeps one snapshot per week (at least 6 days apart), of the current methodology only.
    const last = weekly.filter(sameSeries).at(-1)?.[0];
    if (snapshot && Number.isFinite(cur) && (!last || (Date.parse(today) - Date.parse(last)) / 86400000 >= 6)) {
      const kept = weekly.filter(sameSeries);
      kept.push([today, cur, a.scores.risk ?? null, ENGINE_SERIES]);
      c.scoreHistory = { weekly: kept.slice(-MAX_WEEKLY) };
      writeFileSync(join(COMPANIES, `${c.ticker}.json`), JSON.stringify(c) + "\n");
    }
    const c4 = changeSince(weekly, cur, 28, now), c13 = changeSince(weekly, cur, 91, now);
    if (c4 !== null) row.c4 = c4;
    if (c13 !== null) row.c13 = c13;
    const major = (c.events || []).filter((e) => e.severity >= 4).sort((x, y) => (x.date < y.date ? 1 : -1))[0];
    if (major) row.le = `${major.date}|${major.items.join(",")}`;
    for (const e of c.events || []) if (e.severity >= 3) news.push({ t: c.ticker, n: c.name, mc: row.mc ?? null, ...e });
    return row;
  }).sort((a, b) => a.t.localeCompare(b.t));
  const index = { generated: new Date().toISOString(), engineVersion: ENGINE_VERSION, scoreKeys: ["overall", ...DIMENSIONS], count: companies.length, companies };
  writeFileSync(join(DATA, "index.json"), JSON.stringify(index) + "\n");
  // Market today (big moves, new reports, score changes, new listings).
  const etfFile = join(DATA, "etfs.json");
  const etfData = existsSync(etfFile) ? readJson(etfFile) : { etfs: [] };
  await storyBases(recentNews, companies, now).catch((e) => console.warn(`top stories: ${e.message}`));
  const pulse = buildPulse({ rows: companies.map((r) => ({ ...r, o: Array.isArray(r.sc) ? r.sc[0] : null })), etfs: etfData.etfs || [], now, quotesAt: quotesOnly ? now.toISOString() : etfData.quotesAt || null, news: recentNews, session: SESSION ? { session: SESSION.session, previousTradeDate: SESSION.previousTradeDate } : etfData.session || null });
  writeFileSync(join(DATA, "pulse.json"), JSON.stringify(pulse) + "\n");
  // Major-events feed: newest first. Critical events and major events of companies above $1 billion
  // are kept for the full 12 months; of the rest only the latest 150.
  news.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.severity - a.severity));
  const top = (e) => e.severity >= 5 || (e.severity >= 4 && (e.mc ?? 0) >= 1e9);
  const rest = news.filter((e) => !top(e)).slice(0, 150);
  const kept = news.filter((e) => top(e) || rest.includes(e));
  writeFileSync(join(DATA, "news.json"), JSON.stringify({ generated: index.generated, events: kept }) + "\n");
  console.log(`data/index.json: ${companies.length} companies; data/news.json: ${kept.length} events; data/benchmarks.json: ${Object.keys(benchmarks).length} sectors.`);
  // Pages for search engines (the workflow passes the site's address as SITE_URL).
  const seo = buildSeo({ root: ROOT, siteUrl: process.env.SITE_URL || "", index });
  console.log(`search pages: ${seo.pages} company pages, sitemap with ${seo.sitemap} URLs${process.env.SITE_URL ? "" : " (no SITE_URL: sitemap skipped)"}.`);
}

// The market session (before the open, open, after the close, closed) for the market summary.
if (!indexOnly && !quotesOnly) SESSION = await marketSession();
if (quotesOnly) {
  const screener = await nasdaqScreener();
  if (!skipFilings) await refreshCurrentFilings(screener).catch((e) => console.warn(`new filings: ${e.message}`));
  if (!skipFilings) await backfillNews().catch((e) => console.warn(`news: ${e.message}`));
  await updateQuotes(screener);
  await updateUcits().catch((e) => console.warn(`European ETFs: ${e.message}`));
} else if (!indexOnly) await updateCompanies();
// Company logos: new companies get theirs on the next full update (see scripts/logos.mjs).
if (!indexOnly && !quotesOnly && !skipLogos) {
  const tickers = readdirSync(COMPANIES).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5)).filter((t) => !onlyTickers || onlyTickers.has(t));
  await updateLogos({ dataDir: DATA, tickers }).catch((e) => console.warn(`logos: ${e.message}`));
}
if (!indexOnly && !quotesOnly && !onlyTickers && limit === Infinity) {
  await updateEtfs();
  await updateUcits({ history: true }).catch((e) => console.warn(`European ETFs: ${e.message}`));
  await updateEtfHistory().catch((e) => console.warn(`ETF history: ${e.message}`));
}
// Weekly snapshots are recorded only by full data updates, not by index rebuilds.
await ensureClasses();
await buildIndex({ snapshot: !indexOnly && !quotesOnly && !onlyTickers && limit === Infinity });
