// Run: npm test
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { parseCompanyFacts, normalizeShares, splitEvidence } from "../scripts/sec-parse.mjs";
import { sectorFromSic, profileFor } from "../scripts/sectors.mjs";
import { analyze, scale, DIMENSIONS, METRIC_FORMAT, PROFILES, FLAG_IDS, marketStats } from "../assets/js/scoring.js";
import { loadAllLangs } from "../assets/js/i18n/index.js";
import { EVENT_SEVERITY, majorEvents } from "../scripts/events.mjs";
import { parseNasdaqListed, parseOtherListed, cleanName } from "../scripts/listings.mjs";
import { aggregateQuarter, finalize, isoDate, recentQuarters } from "../scripts/insider.mjs";
import { reportingCurrency } from "../scripts/sec-parse.mjs";
import { computeBenchmarks, scoreHistory } from "../assets/js/scoring.js";
const LANGS = await loadAllLangs();

const load = (p) => JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));
const fixture = () => parseCompanyFacts(load("./fixtures/companyfacts-mini.json"));

test("scale: linear, clamped, inverted", () => {
  assert.equal(scale(0.15, 0, 0.30), 50);
  assert.equal(scale(-1, 0, 0.30), 0);
  assert.equal(scale(5, 0, 0.30), 100);
  assert.equal(scale(0.3, 2.5, 0.3), 100);
  assert.equal(scale(null, 0, 1), null);
});

test("SEC parser: annual periods only, restatement wins, tags merged", () => {
  const { annual } = fixture();
  assert.deepEqual(annual.map((y) => y.year), [2022, 2023]);
  const [y22, y23] = annual;
  assert.equal(y22.revenue, 1000);      // quarterly 300 ignored
  assert.equal(y23.revenue, 1150);      // 10-K/A overrides
  assert.equal(y22.grossProfit, 400);
  assert.equal(y23.netIncome, -50);
  assert.equal(y23.freeCashFlow, 120);
  assert.equal(y23.epsDiluted, -0.5);
  assert.equal(y23.totalAssets, 5200);  // 1-day offset accepted
  assert.equal(y23.totalDebt, 1000);
  assert.equal(y22.equity, null);
});

test("SEC parser: TTM = FY + YTD − prior YTD, latest balance and shares", () => {
  const p = fixture();
  assert.equal(p.ttm.periodEnd, "2024-06-30");
  assert.equal(p.ttm.revenue, 1150 + 600 - 500);
  assert.equal(p.latestBalance.totalAssets, 5600);
  assert.equal(p.sharesOutstanding, 300);
});

test("Analysis: loss-maker gets flag and zero EPS growth", () => {
  const p = fixture();
  const a = analyze({ ticker: "TST", annual: p.annual, ttm: p.ttm, latestBalance: p.latestBalance });
  assert.ok(a.ok);
  assert.ok(a.flags.some((f) => f.id === "lossLastYear"));
  assert.equal(a.parts.growth1y.find((x) => x.key === "epsYoY").score, 0);
  assert.equal(a.valuationBasis, "ttm");
});

test("Analysis: empty data does not throw", () => {
  assert.equal(analyze({ annual: [] }).ok, false);
});

test("Market stats from monthly prices", () => {
  const data = Array.from({ length: 61 }, (_, i) => [`m${i}`, 100 * 1.01 ** i]);
  const s = marketStats({ data });
  assert.ok(Math.abs(s.priceReturn1y - (1.01 ** 12 - 1)) < 1e-9);
  assert.ok(s.volatility < 1e-9);
  assert.equal(s.maxDrawdown, 0);
});

test("Sectors and profiles from SIC", () => {
  assert.equal(sectorFromSic(3571), "technology");
  assert.equal(sectorFromSic(2834), "healthcare");
  assert.equal(sectorFromSic(6022), "financials");
  assert.equal(profileFor(6022, "financials"), "financial");
  assert.equal(profileFor(6798, "realEstate"), "realEstate");
  assert.equal(profileFor(7372, "technology"), "general");
});

test("Every data file matches the template and scores are within 0–100", () => {
  const dir = new URL("../data/companies/", import.meta.url);
  let files = [];
  try { files = readdirSync(dir); } catch { return; } // data is loaded from the data branch in CI
  for (const f of files) {
    const c = JSON.parse(readFileSync(new URL(f, dir), "utf8"));
    assert.ok(c.ticker && c.name, f);
    const a = analyze(c);
    if (!a.ok) continue;
    for (const d of [...DIMENSIONS, "overall"]) {
      const s = a.scores[d];
      assert.ok(s === null || (s >= 0 && s <= 100), `${f} ${d}=${s}`);
    }
  }
});

test("Every language has every key used by the engine", () => {
  const metricKeys = new Set(Object.values(PROFILES).flatMap((p) => Object.values(p).flat().map((x) => x.key)));
  for (const [code, d] of Object.entries(LANGS)) {
    for (const k of [...metricKeys, ...Object.keys(METRIC_FORMAT)]) assert.ok(d.metrics[k], `${code}: metrics.${k}`);
    for (const k of FLAG_IDS) assert.ok(d.flags[k], `${code}: flags.${k}`);
    for (const k of DIMENSIONS) assert.ok(d.dims[k]?.name && d.dims[k]?.summary, `${code}: dims.${k}`);
    for (const k of Object.keys(LANGS.en.ui)) assert.ok(d.ui[k], `${code}: ui.${k}`);
    for (const k of Object.keys(LANGS.en.raw)) assert.ok(d.raw[k], `${code}: raw.${k}`);
    for (const k of Object.keys(LANGS.en.method)) assert.ok(d.method[k], `${code}: method.${k}`);
    for (const k of Object.keys(LANGS.en.sectors)) assert.ok(d.sectors[k], `${code}: sectors.${k}`);
    for (const k of Object.keys(EVENT_SEVERITY)) assert.ok(d.events[k], `${code}: events.${k}`);
  }
});

test("Every language: every English text, same {placeholders}, ◐ kept", () => {
  const ph = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",");
  const walk = (src, d, path, code) => {
    if (typeof src === "string") {
      assert.equal(typeof d, "string", `${code}: ${path} missing`);
      if (src) assert.ok(d.trim(), `${code}: ${path} empty`);
      assert.equal(ph(d), ph(src), `${code}: ${path} placeholders`);
      if (src.includes("◐")) assert.ok(d.includes("◐"), `${code}: ${path} ◐`);
      return;
    }
    if (src && typeof src === "object") for (const k of Object.keys(src)) if (!(path === "" && k === "meta")) walk(src[k], d?.[k], path ? `${path}.${k}` : k, code);
  };
  for (const [code, d] of Object.entries(LANGS)) if (code !== "en") walk(LANGS.en, d, "", code);
});

test("8-K events: only significant items, last 12 months, flags raised", () => {
  const sub = { cik: "0000000001", filings: { recent: {
    form: ["8-K", "8-K", "8-K", "10-Q", "8-K"],
    filingDate: ["2026-09-01", "2026-08-01", "2026-07-01", "2026-06-01", "2024-01-01"],
    items: ["2.02,9.01", "4.02", "5.02,1.01", "", "1.03"],
    accessionNumber: ["0001-26-1", "0001-26-2", "0001-26-3", "0001-26-4", "0001-24-5"],
    primaryDocument: ["a.htm", "b.htm", "c.htm", "d.htm", "e.htm"],
  } } };
  const ev = majorEvents(sub, { now: new Date("2026-10-01") });
  assert.deepEqual(ev.map((e) => e.items), [["4.02"], ["1.01"]]);
  assert.equal(ev[0].url, "https://www.sec.gov/Archives/edgar/data/1/0001262/b.htm");
  const p = fixture();
  const a = analyze({ annual: p.annual, events: ev }, { now: new Date("2026-10-01") });
  assert.ok(a.flags.some((f) => f.id === "restatement" && f.level === "critical"));
});

const sh = (start, end, val, filed) => ({ start, end, val, filed, form: "10-K" });

test("Split dates come from re-reported periods", () => {
  const facts = { "us-gaap": {
    WeightedAverageNumberOfDilutedSharesOutstanding: { units: { shares: [
      sh("2019-01-01", "2019-12-31", 177e6, "2020-02-13"), sh("2019-01-01", "2019-12-31", 887e6, "2021-02-08"),
      sh("2020-01-01", "2020-12-31", 1083e6, "2021-02-08"), sh("2020-01-01", "2020-12-31", 3249e6, "2023-01-31"),
    ] } },
  } };
  assert.deepEqual(splitEvidence(facts), [{ factor: 5, date: "2021-02-08" }, { factor: 3, date: "2023-01-31" }]);
});

test("Tesla-like history: 5:1 then 3:1 with real issuance in between", () => {
  // Each year as last reported: 2018 in the 2020 10-K (pre 5:1), 2019 in the 2021 10-K (post 5:1),
  // 2020–2022 in the 2023 10-K (post 3:1 as well).
  const annual = [
    { year: 2018, sharesDiluted: 171e6, epsDiluted: -5.72, netIncome: -976e6 },
    { year: 2019, sharesDiluted: 887e6, epsDiluted: -0.98, netIncome: -862e6 },
    { year: 2020, sharesDiluted: 3249e6, epsDiluted: 0.21, netIncome: 690e6 },
    { year: 2021, sharesDiluted: 3386e6, epsDiluted: 1.63, netIncome: 5519e6 },
  ];
  const events = [{ factor: 5, date: "2020-10-26" }, { factor: 3, date: "2022-10-24" }];
  const filed = ["2020-02-13", "2021-02-08", "2023-01-31", "2023-01-31"];
  assert.deepEqual(normalizeShares(annual, events, filed), [{ year: 2019, factor: 5 }, { year: 2020, factor: 3 }]);
  assert.equal(annual[0].sharesDiluted, 171e6 * 15);
  assert.equal(annual[1].sharesDiluted, 887e6 * 3);
  assert.ok(Math.abs(annual[1].epsDiluted - -0.98 / 3) < 1e-9);
});

test("Split detected from EPS when share counts are missing", () => {
  const annual = [
    { year: 2019, netIncome: 34.3e9, epsDiluted: 49.16 },
    { year: 2020, netIncome: 40.3e9, epsDiluted: 2.93 },
    { year: 2021, netIncome: 76e9, epsDiluted: 5.61 },
  ];
  const events = [{ factor: 20, date: "2022-07-18" }];
  assert.deepEqual(normalizeShares(annual, events, ["2021-02-03", "2023-02-03", "2023-02-03"]), [{ year: 2020, factor: 20 }]);
  assert.ok(Math.abs(annual[0].epsDiluted - 49.16 / 20) < 1e-9);
});

