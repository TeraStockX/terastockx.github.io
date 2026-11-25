// Nasdaq quote summary/info: dividend fields for NYSE stocks and funds (ex-date, pay date, annualized dividend).
const H = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", Accept: "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url) {
  const t0 = Date.now();
  try { const r = await fetch(url, { headers: H, signal: AbortSignal.timeout(25000) }); const txt = await r.text(); let j = null; try { j = JSON.parse(txt); } catch {} return { status: r.status, j, ms: Date.now() - t0 }; } catch (e) { return { status: "ERR " + e.message, ms: Date.now() - t0 }; }
}
const pick = (o) => Object.fromEntries(Object.entries(o || {}).filter(([k]) => /div|yield|ex|pay/i.test(k)).map(([k, v]) => [k, v?.value ?? v]));
for (const [t, cls] of [["KO", "stocks"], ["JNJ", "stocks"], ["XOM", "stocks"], ["O", "stocks"], ["PG", "stocks"], ["T", "stocks"], ["AAPL", "stocks"], ["BIP", "stocks"], ["BF.B", "stocks"], ["SPY", "etf"], ["VOO", "etf"], ["SCHD", "etf"], ["JEPI", "etf"], ["VYM", "etf"]]) {
  const s = await get(`https://api.nasdaq.com/api/quote/${encodeURIComponent(t)}/summary?assetclass=${cls}`);
  console.log(`${t} summary HTTP ${s.status} ${s.ms}ms: ${JSON.stringify(pick(s.j?.data?.summaryData))} ${s.j?.status?.bCodeMessage ? JSON.stringify(s.j.status.bCodeMessage) : ""}`);
  await sleep(250);
  const i = await get(`https://api.nasdaq.com/api/quote/${encodeURIComponent(t)}/info?assetclass=${cls}`);
  console.log(`   info: ${JSON.stringify(pick(i.j?.data?.keyStats))} ${JSON.stringify(pick(i.j?.data?.primaryData))}`);
  await sleep(250);
}
