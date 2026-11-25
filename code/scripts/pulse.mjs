// "Market today": the day's big moves in one file (data/pulse.json) for the events page.
// Built from index rows (price change since the previous close: dc, in percent; TeraScore change since
// the previous day: d1; first day listed: fs; latest periodic report: lr) and the ETF quotes.

const isNum = (x) => typeof x === "number" && Number.isFinite(x);
const DAY = 86400000;

// Curated baskets. Tickers missing from the data are skipped.
export const THEMES = {
  ai: ["NVDA", "AMD", "AVGO", "TSM", "ARM", "MU", "SMCI", "PLTR", "MSFT", "GOOGL", "META", "AMZN", "ORCL", "CRWV", "ANT", "SNOW", "AI", "PATH", "DELL", "ANET", "VRT", "NBIS", "IONQ", "SOUN", "TEM", "APP", "MRVL", "QCOM", "ASML", "CRM", "NOW", "ADBE"],
  bigTech: ["AAPL", "MSFT", "GOOGL", "AMZN", "META", "NVDA", "TSLA"],
  semis: ["NVDA", "AMD", "AVGO", "TSM", "ARM", "MU", "MRVL", "QCOM", "INTC", "ASML", "AMAT", "LRCX", "KLAC", "TXN", "ADI", "ON", "NXPI", "MCHP"],
  banks: ["JPM", "BAC", "WFC", "C", "GS", "MS", "USB", "PNC", "SCHW"],
  energy: ["XOM", "CVX", "COP", "OXY", "EOG", "SLB", "PSX", "MPC", "VLO"],
  crypto: ["COIN", "MSTR", "MARA", "RIOT", "HOOD", "CLSK"],
};
export const INDEX_ETFS = ["SPY", "QQQ", "DIA", "IWM"];

// Market-cap weighted average change of a set of rows, with the best and worst member.
function basket(rows) {
  const xs = rows.filter((r) => isNum(r.dc) && isNum(r.mc) && r.mc > 0);
  if (!xs.length) return null;
  const w = xs.reduce((s, r) => s + r.mc, 0);
  const sorted = [...xs].sort((a, b) => b.dc - a.dc);
  const pick = (r) => ({ t: r.t, dc: r.dc });
  return { change: +(xs.reduce((s, r) => s + r.dc * r.mc, 0) / w).toFixed(2), n: xs.length, best: pick(sorted[0]), worst: pick(sorted.at(-1)) };
}

const brief = (r, extra = {}) => ({ t: r.t, n: r.n, mc: r.mc ?? null, dc: r.dc ?? null, o: r.o ?? null, ...extra });

// ---------- Top stories ----------

// Big news of large companies (market cap above $10 billion) in the last days, one story per company: a
// leadership change, a deal, results, a critical event (with the headline of the company's own press
// release), and big price moves, also before the open and after the close. The most important first.
export const STORY_CAP = 1e10;
const KIND_WEIGHT = { critical: 60, cyber: 45, leadership: 45, deal: 40, major: 35, restructuring: 30, results: 20, board: 0, other: 0 };
// News that can be a top story by itself (not just the headline behind a big move).
export const isStoryNews = (n) => (KIND_WEIGHT[n?.kind] ?? 0) > 0;
// A move is big news for a large company at a smaller percentage.
export const bigMove = (mc) => (mc >= 1e12 ? 2.5 : mc >= 2e11 ? 3.5 : mc >= 5e10 ? 5 : 8);

// ---------- Change since the news ----------

