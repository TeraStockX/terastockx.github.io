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

// ---------- Moves over a period ----------
// The current holdings over a past period: the value change (today's shares at the prices then and now) and the
// value-weighted change of the companies' TeraScore.

export const PERIODS = ["1d", "1w", "1m", "3m", "6m", "1y", "max"];
const DAY = 86400000;
const ymd = (d) => d.toISOString().slice(0, 10);
const daysBetween = (a, b) => (Date.parse(b) - Date.parse(a)) / DAY;
const monthEnd = (ym) => { const [y, m] = ym.split("-").map(Number); return ymd(new Date(Date.UTC(y, m, 0))); };

// The first day of a period that ends today (YYYY-MM-DD; month ends are clamped: 31 May − 3 months = 28/29 Feb).
export function periodStart(id, today) {
  const [y, m, d] = today.split("-").map(Number);
  if (id === "1w") return ymd(new Date(Date.UTC(y, m - 1, d - 7)));
  const months = { "1m": 1, "3m": 3, "6m": 6, "1y": 12 }[id];
  if (!months) return null;
  const first = new Date(Date.UTC(y, m - 1 - months, 1));
  const last = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate();
  return ymd(new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth(), Math.min(d, last))));
}

// The last close on or before a day in daily closes ([[YYYY-MM-DD, close]], oldest first); null when the series
// starts later or that close is more than maxGap days older (a series that stopped).
export function closeOnOrBefore(daily, day, maxGap = 6) {
  if (!daily?.length || daily[0][0] > day) return null;
  let lo = 0, hi = daily.length - 1;
  while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (daily[mid][0] <= day) lo = mid; else hi = mid - 1; }
  const [d, v] = daily[lo];
  return isNum(v) && v > 0 && daysBetween(d, day) <= maxGap ? { day: d, v } : null;
}

// The month-end close nearest to a day ([[YYYY-MM, close]], completed months only), at most maxGap days away.
export function monthEndNear(monthly, day, today, maxGap = 16) {
  let best = null;
  for (const [m, v] of monthly || []) {
    if (m >= today.slice(0, 7) || !isNum(v) || v <= 0) continue;
    const end = monthEnd(m), gap = Math.abs(daysBetween(end, day));
    if (gap <= maxGap && (!best || gap < best.gap)) best = { day: end, v, gap };
  }
  return best ? { day: best.day, v: best.v } : null;
}

// holdings: [{ t, shares, row }]; series: Map(t → { now, fx, daily, monthly }) with prices in the holding's trading
// currency and fx = US dollars per unit of it. "1d" uses the day change on the row (dc, in %). Over a month or
// more, the nearest month-end price stands in for missing daily closes (within 10 days of the start for a month,
// 16 days for longer periods; those holdings are listed in `approx`); "max" runs
// from the first month every included holding has a price (a holding with less than a year of monthly closes is
// left out, unless all of them are that young).
export function periodMove(id, holdings, series, { today }) {
  const items = [], missing = [], approx = [];
  let from = null, start = 0, end = 0;
  const usable = (h) => {
    const s = series.get(h.t);
    return s && isNum(s.now) && s.now > 0 && isNum(s.fx) && s.fx > 0 && isNum(h.shares) && h.shares > 0 ? s : null;
  };
  const add = (h, s, p0) => {
    const a = h.shares * p0 * s.fx, b = h.shares * s.now * s.fx;
    start += a; end += b;
    items.push({ t: h.t, pct: s.now / p0 - 1, change: b - a });
  };
  if (id === "1d") {
    for (const h of holdings) {
      const s = usable(h), dc = h.row?.dc;
      if (s && isNum(dc) && dc > -100) add(h, s, s.now / (1 + dc / 100)); else missing.push(h.t);
    }
  } else if (id === "max") {
    const withM = holdings.map((h) => ({ h, s: usable(h) })).filter(({ s }) => s?.monthly?.filter(([m]) => m < today.slice(0, 7)).length >= 2);
    const old = withM.filter(({ s }) => s.monthly.length >= 12);
    const incl = old.length ? old : withM;
    for (const h of holdings) if (!incl.some((x) => x.h === h)) missing.push(h.t);
    const first = incl.length ? incl.map(({ s }) => s.monthly[0][0]).sort().at(-1) : null;
    if (first) {
      from = monthEnd(first);
      for (const { h, s } of incl) {
        const v = s.monthly.find(([m]) => m >= first)?.[1];
        if (isNum(v) && v > 0) add(h, s, v); else missing.push(h.t);
      }
    }
  } else {
    from = periodStart(id, today);
    const gap = id === "1w" ? 0 : id === "1m" ? 10 : 16;
    for (const h of holdings) {
      const s = usable(h);
      const c = s && closeOnOrBefore(s.daily, from);
      const m = s && !c && gap ? monthEndNear(s.monthly, from, today, gap) : null;
      if (c || m) { add(h, s, (c || m).v); if (!c) approx.push(h.t); } else missing.push(h.t);
    }
  }
  items.sort((a, b) => Math.abs(b.change) - Math.abs(a.change));
  return { id, from, start, end, change: items.length ? end - start : null, pct: items.length && start > 0 ? end / start - 1 : null, items, missing, approx };
}