test("Unit errors fixed; genuine dilution is not mistaken for a split", () => {
  const annual = [
    { year: 2020, sharesDiluted: 100e3, netIncome: 1e8, epsDiluted: 1 },
    { year: 2021, sharesDiluted: 150e6 },
    { year: 2022, sharesDiluted: 300e6 },
  ];
  assert.deepEqual(normalizeShares(annual, [], ["2021-01-01", "2022-01-01", "2023-01-01"]), []);
  assert.equal(annual[0].sharesDiluted, 100e6);
});

test("Listings: common stocks of Nasdaq, NYSE, NYSE American and Cboe; no ETFs, warrants or preferreds", () => {
  const nq = parseNasdaqListed("Symbol|Security Name|Market Category|Test Issue|Financial Status|Round Lot Size|ETF|NextShares\nAAPL|Apple Inc. - Common Stock|Q|N|N|100|N|N\nQQQ|Invesco QQQ Trust|G|N|N|100|Y|N\nABCDW|ABCD Corp - Warrant|S|N|N|100|N|N\nFile Creation Time: 1|||||||");
  assert.deepEqual(nq, [{ ticker: "AAPL", name: "Apple Inc.", exchange: "NASDAQ" }]);
  const other = parseOtherListed("ACT Symbol|Security Name|Exchange|CQS Symbol|ETF|Round Lot Size|Test Issue|NASDAQ Symbol\nKO|Coca-Cola Company (The) Common Stock|N|KO|N|100|N|KO\nBRK.B|Berkshire Hathaway Inc. Class B Common Stock|N|BRK.B|N|100|N|BRK=B\nSPY|SPDR S&P 500|P|SPY|Y|100|N|SPY\nABR$D|Arbor Preferred|N|ABRpD|N|100|N|ABR-D\nIMO|Imperial Oil Limited Common Stock|A|IMO|N|100|N|IMO");
  assert.deepEqual(other.map((x) => [x.ticker, x.exchange]), [["KO", "NYSE"], ["BRK.B", "NYSE"], ["IMO", "NYSE American"]]);
  assert.equal(cleanName("Berkshire Hathaway Inc. Class B Common Stock"), "Berkshire Hathaway Inc.");
  assert.equal(other.find((x) => x.ticker === "BRK.B").cls, "B");
});

test("Share classes from the listings: GOOGL is class A, GOOG class C", async () => {
  const { shareClassOf } = await import("../scripts/listings.mjs");
  assert.equal(shareClassOf("Alphabet Inc. - Class A Common Stock"), "A");
  assert.equal(shareClassOf("Alphabet Inc. - Class C Capital Stock"), "C");
  assert.equal(shareClassOf("Liberty Media Corporation - Series C Liberty Formula One Common Stock"), "C");
  assert.equal(shareClassOf("McCormick & Company, Incorporated Common Stock (Voting)"), "V");
  assert.equal(shareClassOf("McCormick & Company, Incorporated Common Stock Non-Voting"), "NV");
  assert.equal(shareClassOf("Apple Inc. - Common Stock"), null);
  const nq = parseNasdaqListed("Symbol|Security Name|Market Category|Test Issue|Financial Status|Round Lot Size|ETF|NextShares\nGOOGL|Alphabet Inc. - Class A Common Stock|Q|N|N|100|N|N\nGOOG|Alphabet Inc. - Class C Capital Stock|Q|N|N|100|N|N");
  assert.deepEqual(nq.map((x) => [x.ticker, x.name, x.cls]), [["GOOGL", "Alphabet Inc.", "A"], ["GOOG", "Alphabet Inc.", "C"]]);
  for (const [code, d] of Object.entries(LANGS)) for (const k of ["classLetter", "classVoting", "classNonVoting", "classTitle", "slogan"]) assert.ok(d.ui[k], `${code}: ui.${k}`);
});

test("Reporting currency of foreign filers", () => {
  const facts = { "ifrs-full": { Revenue: { units: { EUR: [{ form: "20-F", val: 1 }, { form: "20-F", val: 2 }], USD: [{ form: "20-F", val: 1 }] } } } };
  assert.equal(reportingCurrency(facts), "EUR");
  assert.equal(reportingCurrency({}), "USD");
});

test("Insider data sets: open-market trades of the last 12 months per issuer", async () => {
  assert.equal(isoDate("05-MAR-2026"), "2026-03-05");
  assert.deepEqual(recentQuarters(new Date("2026-10-28"), 3), ["2026q4", "2026q3", "2026q2"]);
  const acc = new Map();
  await aggregateQuarter(new URL("./fixtures/insider/", import.meta.url).pathname, acc, { since: "2025-10-28" });
  const s = finalize(acc, { from: "2025-10-28", to: "2026-10-28" }).get("0000320193");
  assert.deepEqual(s.buy, { value: 261500, shares: 1300, count: 2, insiders: 2 });
  assert.deepEqual(s.sell, { value: 105000, shares: 500, count: 1, insiders: 1 });
  assert.equal(s.plannedSellValue, 105000);
  assert.equal(s.recent.length, 3);
  const a = analyze({ annual: fixture().annual, insiders: s, market: { marketCap: 1e9 } }, { now: new Date("2026-10-01") });
  assert.ok(a.flags.some((f) => f.id === "insiderBuying"));
});

test("Sector benchmarks use established peers and blend absolute with relative scores", () => {
  const mk = (opm, mc = 1e9, rev = 1e8) => ({ sector: "technology", a: { ok: true, series: [{ revenue: rev }], metrics: { marketCap: mc, operatingMargin: opm } } });
  const list = [...Array.from({ length: 30 }, (_, i) => mk(i / 100)), mk(-5, 1e7, 1e6)];
  const b = computeBenchmarks(list);
  assert.equal(b.technology.operatingMargin.n, 30);
  assert.ok(Math.abs(b.technology.operatingMargin.p50 - 0.145) < 1e-9);
  const company = { sector: "technology", annual: [{ year: 2025, revenue: 100, operatingIncome: 29, netIncome: 20 }] };
  const abs = analyze(company), rel = analyze(company, { benchmarks: b });
  const pa = abs.parts.profitability.find((p) => p.key === "operatingMargin"), pr = rel.parts.profitability.find((p) => p.key === "operatingMargin");
  assert.equal(pa.score, 97);
  assert.equal(pr.relScore, 100);
  assert.equal(pr.score, Math.round(0.5 * 97 + 0.5 * 100));
  assert.ok(Math.abs(pr.median - 0.145) < 1e-9);
});

test("TeraScore Trend: point-in-time history uses only data known at each fiscal year end", () => {
  const y = (year, rev, ni) => ({ year, periodEnd: `${year}-12-31`, revenue: rev, operatingIncome: ni * 1.2, netIncome: ni, operatingCashFlow: ni * 1.1, capex: ni * 0.2,
    totalAssets: rev * 2, totalLiabilities: rev, currentAssets: rev, currentLiabilities: rev / 2, cash: rev / 4, totalDebt: rev / 5, equity: rev, retainedEarnings: rev / 2, sharesDiluted: 100, epsDiluted: ni / 100 });
  const company = { sector: "technology", annual: [y(2020, 100, 10), y(2021, 110, 12), y(2022, 120, 13), y(2023, 90, -5), y(2024, 95, -8)],
    events: [{ date: "2024-06-01", items: ["4.02"], severity: 5 }] };
  const h = scoreHistory(company);
  assert.deepEqual(h.map((x) => x.year), [2022, 2023, 2024]);
  assert.ok(h[0].overall > h[2].overall, "losses lower the score");
  // The 2024 restatement is unknown at the end of 2022 and 2023, known at the end of 2024.
  const a23 = analyze({ ...company, annual: company.annual.slice(0, 4) }, { now: new Date("2023-12-31") });
  assert.ok(!a23.flags.some((f) => f.id === "restatement"));
});

test("Filings missing from companyfacts are read from the XBRL instance", async () => {
  const { parseInstance, mergeInstance, missingFilings, instanceFile } = await import("../scripts/xbrl-instance.mjs");
  const facts = parseInstance(readFileSync(new URL("./fixtures/xbrl/instance.xml", import.meta.url), "utf8"));
  const rev = facts.filter((f) => f.tag === "Revenue");
  assert.equal(rev.length, 2, "duplicates and dimensional facts are skipped");
  assert.ok(facts.every((f) => f.ns === "ifrs-full"), "only standard taxonomies, no cover page text or custom tags");
  assert.equal(facts.find((f) => f.tag === "DilutedEarningsLossPerShare").unit, "TWD/shares");
  assert.deepEqual(facts.find((f) => f.tag === "Assets"), { ns: "ifrs-full", tag: "Assets", unit: "TWD", end: "2025-12-31", val: 8e12 });
  assert.ok(!facts.some((f) => f.tag === "Equity"));

  const cf = { facts: { "ifrs-full": { Revenue: { units: { TWD: [{ start: "2024-01-01", end: "2024-12-31", val: 2894307700000, accn: "A1", form: "20-F", filed: "2025-04-17" }] } } } } };
  const sub = { filings: { recent: { accessionNumber: ["A3", "A2", "A1"], form: ["6-K", "20-F", "20-F"], filingDate: ["2026-07-16", "2026-04-16", "2025-04-17"], isXBRL: [0, 1, 1], primaryDocument: ["x.htm", "tsm-20251231.htm", "y.htm"] } } };
  const missing = missingFilings(cf, sub);
  assert.deepEqual(missing.map((m) => m.accn), ["A2"]);
  mergeInstance(cf, facts, missing[0]);
  assert.equal(cf.facts["ifrs-full"].Revenue.units.TWD.length, 3);
  assert.deepEqual(missingFilings(cf, sub), [], "a filing is not fetched again once its facts are present");
  assert.equal(instanceFile(["FilingSummary.xml", "tsm-20251231_cal.xml", "tsm-20251231_htm.xml", "R2.htm"], "tsm-20251231.htm"), "tsm-20251231_htm.xml");
});

