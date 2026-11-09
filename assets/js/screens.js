// Ready-made screens ("quick searches") for the company list. Each one is a filter on index rows plus
// its own ranking; they combine with the sector, exchange and other filters. Thresholds are TeraScore
// points (0–100; for risk lower is safer). Runs in the browser and in Node (tests).

const isNum = (x) => typeof x === "number" && Number.isFinite(x);
const s = (r, k) => (isNum(r.sc?.[k]) ? r.sc[k] : null);
const noCritical = (r) => !(r.cf || []).length;
const at = (r, k, min) => isNum(s(r, k)) && s(r, k) >= min;
const below = (r, k, max) => isNum(s(r, k)) && s(r, k) <= max;
// Scores of very small companies swing on small numbers: most screens start at $300M market cap.
const sizeable = (r) => (r.mc ?? 0) >= 3e8;

export const SCREENS = [
  { id: "top", filter: (r) => isNum(s(r, "overall")), rank: (r) => s(r, "overall") },
  { id: "bestRiskReward", filter: (r) => sizeable(r) && at(r, "overall", 70) && below(r, "risk", 30) && noCritical(r), rank: (r) => s(r, "overall") - s(r, "risk") },
  { id: "safeLongTerm", filter: (r) => at(r, "overall", 65) && below(r, "risk", 25) && at(r, "consistency", 70) && at(r, "balanceSheet", 60) && r.d === "low" && noCritical(r) && (r.mc ?? 0) >= 2e9,
    rank: (r) => 0.5 * (100 - s(r, "risk")) + 0.25 * s(r, "consistency") + 0.25 * s(r, "balanceSheet") },
  { id: "lowRisk", filter: (r) => below(r, "risk", 20) && noCritical(r), rank: (r) => -s(r, "risk"), col: "risk" },
  { id: "improvers", filter: (r) => sizeable(r) && isNum(r.ch) && r.ch >= 10 && isNum(s(r, "overall")), rank: (r) => r.ch, col: "ch" },
  { id: "growth", filter: (r) => sizeable(r) && at(r, "growth1y", 75) && at(r, "growthLong", 70) && at(r, "overall", 55), rank: (r) => s(r, "growth1y") + s(r, "growthLong") + s(r, "overall") / 100, col: "growthLong" },
  // Quality companies whose share price is at least 20% below its 12-month high.
  // A fall of more than 50% is more often a sign of trouble than a discount, so it is left out.
  { id: "dip", filter: (r) => sizeable(r) && isNum(r.dd) && r.dd <= -0.2 && r.dd >= -0.5 && at(r, "overall", 65) && below(r, "risk", 40) && noCritical(r), rank: (r) => s(r, "overall") - r.dd * 10, col: "dd" },
  // P/E below 3 almost always comes from a one-off gain; the valuation score (EV/EBIT, cash-flow yield) must agree.
  { id: "lowPe", filter: (r) => sizeable(r) && isNum(r.pe) && r.pe >= 3 && r.pe <= 12 && at(r, "valuation", 60) && at(r, "overall", 60) && at(r, "consistency", 50) && noCritical(r), rank: (r) => s(r, "overall") + s(r, "valuation") - r.pe, col: "pe" },
  { id: "value", filter: (r) => sizeable(r) && at(r, "valuation", 70) && at(r, "overall", 65) && at(r, "profitability", 60) && noCritical(r), rank: (r) => s(r, "valuation") + s(r, "overall") },
  { id: "dividend", filter: (r) => sizeable(r) && isNum(r.ds) && r.ds >= 75 && isNum(r.dy) && r.dy >= 0.025, rank: (r) => r.dy, col: "ds" },
  { id: "largeQuality", filter: (r) => (r.mc ?? 0) >= 5e10 && at(r, "overall", 70), rank: (r) => s(r, "overall") },
  { id: "highRisk", filter: (r) => sizeable(r) && (at(r, "risk", 70) || (r.d === "high" && at(r, "risk", 55))), rank: (r) => s(r, "risk") + Math.log10(r.mc) / 100, col: "risk" },
  { id: "decliners", filter: (r) => sizeable(r) && isNum(r.ch) && r.ch <= -10 && isNum(s(r, "overall")), rank: (r) => -r.ch, col: "ch" },
];

export const screenById = (id) => SCREENS.find((x) => x.id === id) || null;

// Rows of a screen, best first.
export function runScreen(rows, id) {
  const sc = screenById(id);
  if (!sc) return rows;
  return rows.filter(sc.filter).sort((a, b) => sc.rank(b) - sc.rank(a) || a.t.localeCompare(b.t));
}
