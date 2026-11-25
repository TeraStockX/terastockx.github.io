// The day's quotes, kept between intraday runs (scripts/update-data.mjs saves them in the Actions cache, with
// the companies refreshed during the day). Dates are New York dates ("YYYY-MM-DD").
// - q: the session's live quotes ({ ticker: [price, change %] }). After the close they are the day's closing
//   prices and changes, while the screener still shows the previous day's.
// - last: on a new day, the last session's quotes until the new session's replace them. Before the open, at
//   night and at the weekend they are the latest prices and changes (the screener's can be days old).
// - post: the after-hours quotes of the last session ({ ticker: [price, change % against the close, time] }).
//   At night, at the weekend and on holidays they are the latest trades, and they show the reaction to results
//   published after the close, until the next session begins.

const MAX_DAYS = 5;
const daysBetween = (from, to) => (Date.parse(to) - Date.parse(from)) / 86400000;
const size = (o) => (o && typeof o === "object" ? Object.keys(o).length : 0);

// The quotes a run on `date` starts with, from the saved ones (null or anything else when there are none).
export function dayQuotesFor(saved, date) {
  const d = saved && typeof saved === "object" ? saved : null;
  if (d?.date === date && d.q) return d;
  const last = size(d?.q) ? { date: d.date, q: d.q, at: d.at || null } : d?.last || null;
  const post = size(d?.post?.q) ? d.post : null;
  return { date, q: {}, ...(last ? { last } : {}), ...(post ? { post } : {}) };
}

// Live quotes of the session (a Map of { price, changePct }): they replace the last session's quotes and the
// after-hours quotes of an earlier day.
export function recordSession(day, live, at) {
  for (const [t, x] of live) if (Number.isFinite(x?.changePct)) day.q[t] = [x.price, x.changePct];
  day.at = at;
  delete day.last;
  if (day.post && day.post.date !== day.date) delete day.post;
  return day;
}

// After-hours quotes of the day ({ ticker: [price, change %, time] }), added to those of the earlier runs.
export function recordAfterHours(day, quotes, at) {
  const earlier = day.post?.date === day.date ? day.post.q : {};
  day.post = { date: day.date, at, q: { ...earlier, ...quotes } };
  return day;
}

// The last session's quotes on a new day before its session (null when there are none or they are too old).
export function lastSession(day, session) {
  if (size(day.q) || session === "open" || !day.last?.q) return null;
  return daysBetween(day.last.date, day.date) <= MAX_DAYS ? day.last.q : null;
}

// The last session's after-hours quotes outside the session (at night, at the weekend, on holidays); none
// before the open, when the pre-market quotes are the latest.
export function keptAfterHours(day, session) {
  if (session !== "closed" || !size(day.post?.q)) return null;
  return daysBetween(day.post.date, day.date) <= MAX_DAYS ? day.post.q : null;
}

// An after-hours quote as the companies and the funds carry it.
export function afterHoursQuote(day, q, t) {
  const p = q?.[t];
  return Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1]) ? { session: "post", price: p[0], changePct: p[1], at: p[2] ?? null, day: day.post?.date ?? day.date } : undefined;
}

// When the prices are from ("Prices:" on the site): now during the sessions. Outside them, the time of the
// last session's latest quotes: its after-hours trades, else its last live quotes.
export function quotesTime(day, session, now = new Date()) {
  const lastQ = lastSession(day, session);
  if (session === "closed") {
    const at = (keptAfterHours(day, session) && day.post.at) || (size(day.q) && day.at) || (lastQ && day.last.at);
    if (at) return at;
  }
  return lastQ && session !== "pre" && day.last?.at ? day.last.at : now.toISOString();
}
