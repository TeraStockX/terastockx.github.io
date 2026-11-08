// Portfolio analysis: value-weighted scores, income and concentration checks.
// Works on index rows (see data/index.json) plus the number of shares held; runs in the browser and in Node.

const isNum = (x) => typeof x === "number" && Number.isFinite(x);

export const PORTFOLIO_LIMITS = { position: 0.25, sector: 0.40, minHoldings: 5, lowScore: 40 };

// holdings: [{ t, shares, row, dy? }] – row is the company's index row (with px = price in USD), or an ETF row
// ({ etf: true, px, dy, … }). ETFs have no TeraScore: weighted scores cover the companies only, and
// concentration checks skip them (a fund is already diversified). `dy` on a holding overrides the yield.
export function portfolioSummary(holdings, limits = PORTFOLIO_LIMITS) {
  const positions = holdings
    .map((h) => ({ ...h, row: h.row && isNum(h.dy) ? { ...h.row, dy: h.dy } : h.row, price: h.row?.px ?? null }))
    .map((h) => ({ ...h, value: isNum(h.price) && isNum(h.shares) && h.shares > 0 ? h.price * h.shares : null }));
  const valued = positions.filter((p) => isNum(p.value));
  const total = valued.reduce((s, p) => s + p.value, 0);
  for (const p of positions) p.weight = total > 0 && isNum(p.value) ? p.value / total : null;

  // Value-weighted average over the positions that have the figure; `covered` is their combined weight.
  const wavg = (get) => {
    const xs = valued.filter((p) => isNum(get(p.row || {})));
    const w = xs.reduce((s, p) => s + p.weight, 0);
    return w > 0 ? { value: xs.reduce((s, p) => s + get(p.row) * p.weight, 0) / w, covered: w } : { value: null, covered: 0 };
  };
  const score = wavg((r) => r.sc?.overall);
  const risk = wavg((r) => r.sc?.risk);
  const income = valued.reduce((s, p) => s + (isNum(p.row?.dy) ? p.row.dy * p.value : 0), 0);
  // Portfolio P/E: total value / total earnings attributable to the holdings (loss makers excluded).
  const earn = valued.filter((p) => isNum(p.row?.pe) && p.row.pe > 0);
  const earnW = earn.reduce((s, p) => s + p.weight, 0);
  const pe = earn.length ? earnW / earn.reduce((s, p) => s + p.weight / p.row.pe, 0) : null;

  const sectors = new Map();
  for (const p of valued) { const k = p.row?.etf ? "etf" : p.row?.s || "other"; sectors.set(k, (sectors.get(k) || 0) + p.weight); }
  const sectorList = [...sectors].map(([s, w]) => ({ s, weight: w })).sort((a, b) => b.weight - a.weight);

  const warnings = [];
  for (const p of valued) if (!p.row?.etf && p.weight > limits.position) warnings.push({ id: "position", level: "warning", t: p.t, weight: p.weight });
  for (const s of sectorList) if (s.s !== "other" && s.s !== "etf" && s.weight > limits.sector) warnings.push({ id: "sector", level: "warning", s: s.s, weight: s.weight });
  const hasEtf = positions.some((p) => p.row?.etf);
  if (positions.length && !hasEtf && positions.length < limits.minHoldings) warnings.push({ id: "few", level: "warning", n: positions.length });
  const list = (f) => positions.filter(f).map((p) => p.t);
  const crit = list((p) => (p.row?.cf || []).length);
  if (crit.length) warnings.push({ id: "critical", level: "critical", list: crit });
  const distress = list((p) => p.row?.d === "high");
  if (distress.length) warnings.push({ id: "distress", level: "critical", list: distress });
  const weak = list((p) => isNum(p.row?.sc?.overall) && p.row.sc.overall < limits.lowScore);
  if (weak.length) warnings.push({ id: "weak", level: "warning", list: weak });
  const unscored = list((p) => !p.row?.etf && !isNum(p.row?.sc?.overall));
  if (unscored.length) warnings.push({ id: "unscored", level: "info", list: unscored });

  return {
    positions, total, sectors: sectorList, warnings,
    score: isNum(score.value) ? Math.round(score.value) : null, scoreCovered: score.covered,
    risk: isNum(risk.value) ? Math.round(risk.value) : null,
    income, yield: total > 0 ? income / total : null, pe,
    etfWeight: valued.filter((p) => p.row?.etf).reduce((s, p) => s + p.weight, 0),
    missingYield: positions.filter((p) => p.row?.etf && !isNum(p.row?.dy)).map((p) => p.t),
  };
}
