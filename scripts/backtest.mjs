// Point-in-time backtest of the TeraScore engine (methodology page: "How well has it worked?").
//
// Return test: every quarter from 2021 on, each company is scored as it could have been then — only the
// annual reports filed by that time (fiscal year end + 3 months, foreign filers + 4), valued at that
// month's share price — and compared with the next 12 months of its share price.
// Fundamental test: each fiscal year is scored from the reports up to that year, and compared with the
// next year's results (net loss, dividend cut).
//
// Caveats (shown on the page): only companies listed today are included (delisted and bankrupt ones are
// missing, so the weakest scores look better than they were); prices exclude dividends; today's sector
// benchmarks are used for every year; quarterly (TTM) figures are not used.
//
// Usage: node scripts/backtest.mjs [dataDir]  → writes <dataDir>/backtest.json
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { analyze, dividendProfile, yearMetrics, ENGINE_VERSION } from "../assets/js/scoring.js";

const isNum = (x) => typeof x === "number" && Number.isFinite(x);
const addMonths = (ym, n) => { const [y, m] = ym.split("-").map(Number); return new Date(Date.UTC(y, m - 1 + n, 1)).toISOString().slice(0, 7); };
export const BACKTEST_MIN_MARKET_CAP = 3e8;
const FIRST_FORMATION = "2021-02";

// Average ranks (ties share their mean rank).
function ranks(xs) {
  const idx = xs.map((x, i) => [x, i]).sort((a, b) => a[0] - b[0]);
  const r = new Array(xs.length);
  for (let i = 0; i < idx.length;) {
    let j = i; while (j + 1 < idx.length && idx[j + 1][0] === idx[i][0]) j++;
    for (let k = i; k <= j; k++) r[idx[k][1]] = (i + j) / 2 + 1;
    i = j + 1;
  }
  return r;
}
function pearson(a, b) {
  const n = a.length, ma = a.reduce((s, x) => s + x, 0) / n, mb = b.reduce((s, x) => s + x, 0) / n;
  let sab = 0, saa = 0, sbb = 0;
  for (let i = 0; i < n; i++) { sab += (a[i] - ma) * (b[i] - mb); saa += (a[i] - ma) ** 2; sbb += (b[i] - mb) ** 2; }
  return saa && sbb ? sab / Math.sqrt(saa * sbb) : null;
}
export const spearman = (a, b) => pearson(ranks(a), ranks(b));
// Probability that a randomly chosen case with the event has a higher score than one without.
export function auc(scores, events) {
  const pairs = scores.map((s, i) => [s, events[i]]).filter(([s, e]) => isNum(s) && typeof e === "boolean");
  const pos = pairs.filter(([, e]) => e).length, neg = pairs.length - pos;
  if (pos < 20 || neg < 20) return null;
  const r = ranks(pairs.map(([s]) => s));
  const sumPos = pairs.reduce((s, [, e], i) => s + (e ? r[i] : 0), 0);
  return (sumPos - (pos * (pos + 1)) / 2) / (pos * neg);
}
const mean = (xs) => (xs.length ? xs.reduce((s, x) => s + x, 0) / xs.length : null);
const median = (xs) => { const v = [...xs].sort((a, b) => a - b); const m = v.length >> 1; return v.length ? (v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2) : null; };
const r3 = (x) => (isNum(x) ? +x.toFixed(3) : null);

// The company as it was known at `ym` (reports up to index i), valued at that month's price.
function asOf(c, years, i, ym) {
  const prices = c.prices?.data || [];
  const pmap = new Map(prices.map((p) => [p[0], p[1]]));
  const last = prices.at(-1)?.[1], mcNow = c.market?.marketCap, sharesNow = years.at(-1)?.sharesDiluted;
  let mc = null;
  const p = ym ? pmap.get(ym) : null;
  if (isNum(p) && isNum(mcNow) && isNum(last) && last > 0) {
    mc = mcNow * (p / last);
    if (isNum(years[i].sharesDiluted) && isNum(sharesNow) && sharesNow > 0) mc *= years[i].sharesDiluted / sharesNow;
  }
  const px = ym ? prices.filter((q) => q[0] <= ym) : [];
  return {
    ...c, annual: years.slice(0, i + 1), ttm: null, latestBalance: null, insiders: null, quarterly: null,
    events: (c.events || []).filter((e) => ym && e.date.slice(0, 7) <= ym),
    prices: px.length ? { ...c.prices, data: px } : null,
    market: { ...c.market, marketCap: mc, price: isNum(p) ? p : null, sharesOutstanding: null },
  };
}

