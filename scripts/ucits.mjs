// European (UCITS) ETFs that European investors can buy (US-listed funds such as VOO are not available to
// them): the most popular S&P 500, world, Nasdaq-100, emerging-market, Europe and gold funds, each listing
// with its exchange and trading currency. One fund (ISIN) can trade on several exchanges in several
// currencies (VUAA in US dollars and VUAG in pounds are the same fund). Prices come from justETF, per fund
// in the listing's currency, together with the monthly closes of the last two years for the portfolio charts.

// t: unique key (ticker:exchange), dt: ticker shown, er: total expense ratio (fraction), acc: accumulating.
export const UCITS = [
  { t: "VUAA:LSE", dt: "VUAA", isin: "IE00BFMXXD54", ex: "LSE", cur: "USD", n: "Vanguard S&P 500 UCITS ETF (USD) Accumulating", er: 0.0007, acc: true },
  { t: "VUAG:LSE", dt: "VUAG", isin: "IE00BFMXXD54", ex: "LSE", cur: "GBP", n: "Vanguard S&P 500 UCITS ETF (USD) Accumulating", er: 0.0007, acc: true },
  { t: "VUAA:XETRA", dt: "VUAA", isin: "IE00BFMXXD54", ex: "XETRA", cur: "EUR", n: "Vanguard S&P 500 UCITS ETF (USD) Accumulating", er: 0.0007, acc: true },
  { t: "VUSA:LSE", dt: "VUSA", isin: "IE00B3XXRP09", ex: "LSE", cur: "GBP", n: "Vanguard S&P 500 UCITS ETF (USD) Distributing", er: 0.0007, acc: false },
  { t: "VUSA:XETRA", dt: "VUSA", isin: "IE00B3XXRP09", ex: "XETRA", cur: "EUR", n: "Vanguard S&P 500 UCITS ETF (USD) Distributing", er: 0.0007, acc: false },
  { t: "CSPX:LSE", dt: "CSPX", isin: "IE00B5BMR087", ex: "LSE", cur: "USD", n: "iShares Core S&P 500 UCITS ETF USD (Acc)", er: 0.0007, acc: true },
  { t: "SXR8:XETRA", dt: "SXR8", isin: "IE00B5BMR087", ex: "XETRA", cur: "EUR", n: "iShares Core S&P 500 UCITS ETF USD (Acc)", er: 0.0007, acc: true },
  { t: "IWDA:LSE", dt: "IWDA", isin: "IE00B4L5Y983", ex: "LSE", cur: "USD", n: "iShares Core MSCI World UCITS ETF USD (Acc)", er: 0.002, acc: true },
  { t: "SWDA:LSE", dt: "SWDA", isin: "IE00B4L5Y983", ex: "LSE", cur: "GBP", n: "iShares Core MSCI World UCITS ETF USD (Acc)", er: 0.002, acc: true },
  { t: "EUNL:XETRA", dt: "EUNL", isin: "IE00B4L5Y983", ex: "XETRA", cur: "EUR", n: "iShares Core MSCI World UCITS ETF USD (Acc)", er: 0.002, acc: true },
  { t: "VWCE:XETRA", dt: "VWCE", isin: "IE00BK5BQT80", ex: "XETRA", cur: "EUR", n: "Vanguard FTSE All-World UCITS ETF (USD) Accumulating", er: 0.0019, acc: true },
  { t: "VWRA:LSE", dt: "VWRA", isin: "IE00BK5BQT80", ex: "LSE", cur: "USD", n: "Vanguard FTSE All-World UCITS ETF (USD) Accumulating", er: 0.0019, acc: true },
  { t: "VWRP:LSE", dt: "VWRP", isin: "IE00BK5BQT80", ex: "LSE", cur: "GBP", n: "Vanguard FTSE All-World UCITS ETF (USD) Accumulating", er: 0.0019, acc: true },
  { t: "VWRL:LSE", dt: "VWRL", isin: "IE00B3RBWM25", ex: "LSE", cur: "GBP", n: "Vanguard FTSE All-World UCITS ETF (USD) Distributing", er: 0.0019, acc: false },
  { t: "EQQQ:LSE", dt: "EQQQ", isin: "IE0032077012", ex: "LSE", cur: "GBP", n: "Invesco EQQQ Nasdaq-100 UCITS ETF Dist", er: 0.003, acc: false },
  { t: "CNDX:LSE", dt: "CNDX", isin: "IE00B53SZB19", ex: "LSE", cur: "USD", n: "iShares Nasdaq 100 UCITS ETF USD (Acc)", er: 0.003, acc: true },
  { t: "SXRV:XETRA", dt: "SXRV", isin: "IE00B53SZB19", ex: "XETRA", cur: "EUR", n: "iShares Nasdaq 100 UCITS ETF USD (Acc)", er: 0.003, acc: true },
  { t: "EIMI:LSE", dt: "EIMI", isin: "IE00BKM4GZ66", ex: "LSE", cur: "USD", n: "iShares Core MSCI EM IMI UCITS ETF USD (Acc)", er: 0.0018, acc: true },
  { t: "IS3N:XETRA", dt: "IS3N", isin: "IE00BKM4GZ66", ex: "XETRA", cur: "EUR", n: "iShares Core MSCI EM IMI UCITS ETF USD (Acc)", er: 0.0018, acc: true },
  { t: "XDWD:XETRA", dt: "XDWD", isin: "IE00BJ0KDQ92", ex: "XETRA", cur: "EUR", n: "Xtrackers MSCI World UCITS ETF 1C", er: 0.0019, acc: true },
  { t: "IUSQ:XETRA", dt: "IUSQ", isin: "IE00B6R52259", ex: "XETRA", cur: "EUR", n: "iShares MSCI ACWI UCITS ETF USD (Acc)", er: 0.002, acc: true },
  { t: "MEUD:PARIS", dt: "MEUD", isin: "LU0908500753", ex: "Euronext Paris", cur: "EUR", n: "Amundi Core Stoxx Europe 600 UCITS ETF Acc", er: 0.0007, acc: true },
  { t: "EXSA:XETRA", dt: "EXSA", isin: "DE0002635307", ex: "XETRA", cur: "EUR", n: "iShares STOXX Europe 600 UCITS ETF (DE)", er: 0.002, acc: false },
  { t: "VEUR:LSE", dt: "VEUR", isin: "IE00B945VV12", ex: "LSE", cur: "GBP", n: "Vanguard FTSE Developed Europe UCITS ETF", er: 0.001, acc: false },
  { t: "SGLN:LSE", dt: "SGLN", isin: "IE00B4ND3602", ex: "LSE", cur: "GBP", n: "iShares Physical Gold ETC", er: 0.0012, acc: true },
  { t: "4GLD:XETRA", dt: "4GLD", isin: "DE000A0S9GB0", ex: "XETRA", cur: "EUR", n: "Xetra-Gold (ETC)", er: 0, acc: true },
];

