// Back-reference headlines ("As reported on a Form 8-K filed … on September 21, …") in the kept news, the CW 8-K's
// item text, and Nasdaq's market-info on a holiday.
import { readdirSync, readFileSync } from "node:fs";
import { htmlBlocks, itemSentence } from "./hl/news-headline.mjs";
const BACK = /^(?:as\s+(?:was\s+)?(?:previously|originally|initially|first|earlier)?\s*(?:reported|disclosed|announced|described|stated)|as\s+set\s+forth\s+in|reference\s+is\s+made\s+to|further\s+to)\b/i;
const dir = "datab/data/companies";
let n = 0, all = 0;
const hits = [];
for (const f of readdirSync(dir)) {
  if (!f.endsWith(".json")) continue;
  const c = JSON.parse(readFileSync(`${dir}/${f}`, "utf8"));
  for (const x of c.news || []) {
    if (!x.title) continue;
    all++;
    if (BACK.test(x.title)) { n++; hits.push(`${c.ticker} ${x.date} ${x.kind} mc=${((c.market?.marketCap || 0) / 1e9).toFixed(0)}B | ${x.title.slice(0, 150)} | ${x.url}`); }
  }
}
console.log(`news titles: ${all}, back-references: ${n}`);
for (const h of hits.slice(0, 60)) console.log("  " + h);
const UA = { "User-Agent": "TeraStockX diag research@terastockx.com" };
for (const u of ["https://www.sec.gov/Archives/edgar/data/26324/000162828026075678/cw-20261118.htm", ...hits.slice(0, 6).map((h) => h.split(" | ").pop())]) {
  const html = await (await fetch(u, { headers: UA })).text();
  const b = htmlBlocks(html);
  const at = b.findIndex((x) => /^Item\s*5\.02\b/i.test(x.text) || /^Item\s*8\.01\b/i.test(x.text) || /^Item\s*7\.01\b/i.test(x.text));
  console.log(`\n${u}\n itemSentence now: ${itemSentence(html, ["5.02"])}`);
  for (const x of b.slice(Math.max(0, at), at + 6)) console.log("  > " + x.text.slice(0, 600));
  await new Promise((r) => setTimeout(r, 300));
}
const mi = await (await fetch("https://api.nasdaq.com/api/market-info", { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", Accept: "application/json, text/plain, */*", Origin: "https://www.nasdaq.com", Referer: "https://www.nasdaq.com/" } })).text();
console.log("\nmarket-info:", mi.slice(0, 1500));