test("US GAAP → IFRS switch: newer ifrs-full facts are used even when the same tag exists in us-gaap", () => {
  const fy = (y, val, ns) => ({ start: `${y - 1}-04-01`, end: `${y}-03-31`, val, form: "20-F", filed: `${y}-06-20`, accn: `${ns}${y}` });
  const inst = (y, val, ns) => ({ end: `${y}-03-31`, val, form: "20-F", filed: `${y}-06-20`, accn: `${ns}${y}` });
  const cf = { facts: {
    "us-gaap": { Revenues: { units: { JPY: [fy(2019, 30e12, "g"), fy(2020, 31e12, "g")] } }, NetIncomeLoss: { units: { JPY: [fy(2019, 1.9e12, "g"), fy(2020, 2.0e12, "g")] } }, Assets: { units: { JPY: [inst(2019, 52e12, "g"), inst(2020, 54e12, "g")] } } },
    "ifrs-full": { Revenue: { units: { JPY: [fy(2024, 45e12, "i"), fy(2025, 48e12, "i")] } }, ProfitLoss: { units: { JPY: [fy(2024, 5e12, "i"), fy(2025, 4.8e12, "i")] } }, Assets: { units: { JPY: [inst(2024, 90e12, "i"), inst(2025, 93e12, "i")] } } },
  } };
  const p = parseCompanyFacts(cf);
  assert.equal(p.currency, "JPY");
  const last = p.annual.at(-1);
  assert.equal(last.periodEnd, "2025-03-31");
  assert.equal(last.totalAssets, 93e12);
  assert.equal(p.annual.find((y) => y.periodEnd === "2020-03-31").totalAssets, 54e12);
});

test("Reporting currency follows the latest annual report (RUB → USD)", async () => {
  const { reportingCurrency } = await import("../scripts/sec-parse.mjs");
  const fy = (y, val) => ({ start: `${y}-01-01`, end: `${y}-12-31`, val, form: "20-F", filed: `${y + 1}-04-01` });
  const facts = { "us-gaap": { Revenues: { units: { RUB: [2018, 2019, 2020, 2021, 2022, 2023].map((y) => fy(y, 5e11)), USD: [fy(2024, 1.2e8), fy(2025, 5e8)] } } } };
  assert.equal(reportingCurrency(facts), "USD");
  // Companies that report a convenience translation in a second currency for the same years keep the main one.
  const tsm = { "ifrs-full": { Revenue: { units: { TWD: [2023, 2024].map((y) => fy(y, 2.8e12)).concat([fy(2022, 2.2e12)]), USD: [fy(2023, 9e10), fy(2024, 9e10)] } } } };
  assert.equal(reportingCurrency(tsm), "TWD");
});

test("Quarterly figures: three-month periods, YTD differences and Q4 = FY − 9M", () => {
  const d = (start, end, val, form, filed) => ({ start, end, val, form, filed });
  const cf = { facts: { "us-gaap": {
    Revenues: { units: { USD: [
      d("2024-01-01", "2024-12-31", 400, "10-K", "2025-02-10"),
      d("2025-01-01", "2025-03-31", 100, "10-Q", "2025-05-01"),
      d("2025-04-01", "2025-06-30", 110, "10-Q", "2025-08-01"), d("2025-01-01", "2025-06-30", 210, "10-Q", "2025-08-01"),
      d("2025-01-01", "2025-09-30", 330, "10-Q", "2025-11-01"),
      d("2025-01-01", "2025-12-31", 450, "10-K", "2026-02-10"),
    ] } },
    NetIncomeLoss: { units: { USD: [d("2025-01-01", "2025-03-31", 10, "10-Q", "2025-05-01"), d("2025-01-01", "2025-12-31", 50, "10-K", "2026-02-10"), d("2024-01-01", "2024-12-31", 40, "10-K", "2025-02-10")] } },
    EarningsPerShareDiluted: { units: { "USD/shares": [d("2025-01-01", "2025-03-31", 0.5, "10-Q", "2025-05-01"), d("2025-01-01", "2025-12-31", 2.5, "10-K", "2026-02-10")] } },
    Assets: { units: { USD: [{ end: "2025-06-30", val: 900, form: "10-Q", filed: "2025-08-01" }] } },
  } } };
  const q = parseCompanyFacts(cf).quarterly;
  assert.deepEqual(q.map((x) => x.periodEnd), ["2025-03-31", "2025-06-30", "2025-09-30", "2025-12-31"]);
  assert.deepEqual(q.map((x) => x.revenue), [100, 110, 120, 120]);
  assert.equal(q[0].netIncome, 10);
  assert.equal(q[0].epsDiluted, 0.5);
  assert.equal(q[3].epsDiluted, null, "per-share figures are never derived by subtraction");
  assert.equal(q[1].totalAssets, 900);
});

test("Dividend safety: covered, growing dividend scores high; a cut and uncovered payout score low", async () => {
  const { dividendProfile, dividendLevel } = await import("../assets/js/scoring.js");
  const yr = (year, ni, fcf, paid, shares = 100) => ({ year, periodEnd: `${year}-12-31`, revenue: 1000, operatingIncome: ni * 1.3, netIncome: ni,
    operatingCashFlow: fcf + 20, capex: 20, dividendsPaid: paid, sharesDiluted: shares, totalDebt: 100, cash: 50, depreciationAndAmortization: 30, equity: 500, totalAssets: 1000 });
  const good = { annual: [2019, 2020, 2021, 2022, 2023, 2024, 2025].map((y, i) => yr(y, 200 + i * 10, 220 + i * 10, 60 + i * 5)) };
  const g = dividendProfile(good);
  assert.ok(g.payer && g.score >= 75 && g.level === "safe", JSON.stringify(g.parts));
  assert.equal(g.growthYears, 6);
  assert.equal(g.cuts, 0);
  const bad = { annual: [yr(2021, 100, 90, 100), yr(2022, 60, 40, 100), yr(2023, -20, 10, 100), yr(2024, -30, -5, 50), yr(2025, 10, 20, 50)] };
  const b = dividendProfile(bad);
  assert.equal(b.cuts, 1);
  assert.ok(b.score < 35, `score ${b.score}`);
  assert.equal(dividendProfile({ annual: [yr(2025, 100, 100, 0)] }).payer, false);
  assert.equal(dividendLevel(60), "moderate");
});

test("Similar companies: same sector, closest size, own industry first, one share class", async () => {
  const { findPeers } = await import("../assets/js/scoring.js");
  const r = (t, mc, i, s = "technology", n = t) => ({ t, n, s, i, mc, sc: { overall: 60 } });
  const rows = [r("A", 1e12, "x"), r("B", 9e11, "x"), r("C", 1.1e12, "y"), r("D", 1e9, "x"), r("E", 1e12, "x", "energy"), r("G1", 8e11, "x", "technology", "G"), r("G2", 8e11, "x", "technology", "G")];
  const p = findPeers(rows, rows[0], 3).map((x) => x.t);
  assert.deepEqual(p, ["B", "G1", "C"]);
});

test("Portfolio: weights, weighted TeraScore, income and concentration warnings", async () => {
  const { portfolioSummary } = await import("../assets/js/portfolio.js");
  const row = (t, px, overall, s, extra = {}) => ({ t, px, s, sc: { overall, risk: 30 }, ...extra });
  const p = portfolioSummary([
    { t: "A", shares: 10, row: row("A", 100, 80, "technology", { dy: 0.02, pe: 20 }) },
    { t: "B", shares: 10, row: row("B", 50, 40, "technology", { pe: 10 }) },
    { t: "C", shares: 5, row: row("C", 50, 30, "energy", { cf: ["goingConcern"], d: "high" }) },
  ]);
  assert.equal(p.total, 1750);
  assert.equal(Math.round(p.positions[0].weight * 100), 57);
  assert.equal(p.score, Math.round((80 * 1000 + 40 * 500 + 30 * 250) / 1750));
  assert.equal(p.income, 20);
  const ids = p.warnings.map((w) => w.id);
  for (const id of ["position", "sector", "few", "critical", "distress", "weak"]) assert.ok(ids.includes(id), id);
  assert.ok(Math.abs(p.pe - (1500 / 1750) / ((1000 / 1750) / 20 + (500 / 1750) / 10)) < 1e-9);
});

test("Portfolio with ETFs: no TeraScore for funds, no concentration warning for them, yield override", async () => {
  const { portfolioSummary } = await import("../assets/js/portfolio.js");
  const p = portfolioSummary([
    { t: "AAPL", shares: 10, row: { t: "AAPL", px: 100, s: "technology", sc: { overall: 80, risk: 30 }, dy: 0.01 } },
    { t: "VOO", shares: 10, row: { t: "VOO", px: 400, etf: true } , dy: 0.013 },
    { t: "QQQ", shares: 2, row: { t: "QQQ", px: 500, etf: true, dy: 0.005 } },
  ]);
  assert.equal(p.total, 6000);
  assert.equal(p.score, 80, "only the company is scored");
  assert.ok(Math.abs(p.scoreCovered - 1000 / 6000) < 1e-9);
  assert.ok(Math.abs(p.etfWeight - 5000 / 6000) < 1e-9);
  assert.ok(Math.abs(p.income - (10 + 4000 * 0.013 + 1000 * 0.005)) < 1e-9);
  const ids = p.warnings.map((w) => w.id);
  assert.ok(!ids.includes("position") && !ids.includes("few") && !ids.includes("unscored") && !ids.includes("sector"), ids.join());
  assert.deepEqual(p.sectors.map((x) => x.s), ["etf", "technology"]);
  assert.deepEqual(p.missingYield, []);
});

test("ETF listings: funds of both directories, NYSE Arca included", async () => {
  const { parseEtfs } = await import("../scripts/listings.mjs");
  const nasdaq = "Symbol|Security Name|Market Category|Test Issue|Financial Status|Round Lot Size|ETF|NextShares\nQQQ|Invesco QQQ Trust, Series 1|G|N|N|100|Y|N\nAAPL|Apple Inc. - Common Stock|Q|N|N|100|N|N\nFile Creation Time: 1108202600:00|||||||";
  const other = "ACT Symbol|Security Name|Exchange|CQS Symbol|ETF|Round Lot Size|Test Issue|NASDAQ Symbol\nSPY|SPDR S&P 500 ETF Trust|P|SPY|Y|100|N|SPY\nZZT|Test ETF|P|ZZT|Y|100|Y|ZZT\nKO|Coca-Cola Company (The) Common Stock|N|KO|N|100|N|KO\nFile Creation Time: 1108202600:00|||||||";
  assert.deepEqual(parseEtfs(nasdaq, other).map((e) => `${e.ticker}:${e.exchange}`), ["QQQ:NASDAQ", "SPY:NYSE Arca"]);
});