const BASE = "https://www.justetf.com/api/etfs";
const raw = (x) => (typeof x?.raw === "number" && Number.isFinite(x.raw) ? x.raw : null);

// Latest price and day change of one listing; null when unavailable.
export async function ucitsQuote(e, get) {
  const j = await get(`${BASE}/${e.isin}/quote?locale=en&currency=${e.cur}&isin=${e.isin}`);
  const px = raw(j?.latestQuote);
  if (!px) return null;
  return { px, dc: raw(j.dtdPrc), date: j.latestQuoteDate || null };
}

// Month-end closes (YYYY-MM, close) from the daily chart of the last `months` months.
export function monthlyCloses(series, months = 26) {
  const byMonth = new Map();
  for (const p of series || []) {
    const v = raw(p?.value);
    if (p?.date && v) byMonth.set(p.date.slice(0, 7), v); // later days of a month overwrite earlier ones
  }
  return [...byMonth].sort((a, b) => (a[0] < b[0] ? -1 : 1)).slice(-months).map(([m, v]) => [m, +v.toFixed(4)]);
}

export async function ucitsHistory(e, get, { now = new Date(), months = 26 } = {}) {
  const from = new Date(now.getFullYear(), now.getMonth() - months, 1).toISOString().slice(0, 10);
  const to = now.toISOString().slice(0, 10);
  const j = await get(`${BASE}/${e.isin}/performance-chart?locale=en&currency=${e.cur}&valuesType=MARKET_VALUE&reduceData=true&includeDividends=false&dateFrom=${from}&dateTo=${to}`);
  return monthlyCloses(j?.series, months);
}

// Monthly closes of a US-listed ETF from Nasdaq's price history (daily rows, newest first).
export function nasdaqMonthlyRows(rows, months = 26) {
  const byMonth = new Map();
  for (const r of [...(rows || [])].reverse()) {
    const m = String(r?.date || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    const v = Number(String(r?.close || "").replace(/[$,]/g, ""));
    if (m && v > 0) byMonth.set(`${m[3]}-${m[1]}`, v);
  }
  return [...byMonth].sort((a, b) => (a[0] < b[0] ? -1 : 1)).slice(-months).map(([k, v]) => [k, +v.toFixed(4)]);
}