// New York wall-clock time of a moment as "YYYY-MM-DDTHH:MM" (comparable as text).
const NY_FMT = new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
export function nyTime(when) {
  const p = Object.fromEntries(NY_FMT.formatToParts(new Date(when)).map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}`;
}
const dayBefore = (day) => new Date(Date.parse(`${day}T12:00:00Z`) - DAY).toISOString().slice(0, 10);
const isWeekday = (day) => { const g = new Date(`${day}T12:00:00Z`).getUTCDay(); return g >= 1 && g <= 5; };
// The day of the last regular close (16:00 New York time, Monday to Friday) before a moment. Market holidays
// are not known here: the price history decides (closeOn).
export function closeDayBefore(when) {
  const ny = nyTime(when);
  let day = ny.slice(0, 10);
  if (ny.slice(11) < "16:00") day = dayBefore(day);
  while (!isWeekday(day)) day = dayBefore(day);
  return day;
}
// When a news item came out: the SEC's acceptance time, else its filing date (taken as before the open).
export const newsTime = (n) => n?.at || (n?.date ? `${n.date}T05:00:00Z` : null);
// The close of the last session on or before `day` in a daily history (oldest first), as [day, close]. Null
// while the history does not reach that day yet: a session's close is published some time after it, and
// this keeps a close that is still missing apart from a market holiday.
export function closeOn(closes, day) {
  if (!closes?.length || closes.at(-1)[0] < day) return null;
  let hit = null;
  for (const c of closes) if (c[0] <= day) hit = c;
  return hit;
}
// A news item counts more the newer it is: 40 points when it comes out, falling to nothing over two days, so
// new developments come first and older news stays among the top stories only while nothing newer is as
// important.
export function freshness(n, now = new Date()) {
  const at = newsTime(n);
  if (!at) return 0;
  return 40 * Math.min(1, Math.max(0, 1 - (now - new Date(at)) / (48 * 3600000)));
}
// The latest price for the change since a news item: the pre-market or after-hours trade of the largest
// companies; during and right after the session the regular price; before the open, at night, at the weekend
// (or when the session is unknown) the latest close from the daily history (n.lc), as the screener's price can
// be days old then.
function latestPrice(r, n, session) {
  const ext = (r.xs === "pre" || r.xs === "post") && isNum(r.xc) ? r.xc : null;
  if (ext !== null && isNum(r.xp) && r.xp > 0) return r.xp;
  const close = session === "open" || session === "post" ? (isNum(r.px) && r.px > 0 ? r.px : null) : isNum(n?.lc) && n.lc > 0 ? n.lc : null;
  if (close === null) return null;
  return session === "open" ? close : close * (1 + (ext ?? 0) / 100);
}
// The share-price change since a news item, in percent: from the last close before the news (n.pb, read
// from the daily history) to the latest price. News after the latest close: the change since that close (the
// day's change during the session, the pre-market or after-hours change outside it; none at night without
// an after-hours trade, as there is no trade since the news to show). Null when unknown.
export function sinceNews(r, n, { now = new Date(), session = null } = {}) {
  const at = newsTime(n);
  if (!at) return null;
  if (closeDayBefore(at) >= closeDayBefore(now)) {
    if (session === "open") return isNum(r.dc) ? r.dc : null;
    return (r.xs === "pre" || r.xs === "post") && isNum(r.xc) ? r.xc : null;
  }
  const cur = latestPrice(r, n, session);
  return isNum(n.pb) && n.pb > 0 && isNum(cur) ? +((cur / n.pb - 1) * 100).toFixed(2) : null;
}

export function buildStories({ rows, news = [], session = null, now = new Date(), max = 8, maxMovesOnly = 4 }) {
  const byCo = new Map();
  for (const n of news) (byCo.get(n.t) || byCo.set(n.t, []).get(n.t)).push(n);
  const out = [];
  for (const r of rows) {
    const mc = r.mc ?? 0;
    if (mc < STORY_CAP) continue;
    // The move: before the open the pre-market change (the regular change is the previous day's); after
    // the close the after-hours change or the day's change, whichever is big news; at night and on
    // weekends the last session's change.
    const limit = bigMove(mc);
    const ext = isNum(r.xc) && (r.xs === "pre" || r.xs === "post") ? { v: r.xc, when: r.xs } : null;
    const day = session?.session !== "pre" && isNum(r.dc) ? { v: r.dc, when: session?.session === "closed" ? "last" : "day" } : null;
    const extBig = !!ext && Math.abs(ext.v) >= limit;
    const dayBig = !!day && Math.abs(day.v) >= limit;
    const move = extBig ? ext : dayBig ? day : ext || day;
    const big = extBig || dayBig;
    // The company's most important news, the newer the better (a new development comes before an older one).
    const items = (byCo.get(r.t) || [])
      .filter((n) => (KIND_WEIGHT[n.kind] ?? 0) > 0 && (n.kind !== "results" || mc >= 1e11 || big))
      .map((n) => ({ ...n, w: KIND_WEIGHT[n.kind] + freshness(n, now) }))
      .sort((a, b) => b.w - a.w || (newsTime(b) > newsTime(a) ? 1 : -1));
    // A big move without such news gets the headline of the company's latest filing only if it is recent
    // (within a day): an older one is unlikely to be behind today's move.
    const item = items[0] || (big ? (byCo.get(r.t) || []).filter((n) => n.title && freshness(n, now) > 20).sort((a, b) => (newsTime(b) > newsTime(a) ? 1 : -1))[0] : null);
    if (!items.length && !big) continue;
    // A big move happening now (before, during or after the session) is as current as fresh news.
    const live = ["pre", "open", "post"].includes(session?.session);
    const w = 10 * Math.log10(mc) + (big ? 3 * Math.abs(move.v) : 0) + (items[0]?.w ?? 0) + (!items.length && big && live ? 25 : 0);
    out.push({
      w, t: r.t, n: r.n, mc: r.mc ?? null, dc: r.dc ?? null, o: r.o ?? null,
      move: move ? +move.v.toFixed(2) : null, when: move?.when ?? null,
      // Next to news the change since the news, not the change of a later session.
      since: items[0] ? sinceNews(r, items[0], { now, session: session?.session ?? null }) : null,
      kind: items[0]?.kind || "move", title: item?.title || null, date: item?.date || null, at: item?.at || null, url: item?.url || null, items: item?.items || null,
    });
  }
  out.sort((a, b) => b.w - a.w);
  const withNews = out.filter((s) => s.kind !== "move");
  const movesOnly = out.filter((s) => s.kind === "move").slice(0, maxMovesOnly);
  return [...withNews, ...movesOnly].sort((a, b) => b.w - a.w).slice(0, max).map(({ w, ...s }) => s);
}

// rows: index rows with `o` (overall TeraScore) already decoded; etfs: data/etfs.json rows; news: recent
// headlines of large companies ({ t, date, at, items, kind, title, url }); session: { session, previousTradeDate }.
export function buildPulse({ rows, etfs = [], now = new Date(), quotesAt = null, news = [], session = null }) {
  const bySym = new Map(rows.map((r) => [r.t, r]));
  const etfBySym = new Map(etfs.map((e) => [e.t, e]));
  const indices = INDEX_ETFS.map((t) => etfBySym.get(t)).filter((e) => e && isNum(e.dc)).map((e) => ({ t: e.t, n: e.n, px: e.px, dc: e.dc, ...(isNum(e.xc) ? { xc: e.xc, xs: e.xs } : {}) }));
  const themes = Object.entries(THEMES).map(([id, list]) => ({ id, ...basket(list.map((t) => bySym.get(t)).filter(Boolean)) })).filter((x) => isNum(x.change));

  const bySector = new Map();
  for (const r of rows) if (r.s && (r.mc ?? 0) >= 3e8) (bySector.get(r.s) || bySector.set(r.s, []).get(r.s)).push(r);
  const sectors = [...bySector].map(([s, list]) => ({ s, ...basket(list) })).filter((x) => isNum(x.change)).sort((a, b) => b.change - a.change);

  const liquid = rows.filter((r) => isNum(r.dc) && (r.mc ?? 0) >= 2e9);
  const gainers = liquid.filter((r) => r.dc > 0).sort((a, b) => b.dc - a.dc).slice(0, 10).map((r) => brief(r));
  const losers = liquid.filter((r) => r.dc < 0).sort((a, b) => a.dc - b.dc).slice(0, 10).map((r) => brief(r));

  const since = (d, days) => d && now - new Date(d) <= days * DAY;
  const reports = rows.filter((r) => r.lr && since(r.lr.split("|")[0], 4) && (r.mc ?? 0) >= 2e9)
    .sort((a, b) => (b.mc ?? 0) - (a.mc ?? 0)).slice(0, 20)
    .map((r) => { const [date, form] = r.lr.split("|"); return brief(r, { date, form }); });
  const scoreMoves = rows.filter((r) => isNum(r.d1) && Math.abs(r.d1) >= 8 && (r.mc ?? 0) >= 1e9)
    .sort((a, b) => Math.abs(b.d1) - Math.abs(a.d1)).slice(0, 15).map((r) => brief(r, { d1: r.d1 }));
  const year = now.getUTCFullYear();
  const newListings = rows.filter((r) => since(r.fs, 45) || r.ipo === year)
    .sort((a, b) => (b.fs || "").localeCompare(a.fs || "") || (b.mc ?? 0) - (a.mc ?? 0)).slice(0, 20)
    .map((r) => brief(r, { fs: r.fs || null, ipo: r.ipo || null }));

  // Headlines: only the big things, most important first.
  const hl = [];
  for (const e of indices) if (Math.abs(e.dc) >= 1.5) hl.push({ type: "index", w: 50 + Math.abs(e.dc) * 10, t: e.t, dc: e.dc });
  for (const th of themes) if (Math.abs(th.change) >= 2) hl.push({ type: "theme", w: 40 + Math.abs(th.change) * 8, id: th.id, dc: th.change, best: th.best, worst: th.worst });
  // Big moves of large companies are among the top stories (with the news behind them, if any).
  for (const r of reports) if (r.mc >= 5e10 && since(r.date, 2)) hl.push({ type: "report", w: 25 + Math.log10(r.mc), ...r });
  for (const r of scoreMoves) if (Math.abs(r.d1) >= 10 && r.mc >= 5e9) hl.push({ type: "score", w: 20 + Math.abs(r.d1), ...r });
  for (const r of newListings) if (since(r.fs, 7)) hl.push({ type: "listing", w: 35 + Math.log10(r.mc || 1e8), ...r });
  hl.sort((a, b) => b.w - a.w);

  const stories = buildStories({ rows, news, session, now });
  return { generated: now.toISOString(), quotesAt, session: session?.session ?? null, prevDay: session?.previousTradeDate ?? null, stories, indices, themes, sectors, gainers, losers, reports, scoreMoves, newListings, headlines: hl.slice(0, 12).map(({ w, ...x }) => x) };
}