test("Search pages: title and description per company, sitemap and robots.txt", async () => {
  const { buildSeo, companyMeta, tickerPath } = await import("../scripts/seo.mjs");
  const { mkdtempSync, readFileSync: rf, writeFileSync: wf, existsSync } = await import("node:fs");
  const { tmpdir } = await import("node:os");
  const { join } = await import("node:path");
  const root = mkdtempSync(join(tmpdir(), "tsx-seo-"));
  wf(join(root, "index.html"), '<!doctype html><html><head>\n  <meta charset="utf-8">\n  <title>TeraStockX</title>\n  <meta name="description" content="x">\n</head><body><main id="app" class="wrap"></main></body></html>');
  const index = { generated: "2026-11-09T07:00:00Z", scoreKeys: ["overall", "risk"], companies: [
    { t: "AAPL", n: "Apple Inc.", s: "technology", sc: [75, 18], pe: 37.9, dy: 0.003, mc: 5.02e12 },
    { t: "NEWCO", n: "New Co", s: "technology", mc: 1.27e12 },
    { t: "BRK.B", n: "Berkshire <Hathaway>", s: "financials", sc: [70, 20] },
  ] };
  const r = buildSeo({ root, siteUrl: "http://terastockx.com", index });
  assert.equal(r.pages, 3, "every company gets a page, analysed or not");
  const html = rf(join(root, "c", "AAPL", "index.html"), "utf8");
  assert.match(html, /<title>Apple Inc\. \(AAPL\) TeraScore 75\/100/);
  assert.match(html, /<link rel="canonical" href="https:\/\/terastockx\.com\/c\/AAPL\/">/, "always https");
  assert.match(html, /<base href="\.\.\/\.\.\/">/);
  assert.equal((html.match(/<title>/g) || []).length, 1);
  assert.ok(rf(join(root, "c", "BRK.B", "index.html"), "utf8").includes("Berkshire &lt;Hathaway&gt;"), "names are escaped");
  assert.match(rf(join(root, "c", "NEWCO", "index.html"), "utf8"), /New Co \(NEWCO\) stock: share price, market cap \$1\.27T/, "a company without an analysis gets a market-data description");
  assert.match(rf(join(root, "sitemap.xml"), "utf8"), /<loc>https:\/\/terastockx\.com\/c\/BRK\.B\/<\/loc>/);
  assert.match(rf(join(root, "robots.txt"), "utf8"), /Sitemap: https:\/\/terastockx\.com\/sitemap\.xml/);
  assert.equal(rf(join(root, "sitemap.txt"), "utf8").trim().split("\n").length, 4, "home page and three company pages");
  assert.equal(tickerPath("../X"), null);
  assert.match(companyMeta(index.companies[0], index.scoreKeys, "2026-11-09").description, /TeraScore 75\/100 \(Strong\), risk 18\/100, P\/E 37\.9/);
});

test("Quick searches: every screen filters and ranks as described", async () => {
  const { SCREENS, runScreen } = await import("../assets/js/screens.js");
  const r = (t, sc, extra = {}) => ({ t, n: t, mc: 1e10, d: "low", sc: { overall: 60, risk: 40, consistency: 60, balanceSheet: 60, growth1y: 50, growthLong: 50, valuation: 50, profitability: 60, ...sc }, ...extra });
  const rows = [
    r("SAFE", { overall: 80, risk: 12, consistency: 85, balanceSheet: 80 }),
    r("RISKY", { overall: 30, risk: 85 }, { d: "high" }),
    r("TINY", { overall: 90, risk: 10 }, { mc: 1e8, ch: 30 }),
    r("UP", { overall: 70, risk: 30 }, { ch: 15 }),
    r("DIV", {}, { ds: 82, dy: 0.04 }),
    r("CRIT", { overall: 85, risk: 15 }, { cf: ["goingConcern"] }),
  ];
  const ids = (id) => runScreen(rows, id).map((x) => x.t);
  assert.deepEqual(ids("top").slice(0, 3), ["TINY", "CRIT", "SAFE"]);
  assert.deepEqual(ids("safeLongTerm"), ["SAFE"]);
  assert.deepEqual(ids("lowRisk"), ["TINY", "SAFE"], "critical warnings are excluded");
  assert.deepEqual(ids("bestRiskReward"), ["SAFE", "UP"], "small caps are excluded");
  assert.deepEqual(ids("improvers"), ["UP"]);
  assert.deepEqual(ids("dividend"), ["DIV"]);
  assert.deepEqual(ids("highRisk"), ["RISKY"]);
  const dipRows = [r("DIP", { overall: 80, risk: 20 }, { dd: -0.3 }), r("CRASH", { overall: 80, risk: 20 }, { dd: -0.7 }), r("FLAT", { overall: 80, risk: 20 }, { dd: -0.05 })];
  assert.deepEqual(runScreen(dipRows, "dip").map((x) => x.t), ["DIP"], "20–50% below the high only");
  const peRows = [r("CHEAP", { overall: 75, valuation: 80 }, { pe: 8 }), r("ONEOFF", { overall: 75, valuation: 80 }, { pe: 1.5 }), r("DEAR", { overall: 75, valuation: 30 }, { pe: 10 })];
  assert.deepEqual(runScreen(peRows, "lowPe").map((x) => x.t), ["CHEAP"]);
  assert.equal(new Set(SCREENS.map((s) => s.id)).size, SCREENS.length);
});

test("Market today: baskets, movers, reports, score changes, new listings and headlines", async () => {
  const { buildPulse } = await import("../scripts/pulse.mjs");
  const now = new Date("2026-11-20T18:00:00Z");
  const rows = [
    { t: "NVDA", n: "NVIDIA", s: "technology", mc: 4e12, dc: -5, o: 82 },
    { t: "MSFT", n: "Microsoft", s: "technology", mc: 4e12, dc: -1, o: 79, lr: "2026-11-19|10-Q" },
    { t: "ANT", n: "Anthropic", s: "technology", mc: 1.2e12, dc: 12, fs: "2026-11-18" },
    { t: "KO", n: "Coca-Cola", s: "consumerStaples", mc: 3e11, dc: 0.5, o: 65, d1: 11 },
    { t: "TINY", n: "Tiny", s: "technology", mc: 1e8, dc: 40 },
  ];
  const etfs = [{ t: "SPY", n: "SPDR S&P 500", px: 690, dc: -1.8 }, { t: "QQQ", n: "QQQ", px: 600, dc: -2.4 }];
  const p = buildPulse({ rows, etfs, now });
  const ai = p.themes.find((x) => x.id === "ai");
  assert.equal(ai.n, 3);
  assert.equal(ai.change, +((-5 * 4e12 - 1 * 4e12 + 12 * 1.2e12) / (9.2e12)).toFixed(2));
  assert.equal(ai.worst.t, "NVDA");
  assert.deepEqual(p.gainers.map((r) => r.t), ["ANT", "KO"], "small caps are left out of the movers");
  assert.deepEqual(p.losers.map((r) => r.t), ["NVDA", "MSFT"]);
  assert.deepEqual(p.reports.map((r) => r.t), ["MSFT"]);
  assert.deepEqual(p.scoreMoves.map((r) => r.t), ["KO"]);
  assert.deepEqual(p.newListings.map((r) => r.t), ["ANT"]);
  const types = p.headlines.map((h) => h.type);
  for (const ty of ["index", "theme", "report", "score", "listing"]) assert.ok(types.includes(ty), ty);
  // Big moves of large companies are top stories now (NVDA −5% at $4 trillion, ANT +12%); KO +0.5% is not.
  assert.deepEqual(p.stories.map((x) => x.t).sort(), ["ANT", "NVDA"]);
  assert.ok(p.stories.every((x) => x.kind === "move" && x.when === "day"));
});

test("Top stories: news of large companies with headlines, pre-market moves, one story per company", async () => {
  const { buildStories } = await import("../scripts/pulse.mjs");
  const now = new Date("2026-11-23T14:20:00Z");
  const rows = [
    { t: "NVDA", n: "NVIDIA", mc: 3.1e12, dc: -12.06, xc: 31.53, xs: "pre" },
    { t: "AAPL", n: "Apple", mc: 4e12, dc: -1.2, xc: 1.39, xs: "pre" },
    { t: "ORCL", n: "Oracle", mc: 5e11, dc: -9, xc: 15.89, xs: "pre" },
    { t: "PRU", n: "Prudential", mc: 4e10, dc: -2 },
    { t: "JPM", n: "JPMorgan", mc: 7e11, dc: -3, xc: 0.4, xs: "pre" },
    { t: "SMAL", n: "Small Co", mc: 5e9, dc: -1 },
    { t: "MID", n: "Mid Co", mc: 3e10, dc: 1, xc: 0.2, xs: "pre" },
  ];
  const news = [
    { t: "NVDA", date: "2026-11-23", at: "2026-11-23T13:57:54.000Z", items: ["5.02"], kind: "leadership", title: "NVIDIA Board Reinstates Jensen Huang as President, CEO and Board Director", url: "https://www.sec.gov/x/nvda.htm" },
    { t: "NVDA", date: "2026-11-21", items: ["8.01"], kind: "other", title: "Something else", url: "u2" },
    { t: "PRU", date: "2026-11-23", items: ["5.02", "7.01"], kind: "board", title: "Prudential Financial elects Jay Wintrob to Board of Directors", url: "u3" },
    { t: "JPM", date: "2026-11-21", items: ["2.02"], kind: "results", title: "JPMorgan Chase Reports Third-Quarter Results", url: "u4" },
    { t: "SMAL", date: "2026-11-23", items: ["5.02"], kind: "leadership", title: "Small Co names new CEO", url: "u5" },
    { t: "MID", date: "2026-11-23", items: ["2.02"], kind: "results", title: "Mid Co results", url: "u6" },
  ];
  const st = buildStories({ rows, news, session: { session: "pre", previousTradeDate: "2026-11-20" }, now });
  assert.equal(st[0].t, "NVDA", "the CEO news of the largest company with the biggest move comes first");
  assert.equal(st[0].kind, "leadership");
  assert.equal(st[0].move, 31.53);
  assert.equal(st[0].when, "pre", "before the open the pre-market change counts, not the previous day's −12%");
  assert.match(st[0].title, /Reinstates Jensen Huang/);
  const byT = Object.fromEntries(st.map((x) => [x.t, x]));
  assert.equal(byT.ORCL?.kind, "move", "a +16% pre-market move of a $500 billion company is a story without news");
  assert.equal(byT.JPM?.kind, "results", "results of a company above $100 billion are news");
  for (const t of ["AAPL", "PRU", "SMAL", "MID"]) assert.ok(!byT[t], `${t} is not a top story`);
  assert.equal(st.filter((x) => x.t === "NVDA").length, 1, "one story per company");
  // During the session the regular change counts; before the open a previous-day move alone is no story.
  const open = buildStories({ rows: [{ t: "ORCL", n: "Oracle", mc: 5e11, dc: -9 }], news: [], session: { session: "pre" }, now });
  assert.equal(open.length, 0);
  assert.equal(buildStories({ rows: [{ t: "ORCL", n: "Oracle", mc: 5e11, dc: -9 }], news: [], session: { session: "open" }, now })[0].when, "day");
  // After the close: a big move of the day stays the story even if the after-hours change is small;
  // a big after-hours move (results after the close) is shown as such; at night it is the last session's.
  const post = buildStories({ rows: [{ t: "ORCL", n: "Oracle", mc: 5e11, dc: -9, xc: 0.3, xs: "post" }, { t: "NVDA", n: "NVIDIA", mc: 4e12, dc: 0.5, xc: -6, xs: "post" }], news: [], session: { session: "post" }, now });
  assert.deepEqual(post.map((x) => [x.t, x.move, x.when]), [["NVDA", -6, "post"], ["ORCL", -9, "day"]]);
  assert.equal(buildStories({ rows: [{ t: "ORCL", n: "Oracle", mc: 5e11, dc: -9 }], news: [], session: { session: "closed" }, now })[0].when, "last");
});

