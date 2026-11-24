// Diag: is the SEC submissions acceptanceDateTime real UTC or New York time with a "Z"? And the Nasdaq daily history format.
const UA = process.env.SEC_USER_AGENT || "TeraStockX diag";
const H = { "User-Agent": UA, "Accept-Encoding": "gzip, deflate" };
const BH = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", Accept: "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9", Origin: "https://www.nasdaq.com", Referer: "https://www.nasdaq.com/" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
for (const cik of ["1045810", "320193", "789019"]) {
  const sub = await (await fetch(`https://data.sec.gov/submissions/CIK${cik.padStart(10, "0")}.json`, { headers: H })).json();
  const r = sub.filings.recent;
  let n = 0;
  for (let i = 0; i < r.form.length && n < 4; i++) {
    if (!["8-K", "10-Q", "10-K"].includes(r.form[i])) continue;
    n++;
    const acc = r.accessionNumber[i];
    const url = `https://www.sec.gov/Archives/edgar/data/${cik}/${acc.replace(/-/g, "")}/${acc}-index.htm`;
    let accepted = "?";
    try { const html = await (await fetch(url, { headers: H })).text(); accepted = html.match(/Accepted<\/div>\s*<div class="info">([^<]+)</)?.[1] || "not found"; } catch (e) { accepted = e.message; }
    console.log(sub.tickers?.[0], r.form[i], r.filingDate[i], "json:", r.acceptanceDateTime[i], "| index page (ET):", accepted);
    await sleep(250);
  }
}
const d = (x) => x.toISOString().slice(0, 10);
const to = new Date(), from = new Date(Date.now() - 14 * 86400000);
for (const t of ["NVDA", "BRK/B"]) {
  try {
    const j = await (await fetch(`https://api.nasdaq.com/api/quote/${encodeURIComponent(t)}/historical?assetclass=stocks&fromdate=${d(from)}&todate=${d(to)}&limit=9999`, { headers: BH })).json();
    const rows = j?.data?.tradesTable?.rows || [];
    console.log(t, "history rows:", rows.length, JSON.stringify(rows.slice(0, 3)));
  } catch (e) { console.log(t, "history error", e.message); }
}
try {
  const j = await (await fetch("https://api.nasdaq.com/api/market-info", { headers: BH })).json();
  console.log("market-info:", JSON.stringify(j?.data).slice(0, 500));
} catch (e) { console.log("market-info error", e.message); }
try {
  const p = await (await fetch(`https://terastockx.com/data/pulse.json?x=${Date.now()}`)).json();
  console.log("pulse:", p.generated, p.session, p.prevDay);
  for (const s of p.stories || []) console.log("  story", s.t, s.kind, s.move, s.when, s.date, s.at, (s.title || "").slice(0, 70));
} catch (e) { console.log("pulse error", e.message); }