// The included holdings' value over the period (in dollars): daily closes, or month-end closes for "max" and when a
// holding has month-end prices only; the last point is today's value.
export function movePoints(move, holdings, series, { today }) {
  if (move.id === "1d" || !move.from || !move.items.length) return [];
  const incl = move.items.map((x) => ({ h: holdings.find((h) => h.t === x.t), s: series.get(x.t) }));
  const pts = [];
  if (move.id !== "max" && !move.approx.length) {
    const days = [...new Set(incl.flatMap(({ s }) => (s.daily || []).map(([d]) => d)))].filter((d) => d > move.from && d < today).sort();
    for (const d of [move.from, ...days]) {
      let v = 0, ok = true;
      for (const { h, s } of incl) { const c = closeOnOrBefore(s.daily, d); if (!c) { ok = false; break; } v += h.shares * c.v * s.fx; }
      if (ok) pts.push([d, v]);
    }
  } else {
    // The month whose end is nearest to the start, up to the last completed month (closes carried over gaps).
    const [y, m, d] = move.from.split("-").map(Number);
    const startM = d >= 16 ? move.from.slice(0, 7) : ymd(new Date(Date.UTC(y, m - 2, 1))).slice(0, 7);
    const months = [...new Set(incl.flatMap(({ s }) => (s.monthly || []).map(([k]) => k)))].filter((k) => k >= startM && k < today.slice(0, 7)).sort();
    const last = new Map();
    for (const k of months) {
      let v = 0, ok = true;
      for (const { h, s } of incl) {
        const e = s.monthly.find(([q]) => q === k);
        if (e && isNum(e[1])) last.set(h.t, e[1]);
        const c = last.get(h.t);
        if (!isNum(c)) ok = false; else v += h.shares * c * s.fx;
      }
      if (ok) pts.push([k, v]);
    }
  }
  pts.push([today, move.end]);
  return pts;
}