test("Top stories: next to news the change since the news, not a later session's move", async () => {
  const { buildStories, sinceNews, closeDayBefore, closeOn, nyTime } = await import("../scripts/pulse.mjs");
  // New York time, and the last regular close before a moment (16:00 New York time, Monday to Friday).
  assert.equal(nyTime("2026-11-23T13:57:54.000Z"), "2026-11-23T08:57");
  assert.equal(closeDayBefore("2026-11-23T13:57:54.000Z"), "2026-11-20", "before Monday's open: Friday's close");
  assert.equal(closeDayBefore("2026-11-23T21:12:08.000Z"), "2026-11-23", "after Monday's close: Monday's close");
  assert.equal(closeDayBefore("2026-07-01T20:00:00Z"), "2026-07-01", "16:00 in summer time");
  assert.equal(closeDayBefore("2026-07-01T19:59:00Z"), "2026-06-30");
  // That close from the daily history; a holiday takes the session before it; not published yet: none.
  const closes = [["2026-11-19", 145.98], ["2026-11-20", 125.53], ["2026-11-23", 165.05]];
  assert.deepEqual(closeOn(closes, "2026-11-20"), ["2026-11-20", 125.53]);
  assert.deepEqual(closeOn(closes, "2026-11-22"), ["2026-11-20", 125.53]);
  assert.equal(closeOn(closes, "2026-11-24"), null);
  // NVIDIA: the CEO news came before Monday's open (+31.5% on Monday); on Tuesday it is down 12%, which is
  // +15.6% since the news. HPE's results came after Monday's close: Tuesday's change is the change since.
  const now = new Date("2026-11-24T15:12:00Z");
  const rows = [{ t: "NVDA", n: "NVIDIA", mc: 3.5e12, px: 145.15, dc: -12.06 }, { t: "HPE", n: "HPE", mc: 3e10, px: 20, dc: -10.07 }];
  const news = [
    { t: "NVDA", date: "2026-11-23", at: "2026-11-23T13:57:54.000Z", items: ["5.02"], kind: "leadership", title: "NVIDIA Board Reinstates Jensen Huang", url: "n1", pb: 125.53 },
    { t: "HPE", date: "2026-11-23", at: "2026-11-23T21:12:08.000Z", items: ["2.02"], kind: "results", title: "HPE reports fiscal 2026 fourth quarter results", url: "n2" },
  ];
  const by = Object.fromEntries(buildStories({ rows, news, session: { session: "open" }, now }).map((x) => [x.t, x]));
  assert.equal(by.NVDA.move, -12.06, "the day's move still counts for the order");
  assert.equal(by.NVDA.since, 15.63);
  assert.equal(by.HPE.since, -10.07);
  // After the close: news of the evening shows the after-hours change; at night (no trade since) nothing;
  // older news: from its close to the after-hours price; without its close: nothing.
  assert.equal(sinceNews({ px: 20, dc: -1, xc: -6, xs: "post" }, { at: "2026-11-24T21:30:00Z" }, { now: new Date("2026-11-24T22:00:00Z"), session: "post" }), -6);
  assert.equal(sinceNews({ px: 20, dc: -1 }, { at: "2026-11-24T21:30:00Z", pb: 22 }, { now: new Date("2026-11-25T03:00:00Z"), session: "closed" }), null);
  assert.equal(sinceNews({ px: 20, dc: -1, xc: -6, xs: "post" }, { at: "2026-11-24T13:00:00Z", pb: 21 }, { now: new Date("2026-11-24T22:00:00Z"), session: "post" }), -10.48);
  assert.equal(sinceNews({ px: 20, dc: -1 }, { at: "2026-11-20T13:00:00Z" }, { now, session: "open" }), null);
  // Before the open: overnight news shows the pre-market change.
  assert.equal(sinceNews({ px: 50, dc: 2, xc: 4.5, xs: "pre" }, { at: "2026-11-24T12:00:00Z" }, { now: new Date("2026-11-24T13:30:00Z"), session: "pre" }), 4.5);
});

test("News headlines: press-release titles, the reported item, kinds of news", async () => {
  const h = await import("../scripts/news-headline.mjs");
  const fx = (f) => readFileSync(new URL(`./fixtures/8k/${f}`, import.meta.url), "utf8");
  const ph = (f) => h.pressHeadline(fx(f));
  assert.equal(ph("nvda-reinstated-ex99.htm").title, "NVIDIA Board Reinstates Jensen Huang as President, CEO and Board Director");
  assert.match(ph("nvda-reinstated-ex99.htm").lede, /^NVIDIA today announced that effective immediately, Jensen Huang has been reinstated as President and Chief Executive Officer/);
  assert.equal(ph("nvda-transition-ex99.htm").title, "NVIDIA Announces CEO Transition", "bullet points under the headline are left out");
  assert.equal(ph("nvda-results-ex99.htm").title, "NVIDIA Announces Financial Results for Third Quarter Fiscal 2027");
  assert.equal(ph("pru-board-ex99.htm").title, "Prudential Financial elects Jay Wintrob to Board of Directors", "the filing envelope and 'Exhibit 99.1' are not the title");
  assert.ok(!/NYSE/.test(ph("pru-board-ex99.htm").lede), "ticker brackets are left out");
  assert.equal(ph("ghm-ex99.htm").title, "Graham Corporation Acquires Hauschild Group, Expanding its Global Materials Processing Platform", "all-caps titles in title case");
  assert.equal(ph("ncra-ex99.htm").title, "Nocera Signs Binding Letter of Intent to Invest $22 Million for an Approximately 44% Stake in BitRock, a Self-Powered AI Data Center Developer in Alberta", "italic sub-headline left out");
  assert.equal(ph("slxn-ex99.htm").title, "Silexion Therapeutics Opens First Two Clinical Sites in Germany for Phase 2/3 Trial of SIL204 in Locally Advanced Pancreatic Cancer");
  assert.equal(h.itemSentence(fx("nvda-reinstated-8k.htm"), ["5.02", "9.01"]), "The Board of Directors of NVIDIA Corporation reinstated Jen-Hsun Huang as NVIDIA’s President, Chief Executive Officer and member of the Board of Directors, effective immediately.");
  assert.match(h.itemSentence(fx("lifx-8k.htm"), ["5.02"]), /^Life360, Inc\. and Chris Hulls, co-founder and Executive Chairman .* will retire as Executive Chairman, effective December 31, 2026\.$/);
  assert.match(h.itemSentence(fx("tpg-8k.htm"), ["7.01", "9.01"]), /^TPG Inc\. posted on its website updated supplemental financial information/);
  assert.equal(h.exhibitPath(fx("nvda-reinstated-index.htm")), "/Archives/edgar/data/1045810/000104581026000090/nov23pressrelease.htm");
  assert.equal(h.tidyTitle("November 23, 2026 KT-621 Phase 2b Atopic Dermatitis Trial Results Exhibit 99.1"), "KT-621 Phase 2b Atopic Dermatitis Trial Results", "date and exhibit label left out");
  assert.equal(h.firstSentence("Harvey C. Jones was named Chair of the Board. He has served since 1993."), "Harvey C. Jones was named Chair of the Board.");
  assert.equal(h.firstSentence("Acme Inc. today reported results for the U.S. market. Revenue rose."), "Acme Inc. today reported results for the U.S. market.");
  assert.equal(h.classifyNews(["5.02", "9.01"], "NVIDIA Board Reinstates Jensen Huang as President, CEO and Board Director"), "leadership");
  assert.equal(h.classifyNews(["5.02", "7.01"], "Prudential Financial elects Jay Wintrob to Board of Directors"), "board");
  assert.equal(h.classifyNews(["5.02"], "The Committee approved the annual bonus plan of the CEO"), "board", "pay decisions are no leadership change");
  assert.equal(h.classifyNews(["1.01", "7.01"], "Graham Corporation Acquires Hauschild Group"), "deal");
  assert.equal(h.classifyNews(["1.01"], "Entry into a credit agreement with a bank syndicate"), "other");
  assert.equal(h.classifyNews(["2.02", "9.01"], "NVIDIA Announces Financial Results"), "results");
  assert.equal(h.classifyNews(["1.03"], "Chapter 11"), "critical");
  // Whole flow with the filing's index page and press release (no network).
  const files = { "0001045810-26-000090-index.htm": "nvda-reinstated-index.htm", "nov23pressrelease.htm": "nvda-reinstated-ex99.htm" };
  const get = async (url) => { const f = Object.keys(files).find((k) => url.endsWith(k)); return f ? fx(files[f]) : null; };
  const r = await h.headlineFor({ url: "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000090/nvda-20261122.htm", items: ["5.02", "9.01"] }, get);
  assert.equal(r.title, "NVIDIA Board Reinstates Jensen Huang as President, CEO and Board Director");
  assert.equal(r.kind, "leadership");
  assert.match(r.lede, /^NVIDIA today announced that effective immediately, Jensen Huang has been reinstated/);
  // Leadership change: the chief executive, CFO, president or chair is the one who comes or goes.
  for (const [text, lead] of [
    ["NVIDIA Announces CEO Transition", true],
    ["Jensen Huang has resigned as President, Chief Executive Officer, and a member of the Board, effective immediately.", true],
    ["Mr. Hulls will retire as Executive Chairman, effective December 31, 2026.", true],
    ["Acme Names Jane Doe Chief Executive Officer", true],
    ["Acme Chief Financial Officer to Step Down", true],
    ["The Board appointed Mark Goines, the Company’s Lead Independent Director, as Chair of the Board.", true],
    ["The Board increased the number of directors from 13 to 14 and elected Jane Roe, President and Chief Executive Officer of Roe Corp., as a director.", false],
    ["The Compensation Committee approved the annual bonus plan for the CEO and other executive officers.", false],
  ]) assert.equal(h.isLeadershipChange(text), lead, text);
  assert.equal(h.tidySentence("(d) On November 17, 2026, the Board of Directors of The PNC Financial Services Group, Inc. (the “Corporation”) increased the number of directors."), "The Board of Directors of The PNC Financial Services Group, Inc. increased the number of directors.");
  // Without a press release: the item's first sentence from the 8-K itself.
  const r2 = await h.headlineFor({ url: "https://www.sec.gov/Archives/edgar/data/1581760/000158176026000189/lifx-20261122.htm", items: ["5.02"] }, async (url) => (url.endsWith("lifx-20261122.htm") ? fx("lifx-8k.htm") : null));
  assert.equal(r2.kind, "leadership");
  assert.match(r2.title, /retire as Executive Chairman/);
});

