// Checks the new daily-close pipeline against the live sources (Nasdaq, justETF).
import { priceHistory, browserJson, recentDaily } from "./newscripts/market.mjs";
import { UCITS, ucitsHistory, nasdaqMonthlyRows, nasdaqDailyCloses } from "./newscripts/ucits.mjs";
const gaps = (d) => { const g = []; for (let i = 1; i < d.length; i++) g.push((Date.parse(d[i][0]) - Date.parse(d[i - 1][0])) / 86400000); g.sort((a, b) => a - b); return g.length ? `gap median ${g[g.length >> 1]} max ${g.at(-1)}` : "no gaps"; };
for (const t of ["AAPL", "BRK.B", "NVDA"]) {
  const h = await priceHistory(t);
  console.log(t, "source", h?.source, "monthly", h?.data?.length, JSON.stringify(h?.data?.slice(-2)), "daily", h?.daily?.length, JSON.stringify(h?.daily?.slice(0, 1)), JSON.stringify(h?.daily?.slice(-2)), h?.daily ? gaps(h.daily) : "", "json bytes", JSON.stringify(h?.daily || []).length);
}
const to = new Date(), from = new Date(to.getFullYear() - 6, to.getMonth(), 1);
const d = (x) => x.toISOString().slice(0, 10);
for (const t of ["SPY", "VOO", "SCHD"]) {
  const j = await browserJson(`https://api.nasdaq.com/api/quote/${t}/historical?assetclass=etf&fromdate=${d(from)}&todate=${d(to)}&limit=9999`);
  const rows = j?.data?.tradesTable?.rows;
  const m = nasdaqMonthlyRows(rows, 72), dd = nasdaqDailyCloses(rows, to);
  console.log(t, "rows", rows?.length, "monthly", m.length, JSON.stringify(m.slice(0, 1)), JSON.stringify(m.slice(-1)), "daily", dd.length, JSON.stringify(dd.slice(-2)), gaps(dd));
}
for (const e of UCITS.slice(0, 3)) {
  const h = await ucitsHistory(e, browserJson).catch((err) => ({ err: err.message }));
  console.log(e.t, e.cur, "monthly", h?.monthly?.length, JSON.stringify(h?.monthly?.slice(-1)), "daily", h?.daily?.length, JSON.stringify(h?.daily?.slice(0, 1)), JSON.stringify(h?.daily?.slice(-2)), h?.daily ? gaps(h.daily) : h?.err);
}
