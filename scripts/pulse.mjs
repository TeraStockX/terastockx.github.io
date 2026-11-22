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

// rows: index rows with `o` (overall TeraScore) already decoded; etfs: data/etfs.json rows.
export function buildPulse({ rows, etfs = [], now = new Date(), quotesAt = null }) {
  const bySym = new Map(rows.map((r) => [r.t, r]));
  const etfBySym = new Map(etfs.map((e) => [e.t, e]));
  const indices = INDEX_ETFS.map((t) => etfBySym.get(t)).filter((e) => e && isNum(e.dc)).map((e) => ({ t: e.t, n: e.n, px: e.px, dc: e.dc }));
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
  for (const r of liquid) if (Math.abs(r.dc) >= 10 && r.mc >= 1e10) hl.push({ type: "move", w: 30 + Math.abs(r.dc) * 2 + Math.log10(r.mc), ...brief(r) });
  for (const r of reports) if (r.mc >= 5e10 && since(r.date, 2)) hl.push({ type: "report", w: 25 + Math.log10(r.mc), ...r });
  for (const r of scoreMoves) if (Math.abs(r.d1) >= 10 && r.mc >= 5e9) hl.push({ type: "score", w: 20 + Math.abs(r.d1), ...r });
  for (const r of newListings) if (since(r.fs, 7)) hl.push({ type: "listing", w: 35 + Math.log10(r.mc || 1e8), ...r });
  hl.sort((a, b) => b.w - a.w);

  return { generated: now.toISOString(), quotesAt, indices, themes, sectors, gainers, losers, reports, scoreMoves, newListings, headlines: hl.slice(0, 12).map(({ w, ...x }) => x) };
}