test("Recent 8-K filings of a company for the news, newest first", async () => {
  const { recentFilings, EVENT_SEVERITY } = await import("../scripts/events.mjs");
  const sub = { cik: "0001045810", filings: { recent: {
    form: ["8-K", "4", "8-K", "8-K", "8-K"],
    filingDate: ["2026-11-23", "2026-11-20", "2026-11-17", "2026-11-12", "2026-08-17"],
    acceptanceDateTime: ["2026-11-23T08:57:54.000Z", "", "2026-11-17T16:20:51.000Z", "2026-11-12T08:52:41.000Z", ""],
    accessionNumber: ["0001045810-26-000090", "x", "0001045810-26-000088", "0001045810-26-000082", "0001045810-26-000069"],
    primaryDocument: ["nvda-20261122.htm", "f4.xml", "nvda-20261117.htm", "nvda-20261111.htm", "nvda-20260817.htm"],
    items: ["5.02,9.01", "", "2.02,9.01", "5.02,9.01", "1.01"],
  } } };
  const list = recentFilings(sub, { now: new Date("2026-11-23T15:00:00Z"), days: 14 });
  assert.deepEqual(list.map((f) => f.date), ["2026-11-23", "2026-11-17", "2026-11-12"]);
  assert.deepEqual(list[0].items, ["5.02"], "exhibits (9.01) are not news");
  assert.equal(list[0].url, "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000090/nvda-20261122.htm");
  assert.equal(EVENT_SEVERITY["1.05"], 4, "cybersecurity incidents are major events");
});

test("SEC parser: less common capex tags and convertible-only debt are read", () => {
  const fy = (val, end, extra = {}) => ({ val, end, start: `${Number(end.slice(0, 4)) - 1}-${end.slice(5)}`.replace(/-(\d\d)-(\d\d)$/, (m, mo, d) => `-${mo}-${String(Number(d) + 1).padStart(2, "0")}`), form: "10-K", fy: Number(end.slice(0, 4)), fp: "FY", filed: `${end.slice(0, 4)}-02-15`, ...extra });
  const inst = (val, end) => ({ val, end, form: "10-K", fy: Number(end.slice(0, 4)), fp: "FY", filed: `${end.slice(0, 4)}-02-15` });
  const usd = (arr) => ({ units: { USD: arr } });
  const cf = { facts: { "us-gaap": {
    Revenues: usd([fy(1000, "2023-12-30"), fy(1200, "2024-12-30")]),
    NetIncomeLoss: usd([fy(100, "2023-12-30"), fy(150, "2024-12-30")]),
    NetCashProvidedByUsedInOperatingActivities: usd([fy(200, "2023-12-30"), fy(260, "2024-12-30")]),
    PaymentsToAcquireOtherPropertyPlantAndEquipment: usd([fy(40, "2023-12-30"), fy(55, "2024-12-30")]),
    Assets: usd([inst(3000, "2023-12-30"), inst(3400, "2024-12-30")]),
    ConvertibleDebtNoncurrent: usd([inst(500, "2023-12-30"), inst(450, "2024-12-30")]),
    ConvertibleDebtCurrent: usd([inst(50, "2024-12-30")]),
  } } };
  const { annual } = parseCompanyFacts(cf);
  const y24 = annual.find((y) => y.year === 2024);
  assert.equal(y24.capex, 55);
  assert.equal(y24.freeCashFlow, 205);
  assert.equal(y24.totalDebt, 500);
  assert.equal(annual.find((y) => y.year === 2023).totalDebt, 500);
});

test("Gaps filled from other lines: EBIT estimate, debt-free companies, completeness", async () => {
  const { fillGaps } = await import("../assets/js/scoring.js");
  const y = (year, extra = {}) => ({ year, periodEnd: `${year}-12-31`, revenue: 1000, pretaxIncome: 180, interestExpense: 20, netIncome: 140, depreciationAndAmortization: 50,
    operatingCashFlow: 210, capex: 40, totalAssets: 2000, totalLiabilities: 300, currentLiabilities: 250, currentAssets: 900, cash: 400, equity: 1700,
    retainedEarnings: 800, sharesDiluted: 100, epsDiluted: 1.4, ...extra });
  const c = { sector: "technology", annual: [2020, 2021, 2022, 2023, 2024].map((yr) => y(yr)) };
  const f = fillGaps(c, "general");
  assert.equal(f.company.annual[4].operatingIncome, 200, "pretax income + interest expense");
  assert.equal(f.company.annual[4].totalDebt, undefined, "interest expense means borrowing: no debt-free assumption");
  assert.deepEqual(f.estimated, ["operatingIncome"]);
  assert.equal(c.annual[4].operatingIncome, undefined, "the reported data is not changed");
  const free = { ...c, annual: c.annual.map((x) => ({ ...x, interestExpense: null })) };
  assert.deepEqual(fillGaps(free, "general").estimated.sort(), ["operatingIncome", "totalDebt"]);
  assert.equal(fillGaps(free, "general").company.annual[4].totalDebt, 0);
  const leases = { ...free, annual: free.annual.map((x) => ({ ...x, totalLiabilities: 900 })) };
  assert.ok(!fillGaps(leases, "general").estimated.includes("totalDebt"), "large non-current liabilities: debt unknown");
  assert.deepEqual(fillGaps(c, "financial").estimated, [], "no EBIT estimate for banks and insurers");
  const a = analyze(free);
  assert.ok(a.ok && Number.isFinite(a.scores.balanceSheet));
  assert.ok(a.completeness > 0 && a.completeness <= 100);
  assert.ok(Array.isArray(a.missing) && a.estimated.includes("totalDebt"));
});

test("Screenshot import: tickers, names and share counts from recognised text", async () => {
  const { buildLookup, parseHoldings, parseNumber, sharesIn, groupRows } = await import("../assets/js/ocr-import.js");
  const lookup = buildLookup([
    { t: "AAPL", n: "Apple Inc.", mc: 3e12 }, { t: "NVDA", n: "NVIDIA CORP", mc: 4e12 }, { t: "MSFT", n: "Microsoft Corporation", mc: 3e12 },
    { t: "KO", n: "Coca-Cola Co", mc: 3e11 }, { t: "ALL", n: "Allstate Corp", mc: 5e10 }, { t: "VOO", n: "Vanguard S&P 500 ETF", mc: 0 },
    { t: "BRK.B", n: "Berkshire Hathaway Inc. Class B", mc: 1e12 }, { t: "T", n: "AT&T Inc.", mc: 2e11 },
  ]);
  assert.equal(parseNumber("1,234.5"), 1234.5);
  assert.equal(parseNumber("1 234,5"), 1234.5);
  assert.equal(parseNumber("12,5"), 12.5);
  assert.equal(parseNumber("1.234.567"), 1234567);
  assert.deepEqual(sharesIn("10 shares $1,895.00"), [10, 2]);
  assert.deepEqual(sharesIn("Qty: 7"), [7, 2]);
  assert.deepEqual(sharesIn("100  189.50  18,950.00"), [100, 1]);
  assert.deepEqual(sharesIn("+2.35% $1,203.11"), [null, 0]);
  const rows = [
    "Portfolio ALL TOTAL $25,310.12",
    "AAPL Apple Inc. 10 shares $1,895.00",
    "NVIDIA",
    "3.5 shares · $701.23 +2.1%",
    "Microsoft Corporation 15 db 1 234 567 Ft",
    "KO  100  62.10  6,210.00",
    "VOO Vanguard S&P 500 ETF Qty 4",
    "BRK B  2  478.90",
  ];
  const got = parseHoldings(rows, lookup);
  assert.deepEqual(got.map((h) => [h.t, h.shares]), [["AAPL", 10], ["NVDA", 3.5], ["MSFT", 15], ["KO", 100], ["VOO", 4], ["BRK.B", 2]]);
  assert.ok(!got.some((h) => h.t === "ALL" || h.t === "T"), "labels such as ALL and single letters are not taken for tickers");
  const w = (text, x, y) => ({ text, confidence: 90, bbox: { x0: x, y0: y, x1: x + 40, y1: y + 20 } });
  assert.deepEqual(groupRows([w("10", 300, 102), w("AAPL", 10, 100), w("MSFT", 10, 160), w("shares", 345, 99)]), ["AAPL  10 shares", "MSFT"]);
});

