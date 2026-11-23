// Is the Nasdaq screener fresh during the session? Compare it with the watchlist quotes, with and without cache busting.
import { writeFileSync, mkdirSync } from "node:fs";
const BH = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", "Accept": "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const out = [];
const log = (...a) => { const s = a.map((x) => (typeof x === "string" ? x : JSON.stringify(x))).join(" "); out.push(s); console.log(s); };
const T = ["NVDA", "AMD", "MU", "AAPL", "ORCL"];
async function j(url) { const t0 = Date.now(); try { const r = await fetch(url, { headers: BH, signal: AbortSignal.timeout(40000) }); const h = Object.fromEntries([...r.headers].filter(([k]) => /date|age|cache|expires|last-mod|etag|x-cache|akamai/i.test(k))); const body = await r.json(); return { status: r.status, h, body, ms: Date.now() - t0 }; } catch (e) { return { status: "ERR " + e.message, body: null }; } }
for (let round = 0; round < 3; round++) {
  log(`===== round ${round} ${new Date().toISOString()}`);
  for (const [label, url] of [
    ["screener download", "https://api.nasdaq.com/api/screener/stocks?tableonly=true&download=true&exchange=nasdaq"],
    ["screener download busted", `https://api.nasdaq.com/api/screener/stocks?tableonly=true&download=true&exchange=nasdaq&_=${Date.now()}`],
    ["screener paged", "https://api.nasdaq.com/api/screener/stocks?tableonly=true&limit=50&offset=0&exchange=nasdaq&sortcolumn=marketCap&sortorder=desc"],
  ]) {
    const r = await j(url);
    const rows = r.body?.data?.rows || r.body?.data?.table?.rows || [];
    const pick = rows.filter((x) => T.includes(x.symbol)).map((x) => `${x.symbol} ${x.lastsale} ${x.pctchange}`);
    log(label, r.status, r.ms + "ms", JSON.stringify(r.h), "keys:", Object.keys(r.body?.data || {}).join(","), "asOf:", r.body?.data?.asOf ?? r.body?.data?.table?.asOf ?? "-", "rows", rows.length, pick.join(" | "));
  }
  const w = await j(`https://api.nasdaq.com/api/quote/watchlist?${T.map((s) => `symbol=${s.toLowerCase()}%7cstocks`).join("&")}`);
  log("watchlist", w.status, (w.body?.data || []).map((x) => `${x.symbol} ${x.lastSalePrice} ${x.percentageChange} ${x.marketStatus} ${x.lastTradeTimestamp}`).join(" | "));
  const e = await j("https://api.nasdaq.com/api/screener/etf?tableonly=true&download=true");
  const er = e.body?.data?.data?.rows || e.body?.data?.rows || [];
  log("etf screener", e.status, e.ms + "ms", "rows", er.length, er.filter((x) => ["SPY", "QQQ"].includes(x.symbol)).map((x) => `${x.symbol} ${x.lastSalePrice} ${x.percentageChange}`).join(" | "));
  if (round < 2) await new Promise((r) => setTimeout(r, 120000));
}
writeFileSync("out/explore3.txt", out.join("\n") + "\n");