// The value-weighted TeraScore change of the companies over a period. scored: [{ t, value, score, d1, ch,
// weekly: [[YYYY-MM-DD, score]], fy: [[year, score]] }]. "1d" is the change at the last daily update; 1w…1y come
// from the weekly snapshots of the current method; "1y" falls back to the latest fiscal year against the one
// before, and "max" compares point-in-time scores by fiscal year. No change (null) while the companies with that
// history make up less than `minCover` of the companies' value.
export function scoreMove(id, scored, { today, minCover = 0.6 }) {
  const xs = scored.filter((x) => isNum(x.value) && x.value > 0 && isNum(x.score));
  const total = xs.reduce((a, x) => a + x.value, 0);
  if (!(total > 0)) return null;
  const cover = (list) => list.reduce((a, x) => a + x.value, 0) / total;
  let parts = [], basis = "weekly", years = null, since = null;
  const points = [];
  if (id === "1d") {
    basis = "day";
    parts = xs.filter((x) => isNum(x.d1)).map((x) => ({ x, d: x.d1 }));
  } else if (id === "max") {
    basis = "fy";
    const at = (x, y) => (x.fy || []).find(([k]) => k === y)?.[1];
    const yrs = [...new Set(xs.flatMap((x) => (x.fy || []).map(([y]) => y)))].sort((a, b) => a - b);
    const good = yrs.filter((y) => cover(xs.filter((x) => isNum(at(x, y)))) >= minCover);
    const yn = good.at(-1);
    const y0 = good.slice(-8).find((y) => y < yn && cover(xs.filter((x) => isNum(at(x, y)) && isNum(at(x, yn)))) >= minCover);
    if (y0 !== undefined) {
      years = [y0, yn];
      parts = xs.filter((x) => isNum(at(x, y0)) && isNum(at(x, yn))).map((x) => ({ x, d: at(x, yn) - at(x, y0) }));
      for (const y of good.filter((k) => k >= y0)) {
        let s = 0, w = 0;
        for (const x of xs) { const v = at(x, y); if (isNum(v)) { s += v * x.value; w += x.value; } }
        points.push([String(y), +(s / w).toFixed(1)]);
      }
    }
  } else {
    const days = { "1w": 7, "1m": 30, "3m": 91, "6m": 182, "1y": 365 }[id];
    const maxAge = days + Math.max(7, Math.round(days * 0.1));
    for (const x of xs) {
      const snap = [...(x.weekly || [])].reverse().find(([d]) => daysBetween(d, today) >= days);
      if (snap && isNum(snap[1]) && daysBetween(snap[0], today) <= maxAge) parts.push({ x, d: x.score - snap[1], since: snap[0] });
    }
    if (cover(parts.map((p) => p.x)) >= minCover) {
      since = parts.map((p) => p.since).sort()[0];
      const dates = [...new Set(parts.flatMap((p) => p.x.weekly.map(([d]) => d)))].filter((d) => d >= since && d < today).sort();
      for (const d of dates) {
        let s = 0, w = 0;
        for (const p of parts) { const q = [...p.x.weekly].reverse().find(([k]) => k <= d); if (q && isNum(q[1])) { s += q[1] * p.x.value; w += p.x.value; } }
        if (w >= minCover * total) points.push([d, +(s / w).toFixed(1)]);
      }
    } else if (id === "1y") {
      basis = "fyLast";
      parts = xs.filter((x) => isNum(x.ch)).map((x) => ({ x, d: x.ch }));
    }
  }
  const w = cover(parts.map((p) => p.x));
  if (!parts.length || w < minCover) return { id, basis, change: null, cover: w, byT: new Map(), points: [], years, since: null, first: firstSnapshot(xs) };
  const sum = parts.reduce((a, p) => a + p.x.value, 0);
  const change = parts.reduce((a, p) => a + p.d * p.x.value, 0) / sum;
  const to = parts.reduce((a, p) => a + p.x.score * p.x.value, 0) / sum;
  if (basis === "weekly" || basis === "day") { if (points.length) points.push([today, +to.toFixed(1)]); }
  return { id, basis, change, from: basis === "weekly" || basis === "day" ? to - change : null, to: basis === "weekly" || basis === "day" ? to : null,
    cover: w, byT: new Map(parts.map((p) => [p.x.t, p.d])), points: points.length >= 2 ? points : [], years, since, first: firstSnapshot(xs) };
}
// The first weekly snapshot of the current method among the companies (when the weekly history starts).
const firstSnapshot = (xs) => xs.flatMap((x) => (x.weekly || []).map(([d]) => d)).sort()[0] || null;
