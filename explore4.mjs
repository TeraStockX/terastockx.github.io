// Sources for European (UCITS) ETF prices: Stooq quotes and monthly history, justETF, Yahoo.
import { writeFileSync } from "node:fs";
const BH = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", "Accept": "*/*", "Accept-Language": "en-US,en;q=0.9" };
const out = [];
const log = (...a) => { const s = a.map((x) => (typeof x === "string" ? x : JSON.stringify(x))).join(" "); out.push(s); console.log(s); };
async function get(url, headers = BH) { try { const r = await fetch(url, { headers, signal: AbortSignal.timeout(25000) }); return { status: r.status, txt: await r.text() }; } catch (e) { return { status: "ERR " + e.message, txt: "" }; } }
const syms = ["vuaa.uk", "vuag.uk", "vusa.uk", "cspx.uk", "iwda.uk", "swda.uk", "vwra.uk", "vwrl.uk", "eqqq.uk", "cndx.uk", "eimi.uk", "sgln.uk", "sxr8.de", "eunl.de", "vwce.de", "sxrv.de", "is3n.de", "xdwd.de", "exsa.de", "iusq.de", "vuaa.de", "vusa.de", "eqqq.de", "4gld.de"];
// 1) Stooq: one symbol, then many at once.
let r = await get("https://stooq.com/q/l/?s=vuag.uk&f=sd2t2ohlcvn&h&e=csv");
log("stooq single", r.status, r.txt.slice(0, 300).replace(/\n/g, " | "));
r = await get(`https://stooq.com/q/l/?s=${syms.join("+")}&f=sd2t2ohlcvn&h&e=csv`);
log("stooq multi", r.status, "\n" + r.txt.slice(0, 3000));
r = await get("https://stooq.com/q/d/l/?s=vuag.uk&i=m");
log("stooq monthly vuag", r.status, r.txt.split("\n").slice(-4).join(" | "));
r = await get("https://stooq.com/q/d/l/?s=sxr8.de&i=m");
log("stooq monthly sxr8", r.status, r.txt.split("\n").slice(-4).join(" | "));
// 2) justETF (unofficial): quote by ISIN.
for (const isin of ["IE00BFMXXD54", "IE00B5BMR087"]) {
  r = await get(`https://www.justetf.com/api/etfs/${isin}/quote?locale=en&currency=EUR&isin=${isin}`, { ...BH, Accept: "application/json" });
  log("justetf", isin, r.status, r.txt.slice(0, 400));
}
// 3) Yahoo.
for (const u of ["https://query2.finance.yahoo.com/v8/finance/chart/VUAG.L?range=5d&interval=1d", "https://query1.finance.yahoo.com/v8/finance/chart/SXR8.DE?range=5d&interval=1d"]) {
  r = await get(u);
  log("yahoo", r.status, u, r.txt.slice(0, 300));
}
writeFileSync("out/explore4.txt", out.join("\n") + "\n");
