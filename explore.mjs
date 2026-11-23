// Explore data sources for big-company news: SEC 8-K headlines (NVDA) and Nasdaq pre-market/after-hours quotes.
import { writeFileSync } from "node:fs";
const UA = process.env.SEC_UA || "TeraStockX research contact@terastockx.com";
const BH = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", "Accept": "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const out = [];
const log = (...a) => { const s = a.map((x) => (typeof x === "string" ? x : JSON.stringify(x))).join(" "); out.push(s); console.log(s); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function sec(url, type = "json") {
  const r = await fetch(url, { headers: { "User-Agent": UA, "Accept-Encoding": "gzip, deflate" }, signal: AbortSignal.timeout(30000) });
  await sleep(150);
  if (!r.ok) return { status: r.status };
  return type === "json" ? r.json() : r.text();
}
async function nq(url) {
  try {
    const r = await fetch(url, { headers: BH, signal: AbortSignal.timeout(20000) });
    const txt = await r.text();
    return { status: r.status, txt };
  } catch (e) { return { status: "ERR " + e.message, txt: "" }; }
}
const text = (html) => html.replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, "\n").replace(/&nbsp;|&#160;/g, " ").replace(/&amp;/g, "&").replace(/&#8217;|&rsquo;/g, "’").replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"').replace(/&#\d+;/g, " ").split("\n").map((s) => s.replace(/\s+/g, " ").trim()).filter(Boolean);

log("now", new Date().toISOString());
// 1) SEC: NVDA 8-Ks in the last 20 days, with the press-release beginning.
for (const [t, cik] of [["NVDA", "0001045810"]]) {
  const sub = await sec(`https://data.sec.gov/submissions/CIK${cik}.json`);
  const r = sub.filings.recent;
  for (let i = 0; i < r.form.length && i < 40; i++) {
    if ((Date.now() - Date.parse(r.filingDate[i])) / 864e5 > 20) break;
    log(`${t} ${r.form[i]} ${r.filingDate[i]} acc=${r.accessionNumber[i]} accepted=${r.acceptanceDateTime[i]} items=${r.items[i]} doc=${r.primaryDocument[i]} desc=${r.primaryDocDescription?.[i]}`);
    if (r.form[i] !== "8-K") continue;
    const acc = r.accessionNumber[i].replace(/-/g, "");
    const idx = await sec(`https://www.sec.gov/Archives/edgar/data/${Number(cik)}/${acc}/index.json`);
    const docs = (idx.directory?.item || []).map((d) => d.name);
    log("   docs:", docs.join(", "));
    const main = await sec(`https://www.sec.gov/Archives/edgar/data/${Number(cik)}/${acc}/${r.primaryDocument[i]}`, "text");
    if (typeof main === "string") log("   8-K text:", text(main).slice(0, 60).join(" | ").slice(0, 1800));
    const ex = docs.find((d) => /ex.?99/i.test(d) && /\.htm/i.test(d));
    if (ex) {
      const h = await sec(`https://www.sec.gov/Archives/edgar/data/${Number(cik)}/${acc}/${ex}`, "text");
      if (typeof h === "string") log("   EX-99:", text(h).slice(0, 25).join(" | ").slice(0, 1500));
    }
  }
}
// 2) The current-filings feed: 8-Ks right now (are they there today?).
const feed = await sec("https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=8-K&company=&dateb=&owner=include&start=0&count=40&output=atom", "text");
if (typeof feed === "string") { const titles = [...feed.matchAll(/<title>([^<]+)<\/title>/g)].map((m) => m[1]).slice(1, 15); log("8-K feed:", titles.join(" || ")); }
// 3) Nasdaq quote endpoints (pre-market / after-hours structure).
for (const u of [
  "https://api.nasdaq.com/api/quote/NVDA/info?assetclass=stocks",
  "https://api.nasdaq.com/api/quote/NVDA/extended-trading?assetclass=stocks&markettype=pre",
  "https://api.nasdaq.com/api/quote/watchlist?symbol=nvda%7cstocks&symbol=aapl%7cstocks&symbol=msft%7cstocks",
  "https://api.nasdaq.com/api/market-info",
  "https://api.nasdaq.com/api/marketmovers?assetclass=stocks&exchangestatus=premarket&limit=10",
  "https://api.nasdaq.com/api/quote/NVDA/summary?assetclass=stocks",
  "https://api.nasdaq.com/api/news/topic/articlebysymbol?q=nvda%7cstocks&offset=0&limit=5&fallback=false",
]) {
  const { status, txt } = await nq(u);
  log("NQ", status, u, "\n   ", txt.slice(0, 1500));
}
// 4) Yahoo quote (batch) for pre/post market fields.
{
  const { status, txt } = await nq("https://query1.finance.yahoo.com/v7/finance/quote?symbols=NVDA,AAPL");
  log("YQ", status, txt.slice(0, 600));
  const c = await nq("https://query1.finance.yahoo.com/v8/finance/chart/NVDA?range=1d&interval=5m&includePrePost=true");
  log("YC", c.status, c.txt.slice(0, 900));
}
// 5) Our live data for NVDA.
{
  const idx = JSON.parse((await nq(`https://terastockx.com/data/index.json?x=${Date.now()}`)).txt);
  log("live index generated", idx.generated, "NVDA row", idx.companies.find((r) => r.t === "NVDA"));
  const c = JSON.parse((await nq(`https://terastockx.com/data/companies/NVDA.json?x=${Date.now()}`)).txt);
  log("NVDA events", c.events, "lastReport", c.lastReport, "eventsRetrieved", c.eventsRetrieved);
}
writeFileSync("out/explore.txt", out.join("\n") + "\n");
