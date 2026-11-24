// Market data: current price / market cap for all US-listed stocks (Nasdaq screener, one request per
// exchange), exchange rates, and monthly price history per ticker (Nasdaq.com history; Yahoo Finance and Stooq as fallbacks).
// Everything here is optional: if a source is unavailable, valuation and market-risk metrics are skipped.

const BROWSER_HEADERS = {
  "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "en-US,en;q=0.9",
};

// JSON from a public web API with browser-like headers; null when unavailable.
export async function browserJson(url, timeout = 25000) {
  try {
    const r = await fetch(url, { headers: BROWSER_HEADERS, signal: AbortSignal.timeout(timeout) });
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  }
}

const num = (s) => {
  if (s === null || s === undefined) return null;
  const n = Number(String(s).replace(/[$,%\s]/g, ""));
  return Number.isFinite(n) ? n : null;
};

// Current quotes for all stocks of the given exchanges (one request per exchange).
export async function nasdaqScreener(exchanges = ["nasdaq", "nyse", "amex"]) {
  const map = new Map();
  for (const ex of exchanges) {
    try {
      const r = await fetch(`https://api.nasdaq.com/api/screener/stocks?tableonly=true&download=true&exchange=${ex}`, { headers: BROWSER_HEADERS, signal: AbortSignal.timeout(30000) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const j = await r.json();
      for (const row of j?.data?.rows || []) {
        // The screener writes class shares as "BRK/B"; listings use "BRK.B".
        map.set(String(row.symbol).trim().toUpperCase().replace("/", "."), {
          price: num(row.lastsale), marketCap: num(row.marketCap), sector: row.sector || null, industry: row.industry || null, country: row.country || null,
          // Change since the previous close, in percent (e.g. -1.23); the IPO year when Nasdaq knows it.
          changePct: num(row.pctchange), ipoYear: num(row.ipoyear) || null,
        });
      }
    } catch (e) {
      console.warn(`  Nasdaq screener (${ex}) unavailable: ${e.message}`);
    }
  }
  return map;
}

// Last price and one-year change of every US-listed ETF (one request).
export async function nasdaqEtfScreener() {
  const map = new Map();
  try {
    const r = await fetch("https://api.nasdaq.com/api/screener/etf?tableonly=true&download=true", { headers: BROWSER_HEADERS, signal: AbortSignal.timeout(60000) });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const j = await r.json();
    for (const row of j?.data?.data?.rows || j?.data?.rows || []) {
      const pct = num(row.oneYearPercentage);
      map.set(String(row.symbol).trim().toUpperCase().replace("/", "."), { price: num(row.lastSalePrice), return1y: pct === null ? null : pct / 100, changePct: num(row.percentageChange) });
    }
  } catch (e) {
    console.warn(`  Nasdaq ETF screener unavailable: ${e.message}`);
  }
  return map;
}

// Expense ratio, assets under management and current yield of one ETF (Nasdaq quote summary).
// The yield is only published for some funds (mostly Nasdaq-listed ones); missing values stay null.
export async function etfSummary(symbol) {
  try {
    const r = await fetch(`https://api.nasdaq.com/api/quote/${encodeURIComponent(symbol)}/summary?assetclass=etf`, { headers: BROWSER_HEADERS, signal: AbortSignal.timeout(20000) });
    if (!r.ok) return null;
    const d = (await r.json())?.data?.summaryData;
    if (!d) return null;
    const pct = (x) => { const v = num(x?.value); return v === null ? null : v / 100; };
    const aum = num(d.AUM?.value);
    return { expenseRatio: pct(d.ExpenseRatio), yield: pct(d.Yield), aum: aum === null ? null : aum * 1000 };
  } catch {
    return null;
  }
}

// Exchange rates: US dollars per one unit of each currency. ECB reference rates first,
// open.er-api.com for currencies the ECB does not publish (e.g. TWD).
// ---------- Outside the regular session ----------

const MONTHS = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };
const isoDay = (s) => { const m = String(s || "").match(/([A-Z][a-z]{2})[a-z]*\.? (\d{1,2}), (\d{4})/); return m && MONTHS[m[1]] ? `${m[3]}-${MONTHS[m[1]]}-${m[2].padStart(2, "0")}` : null; };

// US market session: "pre" (pre-market, 4:00–9:30 New York time), "open", "post" (after-hours, 16:00–20:00)
// or "closed"; and the previous trading day.
export async function marketSession() {
  try {
    const r = await fetch("https://api.nasdaq.com/api/market-info", { headers: BROWSER_HEADERS, signal: AbortSignal.timeout(20000) });
    const d = (await r.json())?.data;
    if (!d) return null;
    const st = `${d.mrktStatus || ""} ${d.marketIndicator || ""}`.toUpperCase();
    const session = /PRE/.test(st) ? "pre" : /AFTER|POST/.test(st) ? "post" : /OPEN/.test(st) && !/CLOSE/.test(st) ? "open" : "closed";
    return { session, previousTradeDate: isoDay(d.previousTradeDate), businessDay: d.isBusinessDay ?? null };
  } catch {
    return null;
  }
}

// Latest trades of up to 20 symbols per request (pre-market and after-hours included), with the change
// against the previous close as Nasdaq reports it. symbols: [{ t, etf }]. A few requests run at a time.
export async function extendedQuotes(symbols, { parallel = 4 } = {}) {
  const out = new Map();
  const batches = [];
  for (let i = 0; i < symbols.length; i += 20) batches.push(symbols.slice(i, i + 20));
  let next = 0;
  const worker = async () => {
    while (next < batches.length) {
      const batch = batches[next++];
      const q = batch.map((x) => `symbol=${encodeURIComponent(x.t.toLowerCase())}%7c${x.etf ? "etf" : "stocks"}`).join("&");
      try {
        const r = await fetch(`https://api.nasdaq.com/api/quote/watchlist?${q}`, { headers: BROWSER_HEADERS, signal: AbortSignal.timeout(20000) });
        for (const x of (await r.json())?.data || []) {
          const price = num(x.lastSalePrice), changePct = num(x.percentageChange), change = num(x.netChange);
          if (x.symbol && Number.isFinite(price) && price > 0) out.set(String(x.symbol).toUpperCase(), { price, changePct, change, status: x.marketStatus || null, at: x.lastTradeTimestampDateTime || null });
        }
      } catch {}
      await new Promise((res) => setTimeout(res, 150));
    }
  };
  await Promise.all(Array.from({ length: Math.min(parallel, batches.length) }, worker));
  return out;
}

export async function fxToUsd() {
  const rates = { USD: 1 };
  try {
    const r = await fetch("https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml", { signal: AbortSignal.timeout(20000) });
    const xml = await r.text();
    const perEur = { EUR: 1 };
    for (const m of xml.matchAll(/currency=['"]([A-Z]{3})['"]\s+rate=['"]([\d.]+)['"]/g)) perEur[m[1]] = Number(m[2]);
    if (perEur.USD) for (const [c, v] of Object.entries(perEur)) rates[c] = perEur.USD / v;
  } catch (e) {
    console.warn(`  ECB rates unavailable: ${e.message}`);
  }
  try {
    const r = await fetch("https://open.er-api.com/v6/latest/USD", { signal: AbortSignal.timeout(20000) });
    const j = await r.json();
    for (const [c, v] of Object.entries(j?.rates || {})) if (!rates[c] && v > 0) rates[c] = 1 / v;
  } catch (e) {
    console.warn(`  open.er-api rates unavailable: ${e.message}`);
  }
  return rates;
}

// Nasdaq.com daily history rows ({ date: "MM/DD/YYYY", close: "$1.23", … }, newest first; split-adjusted).
// Class shares ("BRK.B") are written differently across Nasdaq endpoints; the common forms are tried.
async function nasdaqDailyRows(ticker, from, to = new Date()) {
  const d = (x) => x.toISOString().slice(0, 10);
  const variants = ticker.includes(".") ? [ticker.replace(".", "/"), ticker.replace(".", "^"), ticker] : [ticker];
  for (const v of variants) {
    try {
      const r = await fetch(`https://api.nasdaq.com/api/quote/${encodeURIComponent(v)}/historical?assetclass=stocks&fromdate=${d(from)}&todate=${d(to)}&limit=9999`, { headers: BROWSER_HEADERS, signal: AbortSignal.timeout(20000) });
      if (!r.ok) continue;
      const rows = (await r.json())?.data?.tradesTable?.rows || [];
      if (rows.length) return rows;
    } catch { /* the next form */ }
  }
  return [];
}
const usDay = (s) => { const [mm, dd, yyyy] = String(s).split("/"); return yyyy && mm && dd ? `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}` : null; };

// Closing prices of the last `days` calendar days, oldest first: [["YYYY-MM-DD", close], …]. A session's own
// close appears in the history some time after the session.
export async function dailyCloses(ticker, days = 21) {
  const rows = await nasdaqDailyRows(ticker, new Date(Date.now() - days * 86400000));
  return rows.map((r) => [usDay(r.date), num(r.close)]).filter(([day, c]) => day && Number.isFinite(c) && c > 0).sort((a, b) => (a[0] < b[0] ? -1 : 1));
}

// Nasdaq.com daily history (split-adjusted closes), reduced to the last close of each month.
async function nasdaqMonthly(ticker) {
  const rows = await nasdaqDailyRows(ticker, new Date(Date.now() - 6 * 365.25 * 86400000));
  const months = new Map();
  for (const row of rows) {
    const day = usDay(row.date);
    const close = num(row.close);
    if (!day || !Number.isFinite(close)) continue;
    const key = day.slice(0, 7);
    const prev = months.get(key);
    if (!prev || day > prev.day) months.set(key, { day, close });
  }
  const data = [...months].map(([k, v]) => [k, v.close]).sort((a, b) => (a[0] < b[0] ? -1 : 1));
  return { data, price: data.length ? data[data.length - 1][1] : null, source: "Nasdaq" };
}

async function yahooMonthly(ticker) {
  const sym = ticker.replace(".", "-");
  const r = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?range=10y&interval=1mo&events=split`, { headers: BROWSER_HEADERS, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const j = await r.json();
  const res = j?.chart?.result?.[0];
  const ts = res?.timestamp || [];
  const adj = res?.indicators?.adjclose?.[0]?.adjclose || res?.indicators?.quote?.[0]?.close || [];
  const data = [];
  ts.forEach((t, i) => { if (Number.isFinite(adj[i])) data.push([new Date(t * 1000).toISOString().slice(0, 7), +adj[i].toFixed(4)]); });
  const price = res?.meta?.regularMarketPrice;
  return { data: dedupeMonths(data), price: Number.isFinite(price) ? price : null, source: "Yahoo Finance" };
}

async function stooqMonthly(ticker) {
  const sym = `${ticker.toLowerCase().replace(".", "-")}.us`;
  const r = await fetch(`https://stooq.com/q/d/l/?s=${sym}&i=m`, { headers: BROWSER_HEADERS, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const txt = await r.text();
  if (!txt.startsWith("Date")) throw new Error("no data");
  const data = txt.trim().split(/\r?\n/).slice(1).map((l) => l.split(",")).filter((c) => Number.isFinite(+c[4])).map((c) => [c[0].slice(0, 7), +c[4]]);
  return { data: dedupeMonths(data.slice(-121)), price: data.length ? data[data.length - 1][1] : null, source: "Stooq" };
}

function dedupeMonths(data) {
  const m = new Map();
  for (const [k, v] of data) m.set(k, v);
  return [...m].sort((a, b) => (a[0] < b[0] ? -1 : 1));
}

// Tries each source in order; a source that fails 25 times in a row is switched off for the run.
const failures = { nasdaq: 0, yahoo: 0, stooq: 0 };
// Price history is optional: after the time budget it is skipped so the financial data always gets saved.
let started = null;
const BUDGET_MS = Number(process.env.PRICE_BUDGET_MIN || 75) * 60000;
export const priceBudgetLeft = () => started === null || Date.now() - started < BUDGET_MS;
export async function priceHistory(ticker) {
  if (started === null) started = Date.now();
  if (!priceBudgetLeft()) return null;
  for (const [name, fn] of [["nasdaq", nasdaqMonthly], ["yahoo", yahooMonthly], ["stooq", stooqMonthly]]) {
    if (failures[name] >= 25) continue;
    try {
      const h = await fn(ticker);
      if (h.data.length >= 2) { failures[name] = 0; return h; } // recent listings have a short history
    } catch { /* try next source */ }
    failures[name]++;
  }
  return null;
}
