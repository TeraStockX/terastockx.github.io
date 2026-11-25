// Dividend calendar of the Nasdaq-listed stocks and funds (data/dividends.json). Nasdaq's calendar lists, for each
// ex-dividend day, the dividends of the securities listed on Nasdaq (NYSE listings are not in it): ex-date, payment
// date and amount per share. The file keeps the last 13 months and the announced ones, per ticker:
// { generated, read: { "YYYY-MM-DD": time the day was read }, d: { TICKER: [[ex, pay, amount], …] } }.
// It also tells dividend cuts apart (dividendCut), with the companies' quarterly cash dividends for the others.

import { regularDividends } from "../assets/js/portfolio.js";

const DAY = 86400000;
const ymd = (d) => d.toISOString().slice(0, 10);
const isNum = (x) => typeof x === "number" && Number.isFinite(x);
export const DIV_KEEP_DAYS = 400;
export const DIV_AHEAD_DAYS = 60;

// "MM/DD/YYYY" → "YYYY-MM-DD" (null for "N/A").
export function usDate(s) {
  const m = String(s || "").match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  return m ? `${m[3]}-${m[1].padStart(2, "0")}-${m[2].padStart(2, "0")}` : null;
}

// The days to read now: weekdays of the window not read yet, and those of the last week and of the coming days (new
// announcements) read more than `stale` hours ago.
export function daysToRead(read, now = new Date(), { stale = 20 } = {}) {
  const out = [];
  const start = now.getTime() - DIV_KEEP_DAYS * DAY, end = now.getTime() + DIV_AHEAD_DAYS * DAY;
  for (let t = start; t <= end; t += DAY) {
    const d = new Date(t);
    if (d.getUTCDay() === 0 || d.getUTCDay() === 6) continue;
    const k = ymd(d), last = read?.[k];
    if (!last || (t >= now.getTime() - 7 * DAY && now - Date.parse(last) > stale * 3600000)) out.push(k);
  }
  return out;
}

// One day's calendar rows into the store, in place of what was read for that day before.
export function mergeDay(store, day, rows, at = new Date().toISOString()) {
  for (const [t, list] of Object.entries(store.d)) {
    const kept = list.filter((x) => x[0] !== day);
    if (kept.length) store.d[t] = kept; else delete store.d[t];
  }
  for (const r of rows || []) {
    const t = String(r?.symbol || "").trim().toUpperCase().replace("/", ".");
    const amount = Number(r?.dividend_Rate);
    const ex = usDate(r?.dividend_Ex_Date) || day;
    if (!t || !(amount > 0) || ex !== day) continue;
    (store.d[t] ||= []).push([ex, usDate(r?.payment_Date), +amount.toFixed(6)]);
  }
  store.read[day] = at;
  return store;
}

// Drops what is older than the window and sorts each ticker's dividends by ex-date.
export function pruneDividends(store, now = new Date()) {
  const cut = ymd(new Date(now.getTime() - DIV_KEEP_DAYS * DAY));
  for (const [t, list] of Object.entries(store.d)) {
    const kept = list.filter((x) => x[0] >= cut).sort((a, b) => (a[0] < b[0] ? -1 : 1));
    if (kept.length) store.d[t] = kept; else delete store.d[t];
  }
  for (const k of Object.keys(store.read)) if (k < cut) delete store.read[k];
  return store;
}

export { regularDividends };

// The date of a dividend cut in the last half year, else null.
// - With the Nasdaq calendar (list: [[ex, pay, amount]]): the latest regular payment more than 10% below the one
//   before it.
// - Otherwise from the quarterly cash dividends per share (quarterly: [{ periodEnd, dividendsPaid, sharesDiluted }]):
//   the last four quarters more than 10% below the four before them (whole years, so a payment that moved from one
//   quarter to the next is no cut; special dividends count as a regular one).
export function dividendCut({ list = null, quarterly = null } = {}, now = new Date()) {
  const recent = (day) => day && now - Date.parse(day) <= 183 * DAY && Date.parse(day) <= now.getTime() + DIV_AHEAD_DAYS * DAY;
  if (list?.length) {
    const xs = regularDividends(list).filter((x) => x[0] <= ymd(new Date(now.getTime() + DIV_AHEAD_DAYS * DAY)));
    if (xs.length < 2) return null;
    const [a, b] = [xs[xs.length - 2], xs[xs.length - 1]];
    return b[2] < a[2] * 0.9 && recent(b[0]) ? b[0] : null;
  }
  const q = (quarterly || []).filter((x) => x?.periodEnd).slice().sort((a, b) => (a.periodEnd < b.periodEnd ? -1 : 1)).slice(-8);
  if (q.length < 8) return null;
  // A quarter without its share count (often the fourth, derived from the annual report) takes its neighbour's.
  const sh = q.map((x) => (isNum(x.sharesDiluted) && x.sharesDiluted > 0 ? x.sharesDiluted : isNum(x.sharesOutstanding) && x.sharesOutstanding > 0 ? x.sharesOutstanding : null));
  for (let i = 0; i < sh.length; i++) if (sh[i] === null) sh[i] = sh[i - 1] ?? sh.slice(i + 1).find((v) => v !== null) ?? null;
  const raw = q.map((x, i) => (isNum(x.dividendsPaid) && isNum(sh[i]) ? Math.abs(x.dividendsPaid) / sh[i] : null));
  if (raw.some((v) => v === null)) return null;
  // Special dividends are not the regular payment: a quarter counts at most as much as the median paying quarter (a
  // quarter with two regular payments is cut back too, but every four quarters hold one such quarter).
  const paid = raw.filter((v) => v > 0).sort((a, b) => a - b);
  const cap = paid.length ? paid[paid.length >> 1] : 0;
  const dps = raw.map((v) => Math.min(v, cap));
  // Regular payers only: at least three of the four earlier quarters paid (one-off special dividends, e.g.
  // TransDigm's, are no regular dividend that could be cut).
  if (raw.slice(0, 4).filter((v) => v > 0).length < 3) return null;
  const prev = dps.slice(0, 4).reduce((s, v) => s + v, 0), last = dps.slice(4).reduce((s, v) => s + v, 0);
  const end = q[7].periodEnd;
  return prev > 0 && last < prev * 0.9 && recent(end) ? end : null;
}
