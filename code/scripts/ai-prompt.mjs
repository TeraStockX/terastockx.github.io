// Builds the AI helper's knowledge of the methodology (worker/src/methodology.js) from the same sources the site
// uses: the scoring engine (areas, weights, metric thresholds) and the English methodology texts, so the helper
// explains exactly what the site calculates. Run after a methodology change: node scripts/ai-prompt.mjs
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { PROFILES, OVERALL_WEIGHTS, RISK_WEIGHTS, MARKET_RISK_SHARE, FLAG_PENALTY, METRIC_FORMAT, ENGINE_VERSION,
  DIVIDEND_WEIGHTS, MISSING_DIMENSION_SCORE, SMOOTH_PRIOR_WEIGHT, RUNWAY_BAD, RUNWAY_GOOD } from "../assets/js/scoring.js";
import en from "../assets/js/i18n/en.js";

const fill = (s, p = {}) => String(s).replace(/\{(\w+)\}/g, (_, k) => (k in p ? p[k] : `{${k}}`));
const pct = (v) => `${Math.round(v * 100)}%`;
// A threshold in the metric's own unit: 0.2 → "20%", 2.5 → "2.5×", 8 → "8".
function unit(key, v) {
  const f = METRIC_FORMAT[key];
  if (f === "pct" || f === "pct0" || f === "spct") return `${+(v * 100).toFixed(1)}%`;
  if (f === "pp") return `${+(v * 100).toFixed(1)} percentage points`;
  if (f === "x" || f === "mult" || f === "xyears") return `${v}×`;
  if (f === "of9") return `${v} of 9`;
  if (f === "years") return `${v} years`;
  return String(v);
}
const metricName = (k) => (Array.isArray(en.metrics?.[k]) ? en.metrics[k][0] : k);
const metricDesc = (k) => (Array.isArray(en.metrics?.[k]) ? en.metrics[k][1] : "");
const dimName = (k) => en.dims?.[k]?.name || k;

function areaLines(profile) {
  return Object.entries(profile).map(([dim, ms]) => {
    const parts = ms.map((m) => `${metricName(m.key)} ${unit(m.key, m.bad)} → ${unit(m.key, m.good)} (${pct(m.weight)})`).join("; ");
    return `- ${dimName(dim)}${en.dims?.[dim]?.q ? ` – ${en.dims[dim].q}` : ""}: ${parts}`;
  }).join("\n");
}
// Where the financial and real-estate profiles differ from the general one.
function profileDiff(name, profile) {
  const lines = [];
  for (const [dim, ms] of Object.entries(profile)) {
    const g = JSON.stringify(PROFILES.general[dim] || []);
    if (JSON.stringify(ms) === g) continue;
    lines.push(`  - ${dimName(dim)}: ${ms.length ? ms.map((m) => `${metricName(m.key)} ${unit(m.key, m.bad)} → ${unit(m.key, m.good)} (${pct(m.weight)})`).join("; ") : "not scored for this profile"}`);
  }
  return lines.length ? `- ${name}:\n${lines.join("\n")}` : "";
}

const m = en.method;
const glossary = Object.keys(en.metrics || {}).map((k) => `- ${metricName(k)}: ${metricDesc(k)}`).join("\n");
const flagLines = Object.entries(en.flags || {}).map(([k, v]) => {
  const title = Array.isArray(v) ? v[0] : v?.title || k;
  return `- ${fill(title, {})}`;
}).join("\n");

const text = `TeraStockX methodology (scoring engine ${ENGINE_VERSION})

Data: every US-listed company (Nasdaq, NYSE, NYSE American, Cboe) from its SEC filings: audited annual reports (10-K, 20-F, 40-F), quarterly reports (10-Q), current reports (8-K) and insider filings (Form 4); prices from Nasdaq (delayed about 15 minutes, updated several times an hour during the US session). TTM = trailing twelve months.

Scores: ${m.intro} ${m.scaling}
Grades: 80–100 excellent, 65–79 strong, 45–64 moderate, 25–44 weak, below 25 poor (for Risk the scale is reversed: a low risk score is good).

TeraScore: ${m.overallText}
Weights: ${Object.entries(OVERALL_WEIGHTS).map(([k, w]) => `${dimName(k)} ${pct(w)}`).join(", ")}.

Areas and their metrics (general profile; for each metric: the value that scores 0 points → the value that scores 100 points, and its weight inside the area):
${areaLines(PROFILES.general)}

Relative scoring: ${m.relativeText}
${fill(m.smoothText, { a: Math.round((1 - SMOOTH_PRIOR_WEIGHT) * 100), b: Math.round(SMOOTH_PRIOR_WEIGHT * 100) })}
${fill(m.runwayText, { bad: RUNWAY_BAD, good: RUNWAY_GOOD })}

Adapted profiles: ${m.profiles}
${[profileDiff("Financial profile (banks, insurers, brokers)", PROFILES.financial), profileDiff("Real-estate profile (REITs)", PROFILES.realEstate)].filter(Boolean).join("\n")}

Risk: ${fill(en.ui.riskExplain, { c: FLAG_PENALTY.critical, w: FLAG_PENALTY.warning, m: Math.round(MARKET_RISK_SHARE * 100), f: Math.round((1 - MARKET_RISK_SHARE) * 100),
  bs: Math.round(RISK_WEIGHTS.balanceSheet * 100), co: Math.round(RISK_WEIGHTS.consistency * 100), cf: Math.round(RISK_WEIGHTS.cashFlow * 100),
  pr: Math.round(RISK_WEIGHTS.profitability * 100), li: Math.round(RISK_WEIGHTS.liquidity * 100) })}
Market risk metrics: ${areaLines({ marketRisk: PROFILES.general.marketRisk }).replace(/^- /, "")}

Partial analysis: ${fill(m.partial, { s: MISSING_DIMENSION_SCORE })}
Estimated figures: ${m.estimates}

Financial distress: ${m.distressText}
Trend: ${m.trendText}
Investment styles: ${m.stylesText}
Sector rank: ${m.sectorText}
Major events: ${m.eventsText}
Insider transactions: ${m.insiderText}
Dividend safety: ${m.dividendText} Components: ${Object.entries(DIVIDEND_WEIGHTS).map(([k, w]) => `${en.dividend?.parts?.[k] || k} ${pct(w)}`).join(", ")}.
TeraScore Changes: ${m.historyText}
Similar companies: ${m.peersText}
Currencies: ${m.currencyText}
Quarterly data: ${m.quarterlyText}
Limits: ${m.limitsText}

Red flags and strengths the site can show:
${flagLines}

Glossary of metrics:
${glossary}
`;

const out = `// Generated by scripts/ai-prompt.mjs from the scoring engine and the English methodology texts — do not edit.
export const ENGINE = ${JSON.stringify(ENGINE_VERSION)};
export const METHODOLOGY = ${JSON.stringify(text)};
`;
const file = fileURLToPath(new URL("../worker/src/methodology.js", import.meta.url));
writeFileSync(file, out);
console.log(`worker/src/methodology.js: ${text.length} characters (engine ${ENGINE_VERSION})`);