test("Screenshot import: forints, Hungarian units, quantity columns, value ÷ price, several screenshots", async () => {
  const { buildLookup, parseHoldings, mergeHoldings, moneyIn, sharesFromValue, groupRows } = await import("../assets/js/ocr-import.js");
  const lookup = buildLookup([
    { t: "AAPL", n: "Apple Inc.", mc: 3e12, px: 200 }, { t: "NVDA", n: "NVIDIA CORP", mc: 4e12, px: 150 },
    { t: "MSFT", n: "Microsoft Corporation", mc: 3e12, px: 400 }, { t: "FT", n: "Franklin Universal Trust", mc: 2e8, px: 7 },
    { t: "DB", n: "Deutsche Bank AG", mc: 6e10, px: 30 }, { t: "KO", n: "Coca-Cola Co", mc: 3e11, px: 70 },
  ], { HUF: 0.0028, EUR: 1.1 });
  // A Hungarian app: amounts in forints ("Ft", sometimes read as "FT"), counts in "db" or "részvény".
  const hu = parseHoldings([
    "Összesen  5 432 100 FT",
    "Apple Inc.  714 286 Ft",
    "10 részvény  +2,1%",
    "NVIDIA  12 db  535 714 FT",
    "Microsoft  1 428 571 Ft",
  ], lookup);
  assert.deepEqual(hu.map((h) => [h.t, h.shares, h.src]), [["AAPL", 10, "count"], ["NVDA", 12, "count"], ["MSFT", 10, "value"]]);
  assert.ok(hu[2].sure, "1 428 571 Ft × 0.0028 / $400 = 10.0 shares: a whole number, ticked");
  assert.ok(!hu.some((h) => h.t === "FT" || h.t === "DB"), "the forint sign and 'db' are not companies");
  assert.deepEqual(moneyIn("+$412.20 (+0.86%)  $2,465.40  52 345 Ft"), [{ v: 2465.4, cur: "USD" }, { v: 52345, cur: "HUF" }]);
  assert.equal(sharesFromValue(["$2,465.40  +$12.10"], 205.45).shares, 12);
  assert.deepEqual(sharesFromValue(["$701.23"], 199.5), { shares: 3.5149, whole: false }, "fractional: kept with 4 decimals, not ticked");
  assert.equal(sharesFromValue(["$205.45"], 205.45), null, "an amount equal to the price is the price");
  // A table with a quantity column: the count is the number under the "Darab" header.
  const w = (text, x, y) => ({ text, confidence: 90, bbox: { x0: x, y0: y, x1: x + 12 * text.length, y1: y + 20 } });
  const table = groupRows([
    w("Szimbólum", 10, 10), w("Darab", 200, 10), w("Árfolyam", 320, 10), w("Érték", 460, 10),
    w("AAPL", 10, 50), w("12", 205, 50), w("205", 320, 50), w("2465", 460, 50),
    w("KO", 10, 90), w("30", 205, 90), w("70", 320, 90), w("2100", 460, 90),
  ], { detailed: true });
  assert.deepEqual(parseHoldings(table, lookup).map((h) => [h.t, h.shares]), [["AAPL", 12], ["KO", 30]]);
  // Two overlapping screenshots: one entry per company, the counted one wins over an estimate.
  const merged = mergeHoldings([
    [{ t: "AAPL", shares: 10, src: "count", sure: true }, { t: "MSFT", shares: 9.98, src: "value", sure: false }],
    [{ t: "MSFT", shares: 10, src: "count", sure: true }, { t: "KO", shares: null, src: null, sure: false }],
  ]);
  assert.deepEqual(merged.map((h) => [h.t, h.shares]), [["AAPL", 10], ["MSFT", 10], ["KO", null]]);
});

test("Search: tickers and names, typos ('trsla' → Tesla), size breaks ties", async () => {
  const { typoDistance, prepareSearch, searchCompanies, scoreAll, STRONG } = await import("../assets/js/search.js");
  assert.equal(typoDistance("trsla", "tesla"), 0.5, "neighbouring key");
  assert.equal(typoDistance("tsela", "tesla"), 0.5, "swapped letters");
  assert.equal(typoDistance("aple", "apple"), 0.5, "doubled letter typed once");
  assert.equal(typoDistance("nvdia", "nvidia"), 1, "missing letter");
  assert.equal(typoDistance("abcdef", "uvwxyz", 2), Infinity);
  const items = prepareSearch([
    { t: "TSLA", n: "Tesla, Inc.", mc: 1.2e12 }, { t: "TSLL", n: "Direxion Daily TSLA Bull 2X Shares", mc: 5e9 },
    { t: "AAPL", n: "Apple Inc.", mc: 4e12 }, { t: "APLE", n: "Apple Hospitality REIT, Inc.", mc: 3e9 },
    { t: "NVDA", n: "NVIDIA CORP", mc: 4e12 }, { t: "GOOGL", n: "Alphabet Inc. Class A", mc: 3e12 },
    { t: "KO", n: "Coca-Cola Co", mc: 3e11 }, { t: "T", n: "AT&T Inc.", mc: 2e11 }, { t: "JPM", n: "JPMorgan Chase & Co", mc: 8e11 },
  ]);
  const top = (q) => searchCompanies(items, q, 3).map((r) => r.t);
  assert.equal(top("trsla")[0], "TSLA");
  assert.equal(top("tesla")[0], "TSLA");
  assert.deepEqual(top("aple").slice(0, 2), ["APLE", "AAPL"], "the exact ticker first, then Apple");
  assert.equal(top("apple")[0], "AAPL");
  assert.equal(top("nvdia")[0], "NVDA");
  assert.equal(top("google")[0], "GOOGL");
  assert.equal(top("coca kola")[0], "KO");
  assert.equal(top("jp morgan")[0], "JPM");
  assert.equal(top("t")[0], "T");
  assert.deepEqual(top("ts"), ["TSLA", "TSLL"], "short queries: prefixes only, no typo matches");
  const sc = scoreAll(items, "trsla");
  assert.ok(sc.get("TSLA") > 0 && sc.get("TSLA") < STRONG, "a typo match is weaker than an exact one");
  assert.ok(scoreAll(items, "tesla").get("TSLA") >= STRONG);
});

test("European ETFs: listings with currency, month-end closes from justETF and Nasdaq, search by ticker", async () => {
  const { UCITS, monthlyCloses, nasdaqMonthlyRows } = await import("../scripts/ucits.mjs");
  const keys = new Set(UCITS.map((e) => e.t));
  assert.equal(keys.size, UCITS.length, "every listing has its own key");
  const vuag = UCITS.find((e) => e.t === "VUAG:LSE");
  assert.deepEqual([vuag.dt, vuag.ex, vuag.cur, vuag.isin], ["VUAG", "LSE", "GBP", "IE00BFMXXD54"]);
  assert.ok(UCITS.every((e) => /^[A-Z]{2}[A-Z0-9]{10}$/.test(e.isin) && ["USD", "GBP", "EUR"].includes(e.cur)));
  const series = [{ date: "2026-09-29", value: { raw: 100 } }, { date: "2026-09-30", value: { raw: 101 } }, { date: "2026-10-31", value: { raw: 99.5 } }, { date: "2026-11-23", value: { raw: 107.98 } }];
  assert.deepEqual(monthlyCloses(series), [["2026-09", 101], ["2026-10", 99.5], ["2026-11", 107.98]]);
  const rows = [{ date: "11/20/2026", close: "635.54" }, { date: "10/31/2026", close: "$680.10" }, { date: "10/30/2026", close: "678.00" }, { date: "09/30/2026", close: "1,650.00" }];
  assert.deepEqual(nasdaqMonthlyRows(rows), [["2026-09", 1650], ["2026-10", 680.1], ["2026-11", 635.54]]);
  const { prepareSearch, searchCompanies } = await import("../assets/js/search.js");
  const items = prepareSearch([{ t: "VUAG:LSE", dt: "VUAG", n: "Vanguard S&P 500 UCITS ETF (USD) Accumulating", mc: 1e11 }, { t: "VOO", n: "Vanguard S&P 500 ETF", mc: 9e11 }, { t: "VUG", n: "Vanguard Growth ETF", mc: 2e11 }]);
  assert.equal(searchCompanies(items, "vuag")[0].t, "VUAG:LSE", "a European listing is found by its ticker");
  assert.equal(searchCompanies(items, "voo")[0].t, "VOO");
});

test("Donut chart: one slice per part, shares in the legend", async () => {
  const { donutChart } = await import("../assets/js/charts.js");
  const html = donutChart("By holding", [{ label: "AAPL", value: 0.5 }, { label: "VUAG", value: 0.3 }, { label: "Other", value: 0.2 }, { label: "Zero", value: 0 }], (f) => `${Math.round(f * 100)}%`, "3");
  assert.equal((html.match(/<path /g) || []).length, 3, "empty parts are left out");
  assert.match(html, /AAPL[\s\S]*50%[\s\S]*VUAG[\s\S]*30%/);
  assert.equal(donutChart("Empty", [], String), "");
  assert.equal((donutChart("One", [{ label: "VOO", value: 1 }], String).match(/<path /g) || []).length, 1, "a single part is a full ring");
});

// ---------- Engine 2.1: calibrated TeraScore ----------

const yr21 = (year, extra = {}) => ({ year, periodEnd: `${year}-12-31`, revenue: 1000, costOfRevenue: 500, grossProfit: 500, operatingIncome: 200, pretaxIncome: 190,
  incomeTaxExpense: 40, interestExpense: 10, netIncome: 150, depreciationAndAmortization: 50, operatingCashFlow: 230, capex: 60, shareBasedCompensation: 20,
  dividendsPaid: 40, buybacks: 30, totalAssets: 2000, currentAssets: 800, cash: 300, inventory: 100, accountsReceivable: 150, totalLiabilities: 900,
  currentLiabilities: 400, totalDebt: 400, equity: 1100, retainedEarnings: 700, goodwill: 100, sharesDiluted: 100, epsDiluted: 1.5, ...extra });