export function backtest(companies, benchmarks) {
  const lastMonth = companies.reduce((m, c) => { const d = c.prices?.data?.at(-1)?.[0]; return d && d > m ? d : m; }, "");
  const formation = [];
  for (let f = FIRST_FORMATION; addMonths(f, 12) <= lastMonth; f = addMonths(f, 3)) formation.push(f);
  const obs = []; const fund = [];
  for (const c of companies) {
    if (!c.annual?.length || c.sector === "shell") continue;
    const years = [...c.annual].filter((y) => isNum(y.year)).sort((a, b) => a.year - b.year);
    if (years.length < 2) continue;
    const prices = c.prices?.data || [];
    const pmap = new Map(prices.map((p) => [p[0], p[1]]));
    const lag = c.foreignPrivateIssuer ? 4 : 3;
    const avail = (y) => addMonths((y.periodEnd || `${y.year}-12-31`).slice(0, 7), lag);
    for (const F of formation) {
      const p0 = pmap.get(F);
      if (!isNum(p0) || p0 <= 0) continue;
      let i = -1;
      for (let k = 0; k < years.length; k++) if (avail(years[k]) <= F) i = k;
      if (i < 1 || addMonths(avail(years[i]), 15) < F) continue;
      const a = analyze(asOf(c, years, i, F), { now: new Date(`${F}-28T00:00:00Z`), benchmarks });
      if (!a.ok || !isNum(a.scores.overall) || !(a.metrics.marketCap >= BACKTEST_MIN_MARKET_CAP)) continue;
      let peak = p0, mdd = 0, ok = true;
      for (let k = 1; k <= 12; k++) { const p = pmap.get(addMonths(F, k)); if (!isNum(p)) { ok = false; break; } peak = Math.max(peak, p); mdd = Math.min(mdd, p / peak - 1); }
      if (!ok) continue;
      obs.push({ F, t: c.ticker, overall: a.scores.overall, risk: a.scores.risk, r12: pmap.get(addMonths(F, 12)) / p0 - 1, mdd });
    }
    for (let i = 1; i < years.length - 1; i++) {
      const y = years[i], n1 = years[i + 1];
      if (n1.year !== y.year + 1) continue;
      const F = avail(y);
      const comp = asOf(c, years, i, pmap.has(F) ? F : null);
      const a = analyze(comp, { now: new Date(`${F}-28T00:00:00Z`), benchmarks });
      if (!a.ok || !isNum(a.scores.overall)) continue;
      const dv = dividendProfile(comp, a);
      const m0 = yearMetrics(y, years[i - 1]), m1 = yearMetrics(n1, y);
      const dps = (yy, m) => (isNum(yy.dividendsPaid) && isNum(m.shares) && m.shares > 0 ? Math.abs(yy.dividendsPaid) / m.shares : null);
      const d0 = dps(y, m0), d1 = dps(n1, m1);
      fund.push({
        overall: a.scores.overall, risk: a.scores.risk, div: dv.payer ? dv.score : null, level: dv.payer ? dv.level : null,
        loss: isNum(n1.netIncome) ? n1.netIncome < 0 : null,
        cut: d0 > 0 && isNum(d1) ? d1 / d0 - 1 <= -0.10 : null,
      });
    }
  }

  // Cross-sections per formation month: excess return over that month's median, quintiles, rank IC.
  const byF = new Map();
  for (const o of obs) (byF.get(o.F) || byF.set(o.F, []).get(o.F)).push(o);
  const ics = [], q = Array.from({ length: 5 }, () => ({ x: [], big: [], mdd: [], score: [] })), rq = Array.from({ length: 5 }, () => ({ mdd: [], big: [] }));
  const bandsDef = [["excellent", 80, 101], ["strong", 65, 80], ["moderate", 45, 65], ["weak", 25, 45], ["poor", 0, 25]];
  const bands = Object.fromEntries(bandsDef.map(([k]) => [k, { n: 0, x: [], big: 0 }]));
  for (const [, g] of byF) {
    if (g.length < 50) continue;
    const med = median(g.map((o) => o.r12));
    for (const o of g) o.x = o.r12 - med;
    ics.push(spearman(g.map((o) => o.overall), g.map((o) => o.r12)));
    const quint = (key, into, fill) => {
      const s = [...g].filter((o) => isNum(o[key])).sort((a, b) => a[key] - b[key]);
      const per = Array.from({ length: 5 }, () => []);
      s.forEach((o, i) => per[Math.min(4, Math.floor((i * 5) / s.length))].push(o));
      per.forEach((list, k) => fill(into[k], list));
    };
    quint("overall", q, (b, list) => { b.x.push(mean(list.map((o) => o.x))); b.big.push(mean(list.map((o) => (o.r12 < -0.5 ? 1 : 0)))); b.mdd.push(mean(list.map((o) => o.mdd))); b.score.push(mean(list.map((o) => o.overall))); });
    quint("risk", rq, (b, list) => { b.mdd.push(mean(list.map((o) => o.mdd))); b.big.push(mean(list.map((o) => (o.r12 < -0.5 ? 1 : 0)))); });
    for (const o of g) {
      const [k] = bandsDef.find(([, lo, hi]) => o.overall >= lo && o.overall < hi) || [];
      if (!k) continue;
      bands[k].n++; bands[k].x.push(o.x); if (o.r12 < -0.5) bands[k].big++;
    }
  }
  const dates = [...byF.keys()].filter((f) => byF.get(f).length >= 50).sort();
  const divLevels = ["safe", "moderate", "risky", "unsafe"].map((k) => {
    const list = fund.filter((f) => f.level === k && typeof f.cut === "boolean");
    return { level: k, n: list.length, cutRate: r3(mean(list.map((f) => (f.cut ? 1 : 0)))) };
  });
  return {
    generated: new Date().toISOString(),
    engineVersion: ENGINE_VERSION,
    period: { first: dates[0] || null, last: dates.at(-1) || null, lastPrice: lastMonth },
    minMarketCap: BACKTEST_MIN_MARKET_CAP,
    observations: obs.length,
    companies: new Set(obs.map((o) => o.t)).size,
    formationDates: dates.length,
    rankIC: r3(mean(ics)), positiveShare: r3(ics.filter((x) => x > 0).length / (ics.length || 1)),
    quintiles: q.map((b, k) => ({ q: k + 1, avgScore: Math.round(mean(b.score)), excess: r3(mean(b.x)), bigLoss: r3(mean(b.big)), drawdown: r3(mean(b.mdd)) })),
    riskQuintiles: rq.map((b, k) => ({ q: k + 1, drawdown: r3(mean(b.mdd)), bigLoss: r3(mean(b.big)) })),
    bands: bandsDef.map(([k]) => ({ band: k, share: r3(bands[k].n / (obs.length || 1)), excess: r3(mean(bands[k].x)), bigLoss: r3(bands[k].n ? bands[k].big / bands[k].n : null) })),
    fundamental: {
      years: fund.length,
      aucLossOverall: r3(auc(fund.map((f) => -f.overall), fund.map((f) => f.loss))),
      aucLossRisk: r3(auc(fund.map((f) => f.risk), fund.map((f) => f.loss))),
      aucDividendCut: r3(auc(fund.map((f) => (isNum(f.div) ? -f.div : null)), fund.map((f) => f.cut))),
      dividendLevels: divLevels,
    },
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const here = dirname(fileURLToPath(import.meta.url));
  const dataDir = process.argv[2] || join(here, "..", "data");
  const bm = JSON.parse(readFileSync(join(dataDir, "benchmarks.json"), "utf8"));
  const companies = readdirSync(join(dataDir, "companies")).filter((f) => f.endsWith(".json")).map((f) => JSON.parse(readFileSync(join(dataDir, "companies", f), "utf8")));
  const t0 = Date.now();
  const out = backtest(companies, bm.sectors || bm);
  writeFileSync(join(dataDir, "backtest.json"), JSON.stringify(out) + "\n");
  console.log(JSON.stringify(out, null, 1));
  console.error(`backtest: ${out.observations} observations, ${((Date.now() - t0) / 1000).toFixed(1)} s`);
}
