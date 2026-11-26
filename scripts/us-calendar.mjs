// The days the US stock exchanges and the SEC's EDGAR system are closed, from the rules that set them (no list
// to keep up to date), and what that means at a given moment.
// - Exchanges (NYSE, Nasdaq): New Year's Day, Martin Luther King Jr. Day, Washington's Birthday, Good Friday,
//   Memorial Day, Juneteenth, Independence Day, Labor Day, Thanksgiving and Christmas. A holiday on a Saturday
//   closes the Friday before (not for New Year's Day), one on a Sunday the Monday after.
// - EDGAR takes filings on federal workdays, 6:00 to 22:00 New York time: the federal holidays are the same
//   without Good Friday, plus Columbus Day and Veterans Day; New Year's Day on a Saturday is observed on the
//   Friday before, 31 December.
// Closures not set by these rules (a national day of mourning, an extra day off) are not known here.

const DAY = 86400000;
const ymd = (t) => new Date(t).toISOString().slice(0, 10);
const utc = (y, m, d) => Date.UTC(y, m - 1, d);
const weekday = (day) => new Date(`${day}T12:00:00Z`).getUTCDay();
export const isWeekend = (day) => weekday(day) === 0 || weekday(day) === 6;
export const addDays = (day, n) => ymd(Date.parse(`${day}T12:00:00Z`) + n * DAY);

// The n-th weekday wd (0 = Sunday) of a month; n = -1 for the last one.
function nthWeekday(y, m, wd, n) {
  if (n > 0) return utc(y, m, 1 + ((wd - new Date(utc(y, m, 1)).getUTCDay() + 7) % 7) + (n - 1) * 7);
  const last = new Date(utc(y, m + 1, 0));
  return utc(y, m, last.getUTCDate() - ((last.getUTCDay() - wd + 7) % 7));
}
// Easter Sunday (Gregorian calendar).
export function easter(y) {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const n = h + l - 7 * m + 114;
  return ymd(utc(y, Math.floor(n / 31), (n % 31) + 1));
}
// A holiday on a fixed date that falls on a weekend: the Friday before (Saturday) or the Monday after (Sunday).
const observed = (t) => { const wd = new Date(t).getUTCDay(); return wd === 6 ? t - DAY : wd === 0 ? t + DAY : t; };

const CACHE = new Map();
// { "YYYY-MM-DD": holiday id } of a year; which: "market" (exchanges) or "sec" (federal holidays, EDGAR).
function holidays(y, which) {
  const key = `${which}${y}`;
  if (CACHE.has(key)) return CACHE.get(key);
  const out = {};
  const add = (t, id) => { out[ymd(t)] = id; };
  const jan1 = utc(y, 1, 1), jan1wd = new Date(jan1).getUTCDay();
  if (jan1wd === 0) add(jan1 + DAY, "newYear"); else if (jan1wd !== 6) add(jan1, "newYear");
  if (which === "sec" && new Date(utc(y + 1, 1, 1)).getUTCDay() === 6) add(utc(y, 12, 31), "newYear");
  add(nthWeekday(y, 1, 1, 3), "mlk");
  add(nthWeekday(y, 2, 1, 3), "presidents");
  if (which === "market") add(Date.parse(`${easter(y)}T00:00:00Z`) - 2 * DAY, "goodFriday");
  add(nthWeekday(y, 5, 1, -1), "memorial");
  if (y >= 2022) add(observed(utc(y, 6, 19)), "juneteenth");
  add(observed(utc(y, 7, 4)), "independence");
  add(nthWeekday(y, 9, 1, 1), "labor");
  if (which === "sec") { add(nthWeekday(y, 10, 1, 2), "columbus"); add(observed(utc(y, 11, 11)), "veterans"); }
  add(nthWeekday(y, 11, 4, 4), "thanksgiving");
  add(observed(utc(y, 12, 25)), "christmas");
  CACHE.set(key, out);
  return out;
}
// The holiday of a day ("thanksgiving", …) or null.
export const marketHoliday = (day) => holidays(Number(day.slice(0, 4)), "market")[day] || null;
export const secHoliday = (day) => holidays(Number(day.slice(0, 4)), "sec")[day] || null;
export const isTradingDay = (day) => !isWeekend(day) && !marketHoliday(day);
export const isFilingDay = (day) => !isWeekend(day) && !secHoliday(day);
// The nearest day before / after `day` (not itself) that passes `test`.
export function prevDay(day, test) { let d = addDays(day, -1); for (let i = 0; i < 15 && !test(d); i++) d = addDays(d, -1); return d; }
export function nextDay(day, test) { let d = addDays(day, 1); for (let i = 0; i < 15 && !test(d); i++) d = addDays(d, 1); return d; }

// New York wall-clock date and time of a moment: ["YYYY-MM-DD", "HH:MM"].
const NY = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
export function nyClock(when) {
  const p = Object.fromEntries(NY.formatToParts(new Date(when)).map((x) => [x.type, x.value]));
  return [`${p.year}-${p.month}-${p.day}`, `${p.hour}:${p.minute}`];
}
export const nyDate = (when) => nyClock(when)[0];
// The moment of a New York wall-clock time (daylight saving time or not).
export function nyMoment(day, hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const base = Date.parse(`${day}T00:00:00Z`) + h * 3600000 + m * 60000;
  for (const off of [4, 5]) { const t = base + off * 3600000; if (nyClock(t).join("T") === `${day}T${hhmm}`) return new Date(t); }
  return new Date(base + 5 * 3600000);
}

// EDGAR takes filings from 6:00 to 22:00 New York time on federal workdays.
export const EDGAR_HOURS = ["06:00", "22:00"];

// The US market day of a moment, for the market summary:
// - day: the New York date; market: null on a trading day, else "weekend" or "holiday"; sec: the same for EDGAR;
//   holiday: the id of the holiday (of the exchanges, else of EDGAR);
// - next: the next trading day after today;
// - filingsFrom: when EDGAR takes filings again, while it is closed (at night, at the weekend, on a holiday),
//   else null;
// - since: the first day of the top stories (news of the last filing day before today, and of today).
export function usDay(now = new Date()) {
  const [day, time] = nyClock(now);
  const weekend = isWeekend(day);
  const mh = weekend ? null : marketHoliday(day);
  const sh = weekend ? null : secHoliday(day);
  const open = !weekend && !sh && time >= EDGAR_HOURS[0] && time < EDGAR_HOURS[1];
  const nextFiling = !weekend && !sh && time < EDGAR_HOURS[0] ? day : nextDay(day, isFilingDay);
  return {
    day,
    market: weekend ? "weekend" : mh ? "holiday" : null,
    sec: weekend ? "weekend" : sh ? "holiday" : null,
    holiday: mh || sh || null,
    next: nextDay(day, isTradingDay),
    filingsFrom: open ? null : nyMoment(nextFiling, EDGAR_HOURS[0]).toISOString(),
    since: prevDay(day, isFilingDay),
  };
}
