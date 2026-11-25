// Nasdaq dividend history: format and coverage for stocks, funds, monthly payers, special dividends and cuts.
const H = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", Accept: "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url) {
  const t0 = Date.now();
  try { const r = await fetch(url, { headers: H, signal: AbortSignal.timeout(25000) }); const txt = await r.text(); let j = null; try { j = JSON.parse(txt); } catch {} return { status: r.status, j, txt, ms: Date.now() - t0 }; } catch (e) { return { status: "ERR " + e.message, ms: Date.now() - t0 }; }
}
const list = [["AAPL", "stocks"], ["KO", "stocks"], ["JNJ", "stocks"], ["XOM", "stocks"], ["O", "stocks"], ["COST", "stocks"], ["INTC", "stocks"], ["BIP", "stocks"], ["BF.B", "stocks"], ["NVDA", "stocks"], ["T", "stocks"], ["MMM", "stocks"],
  ["SPY", "etf"], ["SCHD", "etf"], ["VYM", "etf"], ["JEPI", "etf"], ["BND", "etf"], ["QQQ", "etf"], ["VOO", "etf"], ["IBIT", "etf"], ["GLD", "etf"], ["SPY", "stocks"]];
for (const [t, cls] of list) {
  const r = await get(`https://api.nasdaq.com/api/quote/${encodeURIComponent(t)}/dividends?assetclass=${cls}`);
  const d = r.j?.data;
  const rows = d?.dividends?.rows || [];
  console.log(`\n${t} [${cls}] HTTP ${r.status} ${r.ms}ms rows ${rows.length} | keys ${JSON.stringify(Object.keys(d || {}))} | header ${JSON.stringify(d?.dividendHeaderValues || null).slice(0, 300)}`);
  console.log(`   headers ${JSON.stringify(d?.dividends?.headers || null).slice(0, 300)}`);
  for (const row of rows.slice(0, 6)) console.log("   ", JSON.stringify(row));
  if (rows.length > 6) console.log(`    … oldest ${JSON.stringify(rows.at(-1))}`);
  const types = {}; for (const row of rows) types[row.type] = (types[row.type] || 0) + 1;
  console.log(`   types ${JSON.stringify(types)} | status ${JSON.stringify(r.j?.status || null).slice(0, 200)}`);
  await sleep(300);
}
