// justETF quotes in several currencies, its performance chart, and Nasdaq's ETF price history.
import { writeFileSync } from "node:fs";
const BH = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", "Accept": "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const out = [];
const log = (...a) => { const s = a.map((x) => (typeof x === "string" ? x : JSON.stringify(x))).join(" "); out.push(s); console.log(s); };
async function get(url) { try { const r = await fetch(url, { headers: BH, signal: AbortSignal.timeout(25000) }); return { status: r.status, txt: await r.text() }; } catch (e) { return { status: "ERR " + e.message, txt: "" }; } }
for (const cur of ["GBP", "USD", "EUR", "CHF"]) {
  const r = await get(`https://www.justetf.com/api/etfs/IE00BFMXXD54/quote?locale=en&currency=${cur}&isin=IE00BFMXXD54`);
  log("quote", cur, r.status, r.txt.slice(0, 220));
}
for (const u of [
  "https://www.justetf.com/api/etfs/IE00BFMXXD54/performance-chart?locale=en&currency=GBP&valuesType=MARKET_VALUE&reduceData=true&includeDividends=false&dateFrom=2024-11-01&dateTo=2026-11-23",
  "https://www.justetf.com/api/etfs/IE00BK5BQT80/performance-chart?locale=en&currency=EUR&valuesType=MARKET_VALUE&reduceData=true&includeDividends=false&dateFrom=2024-11-01&dateTo=2026-11-23",
]) {
  const r = await get(u);
  log("chart", r.status, r.txt.length, r.txt.slice(0, 500));
}
// A list of other ISINs to make sure they resolve.
for (const isin of ["IE00B3XXRP09", "IE00B4L5Y983", "IE00BK5BQT80", "IE00B3RBWM25", "IE0032077012", "IE00B53SZB19", "IE00BKM4GZ66", "IE00BJ0KDQ92", "IE00B4ND3602", "IE00B6R52259", "LU0908500753", "DE0002635307", "IE00B945VV12", "IE00BDBRDM35", "DE000A0S9GB0", "IE00B5BMR087"]) {
  const r = await get(`https://www.justetf.com/api/etfs/${isin}/quote?locale=en&currency=EUR&isin=${isin}`);
  log("isin", isin, r.status, r.txt.slice(0, 160));
  await new Promise((res) => setTimeout(res, 300));
}
const h = await get("https://api.nasdaq.com/api/quote/VOO/historical?assetclass=etf&fromdate=2024-11-01&todate=2026-11-23&limit=9999");
log("nasdaq etf history", h.status, h.txt.length, h.txt.slice(0, 400));
writeFileSync("out/explore5.txt", out.join("\n") + "\n");
