// Nasdaq dividend calendar (all US listings by ex-date): fields, coverage of NYSE stocks and funds, past and future dates.
const H = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", Accept: "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url) {
  const t0 = Date.now();
  try { const r = await fetch(url, { headers: H, signal: AbortSignal.timeout(25000) }); const txt = await r.text(); let j = null; try { j = JSON.parse(txt); } catch {} return { status: r.status, j, txt, ms: Date.now() - t0 }; } catch (e) { return { status: "ERR " + e.message, ms: Date.now() - t0 }; }
}
const want = ["AAPL", "KO", "JNJ", "XOM", "O", "T", "MMM", "PG", "SPY", "VOO", "SCHD", "VYM", "JEPI", "BND", "QQQ", "VZ", "PFE", "CVX", "ABBV", "JPM", "MO", "HD", "MSFT"];
const seen = {};
let total = 0, days = 0;
const dates = [];
for (let d = new Date("2025-11-03T12:00:00Z"); d <= new Date("2027-01-15T12:00:00Z"); d.setUTCDate(d.getUTCDate() + 1)) if (d.getUTCDay() > 0 && d.getUTCDay() < 6) dates.push(d.toISOString().slice(0, 10));
const t0 = Date.now();
let i = 0, first = null;
const worker = async () => {
  while (i < dates.length) {
    const day = dates[i++];
    const r = await get(`https://api.nasdaq.com/api/calendar/dividends?date=${day}`);
    const rows = r.j?.data?.calendar?.rows || [];
    if (!first && rows.length) { first = { day, keys: Object.keys(r.j.data), row: rows[0], headers: r.j.data.calendar.headers }; }
    days++; total += rows.length;
    for (const row of rows) if (want.includes(row.symbol)) (seen[row.symbol] ||= []).push(`${row.dividend_Ex_Date}→${row.payment_Date} ${row.dividend_Rate}`);
    if (r.status !== 200 || !r.j) console.log(`  ${day} HTTP ${r.status} ${r.txt?.slice(0, 100)}`);
    await sleep(100);
  }
};
await Promise.all([worker(), worker(), worker(), worker()]);
console.log(`dates ${dates.length} fetched ${days} rows ${total} in ${Math.round((Date.now() - t0) / 1000)}s`);
console.log("first", JSON.stringify(first).slice(0, 1200));
for (const s of want) console.log(s, JSON.stringify(seen[s] || []));
// Rows per month of ex-date and the latest ex-date with rows (how far announcements reach).