test("Engine 2.1: TeraScore = 50 + Σ weight × (score − 50); an unscored area counts as 50 at most", async () => {
  const { overallBreakdown, OVERALL_WEIGHTS, MISSING_DIMENSION_SCORE } = await import("../assets/js/scoring.js");
  const a = analyze({ sector: "industrials", annual: [2020, 2021, 2022, 2023, 2024, 2025].map((y) => yr21(y, { revenue: 1000 + (y - 2020) * 60 })) });
  assert.ok(a.ok && Number.isFinite(a.scores.overall));
  const sum = 50 + a.breakdown.reduce((s, x) => s + x.contribution, 0);
  assert.equal(Math.round(sum), a.scores.overall, "contributions add up to the TeraScore");
  assert.ok(Math.abs(a.breakdown.reduce((s, x) => s + x.weight, 0) - 1) < 1e-9, "weights renormalised over the areas that apply");
  // A missing area: counted at MISSING_DIMENSION_SCORE, not at the company's own average.
  const defs = PROFILES.general;
  const scores = Object.fromEntries(Object.keys(OVERALL_WEIGHTS).map((k) => [k, 80]));
  const full = overallBreakdown(defs, scores);
  assert.equal(full.score, 80);
  const gap = overallBreakdown(defs, { ...scores, cashFlow: null });
  assert.equal(MISSING_DIMENSION_SCORE, 50);
  assert.equal(gap.score, Math.round(80 - OVERALL_WEIGHTS.cashFlow * (80 - MISSING_DIMENSION_SCORE)), "a strong company with a gap moves towards neutral");
  assert.ok(gap.items.find((x) => x.key === "cashFlow").missing);
  const weak = overallBreakdown(defs, { ...Object.fromEntries(Object.keys(OVERALL_WEIGHTS).map((k) => [k, 30])), cashFlow: null });
  assert.equal(weak.score, 30, "a gap never lifts a weak company");
  // Banks: areas that do not apply (no cash-flow or liquidity scoring) are not counted as missing.
  const bank = overallBreakdown(PROFILES.financial, { ...scores, cashFlow: null, liquidity: null });
  assert.equal(bank.score, 80);
  assert.ok(!bank.items.some((x) => x.key === "cashFlow" || x.key === "liquidity"));
});

test("Engine 2.1: risk rises with warning flags on a saturating curve, never above 100", async () => {
  const { riskFrom } = await import("../assets/js/scoring.js");
  assert.equal(riskFrom(70, 0), 30);
  assert.ok(riskFrom(70, 10) > riskFrom(70, 4) && riskFrom(70, 4) > 30);
  assert.ok(riskFrom(10, 60) < 100 && riskFrom(10, 60) > riskFrom(10, 40), "the riskiest still differ");
  assert.ok(riskFrom(40, 40) < riskFrom(20, 40), "safer fundamentals keep lower risk at equal flags");
  assert.equal(riskFrom(0, 0), 100);
  assert.equal(riskFrom(100, 0), 0);
});

test("Engine 2.1: margins scored on a 3-year basis; cash runway caps liquidity; net cash of a loss-maker scores 50", async () => {
  const { SMOOTH_PRIOR_WEIGHT, NET_CASH_LOSS_SCORE } = await import("../assets/js/scoring.js");
  const steady = [2021, 2022, 2023].map((y) => yr21(y, { operatingIncome: 100 }));
  const jump = analyze({ sector: "industrials", annual: [...steady, yr21(2024, { operatingIncome: 300 })] });
  const om = jump.parts.profitability.find((p) => p.key === "operatingMargin");
  assert.equal(om.value, 0.3);
  assert.ok(Math.abs(om.basis - ((1 - SMOOTH_PRIOR_WEIGHT) * 0.3 + SMOOTH_PRIOR_WEIGHT * 0.1)) < 1e-9, "60% latest + 40% two prior years");
  // A cash burner with a big current ratio but little runway: liquidity is capped by the runway.
  const burn = (y) => yr21(y, { operatingIncome: -300, pretaxIncome: -300, netIncome: -300, operatingCashFlow: -250, capex: 50, cash: 400, currentAssets: 500,
    inventory: 0, accountsReceivable: 50, currentLiabilities: 100, totalDebt: 0, interestExpense: 0, dividendsPaid: 0, buybacks: 0, epsDiluted: -3 });
  const b = analyze({ sector: "healthcare", annual: [2021, 2022, 2023, 2024].map(burn) });
  assert.ok(Math.abs(b.metrics.cashRunway - 450 / 300) < 1e-9, "(current assets − receivables) / burn");
  const cap = b.parts.liquidity.find((p) => p.key === "cashRunway");
  assert.ok(cap && cap.cap && cap.weight === 0);
  assert.equal(b.scores.liquidity, cap.score);
  assert.ok(b.scores.liquidity < 50, `liquidity ${b.scores.liquidity}`);
  const nde = b.parts.balanceSheet.find((p) => p.key === "netDebtToEbitda");
  assert.equal(nde.score, NET_CASH_LOSS_SCORE);
  assert.ok(nde.netCashLoss);
  // A profitable company with net cash keeps the full score and has no runway cap.
  const rich = analyze({ sector: "industrials", annual: [2021, 2022, 2023, 2024].map((y) => yr21(y, { totalDebt: 0, cash: 900 })) });
  assert.equal(rich.parts.balanceSheet.find((p) => p.key === "netDebtToEbitda").score, 100);
  assert.ok(!rich.parts.liquidity.some((p) => p.key === "cashRunway"));
});

test("Engine 2.1: capex reported under a company's own element is estimated (own ratio, else depreciation)", async () => {
  const { fillGaps, dividendProfile } = await import("../assets/js/scoring.js");
  const years = [yr21(2021, { capex: 50 }), yr21(2022, { capex: 70 }), yr21(2023, { capex: null, freeCashFlow: null }), yr21(2024, { capex: null, freeCashFlow: null })];
  const f = fillGaps({ annual: years }, "general");
  assert.ok(f.estimated.includes("capex"));
  assert.ok(Math.abs(f.company.annual[3].capex - 60) < 1e-9, "median capex/revenue of the nearest reporting years × revenue");
  assert.ok(Math.abs(f.company.annual[3].freeCashFlow - 170) < 1e-9);
  const none = fillGaps({ annual: years.map((y) => ({ ...y, capex: null, freeCashFlow: null })) }, "general");
  assert.equal(none.company.annual[3].capex, 50, "no year with capex: depreciation and amortisation");
  assert.deepEqual(fillGaps({ annual: years }, "financial").estimated, [], "not for banks and insurers");
  const a = analyze({ sector: "industrials", annual: years });
  assert.ok(Number.isFinite(a.scores.cashFlow), "cash-flow quality is scored with the estimate");
  assert.ok(a.estimated.includes("capex"));
  const d = dividendProfile({ annual: years }, a);
  assert.ok(Number.isFinite(d.parts.fcfPayout));
});

test("Engine 2.1: dividend safety includes share-price stability; languages cover the new parts", async () => {
  const { dividendProfile, DIVIDEND_WEIGHTS } = await import("../assets/js/scoring.js");
  assert.ok(Math.abs(Object.values(DIVIDEND_WEIGHTS).reduce((s, x) => s + x, 0) - 1) < 1e-9);
  const prices = { data: Array.from({ length: 40 }, (_, i) => [`${2023 + Math.floor(i / 12)}-${String((i % 12) + 1).padStart(2, "0")}`, 100 + i]) };
  const c = { sector: "industrials", prices, annual: [2020, 2021, 2022, 2023, 2024, 2025].map((y) => yr21(y, { dividendsPaid: 40 + (y - 2020) * 2 })) };
  const a = analyze(c);
  const d = dividendProfile(c, a);
  assert.equal(d.parts.priceStability, a.scores.marketRisk);
  for (const [code, dict] of Object.entries(LANGS)) {
    for (const k of Object.keys(DIVIDEND_WEIGHTS)) assert.ok(dict.dividend.parts[k] && dict.dividend.partsText[k], `${code}: dividend.${k}`);
    assert.ok(dict.dq.est.capex, `${code}: dq.est.capex`);
    for (const k of ["bdTitle", "bdNote", "bdMissing", "riskExplain", "capLabel", "basis3y", "netCashLoss", "yearsUnit"]) assert.ok(dict.ui[k], `${code}: ui.${k}`);
    for (const k of ["{f}", "{m}", "{c}", "{w}"]) assert.ok(dict.ui.riskExplain.includes(k), `${code}: riskExplain ${k}`);
  }
});

test("Backtest: rank correlation, AUC and a point-in-time panel", async () => {
  const { spearman, auc, backtest } = await import("../scripts/backtest.mjs");
  assert.equal(spearman([1, 2, 3, 4], [10, 20, 30, 40]), 1);
  assert.equal(spearman([1, 2, 3, 4], [4, 3, 2, 1]), -1);
  const s = Array.from({ length: 100 }, (_, i) => i);
  assert.equal(auc(s, s.map((x) => x >= 50)), 1);
  assert.equal(auc(s, s.map((x) => x < 50)), 0);
  assert.equal(auc([1, 2], [true, false]), null, "too few cases");
  // Ten companies, 2018–2025 reports, monthly prices: better fundamentals, better path.
  const months = []; for (let y = 2020; y <= 2026; y++) for (let m = 1; m <= 12; m++) months.push(`${y}-${String(m).padStart(2, "0")}`);
  const companies = Array.from({ length: 60 }, (_, k) => {
    const q = k / 59; // quality 0…1
    const annual = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map((y) => yr21(y, { operatingIncome: -100 + 400 * q, netIncome: -120 + 360 * q, pretaxIncome: -110 + 380 * q,
      operatingCashFlow: -80 + 400 * q, epsDiluted: (-120 + 360 * q) / 100 }));
    const data = months.map((m, i) => [m, 50 * Math.exp(i * (q - 0.5) * 0.02)]);
    return { ticker: `T${k}`, name: `T${k}`, sector: "industrials", annual, prices: { data }, market: { marketCap: 5e9 * data.at(-1)[1] / 50 } };
  });
  const out = backtest(companies, null);
  assert.ok(out.observations > 0 && out.formationDates > 0);
  assert.ok(out.rankIC > 0.5, `IC ${out.rankIC}`);
  assert.equal(out.quintiles.length, 5);
  assert.ok(out.quintiles[4].excess > out.quintiles[0].excess);
  assert.ok(out.fundamental.years > 0);
});
