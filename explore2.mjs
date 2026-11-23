// Explore 8-K filing indexes, press-release layouts and Nasdaq batch quotes.
import { writeFileSync, mkdirSync } from "node:fs";
const UA = process.env.SEC_UA || "TeraStockX research";
const BH = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", "Accept": "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const out = [];
const log = (...a) => { const s = a.map((x) => (typeof x === "string" ? x : JSON.stringify(x))).join(" "); out.push(s); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function sec(url, type = "text") {
  const r = await fetch(url, { headers: { "User-Agent": UA, "Accept-Encoding": "gzip, deflate" }, signal: AbortSignal.timeout(30000) });
  await sleep(120);
  if (!r.ok) return null;
  return type === "json" ? r.json() : r.text();
}
mkdirSync("out/fx", { recursive: true });
// Save raw documents as test fixtures: NVDA's three 8-Ks plus today's 8-Ks of other companies from the feed.
const filings = [
  ["NVDA", "1045810", "000104581026000090"],
  ["NVDA", "1045810", "000104581026000088"],
  ["NVDA", "1045810", "000104581026000082"],
];
const feed = await sec("https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=8-K&company=&dateb=&owner=include&start=0&count=60&output=atom");
for (const m of feed.matchAll(/<entry>[\s\S]*?<\/entry>/g)) {
  const e = m[0];
  const title = e.match(/<title>([^<]+)<\/title>/)?.[1] || "";
  const href = e.match(/<link[^>]*href="([^"]+)"/)?.[1] || "";
  const mm = href.match(/data\/(\d+)\/(\d{18})\//);
  if (mm && /^8-K /.test(title) && filings.length < 16) filings.push([title.replace(/^8-K - /, "").slice(0, 40), mm[1], mm[2]]);
}
for (const [name, cik, acc] of filings) {
  const accD = `${acc.slice(0, 10)}-${acc.slice(10, 12)}-${acc.slice(12)}`;
  const idx = await sec(`https://www.sec.gov/Archives/edgar/data/${cik}/${acc}/${accD}-index.htm`);
  if (!idx) { log("no index", name, acc); continue; }
  const rows = [...idx.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((r) => [...r[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((c) => c[1].replace(/<[^>]+>/g, "").trim())).filter((c) => c.length >= 4);
  const items = idx.match(/Items?<\/div>\s*<div[^>]*>([\s\S]*?)<\/div>/)?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  log(`=== ${name} ${cik} ${acc} items: ${items}`);
  for (const r of rows) log("   doc:", r.join(" | "));
  const safe = `${cik}-${acc}`;
  writeFileSync(`out/fx/${safe}-index.htm`, idx);
  const docs = rows.filter((r) => /^(8-K|EX-99)/i.test(r[3] || ""));
  for (const r of docs.slice(0, 3)) {
    const href = idx.match(new RegExp(`href="([^"]*${r[2].replace(/[.*+?^${}()|[\]\\]/g, "\\$&").split(" ")[0]})"`))?.[1];
    if (!href) continue;
    const doc = await sec(`https://www.sec.gov${href.replace(/^\/ix\?doc=/, "")}`);
    if (doc) writeFileSync(`out/fx/${safe}-${r[3].replace(/[^A-Za-z0-9.-]/g, "_")}.htm`, doc);
  }
}
// Nasdaq batch quotes: how many symbols per request, NYSE and class shares.
const syms = ["NVDA","AAPL","MSFT","GOOGL","AMZN","META","TSLA","AVGO","JPM","BRK.B","BRK/B","LLY","V","WMT","XOM","UNH","MA","ORCL","COST","HD","PG","JNJ","ABBV","BAC","NFLX","KO","CRM","AMD","CVX","MRK","PEP","TMO","LIN","ADBE","ACN","MCD","CSCO","WFC","ABT","IBM","GE","PM","DIS","CAT","INTU","QCOM","TXN","VZ","AMGN","NOW","SPY","QQQ","DIA","IWM","ANT","PLTR","UBER","GS","MS","BKNG","T","RTX"];
for (const n of [20, 40, 62]) {
  const list = syms.slice(0, n);
  const q = list.map((s) => `symbol=${encodeURIComponent(s.toLowerCase())}%7c${["SPY","QQQ","DIA","IWM"].includes(s) ? "etf" : "stocks"}`).join("&");
  try {
    const r = await fetch(`https://api.nasdaq.com/api/quote/watchlist?${q}`, { headers: BH, signal: AbortSignal.timeout(20000) });
    const j = await r.json();
    const d = j.data || [];
    log(`NQ watchlist n=${n}: status ${r.status}, got ${d.length}`, d.slice(0, 3).map((x) => `${x.symbol} ${x.lastSalePrice} ${x.percentageChange} ${x.marketStatus} ${x.lastTradeTimestamp}`).join(" ; "));
    if (n === 62) log("   symbols back:", d.map((x) => `${x.symbol}:${x.percentageChange}`).join(" "));
  } catch (e) { log(`NQ watchlist n=${n}: error ${e.message}`); }
  await sleep(500);
}
const mi = await (await fetch("https://api.nasdaq.com/api/market-info", { headers: BH })).json();
log("market-info", mi.data?.mrktStatus, mi.data?.marketIndicator, mi.data?.previousTradeDate);
writeFileSync("out/explore2.txt", out.join("\n") + "\n");
