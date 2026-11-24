import { analyze, scoreHistory, gradeKey, GRADE_TONE, DIMENSIONS, METRIC_FORMAT, ENGINE_VERSION, ENGINE_SERIES, PROFILES, OVERALL_WEIGHTS, RISK_WEIGHTS, MARKET_RISK_SHARE, FLAG_PENALTY, MISSING_DIMENSION_SCORE, SMOOTH_PRIOR_WEIGHT, RUNWAY_BAD, RUNWAY_GOOD, NET_CASH_LOSS_SCORE, dividendProfile, DIVIDEND_TONE, DIVIDEND_WEIGHTS, findPeers } from "./scoring.js";
import { portfolioSummary, PORTFOLIO_LIMITS } from "./portfolio.js";
import { SCREENS, screenById } from "./screens.js";
import { LANG_LIST, EN, langMeta, ready, lang, setLang, t, fill, fmt, money, date, num, dict, locale, ltr } from "./i18n/index.js";
import { barChart, lineChart, wireCharts, donutChart } from "./charts.js";
import { prepareSearch, searchCompanies, scoreAll, STRONG, popularity } from "./search.js";

const app = document.getElementById("app");
const CONTACT_EMAIL = "info@terastockx.com";
const PAGE_SIZE = 50;
const isNum = (x) => typeof x === "number" && Number.isFinite(x);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ---------- Data ----------

let indexCache = null;
async function loadIndex() {
  if (!indexCache) {
    const r = await fetch("data/index.json", { cache: "no-cache" });
    if (!r.ok) throw new Error("index.json");
    const idx = await r.json();
    const keys = idx.scoreKeys || ["overall", ...DIMENSIONS];
    for (const c of idx.companies) if (Array.isArray(c.sc)) c.sc = Object.fromEntries(keys.map((k, i) => [k, c.sc[i]]));
    idx.byT = new Map(idx.companies.map((c) => [c.t, c]));
    indexCache = idx;
  }
  return indexCache;
}

let pulseCache = null;
async function loadPulse() {
  if (!pulseCache) {
    try { const r = await fetch("data/pulse.json", { cache: "no-cache" }); pulseCache = r.ok ? await r.json() : null; } catch { pulseCache = null; }
  }
  return pulseCache;
}

let newsCache = null;
async function loadNews() {
  if (!newsCache) {
    const r = await fetch("data/news.json", { cache: "no-cache" });
    newsCache = r.ok ? await r.json() : { events: [] };
  }
  return newsCache;
}

let benchCache = null;
async function loadBenchmarks() {
  if (!benchCache) {
    try {
      const r = await fetch("data/benchmarks.json", { cache: "no-cache" });
      benchCache = r.ok ? (await r.json()).sectors || {} : {};
    } catch { benchCache = {}; }
  }
  return benchCache;
}
const analyzeWith = async (c) => analyze(c, { benchmarks: await loadBenchmarks() });

const companyCache = new Map();
async function loadCompany(ticker) {
  if (!companyCache.has(ticker)) {
    const r = await fetch(`data/companies/${encodeURIComponent(ticker)}.json`, { cache: "no-cache" });
    companyCache.set(ticker, r.ok ? await r.json() : null);
  }
  return companyCache.get(ticker);
}

// ---------- Watchlist (per browser) ----------

function getWatch() { try { return JSON.parse(localStorage.getItem("tsx-watch") || "[]"); } catch { return []; } }
function getSnaps() { try { return JSON.parse(localStorage.getItem("tsx-watch-snap") || "{}"); } catch { return {}; } }
function setSnaps(s) { try { localStorage.setItem("tsx-watch-snap", JSON.stringify(s)); } catch {} }
// What the watchlist remembers about a company, to detect changes on later visits.
const snapOf = (row) => ({ o: row?.sc?.overall ?? null, r: row?.sc?.risk ?? null, d: row?.d ?? null, le: row?.le ?? null, cf: row?.cf ?? [] });
function toggleWatch(tk, row) {
  const w = new Set(getWatch());
  const snaps = getSnaps();
  if (w.has(tk)) { w.delete(tk); delete snaps[tk]; }
  else { w.add(tk); if (row) snaps[tk] = snapOf(row); }
  try { localStorage.setItem("tsx-watch", JSON.stringify([...w])); } catch {}
  setSnaps(snaps);
  return w.has(tk);
}

// Changes since the user last marked the watchlist as seen.
const DISTRESS_ORDER = { low: 0, medium: 1, high: 2 };
function watchAlerts(idx) {
  const snaps = getSnaps();
  const out = [];
  for (const tk of getWatch()) {
    const row = idx.companies.find((c) => c.t === tk);
    const s = snaps[tk];
    if (!row || !s) continue;
    const cur = snapOf(row);
    if (isNum(cur.o) && isNum(s.o) && Math.abs(cur.o - s.o) >= 5) out.push({ t: tk, tone: cur.o > s.o ? "good" : "critical", text: t("ui.alertScore", { t: tk, from: s.o, to: cur.o }) });
    if (isNum(cur.r) && isNum(s.r) && cur.r - s.r >= 10) out.push({ t: tk, tone: "serious", text: t("ui.alertRisk", { t: tk, from: s.r, to: cur.r }) });
    if (cur.d && s.d && DISTRESS_ORDER[cur.d] > DISTRESS_ORDER[s.d]) out.push({ t: tk, tone: "critical", text: t("ui.alertDistress", { t: tk, level: t(`distress.${cur.d}`) }) });
    for (const id of cur.cf.filter((x) => !(s.cf || []).includes(x))) out.push({ t: tk, tone: "critical", text: t("ui.alertCritical", { t: tk, flag: t(`flags.${id}`)?.[0] ?? id }) });
    if (cur.le && cur.le !== s.le) {
      const [d, items] = cur.le.split("|");
      out.push({ t: tk, tone: "serious", text: t("ui.alertEvent", { t: tk, event: items.split(",").map(eventName).join(", "), date: date(d) }) });
    }
  }
  return out;
}
const starSvg = (on) => `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="${on ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/></svg>`;
const starBtn = (tk, on) => `<button type="button" class="star ${on ? "on" : ""}" data-star="${esc(tk)}" aria-pressed="${on}" aria-label="${esc(t(on ? "ui.removeWatch" : "ui.addWatch"))}">${starSvg(on)}</button>`;

// Stars in every company row: one handler for all of them (runs before the row's own click handler).
// The page that is showing can react to the change (e.g. the watchlist removes the row).
let onWatchChange = null;
document.addEventListener("click", (e) => {
  const b = e.target.closest?.("[data-star]");
  if (!b) return;
  e.preventDefault();
  e.stopPropagation();
  const tk = b.dataset.star;
  const on = toggleWatch(tk, indexCache?.byT?.get(tk));
  document.querySelectorAll("[data-star]").forEach((x) => {
    if (x.dataset.star !== tk) return;
    x.classList.toggle("on", on);
    x.setAttribute("aria-pressed", String(on));
    x.setAttribute("aria-label", t(on ? "ui.removeWatch" : "ui.addWatch"));
    x.innerHTML = starSvg(on);
  });
  onWatchChange?.(tk, on);
}, true);

// ---------- Company identity: logo, exchange, data quality ----------

// Logos are small copies kept with the data (data/logos/<TICKER>.webp; row.lg = 1 when there is one).
// Without one, or if it fails to load, a coloured tile with the first letter of the name is shown.
const logoHue = (s) => { let h = 7; for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) % 360; return h; };
const letterOf = (row) => (String(row?.n || row?.t || "?").replace(/^the\s+/i, "").match(/[A-Za-z0-9]/)?.[0] || "?").toUpperCase();
const letterLogo = (row, cls = "") => `<span class="logo letter ${cls}" style="--lh:${logoHue(row?.t || "")}" aria-hidden="true">${esc(letterOf(row))}</span>`;
function logo(row, cls = "") {
  if (!row?.lg) return letterLogo(row, cls);
  return `<img class="logo ${cls}" src="data/logos/${encodeURIComponent(row.t)}.webp" alt="" loading="lazy" decoding="async" data-l="${esc(letterOf(row))}" data-h="${logoHue(row.t)}">`;
}
document.addEventListener("error", (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || !img.classList.contains("logo")) return;
  const span = document.createElement("span");
  span.className = `${img.className} letter`;
  span.style.setProperty("--lh", img.dataset.h || "210");
  span.setAttribute("aria-hidden", "true");
  span.textContent = img.dataset.l || "?";
  img.replaceWith(span);
}, true);

// Data quality. A dimension that applies to the company but could not be scored for lack of data is
// "missing"; row.cm is the share of the TeraScore backed by data (see completeness in scoring.js).
const PF = { f: "financial", r: "realEstate" };
// Half-filled circle: partial analysis; quarter-filled: little data.
const DQ_HALF = `<svg class="dq-icon" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><circle cx="8" cy="8" r="6.3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 1.7a6.3 6.3 0 0 1 0 12.6z" fill="currentColor"/></svg>`;
const DQ_QUARTER = `<svg class="dq-icon" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><circle cx="8" cy="8" r="6.3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8 1.7a6.3 6.3 0 0 1 6.3 6.3H8z" fill="currentColor"/></svg>`;
const PARTIAL_BELOW = 80;
function missingDims(row) {
  if (!isNum(row?.sc?.overall)) return [];
  const defs = PROFILES[PF[row.pf] || "general"];
  return Object.keys(OVERALL_WEIGHTS).filter((k) => (defs[k] || []).length && !isNum(row.sc[k]));
}
// Lists mark a partial analysis only when less than 80% of the TeraScore rests on data; the company page shows
// the share whenever it is below 100%.
const isPartial = (row) => isNum(row?.sc?.overall) && isNum(row.cm) && row.cm < PARTIAL_BELOW;
function isNewListing(row) {
  const ref = indexCache?.generated ? new Date(indexCache.generated) : new Date();
  return (!!row?.fs && ref - new Date(row.fs) <= 365 * 86400000) || (isNum(row?.ipo) && row.ipo >= ref.getUTCFullYear() - 1);
}
function partialTitle(row) {
  const dims = missingDims(row).map((k) => t(`dims.${k}.name`)).join(", ");
  const p = isNum(row.cm) ? row.cm : "–";
  return dims ? t("dq.partialTitle", { p, d: dims }) : t("dq.partialTitleParts", { p });
}
// "◐ Partial · 65%": between the company's name and its TeraScore, so the scores stay in line; on phones a
// shorter "◐ 65% data" next to the exchange, where there is room.
const partialMark = (row, phone = false) => (isPartial(row)
  ? `<span class="dq-chip dq-chip-partial ${phone ? "dq-m" : "dq-d"}" title="${esc(partialTitle(row))}">${DQ_HALF}${esc(t(phone ? "dq.partialMobile" : "dq.partialShort", { p: row.cm }))}</span>` : "");
// The TeraScore cell of a list: the score with the partial mark, or why there is no score.
function overallCell(row) {
  if (isNum(row?.sc?.overall)) return scorePill(row.sc.overall);
  if (row?.sc) return `<span class="dq dq-little" title="${esc(t("dq.littleTitle"))}">${esc(t("dq.little"))}</span>`;
  const isNew = isNewListing(row);
  return `<span class="dq ${isNew ? "dq-new" : "dq-none"}" title="${esc(t(isNew ? "dq.newTitle" : "dq.noneTitle"))}">${esc(t(isNew ? "dq.newListing" : "dq.none"))}</span>`;
}
const dqLegend = (rows) => (rows.some(isPartial) ? `<p class="small muted dq-legend">${esc(t("dq.legend", { s: MISSING_DIMENSION_SCORE }))}</p>` : "");
// A small coloured chip for search suggestions and headers: partial analysis (under 80% of the TeraScore backed
// by data), little data, no analysis yet; nothing for a fully analysed company or a fund.
function dqChip(row) {
  if (!row || row.etf) return "";
  if (isPartial(row)) return partialMark(row);
  if (row.sc && !isNum(row.sc.overall)) return `<span class="dq-chip dq-chip-little" title="${esc(t("dq.littleTitle"))}">${esc(t("dq.little"))}</span>`;
  if (!row.sc) return `<span class="dq-chip dq-chip-none" title="${esc(t(isNewListing(row) ? "dq.newTitle" : "dq.noneTitle"))}">${esc(t(isNewListing(row) ? "dq.newListing" : "dq.none"))}</span>`;
  return "";
}

// The company's name in the page's language where one is commonly used (e.g. 苹果 for Apple in Chinese).
const coName = (row) => dict().names?.[row?.t] || row?.n || "";

// The company cell of every list: star, logo, ticker (link), exchange and badges, name.
// Share class of a company with several listed classes (GOOGL "Class A", GOOG "Class C", BRK.B …).
const classLabel = (cl) => (cl === "V" ? t("ui.classVoting") : cl === "NV" ? t("ui.classNonVoting") : t("ui.classLetter", { c: cl }));
const classBadge = (row) => (row?.cl ? `<span class="badge cls" title="${esc(t("ui.classTitle"))}">${esc(classLabel(row.cl))}</span>` : "");

function companyCell(row, { star = true, watch = null } = {}) {
  const on = (watch || new Set(getWatch())).has(row.t);
  return `<div class="co">
      ${star ? starBtn(row.t, on) : ""}${logo(row)}
      <div class="co-txt">
        <div class="co-top">${companyLink(row, `<span class="tick">${esc(row.t)}</span>`)}${row.demo ? `<span class="badge">${esc(t("ui.demoBadge"))}</span>` : ""}${row.ex ? `<span class="badge ex">${esc(row.ex)}</span>` : ""}${isNewListing(row) ? `<span class="badge new">${esc(t("dq.newBadge"))}</span>` : ""}${partialMark(row, true)}</div>
        <div class="cname-row"><span class="cname small">${esc(coName(row))}</span>${classBadge(row)}${partialMark(row)}</div>
      </div>
    </div>`;
}
// Full index row for a ticker (lists built from other data, e.g. the market summary, carry fewer fields).
const fullRow = (r) => indexCache?.byT?.get(r.t) || r;

// ---------- Portfolio (per browser) ----------

let etfCache = null;
async function loadEtfs() {
  if (!etfCache) {
    try { const r = await fetch("data/etfs.json", { cache: "no-cache" }); etfCache = r.ok ? await r.json() : { etfs: [] }; } catch { etfCache = { etfs: [] }; }
  }
  return etfCache;
}

// European (UCITS) ETFs and the monthly closes of US-listed ETFs (portfolio only).
let ucitsCache = null, etfHistCache = null;
async function loadUcits() {
  if (!ucitsCache) { try { const r = await fetch("data/ucits.json", { cache: "no-cache" }); ucitsCache = r.ok ? await r.json() : { etfs: [] }; } catch { ucitsCache = { etfs: [] }; } }
  return ucitsCache;
}
async function loadEtfHistory() {
  if (!etfHistCache) { try { const r = await fetch("data/etf-history.json", { cache: "no-cache" }); etfHistCache = r.ok ? await r.json() : { h: {} }; } catch { etfHistCache = { h: {} }; } }
  return etfHistCache;
}
// The currency the portfolio is shown in: chosen by the user, else by language (forint, euro or dollar).
const PF_CURRENCIES = ["USD", "EUR", "HUF", "GBP", "CHF", "PLN", "CZK", "RON", "SEK", "NOK", "DKK", "JPY", "CNY", "CAD", "AUD"];
function pfCurrency(fx) {
  let c = null;
  try { c = localStorage.getItem("tsx-pf-cur"); } catch {}
  if (c && (c === "USD" || fx[c])) return c;
  const byLang = { hu: "HUF", de: "EUR", fr: "EUR", es: "EUR", zh: "CNY" }[lang()];
  return byLang && fx[byLang] ? byLang : "USD";
}
// A full amount (not abbreviated) in a currency: "12 345 678 Ft", "$12,345.68".
function fullMoney(v, cur = "USD") {
  if (!isNum(v)) return "–";
  const whole = ["HUF", "JPY", "KRW", "ISK", "CLP", "IDR"].includes(cur) || Math.abs(v) >= 1e6;
  try { return new Intl.NumberFormat(locale(), { style: "currency", currency: cur, maximumFractionDigits: whole ? 0 : 2, minimumFractionDigits: whole ? 0 : 2 }).format(v); } catch { return `${num(v, 2)} ${cur}`; }
}

function getPortfolio() { try { return JSON.parse(localStorage.getItem("tsx-portfolio") || "[]").filter((h) => h && h.t); } catch { return []; } }
function setPortfolio(list) { try { localStorage.setItem("tsx-portfolio", JSON.stringify(list)); } catch {} }

// ---------- Sector percentile ----------

function sectorRank(idx, sector, key, value) {
  if (!sector || !isNum(value)) return null;
  const peers = idx.companies.filter((c) => c.s === sector && c.sc && isNum(c.sc[key]));
  if (peers.length < 5) return null;
  const inverse = key === "risk";
  const worse = peers.filter((c) => (inverse ? c.sc[key] > value : c.sc[key] < value)).length;
  return Math.round((worse / (peers.length - 1 || 1)) * 100);
}

// ---------- Shared UI pieces ----------

function grade(score, inverse) {
  const k = gradeKey(score, inverse);
  return { key: k, tone: GRADE_TONE[k], label: t(`${inverse ? "riskGrades" : "grades"}.${k}`) };
}

function scorePill(score, inverse = false) {
  const g = grade(score, inverse);
  return `<span class="pill tone-${g.tone}" title="${esc(g.label)}"><span class="dot"></span>${isNum(score) ? score : "–"}</span>`;
}

// Sector keys are translated; older data files may still carry a raw SIC description.
const sectorName = (s) => (s && t(`sectors.${s}`) !== `sectors.${s}` ? t(`sectors.${s}`) : s || "");
const metricLabel = (k) => t(`metrics.${k}`)?.[0] ?? k;
const metricDesc = (k) => t(`metrics.${k}`)?.[1] ?? "";
// Market cap is in US dollars; every other amount is in the company's reporting currency.
const fm = (metrics, k, cur = "USD") => fmt(metrics[k], METRIC_FORMAT[k], k === "marketCap" ? "USD" : cur);

function summaryText(dim, a, cur) {
  const tpl = t(`dims.${dim}.summary`);
  return tpl.replace(/\{(\w+)\}/g, (_, k) => {
    if (k === "windowYears") return a.metrics.windowYears;
    if (k === "distress") return t(`distress.${a.distress.level}`).toLowerCase();
    return fm(a.metrics, k, cur);
  });
}

const FLAG_FORMAT = {
  lowCurrentRatio: "x", interestCoverageCritical: "x", interestCoverageWeak: "x", altmanDistress: "num", altmanGrey: "num", altmanSafe: "num",
  highLeverage: "xyears", revenueDecline: "spct", heavyDilution: "spct", buybacks: "spct", highSbc: "pct", lowEarningsQuality: "pct",
  dividendUncovered: "pct0", goodwillHeavy: "pct", deepDrawdown: "pct", netCash: "money", highMargin: "pct", highRoic: "pct",
  strongGrowth: "spct", strongCashConversion: "pct0", insiderBuying: "money", insiderSelling: "money",
};
const USD_FLAGS = new Set(["insiderBuying", "insiderSelling"]);
function flagText(f, cur = "USD") {
  const [title, text] = t(`flags.${f.id}`);
  const p = { ...f.params };
  const isDate = ["staleData", "bankruptcyFiling", "restatement", "debtAcceleration", "delistingNotice", "auditorChange"].includes(f.id);
  if ("value" in p) p.value = isDate ? date(p.value) : fmt(p.value, FLAG_FORMAT[f.id], USD_FLAGS.has(f.id) ? "USD" : cur);
  if ("share" in p) p.share = fmt(p.share, "pct");
  return { title, text: fill(text, p) };
}

// ---------- Header / navigation ----------

function renderChrome() {
  const icon = (d) => `<svg class="nav-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="${d}"/></svg>`;
const links = (short) => `
    <a href="#/" data-nav="list" title="${esc(t("ui.navCompanies"))}">${icon("M4 6h16M4 12h16M4 18h10")}<span class="nav-label">${esc(t(short ? "ui.tabCompanies" : "ui.navCompanies"))}</span></a>
    <a href="#/trend" data-nav="trend" title="${esc(t("ui.navTrend"))}">${icon("M3 17l6-6 4 4 8-8M15 7h6v6")}<span class="nav-label">${esc(t(short ? "ui.tabTrend" : "ui.navTrend"))}</span></a>
    <a href="#/portfolio" data-nav="portfolio" title="${esc(t("ui.navPortfolio"))}">${icon("M12 3v9h9M12 3a9 9 0 1 0 9 9")}<span class="nav-label">${esc(t(short ? "ui.tabPortfolio" : "ui.navPortfolio"))}</span></a>
    <a href="#/news" data-nav="news" title="${esc(t("ui.navNews"))}">${icon("M5 4h11v16H5zM16 8h3v10a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h3")}<span class="nav-label">${esc(t(short ? "ui.tabNews" : "ui.navNews"))}</span></a>
    <a href="#/data" data-nav="data" title="${esc(t("ui.navData"))}">${icon("M4 5h16v14H4zM4 10h16M10 10v9")}<span class="nav-label">${esc(t(short ? "ui.tabData" : "ui.navData"))}</span></a>
    <a href="#/compare" data-nav="compare" title="${esc(t("ui.navCompare"))}">${icon("M8 4v16M16 4v16M4 8h8M12 16h8")}<span class="nav-label">${esc(t(short ? "ui.tabCompare" : "ui.navCompare"))}</span></a>
    <a href="#/methodology" data-nav="method" title="${esc(t("ui.navMethod"))}">${icon("M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM12 11v5M12 8h.01")}<span class="nav-label">${esc(t(short ? "ui.tabMethod" : "ui.navMethod"))}</span></a>
`;
  document.getElementById("nav").innerHTML = links(false);
  document.getElementById("tabbar").innerHTML = links(true);
  fitTabLabels();
  const cur = langMeta(lang());
  const options = [...LANG_LIST].sort((a, b) => a.english.localeCompare(b.english)).map((l) => `<button type="button" role="option" class="lang-opt${l.code === lang() ? " on" : ""}" aria-selected="${l.code === lang()}" data-lang="${l.code}"><span class="ln" lang="${l.code}" dir="${l.dir || "ltr"}">${esc(l.name)}</span><span class="le">${esc(l.english)}</span></button>`).join("");
  document.getElementById("lang-wrap").innerHTML = `<div class="lang-pick">
      <button type="button" class="lang-btn" id="lang-btn" aria-haspopup="listbox" aria-expanded="false" aria-controls="lang-menu" aria-label="${esc(t("ui.language"))}: ${esc(cur.name)}">${esc(cur.short)}<svg viewBox="0 0 10 6" width="10" height="6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg></button>
      <div class="lang-menu" id="lang-menu" role="listbox" aria-label="${esc(t("ui.language"))}" hidden>${options}</div>
    </div>`;
  document.getElementById("lang-btn").addEventListener("click", () => toggleLangMenu());
  document.getElementById("lang-menu").addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (!b) return;
    toggleLangMenu(false);
    if (b.dataset.lang !== lang()) setLang(b.dataset.lang).then(() => { renderChrome(); route(false); }).catch(() => {});
  });
  document.getElementById("footer-text").innerHTML = `${esc(t("ui.footer"))} <a href="#/methodology">${esc(t("ui.navMethod"))} ›</a> · <a href="#/install">${esc(t("ui.installFooter"))} ›</a> · ${esc(t("ui.contact"))}: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;
  markNav();
}

// Language menu: a list of every language by its own name, opened from the header button.
function toggleLangMenu(open) {
  const menu = document.getElementById("lang-menu"), btn = document.getElementById("lang-btn");
  if (!menu || !btn) return;
  const show = open ?? menu.hidden;
  menu.hidden = !show;
  btn.setAttribute("aria-expanded", String(show));
  if (show) (menu.querySelector(".lang-opt.on") || menu.querySelector(".lang-opt"))?.focus();
}
document.addEventListener("click", (e) => { if (!e.target.closest(".lang-pick")) toggleLangMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleLangMenu(false); });

function markNav() {
  const page = location.hash.replace(/^#\/?/, "").split("/")[0];
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active",
    (a.dataset.nav === "list" && (page === "" || page === "c" || page === "screen" || page === "watchlist")) || (a.dataset.nav === "compare" && page === "compare") || (a.dataset.nav === "news" && page === "news") || (a.dataset.nav === "trend" && page === "trend") || (a.dataset.nav === "data" && page === "data") || (a.dataset.nav === "portfolio" && page === "portfolio") || (a.dataset.nav === "method" && page === "methodology")));
}

// ---------- Router ----------

const listState = { q: "", sector: "", filter: "analyzed", sort: "overall", dir: -1, page: 0, ex: "", minScore: 0, maxRisk: 100, minCap: 0, minDy: 0, minDs: 0, maxPe: 0, minDrop: 0, styles: [], noCrit: false, preset: "", filtersOpen: null };
const LOWER_FIRST = new Set(["t", "risk", "pe"]);

async function route(scroll = true) {
  const [page, arg] = location.hash.replace(/^#\/?/, "").split("/");
  markNav();
  if (scroll) window.scrollTo(0, 0);
  document.title = "TeraStockX";
  onWatchChange = null;
  if (page !== "watchlist" && listState.filter === "watch") listState.filter = "analyzed";
  try {
    if (page === "c" && arg) await renderCompany(decodeURIComponent(arg).toUpperCase());
    else if (page === "compare") await renderCompare(arg ? decodeURIComponent(arg).toUpperCase().split(",").filter(Boolean).slice(0, MAX_COMPARE) : []);
    else if (page === "install") renderInstall();
    else if (page === "screen") { const sc = screenById(arg); Object.assign(listState, { preset: sc ? sc.id : "", sort: sc ? "preset" : "overall", dir: -1, page: 0 }); await renderList(); }
    else if (page === "portfolio") await renderPortfolio(arg ? decodeURIComponent(arg).toUpperCase() : "");
    else if (page === "report" && arg) await renderReport(decodeURIComponent(arg).toUpperCase());
    else if (page === "methodology") renderMethod();
    else if (page === "news") await renderNews();
    else if (page === "trend") await renderTrend();
    else if (page === "data") await renderData(arg ? decodeURIComponent(arg).toUpperCase() : null);
    else if (page === "watchlist") { Object.assign(listState, { filter: "watch", page: 0 }); await renderList(); }
    else await renderList();
  } catch (e) {
    app.innerHTML = `<div class="glass empty">${esc(t("ui.errorLoad", { e: e.message }))}<br><span class="small">${esc(t("ui.serveHint"))}</span></div>`;
  }
}
addEventListener("hashchange", () => route());

// ---------- List page ----------

// ---------- Company search ----------

// Search items, prepared once per list of rows.
const searchCache = new WeakMap();
function searchItems(rows) {
  const names = dict().names;
  const key = names ? lang() : "";
  let cached = searchCache.get(rows);
  if (!cached || cached.key !== key) {
    // Names in the page's language are searchable too ("苹果").
    const items = prepareSearch(names ? rows.map((r) => (names[r.t] ? { ...r, n: `${r.n} ${names[r.t]}` } : r)) : rows);
    if (names) items.forEach((it, i) => { it.row = rows[i]; });
    cached = { key, items };
    searchCache.set(rows, cached);
  }
  return cached.items;
}
const pickerField = (id, placeholder, value = "", label = placeholder) => `<div class="ac"><input id="${id}" placeholder="${esc(placeholder)}" aria-label="${esc(label)}" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(value)}"><ul class="ac-list" id="${id}-ac" role="listbox" hidden></ul></div>`;

// A company field with suggestions by ticker or name, typos allowed ("trsla" → Tesla). onPick(row) runs
// when one is chosen (tap, or Enter for the highlighted one). Returns { resolve() }: the best match of what
// was typed, for a form sent without choosing.
function attachPicker(input, items, onPick, { limit = 8 } = {}) {
  const list = document.getElementById(`${input.id}-ac`);
  let results = [], active = -1, timer = null;
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-controls", list.id);
  const close = () => {
    results = []; active = -1;
    list.hidden = true; list.innerHTML = "";
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
  };
  const render = () => {
    if (!results.length) { close(); return; }
    list.innerHTML = results.map((r, i) => `<li role="option" id="${list.id}-${i}" data-i="${i}" class="${i === active ? "on" : ""}" aria-selected="${i === active}">
      ${r.row.etf ? letterLogo(r.row) : logo(r.row)}<span class="ac-t">${esc(r.row.dt || r.row.t)}</span>${r.row.etf ? `<span class="badge">ETF</span>${r.row.ex ? `<span class="badge ex">${esc(r.row.ex)}${r.row.cur ? ` · ${esc(r.row.cur)}` : ""}</span>` : ""}` : r.row.ex ? `<span class="badge ex">${esc(r.row.ex)}</span>` : ""}<span class="ac-n">${esc(coName(r.row))}</span>${dqChip(r.row)}</li>`).join("");
    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
    if (active >= 0) input.setAttribute("aria-activedescendant", `${list.id}-${active}`);
  };
  const update = () => { results = input.value.trim() ? searchCompanies(items, input.value, limit) : []; active = results.length ? 0 : -1; render(); };
  const choose = (r) => { close(); if (r) onPick(r.row); };
  input.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(update, 60); });
  input.addEventListener("focus", () => { if (input.value.trim()) update(); });
  input.addEventListener("blur", () => setTimeout(close, 150));
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!results.length) return;
      e.preventDefault();
      active = (active + (e.key === "ArrowDown" ? 1 : -1) + results.length) % results.length;
      render();
    } else if (e.key === "Enter") {
      clearTimeout(timer);
      if (!results.length && input.value.trim()) update();
      if (results.length && active >= 0) { e.preventDefault(); choose(results[active]); }
    } else if (e.key === "Escape") close();
  });
  list.addEventListener("pointerdown", (e) => {
    const li = e.target.closest("li[data-i]");
    if (!li) return;
    e.preventDefault();
    choose(results[Number(li.dataset.i)]);
  });
  return { resolve: () => searchCompanies(items, input.value, 1)[0]?.row || null };
}

// When the data was updated, in words and without a clock time: "Now" (within 15 minutes), "Today",
// "Yesterday", or the date when it is older than that. { lower: true } for use inside a sentence.
function updatedWhen(iso, { lower = false } = {}) {
  const d = new Date(iso);
  if (isNaN(d)) return "–";
  const now = new Date();
  const dayStart = (x) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
  const days = Math.round((dayStart(now) - dayStart(d)) / 86400000);
  const word = days <= 0 ? t(now - d < 15 * 60000 ? "ui.now" : "ui.today") : days === 1 ? t("ui.yesterday") : null;
  if (!word) return date(iso);
  return lower ? word.toLocaleLowerCase(locale()) : word;
}

const LIST_COLS = [
  { key: "overall", label: () => t("ui.overallScore") },
  { key: "profitability", cls: "col-xl" },
  { key: "balanceSheet", cls: "col-xl" },
  { key: "growthLong", cls: "col-xl" },
  { key: "valuation", cls: "col-lg" },
  { key: "risk", inverse: true },
];
const SCORE_STEPS = [0, 50, 60, 70, 80];
const RISK_STEPS = [100, 50, 35, 20];
const CAP_STEPS = [0, 3e8, 2e9, 1e10, 2e11];
const DY_STEPS = [0, 0.01, 0.02, 0.04];
const DS_STEPS = [0, 55, 75];
const PE_STEPS = [0, 10, 15, 20, 30];
const DROP_STEPS = [0, 0.1, 0.2, 0.3];
const STYLE_KEYS = ["quality", "growth", "value", "income"];

async function renderList() {
  app.innerHTML = `<div class="skeleton"></div>`;
  const idx = await loadIndex();
  const sectors = [...new Set(idx.companies.map((c) => c.s).filter(Boolean))].sort((a, b) => sectorName(a).localeCompare(sectorName(b), lang()));
  const analyzed = idx.companies.filter((c) => c.sc).length;
  const watchMode = listState.filter === "watch";
  const exchanges = [...new Set(idx.companies.map((c) => c.ex).filter(Boolean))].sort();

  app.innerHTML = `
    <section class="glass hero">
      <div class="hero-head">
        <h1>TeraStock<b>X</b></h1>
        <div class="tagline">${esc(t("ui.tagline"))} ${esc(t("ui.slogan"))}</div>
      </div>
      <div class="hero-body">
        <p>${esc(t("ui.heroText"))}</p>
        <div class="hero-stats">
          <div class="hero-stat"><div class="v">${num(idx.companies.filter((c) => isNum(c.sc?.overall)).length, 0)}</div><div class="k">${esc(t("ui.ratedCompanies"))}</div></div>
          <button type="button" class="hero-stat hs-watch ${watchMode ? "on" : ""}" id="watch-btn" aria-pressed="${watchMode}"><div class="v">${starSvg(true)}<span id="watch-count">${getWatch().length}</span>${watchMode ? `<span class="hs-on">✓</span>` : ""}</div><div class="k">${esc(t("ui.watchlist"))}</div></button>
          <div class="hero-stat"><div class="v">${esc(updatedWhen(idx.generated))}</div><div class="k">${esc(t("ui.updatedLabel"))}</div></div>
        </div>
      </div>
      <img class="hero-art" src="assets/img/hero.svg" alt="" width="560" height="360">
    </section>
    ${watchMode ? "" : `<div id="home-pulse"></div>`}
    <div id="alerts"></div>
    ${installBanner()}
    <div class="controls">
      <label class="search">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4"/></svg>
        <input id="q" type="search" placeholder="${esc(t("ui.searchPlaceholder"))}" autocomplete="off" value="${esc(listState.q)}" aria-label="${esc(t("ui.searchPlaceholder"))}">
      </label>
      <select class="select" id="sector" aria-label="${esc(t("ui.sector"))}">
        <option value="">${esc(t("ui.allSectors"))}</option>
        ${sectors.map((s) => `<option value="${esc(s)}" ${s === listState.sector ? "selected" : ""}>${esc(sectorName(s))}</option>`).join("")}
      </select>
      <select class="select" id="filter" aria-label="Filter" ${watchMode ? "hidden" : ""}>
        ${["analyzed", "all"].map((f) => `<option value="${f}" ${listState.filter === f ? "selected" : ""}>${esc(t({ analyzed: "ui.onlyAnalyzed", all: "ui.allCompanies" }[f]))}</option>`).join("")}
      </select>
    </div>
    ${watchMode ? `<div class="watch-head"><h2 class="section-title" style="margin:0">★ ${esc(t("ui.watchlist"))}</h2><button type="button" class="link-btn small" id="watch-exit">‹ ${esc(t("ui.allCompanies"))}</button></div>` : ""}
    <details class="glass filters" id="filters" ${listState.filtersOpen ? "open" : ""}>
      <summary><span>${esc(t("ui.filtersAndScreens"))}</span> <span class="small muted" id="filters-count"></span></summary>
      <div class="filter-section" id="screens-label">${esc(t("ui.screensTitle"))}</div>
      <div class="screens" role="group" aria-labelledby="screens-label">
        ${SCREENS.map((sc) => `<button type="button" class="chip-toggle screen-chip ${["highRisk", "decliners"].includes(sc.id) ? "warn" : ""} ${listState.preset === sc.id ? "on" : ""}" data-screen="${sc.id}" aria-pressed="${listState.preset === sc.id}">${esc(t(`screens.${sc.id}.name`))}</button>`).join("")}
      </div>
      <p class="screen-desc small muted" id="screen-desc" ${listState.preset ? "" : "hidden"}></p>
      <div class="filter-section">${esc(t("ui.filters"))}</div>
      <div class="filter-grid">
        <label>${esc(t("ui.exchange"))}<select class="select" data-f="ex"><option value="">${esc(t("ui.allExchanges"))}</option>${exchanges.map((x) => `<option ${listState.ex === x ? "selected" : ""}>${esc(x)}</option>`).join("")}</select></label>
        <label>${esc(t("ui.minScore"))}<select class="select" data-f="minScore">${SCORE_STEPS.map((v) => `<option value="${v}" ${listState.minScore === v ? "selected" : ""}>${v ? `≥ ${v}` : esc(t("ui.anyValue"))}</option>`).join("")}</select></label>
        <label>${esc(t("ui.maxRisk"))}<select class="select" data-f="maxRisk">${RISK_STEPS.map((v) => `<option value="${v}" ${listState.maxRisk === v ? "selected" : ""}>${v < 100 ? `≤ ${v}` : esc(t("ui.anyValue"))}</option>`).join("")}</select></label>
        <label>${esc(t("ui.minCap"))}<select class="select" data-f="minCap">${CAP_STEPS.map((v) => `<option value="${v}" ${listState.minCap === v ? "selected" : ""}>${v ? `≥ ${money(v)}` : esc(t("ui.anyValue"))}</option>`).join("")}</select></label>
        <label>${esc(t("ui.minDividend"))}<select class="select" data-f="minDy">${DY_STEPS.map((v) => `<option value="${v}" ${listState.minDy === v ? "selected" : ""}>${v ? `≥ ${fmt(v, "pct0")}` : esc(t("ui.anyValue"))}</option>`).join("")}</select></label>
        <label>${esc(t("ui.minDivSafety"))}<select class="select" data-f="minDs">${DS_STEPS.map((v) => `<option value="${v}" ${listState.minDs === v ? "selected" : ""}>${v ? `≥ ${v} · ${esc(t(`dividend.${v >= 75 ? "safe" : "moderate"}`))}` : esc(t("ui.anyValue"))}</option>`).join("")}</select></label>
        <label>${esc(t("ui.maxPe"))}<select class="select" data-f="maxPe">${PE_STEPS.map((v) => `<option value="${v}" ${listState.maxPe === v ? "selected" : ""}>${v ? `≤ ${v}×` : esc(t("ui.anyValue"))}</option>`).join("")}</select></label>
        <label>${esc(t("ui.minDrop"))}<select class="select" data-f="minDrop">${DROP_STEPS.map((v) => `<option value="${v}" ${listState.minDrop === v ? "selected" : ""}>${v ? esc(t("ui.dropAtLeast", { p: fmt(v, "pct0") })) : esc(t("ui.anyValue"))}</option>`).join("")}</select></label>
      </div>
      <div class="filter-row">
        <span class="small muted">${esc(t("ui.styleFilter"))}</span>
        ${STYLE_KEYS.map((k) => `<button type="button" class="chip-toggle ${listState.styles.includes(k) ? "on" : ""}" data-style="${k}" aria-pressed="${listState.styles.includes(k)}">${esc(t(`styles.${k}`))}</button>`).join("")}
        <label class="check"><input type="checkbox" id="noCrit" ${listState.noCrit ? "checked" : ""}> ${esc(t("ui.noCritical"))}</label>
        <button type="button" class="btn" id="reset-filters">${esc(t("ui.reset"))}</button>
      </div>
    </details>
    <p class="small muted fuzzy-note" id="fuzzy-note" hidden></p>
    <div class="list-meta"><span id="count"></span><span>${esc(t("ui.analyzedOf", { a: num(analyzed, 0), n: num(idx.count, 0) }))}</span></div>
    <div class="glass table-wrap"><table class="list">
      <thead><tr>
        <th data-sort="t">${esc(t("ui.company"))}</th>
        <th class="num" id="xcol-h" hidden></th>
        <th class="num col-md" data-sort="mc">${esc(t("ui.marketCap"))}</th>
        ${LIST_COLS.map((c) => `<th class="num ${c.cls || ""}" data-sort="${c.key}">${esc(c.label ? c.label() : t(`dims.${c.key}.name`))}</th>`).join("")}
        <th class="num col-lg" data-sort="pe">${esc(t("ui.pe"))}</th>
        <th class="num col-lg" data-sort="dy">${esc(t("ui.dividendYieldShort"))}</th>
      </tr></thead>
      <tbody id="rows"></tbody>
    </table></div>
    <div id="dq-legend"></div>
    <div class="pager" id="pager"></div>
    ${idx.companies.some((c) => c.demo) ? `<p class="small muted" style="margin-top:16px">${esc(t("ui.demoNote"))}</p>` : ""}
  `;
  fitTagline();

  const draw = () => {
    const q = listState.q.trim();
    // Matches by ticker or name; typo matches ("trsla") only when nothing else matches.
    const scores = q ? scoreAll(searchItems(idx.companies), q) : null;
    const fuzzy = !!scores && scores.size > 0 && ![...scores.values()].some((v) => v >= STRONG);
    const note = document.getElementById("fuzzy-note");
    note.hidden = !fuzzy;
    note.textContent = fuzzy ? t("ui.searchFuzzy", { q }) : "";
    const watch = new Set(getWatch());
    const screen = screenById(listState.preset);
    // Extra column for screens ranked by a figure that is not already a column.
    const xcol = screen && ["ch", "ds", "dd", "pe"].includes(screen.col) ? screen.col : null;
    const xh = document.getElementById("xcol-h");
    xh.hidden = !xcol;
    xh.textContent = { ch: t("ui.colChangeFy"), ds: t("ui.dividendSafety"), dd: t("ui.colFromHigh"), pe: t("ui.pe") }[xcol] || "";
    const desc = document.getElementById("screen-desc");
    desc.hidden = !screen;
    desc.textContent = screen ? t(`screens.${screen.id}.desc`) : "";
    document.querySelectorAll("[data-screen]").forEach((b) => { const on = b.dataset.screen === listState.preset; b.classList.toggle("on", on); b.setAttribute("aria-pressed", String(on)); });
    const L = listState;
    let rows = idx.companies.filter((c) =>
      (L.filter !== "analyzed" || c.sc || q) && (L.filter !== "watch" || watch.has(c.t)) &&
      (!L.sector || c.s === L.sector) && (!L.ex || c.ex === L.ex) &&
      (!L.minScore || (c.sc?.overall ?? -1) >= L.minScore) &&
      (L.maxRisk >= 100 || (isNum(c.sc?.risk) && c.sc.risk <= L.maxRisk)) &&
      (!L.minCap || (c.mc ?? 0) >= L.minCap) &&
      (!L.minDy || (c.dy ?? 0) >= L.minDy) &&
      (!L.minDs || (c.ds ?? -1) >= L.minDs) &&
      (!L.maxPe || (isNum(c.pe) && c.pe > 0 && c.pe <= L.maxPe)) &&
      (!L.minDrop || (isNum(c.dd) && c.dd <= -L.minDrop)) &&
      (!L.styles.length || L.styles.every((st) => (c.st || []).includes(st))) &&
      (!L.noCrit || !(c.cf || []).length) &&
      (!scores || scores.has(c.t)) &&
      (!screen || screen.filter(c)));
    document.getElementById("filters-count").textContent = [screen ? t(`screens.${screen.id}.name`) : "", filtersActive() ? t("ui.filtersActive", { n: filtersActive() }) : ""].filter(Boolean).join(" · ");
    const k = listState.sort;
    const val = (c) => (k === "preset" ? (screen ? screen.rank(c) : c.sc?.overall) : k === "mc" ? c.mc : k === "pe" ? c.pe : k === "dy" ? c.dy : c.sc?.[k]);
    rows.sort((a, b) => {
      if (k === "t") return listState.dir * a.t.localeCompare(b.t);
      const va = val(a), vb = val(b);
      if (!isNum(va) && !isNum(vb)) return a.t.localeCompare(b.t);
      if (!isNum(va)) return 1;
      if (!isNum(vb)) return -1;
      return listState.dir * (va - vb) || a.t.localeCompare(b.t);
    });
    // Typo matches by closeness and size; otherwise the exact ticker or name first, then the chosen order.
    if (fuzzy) rows.sort((a, b) => scores.get(b.t) + popularity(b.mc) - (scores.get(a.t) + popularity(a.mc)));
    else if (scores) {
      const top = rows.filter((c) => scores.get(c.t) >= 950).sort((a, b) => scores.get(b.t) - scores.get(a.t));
      if (top.length) rows = [...top, ...rows.filter((c) => !top.includes(c))];
    }

    const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
    listState.page = Math.min(listState.page, pages - 1);
    const slice = rows.slice(listState.page * PAGE_SIZE, (listState.page + 1) * PAGE_SIZE);
    document.getElementById("count").textContent = t("ui.results", { n: num(rows.length, 0) });
    document.getElementById("rows").innerHTML = slice.length ? slice.map((c) => `
      <tr data-t="${esc(c.t)}" tabindex="0">
        <td>${companyCell(c, { watch })}</td>
        ${xcol === "ch" ? `<td class="num">${changePill(c.ch)}</td>` : xcol === "ds" ? `<td class="num">${scorePill(c.ds)}</td>` : xcol === "dd" ? `<td class="num">${isNum(c.dd) ? `<span class="pill tone-serious"><span class="dot"></span>${fmt(c.dd, "pct0")}</span>` : "–"}</td>` : xcol === "pe" ? `<td class="num">${isNum(c.pe) ? fmt(c.pe, "mult") : "–"}</td>` : ""}
        <td class="num col-md small">${isNum(c.mc) ? money(c.mc) : "–"}</td>
        ${LIST_COLS.map((col) => `<td class="num ${col.cls || ""}">${col.key === "overall" ? overallCell(c) : c.sc ? scorePill(c.sc[col.key], col.inverse) : "–"}</td>`).join("")}
        <td class="num col-lg small">${isNum(c.pe) ? fmt(c.pe, "mult") : "–"}</td>
        <td class="num col-lg small">${isNum(c.dy) && c.dy > 0 ? fmt(c.dy, "pct") : "–"}</td>
      </tr>`).join("") : `<tr><td colspan="${LIST_COLS.length + 4 + (xcol ? 1 : 0)}" class="empty">${esc(t(watchMode && !watch.size ? "ui.watchEmpty" : "ui.noResults"))}</td></tr>`;
    document.getElementById("dq-legend").innerHTML = dqLegend(slice);

    document.querySelectorAll("th[data-sort]").forEach((th) => {
      const on = th.dataset.sort === k;
      th.toggleAttribute("aria-sort", on);
      if (on) th.setAttribute("aria-sort", listState.dir > 0 ? "ascending" : "descending");
      th.textContent = th.textContent.replace(/ [▲▼]$/, "") + (on ? (listState.dir > 0 ? " ▲" : " ▼") : "");
    });
    document.getElementById("pager").innerHTML = pages > 1 ? `
      <button class="btn" data-p="-1" ${listState.page === 0 ? "disabled" : ""}>‹ ${esc(t("ui.prev"))}</button>
      <span class="small muted">${listState.page + 1} / ${pages}</span>
      <button class="btn" data-p="1" ${listState.page >= pages - 1 ? "disabled" : ""}>${esc(t("ui.next"))} ›</button>` : "";
  };

  const q = document.getElementById("q");
  let qTimer = null;
  q.addEventListener("input", () => { clearTimeout(qTimer); qTimer = setTimeout(() => { listState.q = q.value; listState.page = 0; draw(); }, 80); });
  q.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    clearTimeout(qTimer);
    if (listState.q !== q.value) { listState.q = q.value; listState.page = 0; draw(); }
    const first = document.querySelector("#rows tr[data-t]");
    if (first) location.hash = `#/c/${first.dataset.t}`;
  });
  document.getElementById("sector").addEventListener("change", (e) => { listState.sector = e.target.value; listState.page = 0; draw(); });
  app.querySelector(".screens").addEventListener("click", (e) => {
    const b = e.target.closest("[data-screen]"); if (!b) return;
    const id = listState.preset === b.dataset.screen ? "" : b.dataset.screen;
    if (watchMode) { location.hash = id ? `#/screen/${id}` : "#/"; return; }
    Object.assign(listState, { preset: id, sort: id ? "preset" : "overall", dir: -1, page: 0, filter: "analyzed" });
    document.getElementById("filter").value = "analyzed";
    // A shareable address for the chosen screen, without re-rendering the page.
    history.replaceState(null, "", id ? `#/screen/${id}` : "#/");
    draw();
  });
  document.getElementById("filter").addEventListener("change", (e) => { listState.filter = e.target.value; listState.page = 0; draw(); });
  document.querySelector("thead").addEventListener("click", (e) => {
    const th = e.target.closest("th[data-sort]"); if (!th) return;
    if (listState.sort === th.dataset.sort) listState.dir *= -1;
    else { listState.sort = th.dataset.sort; listState.dir = LOWER_FIRST.has(th.dataset.sort) ? 1 : -1; }
    draw();
  });
  const rowsEl = document.getElementById("rows");
  rowsEl.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    const tr = e.target.closest("tr[data-t]"); if (tr) location.hash = `#/c/${tr.dataset.t}`;
  });
  onWatchChange = () => {
    const n = document.getElementById("watch-count");
    if (n) n.textContent = getWatch().length;
    if (listState.filter === "watch") draw();
    drawAlerts();
  };
  rowsEl.addEventListener("keydown", (e) => { if (e.key === "Enter" && e.target.matches("tr[data-t]")) location.hash = `#/c/${e.target.dataset.t}`; });
  document.getElementById("pager").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-p]"); if (!b) return;
    listState.page += Number(b.dataset.p); draw(); window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const filters = document.getElementById("filters");
  filters.addEventListener("toggle", () => { listState.filtersOpen = filters.open; });
  filters.addEventListener("change", (e) => {
    const f = e.target.dataset.f;
    if (f) listState[f] = f === "ex" ? e.target.value : Number(e.target.value);
    if (e.target.id === "noCrit") listState.noCrit = e.target.checked;
    listState.page = 0; draw();
  });
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("[data-style]");
    if (b) {
      const k = b.dataset.style;
      listState.styles = listState.styles.includes(k) ? listState.styles.filter((x) => x !== k) : [...listState.styles, k];
      b.classList.toggle("on"); b.setAttribute("aria-pressed", String(b.classList.contains("on")));
      listState.page = 0; draw();
    }
    if (e.target.closest("#reset-filters")) {
      Object.assign(listState, { ex: "", minScore: 0, maxRisk: 100, minCap: 0, minDy: 0, minDs: 0, maxPe: 0, minDrop: 0, styles: [], noCrit: false, page: 0, preset: "", sort: listState.sort === "preset" ? "overall" : listState.sort });
      history.replaceState(null, "", watchMode ? "#/watchlist" : "#/");
      renderList();
    }
  });
  const drawAlerts = () => {
    const el = document.getElementById("alerts");
    const alerts = watchAlerts(idx);
    if (!el) return;
    el.innerHTML = alerts.length ? `<div class="glass alerts pad">
      <div class="section-title" style="margin:0 0 10px">${esc(t("ui.alertsTitle"))} <span class="pill tone-serious"><span class="dot"></span>${alerts.length}</span></div>
      <ul>${alerts.map((x) => `<li><span class="pill tone-${x.tone}"><span class="dot"></span>${esc(x.t)}</span> <a href="#/c/${encodeURIComponent(x.t)}">${esc(x.text)}</a></li>`).join("")}</ul>
      <button type="button" class="btn" id="alerts-seen">${esc(t("ui.alertsSeen"))}</button></div>` : "";
    document.getElementById("alerts-seen")?.addEventListener("click", () => {
      const snaps = {};
      for (const tk of getWatch()) snaps[tk] = snapOf(idx.companies.find((c) => c.t === tk));
      setSnaps(snaps); drawAlerts();
    });
  };
  draw();
  drawAlerts();
  document.getElementById("install-x")?.addEventListener("click", () => { try { localStorage.setItem("tsx-install-hide", "1"); } catch {} document.getElementById("install-banner")?.remove(); });
  // The watchlist opens here, in place of the full list (the news lines hide meanwhile); a second tap closes it.
  const toggleWatch = () => {
    if (listState.filter === "watch") listState.filter = listState.prevFilter || "analyzed";
    else { listState.prevFilter = listState.filter; listState.filter = "watch"; }
    listState.page = 0;
    if (location.hash && location.hash !== "#/") history.replaceState(null, "", "#/");
    renderList();
  };
  document.getElementById("watch-btn").addEventListener("click", toggleWatch);
  document.getElementById("watch-exit")?.addEventListener("click", toggleWatch);
  // The market and the top stories in one small block above the list; the arrows lead to the news page.
  if (!watchMode) loadPulse().then((p) => {
    const el = document.getElementById("home-pulse");
    if (el && p) el.innerHTML = homePulse(p);
  }).catch(() => {});
}

function filtersActive() {
  const L = listState;
  return [L.ex, L.minScore, L.maxRisk < 100, L.minCap, L.minDy, L.minDs, L.maxPe, L.minDrop, L.styles.length, L.noCrit].filter(Boolean).length;
}

// ---------- TeraScore Changes ----------

const changePill = (v) => (isNum(v) ? `<span class="pill tone-${v > 0 ? "good" : v < 0 ? "critical" : "none"}"><span class="dot"></span>${ltr(`${v > 0 ? "+" : ""}${v}`)}</span>` : "–");
const TREND_PERIODS = { ch: "ui.trendPeriodFy", c4: "ui.trendPeriod4w", c13: "ui.trendPeriod13w" };
const trendState = { period: "ch", sector: "", minCap: 2e9 };

async function renderTrend() {
  document.title = `${t("ui.navTrend")} | TeraStockX`;
  app.innerHTML = `<div class="skeleton"></div>`;
  const idx = await loadIndex();
  const sectors = [...new Set(idx.companies.map((c) => c.s).filter(Boolean))].sort((a, b) => sectorName(a).localeCompare(sectorName(b), lang()));
  app.innerHTML = `
    <div class="prose" style="max-width:none;margin-top:8px"><h1>${esc(t("ui.navTrend"))}</h1><p style="max-width:860px">${esc(t("ui.trendIntro"))}</p></div>
    <div class="controls">
      <select class="select" id="tr-period" aria-label="${esc(t("ui.trendPeriod"))}">${Object.entries(TREND_PERIODS).map(([k, l]) => `<option value="${k}" ${trendState.period === k ? "selected" : ""}>${esc(t(l))}</option>`).join("")}</select>
      <select class="select" id="tr-sector" aria-label="${esc(t("ui.sector"))}"><option value="">${esc(t("ui.allSectors"))}</option>${sectors.map((x) => `<option value="${esc(x)}" ${trendState.sector === x ? "selected" : ""}>${esc(sectorName(x))}</option>`).join("")}</select>
      <select class="select" id="tr-cap" aria-label="${esc(t("ui.minCap"))}">${CAP_STEPS.map((v) => `<option value="${v}" ${trendState.minCap === v ? "selected" : ""}>${v ? `${esc(t("ui.minCap"))}: ≥ ${money(v)}` : `${esc(t("ui.minCap"))}: ${esc(t("ui.anyValue"))}`}</option>`).join("")}</select>
    </div>
    <div id="tr-body"></div>`;
  const draw = () => {
    const k = trendState.period;
    const rows = idx.companies.filter((c) => isNum(c[k]) && isNum(c.sc?.overall) && (!trendState.sector || c.s === trendState.sector) && (c.mc ?? 0) >= trendState.minCap);
    const body = document.getElementById("tr-body");
    if (!rows.length) { body.innerHTML = `<div class="glass empty">${esc(t(k === "ch" ? "ui.noResults" : "ui.trendWeeklyEmpty"))}</div>`; return; }
    const watch = new Set(getWatch());
    const list = (items) => `<div class="glass table-wrap"><table class="list"><thead><tr><th>${esc(t("ui.company"))}</th><th class="num">${esc(t("ui.overallScore"))}</th><th class="num">${esc(t("ui.trendChange"))}</th></tr></thead><tbody>
      ${items.map((c) => `<tr data-t="${esc(c.t)}" tabindex="0"><td>${companyCell(c, { watch })}</td>
        <td class="num">${scorePill(c.sc.overall)}<br><span class="small muted">${esc(t("ui.trendFrom", { v: c.sc.overall - c[k] }))}</span></td><td class="num">${changePill(c[k])}</td></tr>`).join("")}</tbody></table></div>${dqLegend(items)}`;
    const up = [...rows].sort((a, b) => b[k] - a[k]).filter((c) => c[k] > 0).slice(0, 25);
    const down = [...rows].sort((a, b) => a[k] - b[k]).filter((c) => c[k] < 0).slice(0, 25);
    body.innerHTML = `<div class="trend-cols">
      <section><h2 class="section-title">↗ ${esc(t("ui.trendUp"))}</h2>${up.length ? list(up) : `<div class="glass empty">–</div>`}</section>
      <section><h2 class="section-title">↘ ${esc(t("ui.trendDown"))}</h2>${down.length ? list(down) : `<div class="glass empty">–</div>`}</section>
    </div>
    <p class="small muted" style="margin-top:16px">${esc(t("ui.trendNote"))}</p>`;
  };
  document.getElementById("tr-period").addEventListener("change", (e) => { trendState.period = e.target.value; draw(); });
  document.getElementById("tr-sector").addEventListener("change", (e) => { trendState.sector = e.target.value; draw(); });
  document.getElementById("tr-cap").addEventListener("change", (e) => { trendState.minCap = Number(e.target.value); draw(); });
  document.getElementById("tr-body").addEventListener("click", (e) => { if (e.target.closest("a")) return; const tr = e.target.closest("tr[data-t]"); if (tr) location.hash = `#/c/${tr.dataset.t}`; });
  draw();
}

// Weekly TeraScore snapshots of the current methodology (older engine versions are not comparable).
const weeklyOf = (c) => (c.scoreHistory?.weekly || []).filter((w) => (w[3] || "2.0") === ENGINE_SERIES);

// Company page section: point-in-time score per fiscal year plus weekly snapshots.
function trendView(c, history, row) {
  const weekly = weeklyOf(c).map(([d, v]) => [d, v]);
  if (!history.length && !weekly.length) return `<div class="glass empty small">${esc(t("ui.notEnough"))}</div>`;
  const chips = [["ui.trendPeriodFy", row?.ch], ["ui.trendPeriod4w", row?.c4], ["ui.trendPeriod13w", row?.c13]]
    .filter(([, v]) => isNum(v)).map(([l, v]) => `<div class="fact"><div class="k">${esc(t(l))}</div><div class="v">${changePill(v)}</div></div>`).join("");
  return `${chips ? `<div class="facts" style="margin:0 0 12px">${chips}</div>` : ""}
    <div class="charts">
      ${barChart(t("ui.trendAnnualChart"), t("ui.trendAnnualSub"), history.map((h) => [h.year, h.overall]), (v) => `${v}`, t("ui.notEnough"))}
      ${weekly.length >= 3 ? barChart(t("ui.trendWeeklyChart"), t("ui.trendWeeklySub"), weekly.map(([d, v]) => [d.slice(5), v]), (v) => `${v}`, t("ui.notEnough")) : ""}
    </div>`;
}

// ---------- Major events ----------

// Event item codes contain a dot ("3.01"), so they are looked up directly rather than via a t() path.
const eventName = (item) => dict().events?.[item] ?? EN.events[item] ?? item;
// "Most important": critical events of any company, major events of companies above $1 billion.
const isTopEvent = (e) => e.severity >= 5 || (e.severity >= 4 && (e.mc ?? 0) >= 1e9);
const SEV_TONE = { 5: "critical", 4: "serious", 3: "warning", 2: "none" };
function eventCard(e, withCompany = true) {
  const sev = e.severity;
  return `<div class="glass event">
    <div class="event-head">
      <span class="pill tone-${SEV_TONE[sev]}"><span class="dot"></span>${esc(t(`ui.sev${sev}`))}</span>
      <span class="small muted">${esc(date(e.date))}</span>
    </div>
    ${withCompany ? (() => { const row = fullRow(e); return `<div class="event-co-row">${starBtn(e.t, getWatch().includes(e.t))}<a class="event-co" href="#/c/${encodeURIComponent(e.t)}">${logo(row)}<span><span class="tick">${esc(e.t)}</span>${row.ex ? `<span class="badge ex">${esc(row.ex)}</span>` : ""} <span class="muted">${esc(e.n)}</span></span></a></div>`; })() : ""}
    <div class="event-items">${e.items.map((i) => `<span>${esc(eventName(i))} <span class="small muted">(8-K ${esc(i)})</span></span>`).join("")}</div>
    ${e.title ? `<p class="news-title"><q lang="en">${esc(e.title)}</q></p>` : ""}
    <a class="small" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(t("ui.viewFiling"))} ↗</a>
  </div>`;
}

// ---------- Top stories ----------

// Big news of large companies: the kind of news, the move of the share price (also before the open and after
// the close) and the headline of the company's own press release, in its original English.
const KIND_TONE = { critical: "critical", cyber: "serious", major: "serious", restructuring: "warning" };
const cap1 = (s) => (s ? s.charAt(0).toLocaleUpperCase(locale()) + s.slice(1) : s);
// A small "i" that opens an explanation (a tap is enough on phones).
const infoTip = (text) => `<details class="info-tip"><summary aria-label="Info">ⓘ</summary><p class="small">${esc(text)}</p></details>`;

// The number next to a story, with what it measures: next to news the change since the news (from the last
// close before it); next to a big price move the move itself, with its session (today, before the open,
// after the close, the last session).
function storyMove(s) {
  if (s.kind !== "move") return isNum(s.since) ? { v: s.since, label: t("pulse.sinceNews") } : null;
  return isNum(s.move) ? { v: s.move, label: t(`pulse.when.${s.when || "day"}`) } : null;
}

// One line per story: company, move, kind and time, then the headline (three lines at most).
function storyRow(s) {
  const row = fullRow(s);
  const when = s.at || (s.date ? `${s.date}T12:00:00` : null);
  const m = storyMove(s);
  return `<div class="nrow story-row">
    ${starBtn(s.t, getWatch().includes(s.t))}
    <a class="nrow-logo" href="#/c/${encodeURIComponent(s.t)}" tabindex="-1" aria-hidden="true">${logo(row)}</a>
    <div class="nrow-main">
      <div class="nrow-top"><a class="tick" href="#/c/${encodeURIComponent(s.t)}">${esc(s.t)}</a><span class="nrow-name muted">${esc(coName(s))}</span>
        <span class="pill tone-${KIND_TONE[s.kind] || "none"} nrow-kind"><span class="dot"></span>${esc(t(`pulse.kind.${s.kind}`))}</span>${when && s.kind !== "move" ? `<span class="small muted">${esc(updatedWhen(when))}</span>` : ""}</div>
      ${s.title ? `<div class="nrow-title clamp3" lang="en" title="${esc(s.title)}">${esc(s.title)}${s.url ? ` <a class="nrow-src" href="${esc(s.url)}" target="_blank" rel="noopener" title="${esc(t("pulse.readMore"))}">SEC ↗</a>` : ""}</div>` : ""}
    </div>
    ${m ? `<div class="nrow-move">${dayChange(m.v)}<span class="small muted">${esc(m.label)}</span></div>` : ""}
  </div>`;
}
function storiesView(p, { limit = 8 } = {}) {
  const list = (p?.stories || []).slice(0, limit);
  return `<h2 class="section-title news-sec">${esc(t("pulse.storiesTitle"))} ${infoTip(`${t("pulse.storiesNote")} ${t("pulse.sinceNote")}`)}</h2>
    ${list.length ? `<div class="glass nlist">${list.map(storyRow).join("")}</div>` : `<div class="glass empty small">${esc(t("pulse.storiesNone"))}</div>`}`;
}

// Events of the 8-K list, one line each; the most interesting first: severity, company size, how recent.
const SEV_W = { 5: 60, 4: 40, 3: 22, 2: 10 };
const eventInterest = (e, now = Date.now()) => (SEV_W[e.severity] || 0) + 6 * Math.log10(Math.max(e.mc || 1e7, 1e7)) - Math.min(60, (now - new Date(`${e.date}T12:00:00`)) / 86400000) * 1.2 + (e.title ? 6 : 0);
function eventRow(e) {
  const row = fullRow(e);
  return `<div class="nrow event-row">
    ${starBtn(e.t, getWatch().includes(e.t))}
    <a class="nrow-logo" href="#/c/${encodeURIComponent(e.t)}" tabindex="-1" aria-hidden="true">${logo(row)}</a>
    <div class="nrow-main">
      <div class="nrow-top"><a class="tick" href="#/c/${encodeURIComponent(e.t)}">${esc(e.t)}</a><span class="nrow-name muted">${esc(coName(e))}</span>
        <span class="pill tone-${SEV_TONE[e.severity]} nrow-kind"><span class="dot"></span>${esc(t(`ui.sev${e.severity}`))}</span><span class="small muted">${esc(date(e.date))}</span></div>
      <div class="nrow-title">${e.items.map((i) => esc(eventName(i))).join(" · ")}${e.title ? ` – <span lang="en">${esc(e.title)}</span>` : ""} <a class="nrow-src" href="${esc(e.url)}" target="_blank" rel="noopener" title="${esc(t("ui.viewFiling"))}">8-K ↗</a></div>
    </div>
  </div>`;
}

async function renderNews() {
  document.title = `${t("ui.newsTitle")} | TeraStockX`;
  app.innerHTML = `<div class="skeleton"></div>`;
  const [n, pulse] = await Promise.all([loadNews(), loadPulse(), loadIndex().catch(() => null)]);
  const state = { filter: "top", shown: 12 };
  // The most interesting first: top stories, the market (indices, themes, sectors), the biggest moves, the
  // major events, then the new reports, TeraScore changes and new listings.
  app.innerHTML = `
    <div class="prose news-head"><h1>${esc(t("ui.newsTitle"))}</h1></div>
    ${storiesView(pulse)}
    ${marketView(pulse)}
    <h2 class="section-title news-sec">${esc(t("ui.eventsTitle"))} ${infoTip(t("ui.newsIntro"))}</h2>
    <div class="controls news-controls"><select class="select" id="sev">
      <option value="top">${esc(t("ui.newsTop"))}</option><option value="4">${esc(t("ui.onlyCritical"))}</option><option value="3">${esc(t("ui.allSeverities"))}</option>
    </select></div>
    <div id="news-list"></div>
    ${moreMarketView(pulse)}`;
  const draw = () => {
    const now = Date.now();
    const all = (n.events || []).filter((e) => (state.filter === "top" ? isTopEvent(e) : e.severity >= Number(state.filter)))
      .map((e) => ({ e, w: eventInterest(e, now) })).sort((a, b) => b.w - a.w).map((x) => x.e).slice(0, 60);
    const list = all.slice(0, state.shown);
    document.getElementById("news-list").innerHTML = list.length
      ? `<div class="glass nlist">${list.map(eventRow).join("")}</div>${all.length > list.length ? `<button type="button" class="btn more-btn" id="news-more">${esc(t("ui.showMore"))} (${all.length - list.length})</button>` : ""}`
      : `<div class="glass empty">${esc(t("ui.newsEmpty"))}</div>`;
    document.getElementById("news-more")?.addEventListener("click", () => { state.shown += 20; draw(); });
  };
  document.getElementById("sev").addEventListener("change", (e) => { state.filter = e.target.value; state.shown = 12; draw(); });
  app.querySelectorAll("table.pulse").forEach((tb) => tb.addEventListener("click", (e) => { if (e.target.closest("a, button")) return; const tr = e.target.closest("tr[data-t]"); if (tr) location.hash = `#/c/${tr.dataset.t}`; }));
  draw();
}

// ---------- Market today ----------

const dayChange = (v) => (isNum(v) ? `<span class="pill tone-${v > 0 ? "good" : v < 0 ? "critical" : "none"} daychg"><span class="dot"></span>${ltr(`${v > 0 ? "+" : ""}${num(v, 2)}%`)}</span>` : "");
const INDEX_EN = { SPY: "S&P 500", QQQ: "Nasdaq 100", DIA: "Dow Jones", IWM: "Russell 2000" };
// Index names in the page's language ("标普500" in Chinese), else the usual English ones.
const INDEX_NAMES = new Proxy(INDEX_EN, { get: (o, k) => dict().pulse?.indexNames?.[k] ?? o[k] });

// Home page: "Market today" as a small title, the three numbers on one line under it, then the top stories
// to swipe; every part leads to the news page.
function homePulse(p) {
  // Before the open the regular changes are the previous day's: the pre-market changes are shown instead.
  const pre = p.session === "pre" && (p.indices || []).some((e) => isNum(e.xc));
  const ai = pre ? null : (p.themes || []).find((x) => x.id === "ai");
  const chg = (v) => `<b class="${v > 0 ? "up" : v < 0 ? "down" : ""}">${ltr(`${v > 0 ? "+" : ""}${num(v, 2)}%`)}</b>`;
  const market = (p.indices || []).filter((e) => isNum(pre ? e.xc : e.dc)).slice(0, 2).map((e) => `<span class="hp-item">${esc(INDEX_NAMES[e.t] || e.t)} ${chg(pre ? e.xc : e.dc)}</span>`);
  if (ai && isNum(ai.change)) market.push(`<span class="hp-item">${esc(t("pulse.themesShort.ai"))} ${chg(ai.change)}</span>`);
  const stories = (p.stories || []).slice(0, 6).map((s) => {
    const m = storyMove(s);
    return `<a class="hp-story" href="#/c/${encodeURIComponent(s.t)}" title="${esc(`${t(`pulse.kind.${s.kind}`)}${s.title ? `: ${s.title}` : ""}`)}"><b>${esc(s.t)}</b>${m ? `${chg(m.v)}<span class="hp-when">${esc(m.label)}</span><span class="hp-when" aria-hidden="true">·</span>` : ""}<span class="hp-kind">${esc(t(`pulse.kind.${s.kind}`))}</span></a>`;
  });
  if (!market.length && !stories.length) return "";
  // Before the open the pre-market changes are shown; when the market is closed, the last session's.
  const session = pre ? t("pulse.when.pre") : p.session === "closed" ? t("pulse.when.last") : "";
  return `<div class="glass home-pulse">
    <a class="hp-title" href="#/news"><span>${esc(t("ui.marketToday"))}${session ? ` <span class="muted">· ${esc(session)}</span>` : ""}</span><span class="hp-more" aria-hidden="true">›</span></a>
    ${market.length ? `<div class="hp-items hp-market">${market.join("")}</div>` : ""}
    ${stories.length ? `<div class="hp-line"><a class="hp-label" href="#/news">${esc(t("pulse.storiesTitle"))}</a><div class="hp-items scroll">${stories.join("")}</div></div>` : ""}
  </div>`;
}


function pulseRows(list, extra) {
  const watch = new Set(getWatch());
  return list.map((r) => `<tr data-t="${esc(r.t)}" tabindex="0"><td>${companyCell({ ...r, ...fullRow(r) }, { watch })}</td>
    <td class="num col-md small">${isNum(r.mc) ? money(r.mc) : "–"}</td><td class="num">${extra(r)}</td></tr>`).join("");
}
// A compact table: the first rows, the rest behind "Show more".
function pulseTable(title, list, head, extra, first = 5) {
  if (!list.length) return `<div class="pulse-block"><div class="score-name">${esc(title)}</div><div class="glass empty small">${esc(t("pulse.none"))}</div></div>`;
  const table = (rows) => `<div class="glass table-wrap"><table class="list pulse compact"><thead><tr><th>${esc(t("ui.company"))}</th><th class="num col-md">${esc(t("ui.marketCap"))}</th><th class="num">${esc(head)}</th></tr></thead><tbody>${pulseRows(rows, extra)}</tbody></table></div>`;
  return `<div class="pulse-block"><div class="score-name">${esc(title)}</div>${table(list.slice(0, first))}
    ${list.length > first ? `<details class="more-rows"><summary>${esc(t("ui.showMore"))} (${list.length - first})</summary>${table(list.slice(first))}</details>` : ""}</div>`;
}

// The market: indices, themes and sectors in a small space, then the biggest moves.
function marketView(p) {
  if (!p || !(p.indices?.length || p.themes?.length || p.gainers?.length)) return `<div class="glass empty small">${esc(t("pulse.notYet"))}</div>`;
  const pct1 = (v) => ltr(`${v > 0 ? "+" : ""}${num(v, 1)}%`);
  const themes = (p.themes || []).map((x) => `<span class="theme-chip" title="${esc(t("pulse.bestWorst", { b: `${x.best.t} ${pct1(x.best.dc)}`, w: `${x.worst.t} ${pct1(x.worst.dc)}` }))}">${esc(t(`pulse.themes.${x.id}`))} ${dayChange(x.change)}</span>`).join("");
  const maxAbs = Math.max(0.5, ...(p.sectors || []).map((x) => Math.abs(x.change)));
  const sectorBars = (p.sectors || []).map((x) => `<div class="sec-row"><span>${esc(sectorName(x.s))}</span><span class="sec-bar"><span class="${x.change >= 0 ? "up" : "down"}" style="width:${Math.round((Math.abs(x.change) / maxAbs) * 50)}%"></span></span><span class="num">${ltr(`${x.change > 0 ? "+" : ""}${num(x.change, 2)}%`)}</span></div>`).join("");
  return `
    <div class="pulse-head news-sec">
      <h2 class="section-title" style="margin:0">${esc(t("ui.marketToday"))}</h2>
      <span class="small muted">${esc(t("pulse.asOfShort", { d: updatedWhen(p.quotesAt || p.generated, { lower: true }) }))}</span>
    </div>
    ${p.session === "pre" ? `<p class="glass session-note small">${esc(t("pulse.preNote", { d: p.prevDay ? date(p.prevDay) : "–" }))}</p>` : p.session === "post" ? `<p class="glass session-note small">${esc(t("pulse.postNote"))}</p>` : ""}
    <div class="theme-chips">${(p.indices || []).filter((e) => isNum(e.dc) || isNum(e.xc)).map((e) => `<span class="theme-chip index" title="${esc(`${e.t} · ${fmt(e.px, "usd")}`)}">${esc(INDEX_NAMES[e.t] || e.t)} ${dayChange(e.dc)}${isNum(e.xc) && e.xs ? `<span class="small muted">${esc(t(`pulse.when.${e.xs}`))}</span>${dayChange(e.xc)}` : ""}</span>`).join("")}${themes}</div>
    <div class="market-cols">
      ${sectorBars ? `<div><div class="score-name">${esc(t("pulse.sectorsTitle"))}</div><div class="glass pad sec-list compact">${sectorBars}</div></div>` : ""}
      ${pulseTable(t("pulse.gainers"), p.gainers || [], t("pulse.today"), (r) => dayChange(r.dc))}
      ${pulseTable(t("pulse.losers"), p.losers || [], t("pulse.today"), (r) => dayChange(r.dc))}
    </div>`;
}
// Less urgent market news, below the major events.
function moreMarketView(p) {
  if (!p) return "";
  return `<div class="pulse-grid news-sec">
      ${pulseTable(t("pulse.reports"), p.reports || [], t("pulse.filed"), (r) => `<span class="small">${esc(r.form)} · ${esc(date(r.date))}</span>`)}
      ${pulseTable(t("pulse.scoreMoves"), p.scoreMoves || [], t("ui.colChangeFy"), (r) => `${changePill(r.d1)} <span class="small muted">→ ${r.o ?? "–"}</span>`)}
      ${pulseTable(t("pulse.newListings"), p.newListings || [], t("pulse.listed"), (r) => `<span class="small">${esc(r.fs ? date(r.fs) : r.ipo ? String(r.ipo) : "–")}</span>`)}
    </div>
    <p class="small muted">${esc(t("pulse.note"))} ${esc(t("pulse.asOf", { d: updatedWhen(p.quotesAt || p.generated, { lower: true }) }))}</p>`;
}

// A listed company without an annual report yet (e.g. a recent IPO): what is known so far.
function notAnalyzedView(c) {
  const mk = c.market || {};
  const fact = (k, v) => `<div class="fact"><div class="k">${esc(t(k))}</div><div class="v">${v}</div></div>`;
  return `<div class="glass pad">
      <div class="score-name">${esc(t(c.note === "noSecFiling" ? "pulse.noFilings" : "pulse.notScoredYet"))}</div>
      <p class="small muted" style="margin:6px 0 14px">${esc(t("pulse.notScoredText"))}</p>
      <div class="facts">
        ${fact("ui.pfPrice", isNum(mk.price) ? `${fmt(mk.price, "usd")} ${dayChange(mk.changePct)}` : "–")}
        ${fact("ui.marketCap", isNum(mk.marketCap) ? money(mk.marketCap) : "–")}
        ${fact("pulse.listed", c.firstSeen ? esc(date(c.firstSeen)) : mk.ipoYear ? String(mk.ipoYear) : "–")}
        ${fact("pulse.lastReport", c.lastReport ? `${esc(c.lastReport.form)} · ${esc(date(c.lastReport.date))}` : "–")}
      </div>
    </div>
    ${c.quarterly?.length ? `<h2 class="section-title">${esc(t("ui.periodQuarterly"))}</h2>${quarterTable(c)}` : ""}`;
}

// ---------- Financial data page ----------

async function renderData(ticker) {
  document.title = `${t("ui.dataTitle")} | TeraStockX`;
  app.innerHTML = `<div class="skeleton"></div>`;
  const idx = await loadIndex();
  const c = ticker ? await loadCompany(ticker) : null;
  const top = idx.companies.filter((x) => isNum(x.mc)).sort((a, b) => b.mc - a.mc).slice(0, 16);
  const chips = (top.length ? top : idx.companies.filter((x) => x.sc).slice(0, 16));
  app.innerHTML = `
    <div class="prose" style="max-width:none;margin-top:8px"><h1>${esc(t("ui.dataTitle"))}</h1><p style="max-width:820px">${esc(t("ui.dataIntro"))}</p></div>
    <div class="compare-pick">
      ${pickerField("data-pick", t("ui.dataPick"), ticker || "")}
    </div>
    ${c ? `<div class="company-head" style="margin-bottom:14px"><div><h2 style="font-size:24px">${esc(c.name)}</h2>
        <div class="sub"><span class="ticker-chip">${esc(c.ticker)}</span>${c.sector ? `<span>· ${esc(sectorName(c.sector))}</span>` : ""}</div></div>
        <a class="btn btn-primary" href="#/c/${encodeURIComponent(c.ticker)}">${esc(t("ui.openAnalysis"))} ›</a></div>
        ${rawView(c, await analyzeWith(c), true)}`
      : `<div class="styles">${chips.map((x) => `<a class="tag" href="#/data/${encodeURIComponent(x.t)}">${esc(x.t)}</a>`).join("")}</div>
         ${ticker ? `<div class="glass empty" style="margin-top:14px">${esc(t("ui.notFound", { t: ticker }))}</div>` : ""}`}`;
  attachPicker(document.getElementById("data-pick"), searchItems(idx.companies), (row) => { location.hash = `#/data/${encodeURIComponent(row.t)}`; });
  if (c) wireRaw(app, c);
}

// ---------- Company page ----------

async function renderCompany(ticker) {
  app.innerHTML = `<div class="skeleton"></div>`;
  const [c, idx] = await Promise.all([loadCompany(ticker), loadIndex().catch(() => null)]);
  if (!c) {
    app.innerHTML = `<a class="back" href="#/">‹ ${esc(t("ui.back"))}</a><div class="glass empty">${esc(t("ui.notFound", { t: ticker }))}</div>`;
    return;
  }
  const a = await analyzeWith(c);
  const history = a.ok ? scoreHistory(c, { benchmarks: await loadBenchmarks() }) : [];
  document.title = `${c.ticker} · ${c.name} | TeraStockX`;
  const watched = getWatch().includes(c.ticker);
  const mk = c.market || {};
  const row = idx?.byT?.get(c.ticker) || null;

  app.innerHTML = `
    <a class="back" href="#/">‹ ${esc(t("ui.back"))}</a>
    <div class="company-head">
      <div class="head-id">
        ${logo(row || { t: c.ticker, n: c.name }, "lg")}
        <div>
        <h1>${esc(coName({ t: c.ticker, n: c.name }))}</h1>${dict().names?.[c.ticker] ? `<div class="small muted">${esc(c.name)}</div>` : ""}
        <div class="sub">
          <span class="ticker-chip">${esc(c.ticker)}</span><span class="badge ex">${esc(c.exchange || "NASDAQ")}</span>${classBadge(row)}${row && isNewListing(row) ? `<span class="badge new">${esc(t("dq.newBadge"))}</span>` : ""}
          ${c.country ? `<span>· ${esc(c.country)}</span>` : ""}
          ${c.sector ? `<span>· ${esc(sectorName(c.sector))}</span>` : ""}
          ${c.industry ? `<span>· ${esc(c.industry)}</span>` : ""}
          ${a.ok ? `<span>· ${esc(t("ui.lastFy", { y: a.latestYear }))}</span>` : ""}
        </div>
        ${a.ok && isNum(a.scores.overall) && isNum(a.completeness) && a.completeness < 100 ? `<div class="coverage-badge ${a.completeness < PARTIAL_BELOW ? "low" : ""}" title="${esc(t("dq.legend", { s: MISSING_DIMENSION_SCORE }))}">${DQ_HALF}<span>${esc(t("dq.coverageBadge", { p: a.completeness }))}</span></div>` : ""}
        </div>
      </div>
      <div class="head-actions">
        ${isNum(mk.price) ? `<div class="quote"><div class="px">${fmt(mk.price, "usd")} ${dayChange(mk.changePct)}</div>${isNum(mk.ext?.changePct) ? `<div class="small muted ext-quote">${esc(cap1(t("pulse.extLabel", { w: t(`pulse.when.${mk.ext.session}`), p: fmt(mk.ext.price, "usd") })))} ${dayChange(mk.ext.changePct)}</div>` : ""}<div class="mc">${esc(t("ui.marketCap"))}: ${a.ok && isNum(a.metrics.marketCap) ? money(a.metrics.marketCap) : isNum(mk.marketCap) ? money(mk.marketCap) : "–"}</div></div>` : ""}
        <button class="btn" id="watch">${starSvg(watched)}<span>${esc(t(watched ? "ui.removeWatch" : "ui.addWatch"))}</span></button>
        <a class="btn" href="#/compare/${encodeURIComponent(c.ticker)}">${esc(t("ui.compareWith"))}</a>
        <a class="btn" href="#/portfolio/${encodeURIComponent(c.ticker)}">${esc(t(getPortfolio().some((h) => h.t === c.ticker) ? "ui.inPortfolio" : "ui.addPortfolio"))}</a>
        ${a.ok ? `<a class="btn" href="#/report/${encodeURIComponent(c.ticker)}">${esc(t("ui.pdfReport"))}</a>` : ""}
      </div>
    </div>
    <div class="glass tabs" role="tablist">
      <button class="tab" role="tab" aria-selected="true" data-tab="analysis">${esc(t("ui.tabAnalysis"))}</button>
      <button class="tab" role="tab" aria-selected="false" data-tab="raw">${esc(t("ui.tabRaw"))}</button>
    </div>
    ${c.demo ? `<div class="notice"><span>ℹ️</span><span>${esc(t("ui.demoNotice"))}</span></div>` : ""}
    <div id="tab-analysis">${a.ok ? analysisView(c, a, idx, history) : notAnalyzedView(c)}</div>
    <div id="tab-raw" class="hidden">${rawView(c, a)}</div>`;

  app.querySelector(".tabs").addEventListener("click", (e) => {
    const b = e.target.closest(".tab"); if (!b) return;
    app.querySelectorAll(".tab").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
    document.getElementById("tab-analysis").classList.toggle("hidden", b.dataset.tab !== "analysis");
    document.getElementById("tab-raw").classList.toggle("hidden", b.dataset.tab !== "raw");
  });
  document.getElementById("watch").addEventListener("click", (e) => {
    const on = toggleWatch(c.ticker, idx?.companies.find((x) => x.t === c.ticker));
    e.currentTarget.innerHTML = `${starSvg(on)}<span>${esc(t(on ? "ui.removeWatch" : "ui.addWatch"))}</span>`;
  });
  wireCharts(app);
  wirePeers(app);
  wireRaw(app, c);
}

const riskExplain = () => t("ui.riskExplain", {
  c: FLAG_PENALTY.critical, w: FLAG_PENALTY.warning, m: Math.round(MARKET_RISK_SHARE * 100), f: Math.round((1 - MARKET_RISK_SHARE) * 100),
  bs: Math.round(RISK_WEIGHTS.balanceSheet * 100), co: Math.round(RISK_WEIGHTS.consistency * 100), cf: Math.round(RISK_WEIGHTS.cashFlow * 100),
  pr: Math.round(RISK_WEIGHTS.profitability * 100), li: Math.round(RISK_WEIGHTS.liquidity * 100),
});

// Home: the slogan ("…, made clear. The smart tool for investors.") is one line where it fits at a comfortable
// size (laptops, tablets) and two balanced lines on phones, where the text shrinks a little if needed.
// Phones: tagline and slogan on two balanced lines. Tablets and laptops: one line, shrunk to fit if needed
// (but never below SLOGAN_ONE_LINE_MIN; a screen too narrow for that gets the two balanced lines too).
const SLOGAN_ONE_LINE_MIN = 15;
const PHONE_WIDTH = window.matchMedia("(max-width: 640px)");
function fitTagline() {
  const el = document.querySelector(".hero .tagline");
  if (!el) return;
  el.style.fontSize = "";
  el.classList.remove("two-lines");
  el.classList.add("one-line");
  const base = parseFloat(getComputedStyle(el).fontSize);
  const avail = el.parentElement.clientWidth;
  const oneLine = el.scrollWidth > avail ? Math.floor(((base * avail) / el.scrollWidth) * 4) / 4 : base;
  if (!PHONE_WIDTH.matches && oneLine >= SLOGAN_ONE_LINE_MIN) {
    let fs = oneLine;
    el.style.fontSize = `${fs}px`;
    while (el.scrollWidth > el.parentElement.clientWidth && fs > SLOGAN_ONE_LINE_MIN) { fs -= 0.25; el.style.fontSize = `${fs}px`; }
    return;
  }
  el.classList.remove("one-line");
  el.classList.add("two-lines");
  const lines = () => Math.round(el.getBoundingClientRect().height / parseFloat(getComputedStyle(el).lineHeight));
  let fs = base;
  while (lines() > 2 && fs > 13) { fs -= 0.5; el.style.fontSize = `${fs}px`; }
}
// Bottom tab bar (phones, tablets): if a label does not fit its tab in the chosen language, all labels get the
// same slightly smaller font (down to 8px), so every tab stays readable and the row stays even.
const TAB_LABEL_MIN = 8;
function fitTabLabels() {
  const labels = [...document.querySelectorAll("#tabbar .nav-label")];
  labels.forEach((l) => { l.style.fontSize = ""; });
  const shown = labels.filter((l) => l.offsetParent && l.clientWidth > 0);
  if (!shown.length) return;
  const base = parseFloat(getComputedStyle(shown[0]).fontSize);
  const ratio = Math.min(1, ...shown.map((l) => l.clientWidth / l.scrollWidth));
  if (ratio >= 1) return;
  const fs = Math.max(TAB_LABEL_MIN, Math.floor(base * ratio * 4) / 4);
  labels.forEach((l) => { l.style.fontSize = `${fs}px`; });
}
let fitTimer = 0;
window.addEventListener("resize", () => { clearTimeout(fitTimer); fitTimer = setTimeout(() => { fitTagline(); fitTabLabels(); }, 150); });

// Extra line under a metric's value: the 3-year scoring basis, or why a special rule applied.
function partNote(p, cur) {
  if (p.netCashLoss) return `<br><span class="median">${esc(t("ui.netCashLoss", { s: NET_CASH_LOSS_SCORE }))}</span>`;
  if (p.cap) return `<br><span class="median">${esc(t("ui.runwayCap"))}</span>`;
  if (isNum(p.basis) && isNum(p.value) && Math.abs(p.basis - p.value) > Math.max(0.001, Math.abs(p.value) * 0.01)) return `<br><span class="median nowrap">${esc(t("ui.basis3y"))}: ${fmt(p.basis, METRIC_FORMAT[p.key], cur)}</span>`;
  return "";
}

// What lifts and what lowers the TeraScore: each area's weight × (score − 50), from a neutral 50.
const signed = (v) => ltr(`${v >= 0 ? "+" : "−"}${num(Math.abs(v), 1)}`);
function breakdownView(a) {
  const items = a.breakdown;
  if (!items?.length || !isNum(a.scores.overall)) return "";
  const rows = [...items].sort((x, y) => y.contribution - x.contribution);
  const max = Math.max(4, ...rows.map((x) => Math.abs(x.contribution)));
  const top = rows.filter((x) => x.contribution >= 0.5).slice(0, 2).map((x) => t(`dims.${x.key}.name`));
  const low = rows.filter((x) => x.contribution <= -0.5).slice(-2).reverse().map((x) => t(`dims.${x.key}.name`));
  const line = [top.length ? `${t("ui.bdLifts")}: ${top.join(", ")}` : "", low.length ? `${t("ui.bdLowers")}: ${low.join(", ")}` : ""].filter(Boolean).join(" · ");
  return `<div class="glass pad breakdown">
    <div class="bd-head"><h3>${esc(t("ui.bdTitle"))}</h3>${line ? `<span class="small muted">${esc(line)}</span>` : ""}</div>
    <div class="bd-rows">${rows.map((x) => {
      const w = (Math.abs(x.contribution) / max) * 50;
      const tone = x.contribution >= 0 ? "pos" : "neg";
      return `<div class="bd-row${x.missing ? " bd-missing" : ""}">
        <span class="bd-name">${x.missing ? `${DQ_HALF} ` : ""}${esc(t(`dims.${x.key}.name`))} <span class="muted">${x.missing ? esc(t("ui.bdMissingShort", { s: Math.round(x.score) })) : x.score} · ${Math.round(x.weight * 100)}%</span></span>
        <span class="bd-bar" aria-hidden="true"><span class="bd-fill ${tone}" style="${tone === "pos" ? "left" : "right"}:50%;width:${w.toFixed(1)}%"></span></span>
        <span class="bd-val ${tone}">${signed(x.contribution)}</span></div>`;
    }).join("")}</div>
    <p class="small muted bd-note">${esc(t("ui.bdNote", { s: a.scores.overall }))}${items.some((x) => x.missing) ? ` ${esc(t("ui.bdMissing", { s: MISSING_DIMENSION_SCORE })).replace("◐", DQ_HALF)}` : ""}</p>
  </div>`;
}

// Why a TeraScore is partial or missing, and which figures were estimated.
const isPartialAnalysis = (a) => isNum(a.scores.overall) && a.completeness < PARTIAL_BELOW;
function dataQualityNotice(a) {
  const out = [];
  const dims = a.missing.map((k) => t(`dims.${k}.name`)).join(", ");
  if (!isNum(a.scores.overall)) {
    const scored = Object.keys(OVERALL_WEIGHTS).filter((k) => isNum(a.scores[k])).length;
    out.push(`<div class="notice dq-notice"><span>${DQ_QUARTER}</span><span><b>${esc(t("dq.little"))}:</b> ${esc(t("dq.noticeLittle", { n: scored }))}</span></div>`);
  } else if (isPartialAnalysis(a)) {
    out.push(`<div class="notice dq-notice"><span>${DQ_HALF}</span><span><b>${esc(t("dq.noticePartialTitle", { p: a.completeness }))}</b> ${esc(dims ? t("dq.noticePartial", { d: dims, s: MISSING_DIMENSION_SCORE }) : t("dq.noticePartialParts"))}</span></div>`);
  }
  if (a.estimated?.length) out.push(`<div class="notice"><span aria-hidden="true">≈</span><span>${esc(t("dq.estimated", { list: a.estimated.map((k) => t(`dq.est.${k}`)).join("; ") }))}</span></div>`);
  return out.length ? `<div style="margin-top:14px">${out.join("")}</div>` : "";
}

function ring(score) {
  const g = grade(score);
  const r = 80, C = 2 * Math.PI * r, v = isNum(score) ? score : 0;
  const color = { good: "#22c55e", warning: "#fab219", serious: "#ec835a", critical: "#e5484d", none: "#4b5568" }[g.tone];
  return `<div class="ring" role="img" aria-label="${esc(t("ui.overallScore"))}: ${isNum(score) ? score : "–"} – ${esc(g.label)}">
    <svg viewBox="0 0 190 190" width="190" height="190" aria-hidden="true">
      <circle cx="95" cy="95" r="${r}" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="14"/>
      <circle cx="95" cy="95" r="${r}" fill="none" stroke="${color}" stroke-width="14" stroke-linecap="round" stroke-dasharray="${(C * v) / 100} ${C}" style="filter:drop-shadow(0 0 8px ${color}88)"/>
    </svg>
    <div class="ring-label"><div class="ring-value">${isNum(score) ? score : "–"}<small>/100</small></div><div class="ring-caption">${esc(g.label)}</div></div>
  </div>`;
}

const DISTRESS_TONE = { low: "good", medium: "warning", high: "critical" };
const OUTLOOK_TONE = { up: "good", flat: "warning", down: "critical", unknown: "none" };
const OUTLOOK_ICON = { up: "↗", flat: "→", down: "↘", unknown: "?" };
const KEY_METRICS = ["peRatio", "evToEbit", "fcfYield", "dividendYield", "roic", "operatingMargin", "netDebtToEbitda", "revenueCagr", "epsCagr", "priceReturn1y", "volatility", "maxDrawdown"];

function analysisView(c, a, idx, history = []) {
  const cur = c.currency || "USD";
  const riskG = grade(a.scores.risk, true);
  const rankOverall = idx ? sectorRank(idx, c.sector, "overall", a.scores.overall) : null;
  const vg = gradeKey(a.scores.overall);
  const profileNote = a.profile === "financial" ? t("ui.profileFinancial") : a.profile === "realEstate" ? t("ui.profileRealEstate") : "";

  const summary = `
    <div class="glass pad summary">
      ${ring(a.scores.overall)}
      <div>
        <div class="verdict">${esc(t(`verdict.${vg}`))}</div>
        ${a.styles.length ? `<div class="styles">${a.styles.map((s) => `<span class="tag">${esc(t(`styles.${s}`))}</span>`).join("")}</div>` : ""}
        <div class="facts">
          <div class="fact"><div class="k">${esc(t("ui.risk"))}</div><div class="v"><span class="pill tone-${riskG.tone}"><span class="dot"></span>${a.scores.risk ?? "–"}</span>${esc(riskG.label)}</div></div>
          <div class="fact"><div class="k">${esc(t("ui.distress"))}</div><div class="v"><span class="pill tone-${DISTRESS_TONE[a.distress.level]}"><span class="dot"></span>${esc(t(`distress.${a.distress.level}`))}</span></div></div>
          <div class="fact"><div class="k">${esc(t("ui.trend"))}</div><div class="v"><span class="pill tone-${OUTLOOK_TONE[a.outlook.level]}">${OUTLOOK_ICON[a.outlook.level]} ${esc(t(`outlook.${a.outlook.level}`))}</span></div></div>
          <div class="fact"><div class="k">${esc(t("ui.coverage"))}</div><div class="v">${isPartialAnalysis(a) || !isNum(a.scores.overall) ? `<span class="dq-partial-inline">${DQ_HALF} ${a.completeness}%</span>` : `${a.completeness}%`} <span class="small muted">(${esc(t("ui.years", { n: a.metrics.yearsOfData }))})</span></div></div>
        </div>
        <p class="small muted" style="margin:12px 0 0">${esc(t(`distress.${a.distress.level}Text`))} ${esc(t(`outlook.${a.outlook.level}Text`))}
          ${isNum(rankOverall) ? `<br>${esc(t("ui.sectorRank", { p: rankOverall, s: sectorName(c.sector) }))}` : ""}</p>
      </div>
    </div>
    ${dataQualityNotice(a)}
    ${profileNote ? `<div class="notice" style="margin-top:14px"><span>ℹ️</span><span>${esc(profileNote)}</span></div>` : ""}
    ${breakdownView(a)}`;

  const cards = DIMENSIONS.map((d) => {
    const inverse = d === "risk";
    const s = a.scores[d];
    if (!isNum(s) && !(a.parts[d]?.length)) return "";
    const g = grade(s, inverse);
    const parts = a.parts[d];
    const rank = idx ? sectorRank(idx, c.sector, d, s) : null;
    const detail = parts
      ? `<table class="parts-table">${parts.map((p) => `<tr>
          <td><span class="info" title="${esc(metricDesc(p.key))}">${esc(metricLabel(p.key))}</span></td>
          <td>${fmt(p.value, METRIC_FORMAT[p.key], cur)}${partNote(p, cur)}${isNum(p.median) ? `<br><span class="median">${esc(t("ui.sectorMedian"))}: ${fmt(p.median, METRIC_FORMAT[p.key], cur)}</span>` : ""}</td>
          <td class="pts">${isNum(p.score) ? `${p.score} ${esc(t("ui.points"))}` : esc(t(p.na ? "ui.notApplicable" : "ui.notScored"))} · ${p.cap ? esc(t("ui.capLabel")) : `${Math.round(p.weight * 100)}%`}</td>
        </tr>`).join("")}</table>`
      : `<p class="small muted">${esc(riskExplain())}</p>
         ${a.parts.marketRisk?.length ? `<table class="parts-table">${a.parts.marketRisk.map((p) => `<tr><td>${esc(metricLabel(p.key))}</td><td>${fmt(p.value, METRIC_FORMAT[p.key])}</td><td class="pts">${isNum(p.score) ? `${p.score} ${esc(t("ui.points"))}` : esc(t("ui.notScored"))}</td></tr>`).join("")}</table>` : ""}`;
    return `
      <div class="glass score-card">
        <div class="score-top">
          <div><div class="score-name">${esc(t(`dims.${d}.name`))}</div><div class="score-q">${esc(t(`dims.${d}.q`))}</div></div>
          <div class="score-val">${isNum(s) ? s : "–"}<small>/100</small></div>
        </div>
        <div class="bar tone-${g.tone}" role="img" aria-label="${esc(t(`dims.${d}.name`))}: ${isNum(s) ? s : "–"} – ${esc(g.label)}"><span style="width:${isNum(s) ? s : 0}%"></span></div>
        <div class="score-meta"><span class="pill tone-${g.tone}"><span class="dot"></span>${esc(g.label)}</span>${isNum(rank) ? `<span class="rank">${esc(t("ui.sectorRankShort", { p: Math.max(1, 100 - rank) }))}</span>` : ""}</div>
        <p class="score-text">${esc(summaryText(d, a, cur))}</p>
        <details class="parts"><summary>${esc(t("ui.howCalculated"))}</summary>${detail}</details>
      </div>`;
  }).join("");

  const order = { critical: 0, warning: 1, positive: 2 };
  const tag = { critical: t("ui.critical"), warning: t("ui.warningTag"), positive: t("ui.strength") };
  const icon = { critical: "!", warning: "!", positive: "✓" };
  const flags = [...a.flags].sort((x, y) => order[x.level] - order[y.level]);
  const flagsHtml = flags.length ? `<div class="flags">${flags.map((f) => {
    const ft = flagText(f, cur);
    return `<div class="glass flag flag-${f.level}"><div class="flag-icon" aria-hidden="true">${icon[f.level]}</div>
      <div><div class="flag-title">${esc(ft.title)}<span class="flag-tag">${esc(tag[f.level])}</span></div><div class="flag-text">${esc(ft.text)}</div></div></div>`;
  }).join("")}</div>` : `<div class="glass empty">${esc(t("ui.noFlags"))}</div>`;

  const keyGrid = `<div class="keygrid">${KEY_METRICS.filter((k) => a.metrics[k] !== null && a.metrics[k] !== undefined).map((k) => `
    <div class="glass kv"><div class="k"><span class="info" title="${esc(metricDesc(k))}">${esc(metricLabel(k))}</span></div><div class="v">${fm(a.metrics, k, cur)}</div></div>`).join("")}</div>`;

  const s = a.series;
  const nfEmpty = t("ui.notEnough");
  const priceData = c.prices?.data || [];
  const charts = `<div class="charts">
    ${priceData.length ? lineChart(t("ui.chartPrice"), t("ui.chartPriceSub"), priceData, (v) => fmt(v, "usd"), nfEmpty) : ""}
    ${barChart(t("ui.chartRevenue"), t("ui.chartRevenueSub"), s.map((y) => [y.year, y.revenue]), (v) => money(v, cur), nfEmpty)}
    ${barChart(t("ui.chartNetIncome"), t("ui.chartNetIncomeSub"), s.map((y) => [y.year, y.netIncome]), (v) => money(v, cur), nfEmpty)}
    ${barChart(t("ui.chartFcf"), t("ui.chartFcfSub"), s.map((y) => [y.year, y.freeCashFlow]), (v) => money(v, cur), nfEmpty)}
    ${barChart(t("ui.chartMargin"), t("ui.chartMarginSub"), s.map((y) => [y.year, y.operatingMargin]), (v) => fmt(v, "pct"), nfEmpty)}
  </div>`;

  let basis = a.valuationBasis === "ttm" ? t("ui.ttmBasis", { d: date(c.ttm?.periodEnd) }) : t("ui.annualBasis");
  if (cur !== "USD") basis += ` · ${t("ui.fxNote", { cur, rate: isNum(c.market?.fxToUsd) ? num(c.market.fxToUsd, 4) : "–" })}`;
  return `
    ${summary}
    <h2 class="section-title">${esc(t("ui.sectionKey"))} <span class="small muted">${esc(basis)}</span></h2>
    ${keyGrid}
    <h2 class="section-title">${esc(t("ui.sectionScores"))}</h2>
    <div class="score-grid">${cards}</div>
    <h2 class="section-title">${esc(t("ui.peersTitle"))}</h2>
    ${peersView(c, idx)}
    <h2 class="section-title">${esc(t("ui.navTrend"))} <a class="small" href="#/trend">${esc(t("ui.trendAll"))} ›</a></h2>
    ${trendView(c, history, idx?.companies.find((x) => x.t === c.ticker))}
    <h2 class="section-title">${esc(t("ui.sectionFlags"))}</h2>
    ${flagsHtml}
    <h2 class="section-title">${esc(t("ui.sectionEvents"))}</h2>
    ${(c.events || []).length ? `<div class="events">${c.events.map((e) => eventCard(e, false)).join("")}</div>` : `<div class="glass empty small">${esc(c.events ? t("ui.eventsNone") : t("ui.notEnough"))}</div>`}
    <h2 class="section-title">${esc(t("ui.dividendTitle"))}</h2>
    ${dividendView(c, a)}
    <h2 class="section-title">${esc(t("ui.insiderTitle"))}</h2>
    ${insiderView(c)}
    <h2 class="section-title">${esc(t("ui.sectionCharts"))}</h2>
    ${charts}
    <p class="small muted" style="margin-top:22px">${esc(t("ui.engine", { v: ENGINE_VERSION }))}</p>`;
}

// ---------- Links to company pages ----------

// Analysed companies have a real page (c/<TICKER>/, see scripts/seo.mjs) that search engines can follow;
// a click stays inside the app and opens the analysis without a page load.
const linkable = (row) => /^[A-Z0-9.\-]+$/.test(row?.t || "");
const companyLink = (row, inner) => (linkable(row) ? `<a class="clink" href="c/${encodeURIComponent(row.t)}/" data-c="${esc(row.t)}">${inner}</a>` : inner);
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[data-c]");
  if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  location.hash = `#/c/${a.dataset.c}`;
});

// ---------- Similar companies ----------

const PEER_COLS = [["overall", ""], ["profitability", "col-lg"], ["balanceSheet", "col-xl"], ["growthLong", "col-xl"], ["valuation", "col-md"], ["risk", ""]];
const median = (xs) => { const v = xs.filter(isNum).sort((a, b) => a - b); if (!v.length) return null; const m = Math.floor(v.length / 2); return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2; };

function peersView(c, idx) {
  const self = idx?.companies.find((x) => x.t === c.ticker);
  if (!self || !isNum(self.sc?.overall)) return `<div class="glass empty small">${esc(t("ui.peersNone"))}</div>`;
  const peers = findPeers(idx.companies, self, 5);
  if (!peers.length) return `<div class="glass empty small">${esc(t("ui.peersNone"))}</div>`;
  const rank = 1 + peers.filter((p) => p.sc.overall > self.sc.overall).length;
  const pe = (v) => (isNum(v) ? `${num(v, 1)}×` : "–");
  const watch = new Set(getWatch());
  const row = (r, cls) => `<tr class="${cls}" ${r === self ? "" : `data-t="${esc(r.t)}"`}>
    <td>${companyCell(r, { watch })}</td>
    <td class="num col-md">${isNum(r.mc) ? money(r.mc) : "–"}</td>
    ${PEER_COLS.map(([k, cl]) => `<td class="num ${cl}">${k === "overall" ? overallCell(r) : scorePill(r.sc?.[k], k === "risk")}</td>`).join("")}
    <td class="num col-lg">${pe(r.pe)}</td><td class="num col-lg">${isNum(r.dy) ? fmt(r.dy, "pct") : "–"}</td></tr>`;
  const med = (get) => median(peers.map(get));
  const mRow = `<tr class="peer-median"><td>${esc(t("ui.peerMedian"))}</td>
    <td class="num col-md">${isNum(med((r) => r.mc)) ? money(med((r) => r.mc)) : "–"}</td>
    ${PEER_COLS.map(([k, cl]) => { const v = med((r) => r.sc?.[k]); return `<td class="num ${cl}">${scorePill(isNum(v) ? Math.round(v) : null, k === "risk")}</td>`; }).join("")}
    <td class="num col-lg">${pe(med((r) => r.pe))}</td><td class="num col-lg">${isNum(med((r) => r.dy)) ? fmt(med((r) => r.dy), "pct") : "–"}</td></tr>`;
  const all = [self, ...peers].map((r) => r.t);
  return `<p class="small muted" style="margin:-4px 0 12px">${esc(t("ui.peersSub", { s: sectorName(c.sector) }))} ${esc(t("ui.peersRank", { t: c.ticker, r: rank, n: all.length }))}</p>
    <div class="glass table-wrap"><table class="list peers">
      <thead><tr><th>${esc(t("ui.company"))}</th><th class="num col-md">${esc(t("ui.marketCap"))}</th>
        ${PEER_COLS.map(([k, cl]) => `<th class="num ${cl}">${esc(k === "overall" ? t("ui.overallScore") : t(`dims.${k}.name`))}</th>`).join("")}
        <th class="num col-lg">${esc(t("ui.pe"))}</th><th class="num col-lg">${esc(t("ui.dividendYieldShort"))}</th></tr></thead>
      <tbody>${row(self, "self")}${peers.map((r) => row(r, "")).join("")}${mRow}</tbody>
    </table></div>
    <div style="margin-top:12px"><a class="btn" href="#/compare/${all.map(encodeURIComponent).join(",")}">${esc(t("ui.peersCompare"))} ›</a></div>`;
}

function wirePeers(root) {
  root.querySelector("table.peers")?.addEventListener("click", (e) => { if (e.target.closest("a")) return; const tr = e.target.closest("tr[data-t]"); if (tr) location.hash = `#/c/${tr.dataset.t}`; });
}

// ---------- Dividend safety ----------

const payout = (v) => (v === Infinity ? t("ui.payoutUncovered") : isNum(v) ? fmt(v, "pct0") : "–");

function dividendView(c, a) {
  const d = dividendProfile(c, a);
  if (!d.payer) return `<div class="glass empty small">${esc(t(d.reason === "noDividend" ? "ui.dividendNone" : "ui.notEnough"))}</div>`;
  const cur = c.currency || "USD";
  const tone = DIVIDEND_TONE[d.level];
  const full = d.paidYears >= (c.annual || []).length;
  const fact = (k, v) => `<div class="fact"><div class="k">${esc(t(k))}</div><div class="v">${v}</div></div>`;
  const parts = Object.entries(DIVIDEND_WEIGHTS).map(([k, w]) => `<tr><td>${esc(t(`dividend.parts.${k}`))}</td><td class="pts">${isNum(d.parts[k]) ? `${d.parts[k]} ${esc(t("ui.points"))}` : esc(t("ui.notScored"))} · ${Math.round(w * 100)}%</td></tr>`).join("");
  return `<div class="div-grid">
    <div class="glass pad">
      <div class="score-top"><div><div class="score-name">${esc(t("ui.dividendSafety"))}</div><div class="score-q">${esc(t(`dividend.${d.level}Text`))}</div></div>
        <div class="score-val">${isNum(d.score) ? d.score : "–"}<small>/100</small></div></div>
      <div class="bar tone-${tone}"><span style="width:${isNum(d.score) ? d.score : 0}%"></span></div>
      <div class="score-meta"><span class="pill tone-${tone}"><span class="dot"></span>${esc(t(`dividend.${d.level}`))}</span></div>
      <div class="facts" style="margin-top:14px">
        ${fact("ui.dividendYield", isNum(d.yield) ? fmt(d.yield, "pct") : "–")}
        ${fact("ui.dps", isNum(d.dps) ? `${num(d.dps, 2)} ${esc(cur)}` : "–")}
        ${fact("ui.dpsCagr", isNum(d.dpsCagr) ? fmt(d.dpsCagr, "pct") : "–")}
        ${fact("ui.yearsPaid", esc(t("ui.yearsN", { n: full ? `${d.paidYears}+` : d.paidYears })))}
        ${fact("ui.yearsRaised", esc(t("ui.yearsN", { n: d.growthYears })))}
        ${fact("ui.dividendCuts", String(d.cuts))}
        ${fact("ui.earningsPayout", `${payout(d.earningsPayout)} <span class="small muted">${esc(d.basis === "ttm" ? t("ui.ttm") : t("ui.lastFy", { y: a.latestYear }))}</span>`)}
        ${fact("ui.fcfPayout", `${payout(d.fcfPayout)} <span class="small muted">${esc(d.basis === "ttm" ? t("ui.ttm") : t("ui.lastFy", { y: a.latestYear }))}</span>`)}
      </div>
      <details class="parts"><summary>${esc(t("ui.howCalculated"))}</summary><table class="parts-table">${parts}</table>
        <p class="small muted">${esc(t("ui.dividendNote"))}</p></details>
    </div>
    ${barChart(t("ui.chartDps"), t("ui.chartDpsSub"), d.history.map((h) => [h.year, h.dps]), (v) => `${num(v, 2)} ${cur}`, t("ui.notEnough"))}
  </div>`;
}

// ---------- Insider transactions ----------

function insiderView(c) {
  const ins = c.insiders;
  // Foreign private issuers (20-F / 40-F filers) are exempt from Form 4 reporting.
  const foreign = c.foreignPrivateIssuer ?? ((c.currency && c.currency !== "USD") || (c.country && c.country !== "United States"));
  const traded = ins && !ins.none && (ins.buy?.count || ins.sell?.count);
  if (!traded && foreign) return `<div class="glass empty small">${esc(t("ui.insiderForeign"))}</div>`;
  if (!ins) return `<div class="glass empty small">${esc(t("ui.notEnough"))}</div>`;
  if (!traded) return `<div class="glass empty small">${esc(t("ui.insiderNone"))}</div>`;
  const side = (key, s, tone) => `<div class="fact"><div class="k">${esc(t(key))}</div><div class="v"><span class="pill tone-${tone}"><span class="dot"></span>${money(s.value)}</span>
    <span class="small muted">${esc(t("ui.insiderCount", { n: s.count, p: s.insiders }))}</span></div></div>`;
  const rows = (ins.recent || []).map((r) => `<tr>
    <td>${esc(date(r.date))}</td><td>${esc(r.name)}${r.title ? `<br><span class="small muted">${esc(r.title)}</span>` : ""}</td>
    <td><span class="pill tone-${r.code === "P" ? "good" : "serious"}"><span class="dot"></span>${esc(t(r.code === "P" ? "ui.insiderPurchase" : "ui.insiderSale"))}</span>${r.plan ? ` <span class="badge">${esc(t("ui.insiderPlanTag"))}</span>` : ""}</td>
    <td class="num">${num(r.shares, 0)}</td><td class="num">${fmt(r.price, "usd")}</td><td class="num">${money(r.value)}</td></tr>`).join("");
  return `<div class="glass pad">
    <div class="facts" style="margin-top:0">
      ${side("ui.insiderBuys", ins.buy, "good")}
      ${side("ui.insiderSells", ins.sell, "serious")}
      ${ins.plannedSellValue ? `<div class="fact"><div class="k">${esc(t("ui.insiderPlanned"))}</div><div class="v">${money(ins.plannedSellValue)}</div></div>` : ""}
    </div>
    <p class="small muted">${esc(t("ui.insiderPeriod", { from: date(ins.from), to: date(ins.to) }))}</p>
    ${rows ? `<div class="table-wrap"><table class="cmp insider"><thead><tr><th>${esc(t("ui.insiderDate"))}</th><th>${esc(t("ui.insiderName"))}</th><th>${esc(t("ui.insiderType"))}</th><th>${esc(t("ui.insiderShares"))}</th><th>${esc(t("ui.price"))}</th><th>${esc(t("ui.insiderValue"))}</th></tr></thead><tbody>${rows}</tbody></table></div>` : ""}
  </div>`;
}

// ---------- Financial statements ----------

const RAW_GROUPS = [
  ["income", ["revenue", "costOfRevenue", "grossProfit", "researchAndDevelopment", "operatingIncome", "depreciationAndAmortization", "interestExpense", "pretaxIncome", "incomeTaxExpense", "netIncome", "epsDiluted", "sharesDiluted"]],
  ["cashflow", ["operatingCashFlow", "capex", "freeCashFlow", "shareBasedCompensation", "dividendsPaid", "buybacks"]],
  ["balance", ["totalAssets", "currentAssets", "cash", "inventory", "accountsReceivable", "goodwill", "intangibleAssets", "totalLiabilities", "currentLiabilities", "totalDebt", "equity", "retainedEarnings", "sharesOutstanding"]],
];
const BALANCE_KEYS = new Set(RAW_GROUPS[2][1]);
const SERIES_ROWS = ["grossMargin", "operatingMargin", "netMargin", "fcfMargin", "roic", "roe", "roa", "currentRatio", "debtToEquity", "netDebtToEbitda", "interestCoverage"];

function rawValue(y, k) {
  if (k === "freeCashFlow" && !isNum(y.freeCashFlow) && isNum(y.operatingCashFlow) && isNum(y.capex)) return y.operatingCashFlow - y.capex;
  return y[k];
}
function rawCell(v, k, cls = "", cur = "USD") {
  if (!isNum(v)) return `<td class="na ${cls}">–</td>`;
  if (k === "epsDiluted") return `<td class="${cls}">${num(v, 2)}</td>`;
  if (k === "sharesDiluted" || k === "sharesOutstanding") return `<td class="${cls}">${num(v / 1e6, 0)} M</td>`;
  return `<td class="${cls}">${money(v, cur)}</td>`;
}

const QUARTER_RATIOS = [["grossMargin", (q) => (isNum(q.grossProfit) ? q.grossProfit : isNum(q.costOfRevenue) && isNum(q.revenue) ? q.revenue - q.costOfRevenue : null)], ["operatingMargin", (q) => q.operatingIncome], ["netMargin", (q) => q.netIncome], ["fcfMargin", (q) => rawValue(q, "freeCashFlow")]];

function quarterTable(c) {
  const cur = c.currency || "USD";
  const qs = [...(c.quarterly || [])].sort((x, y) => (x.periodEnd < y.periodEnd ? -1 : 1));
  if (!qs.length) return `<div class="glass empty small">${esc(t(c.foreignPrivateIssuer ? "ui.quarterlyForeign" : "ui.quarterlyNone"))}</div>`;
  const n = qs.length + 1;
  const head = `<tr><th>${esc(t("ui.quarterEnd"))}</th>${qs.map((q) => `<th>${esc(date(q.periodEnd))}</th>`).join("")}</tr>`;
  let body = RAW_GROUPS.map(([g, keys]) => `<tr class="group"><td colspan="${n}"><span class="sticky-label">${esc(t(`raw.${g}`))}</span></td></tr>` +
    keys.map((k) => `<tr><td>${esc(t(`raw.${k}`))}</td>${qs.map((q) => rawCell(rawValue(q, k), k, "", cur)).join("")}</tr>`).join("")).join("");
  body += `<tr class="group"><td colspan="${n}"><span class="sticky-label">${esc(t("ui.computedRatios"))}</span></td></tr>` + QUARTER_RATIOS.map(([k, f]) =>
    `<tr><td>${esc(metricLabel(k))}</td>${qs.map((q) => { const v = isNum(f(q)) && isNum(q.revenue) && q.revenue > 0 ? f(q) / q.revenue : null; return isNum(v) ? `<td>${fmt(v, "pct")}</td>` : `<td class="na">–</td>`; }).join("")}</tr>`).join("");
  return `<p class="small muted" style="margin:0 0 10px">${esc(t("ui.quarterlyNote"))}</p>
    <div class="glass table-wrap"><table class="raw"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
}

function rawView(c, a, onDataPage = false) {
  const cur = c.currency || "USD";
  const years = [...(c.annual || [])].sort((x, y) => x.year - y.year);
  if (!years.length) return `<div class="glass empty">${esc(t("ui.notEnough"))}</div>`;
  const ttm = c.ttm ? { ...c.ttm, ...(c.latestBalance || {}) } : null;
  const head = `<tr><th>${esc(t("ui.fiscalYear"))}</th>${years.map((y) => `<th>${y.year}${y.periodEnd ? `<br><span class="small">${esc(y.periodEnd)}</span>` : ""}</th>`).join("")}${ttm ? `<th class="ttm">${esc(t("ui.ttm"))}<br><span class="small">${esc(ttm.periodEnd)}</span></th>` : ""}</tr>`;
  const n = years.length + 1 + (ttm ? 1 : 0);
  let body = RAW_GROUPS.map(([g, keys]) => `<tr class="group"><td colspan="${n}"><span class="sticky-label">${esc(t(`raw.${g}`))}</span></td></tr>` +
    keys.map((k) => `<tr><td>${esc(t(`raw.${k}`))}</td>${years.map((y) => rawCell(rawValue(y, k), k, "", cur)).join("")}${ttm ? rawCell(rawValue(ttm, k), k, "ttm", cur) : ""}</tr>`).join("")).join("");
  if (a.ok) {
    const byYear = new Map(a.series.map((s) => [s.year, s]));
    body += `<tr class="group"><td colspan="${n}"><span class="sticky-label">${esc(t("ui.computedRatios"))}</span></td></tr>` + SERIES_ROWS.map((k) =>
      `<tr><td>${esc(metricLabel(k))}</td>${years.map((y) => { const v = byYear.get(y.year)?.[k]; return isNum(v) || v === Infinity ? `<td>${fmt(v, METRIC_FORMAT[k], cur)}</td>` : `<td class="na">–</td>`; }).join("")}${ttm ? `<td class="ttm na"></td>` : ""}</tr>`).join("");
  }
  const src = c.source ? `${esc(t("ui.source"))}: ${c.source.url ? `<a href="${esc(c.source.url)}" target="_blank" rel="noopener">${esc(c.source.name)}</a>` : esc(c.source.name)}${c.source.retrieved ? ` · ${esc(t("ui.retrieved", { d: date(c.source.retrieved) }))}` : ""}` : "";
  return `
    <div class="raw-actions">
      <span class="small muted">${esc(t("ui.currencyNote", { cur }))} ${src}</span>
      <span style="display:flex;gap:8px;flex-wrap:wrap">
        ${onDataPage ? "" : `<a class="btn" href="#/data/${encodeURIComponent(c.ticker)}">${esc(t("ui.navData"))}</a>`}
        <button class="btn" id="csv" type="button">${esc(t("ui.downloadCsv"))}</button>
        <a class="btn" href="data/companies/${encodeURIComponent(c.ticker)}.json" download>${esc(t("ui.downloadJson"))}</a>
      </span>
    </div>
    <div class="seg" role="group" aria-label="${esc(t("ui.period"))}">
      <button type="button" data-period="annual" aria-pressed="true">${esc(t("ui.periodAnnual"))}</button>
      <button type="button" data-period="quarterly" aria-pressed="false">${esc(t("ui.periodQuarterly"))}</button>
    </div>
    <div data-pane="annual"><div class="glass table-wrap"><table class="raw"><thead>${head}</thead><tbody>${body}</tbody></table></div></div>
    <div data-pane="quarterly" class="hidden">${quarterTable(c)}</div>`;
}

function wireRaw(root, c) {
  let period = "annual";
  root.querySelectorAll(".seg [data-period]").forEach((b) => b.addEventListener("click", () => {
    period = b.dataset.period;
    root.querySelectorAll(".seg [data-period]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    root.querySelectorAll("[data-pane]").forEach((x) => x.classList.toggle("hidden", x.dataset.pane !== period));
    showLatest();
  }));
  // The newest periods are on the right: start scrolled there when the table is wider than the screen.
  const showLatest = () => root.querySelectorAll("[data-pane]:not(.hidden) .table-wrap").forEach((w) => { w.scrollLeft = w.scrollWidth; });
  root.querySelectorAll(".tabs .tab").forEach((b) => b.addEventListener("click", () => requestAnimationFrame(showLatest)));
  requestAnimationFrame(showLatest);
  root.querySelector("#csv")?.addEventListener("click", () => downloadCsv(c, period));
}

function downloadCsv(c, period = "annual") {
  const keys = RAW_GROUPS.flatMap(([, k]) => k);
  if (period === "quarterly") {
    const qs = [...(c.quarterly || [])].sort((x, y) => (x.periodEnd < y.periodEnd ? -1 : 1));
    const rows = [["field", ...qs.map((q) => q.periodEnd)].join(";"), ...keys.map((k) => [k, ...qs.map((q) => (isNum(rawValue(q, k)) ? rawValue(q, k) : ""))].join(";"))];
    return saveFile(rows.join("\n"), `${c.ticker}_quarterly.csv`);
  }
  const years = [...c.annual].sort((x, y) => x.year - y.year);
  const ttm = c.ttm ? { ...c.ttm, ...(c.latestBalance || {}) } : null;
  const lines = [["field", ...years.map((y) => y.year), ...(ttm ? ["TTM"] : [])].join(";")];
  for (const k of keys) lines.push([k, ...years.map((y) => (isNum(rawValue(y, k)) ? rawValue(y, k) : "")), ...(ttm ? [isNum(rawValue(ttm, k)) ? rawValue(ttm, k) : ""] : [])].join(";"));
  saveFile(lines.join("\n"), `${c.ticker}_financials.csv`);
}

function saveFile(text, name) {
  const blob = new Blob(["﻿" + text], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  Object.assign(document.createElement("a"), { href: url, download: name }).click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ---------- Compare ----------

const MAX_COMPARE = 6;

const CMP_METRICS = ["marketCap", "peRatio", "evToEbit", "fcfYield", "dividendYield", "grossMargin", "operatingMargin", "roic", "fcfMargin", "netDebtToEbitda", "currentRatio", "revenueYoY", "revenueCagr", "epsCagr", "shareChangeYearly", "volatility", "maxDrawdown"];
const LOWER_BETTER = new Set(["peRatio", "evToEbit", "netDebtToEbitda", "volatility", "shareChangeYearly"]);

async function renderCompare(tickers) {
  app.innerHTML = `<div class="skeleton"></div>`;
  const idx = await loadIndex();
  const comps = (await Promise.all(tickers.map(loadCompany))).filter(Boolean);
  const as = await Promise.all(comps.map(analyzeWith));
  const go = (list) => { location.hash = `#/compare/${list.join(",")}`; };

  const best = (vals, lower) => {
    const nums = vals.filter(isNum);
    if (nums.length < 2) return null;
    return lower ? Math.min(...nums) : Math.max(...nums);
  };
  const row = (label, vals, display, lower) => {
    const b = best(vals, lower);
    return `<tr><td>${label}</td>${vals.map((v, i) => `<td class="${isNum(v) && v === b ? "best" : ""}">${display[i]}</td>`).join("")}</tr>`;
  };

  let table = "";
  if (comps.length) {
    const rowsOf = comps.map((c) => indexCache?.byT?.get(c.ticker) || { t: c.ticker, n: c.name });
    const head = `<tr><th></th>${comps.map((c, i) => `<th><a class="cmp-co" href="#/c/${encodeURIComponent(c.ticker)}">${logo(rowsOf[i])}<span>${esc(c.ticker)}</span></a><span class="small muted">${esc(coName({ t: c.ticker, n: c.name }))}</span>${dqChip(rowsOf[i])}</th>`).join("")}</tr>`;
    // A dimension the company's filings do not allow to score: "no data", not a dash that looks like zero.
    const noData = `<span class="small cmp-nodata" title="${esc(t("dq.legend", { s: MISSING_DIMENSION_SCORE }))}">${esc(t("ui.noData"))}</span>`;
    const dimRows = ["overall", ...DIMENSIONS].map((d) => {
      const vals = as.map((a) => (a.ok ? a.scores[d] : null));
      return row(esc(d === "overall" ? t("ui.overallScore") : t(`dims.${d}.name`)), vals, vals.map((v, i) => (isNum(v) || !as[i].ok ? scorePill(v, d === "risk") : noData)), d === "risk");
    }).join("");
    const partial = rowsOf.filter((r) => isPartial(r) || (r.sc && !isNum(r.sc.overall)));
    var cmpNote = partial.length ? `<div class="notice dq-notice cmp-note"><span>${DQ_HALF}</span><span>${esc(t("ui.cmpPartialNote", { list: partial.map((r) => (isNum(r.cm) && isNum(r.sc?.overall) ? `${r.t} (${r.cm}%)` : `${r.t} (${t("dq.little").toLocaleLowerCase(locale())})`)).join(", ") }))}</span></div>` : "";
    const mRows = CMP_METRICS.map((k) => {
      const vals = as.map((a) => (a.ok ? a.metrics[k] : null));
      if (vals.every((v) => v === null || v === undefined)) return "";
      return row(`<span class="info" title="${esc(metricDesc(k))}">${esc(metricLabel(k))}</span>`, vals, vals.map((v, i) => fmt(v, METRIC_FORMAT[k], k === "marketCap" ? "USD" : comps[i].currency || "USD")), LOWER_BETTER.has(k));
    }).join("");
    const n = comps.length + 1;
    table = `${cmpNote}<div class="glass table-wrap"><table class="cmp"><thead>${head}</thead><tbody>
      <tr class="group"><td colspan="${n}">${esc(t("ui.sectionScores"))}</td></tr>${dimRows}
      <tr class="group"><td colspan="${n}">${esc(t("ui.sectionKey"))}</td></tr>${mRows}
    </tbody></table></div>`;
  }

  app.innerHTML = `
    <div class="prose" style="max-width:none;margin-top:8px">
      <h1>${esc(t("ui.compareTitle"))}</h1>
      <p>${esc(t("ui.compareHint"))}</p>
    </div>
    <div class="compare-pick">
      ${comps.map((c) => `<span class="glass chip">${esc(c.ticker)}<button data-rm="${esc(c.ticker)}" aria-label="${esc(t("ui.remove"))}">×</button></span>`).join("")}
      ${comps.length < MAX_COMPARE ? pickerField("cmp-add", t("ui.addCompany")) : ""}
    </div>
    ${table}`;

  app.querySelectorAll("[data-rm]").forEach((b) => b.addEventListener("click", () => go(tickers.filter((x) => x !== b.dataset.rm))));
  const add = document.getElementById("cmp-add");
  if (add) {
    idx.analysed ||= idx.companies.filter((c) => c.sc);
    attachPicker(add, searchItems(idx.analysed), (row) => { if (!tickers.includes(row.t)) go([...tickers, row.t]); });
  }
}

// ---------- Portfolio ----------

// A European ETF's key ("VUAG:LSE") is shown as its ticker.
const dispT = (tk) => String(tk).split(":")[0];
const PW_TEXT = {
  position: (w) => t("pw.position", { t: dispT(w.t), w: fmt(w.weight, "pct0"), l: fmt(PORTFOLIO_LIMITS.position, "pct0") }),
  sector: (w) => t("pw.sector", { s: sectorName(w.s), w: fmt(w.weight, "pct0"), l: fmt(PORTFOLIO_LIMITS.sector, "pct0") }),
  few: (w) => t("pw.few", { n: w.n, m: PORTFOLIO_LIMITS.minHoldings }),
  critical: (w) => t("pw.critical", { list: w.list.join(", ") }),
  distress: (w) => t("pw.distress", { list: w.list.join(", ") }),
  weak: (w) => t("pw.weak", { list: w.list.join(", "), s: PORTFOLIO_LIMITS.lowScore }),
  unscored: (w) => t("pw.unscored", { list: w.list.join(", ") }),
};

async function renderPortfolio(prefill = "") {
  document.title = `${t("ui.navPortfolio")} | TeraStockX`;
  app.innerHTML = `<div class="skeleton"></div>`;
  const [idx, etfs, ucits, fx] = await Promise.all([loadIndex(), loadEtfs(), loadUcits(), loadFx()]);
  const rows = new Map(idx.companies.map((c) => [c.t, c]));
  for (const e of etfs.etfs || []) if (!rows.has(e.t)) rows.set(e.t, { ...e, etf: true, cur: "USD" });
  // European ETFs trade in pounds or euros: their price is converted to dollars for the totals.
  for (const e of ucits.etfs || []) rows.set(e.t, { ...e, etf: true, ucits: true, ...(e.acc ? { dy: 0 } : {}), pxLocal: e.px, px: isNum(e.px) && (e.cur === "USD" || fx[e.cur]) ? e.px * (e.cur === "USD" ? 1 : fx[e.cur]) : null, mc: 1e11 });
  // A European ETF typed or recognised by its ticker alone ("VUAG"): its first listing.
  for (const e of ucits.etfs || []) if (!rows.has(e.dt)) rows.set(e.dt, rows.get(e.t));
  const list = getPortfolio();
  const p = portfolioSummary(list.map((h) => ({ ...h, row: rows.get(h.t) })));
  const cur = pfCurrency(fx);
  const rate = cur === "USD" ? 1 : fx[cur] || 1; // US dollars per unit of the chosen currency
  const inCur = (usd) => (isNum(usd) ? usd / rate : null);
  const pct = (f) => fmt(f, "pct");
  const tickerOf = (h) => h.row?.dt || h.t;
  const stat = (k, v, sub = "") => `<div class="hero-stat"><div class="v">${v}</div><div class="k">${esc(t(k))}${sub ? ` <span class="muted">${sub}</span>` : ""}</div></div>`;
  const tone = { critical: "critical", warning: "warning", info: "none" };

  const summary = list.length ? `
    <div class="glass pad pf-summary">
      <div class="hero-stats">
        ${stat("ui.pfValue", p.total ? fullMoney(inCur(p.total), cur) : "–")}
        ${stat("ui.pfScore", scorePill(p.score), p.etfWeight > 0 && isNum(p.score) ? esc(t("ui.pfScoreCover", { p: fmt(p.scoreCovered, "pct0") })) : "")}
        ${stat("ui.risk", scorePill(p.risk, true))}
        ${stat("ui.pfIncome", p.income ? money(inCur(p.income), cur) : "–", isNum(p.yield) && p.yield > 0 ? `(${fmt(p.yield, "pct")})` : "")}
        ${stat("ui.pfPe", isNum(p.pe) ? `${num(p.pe, 1)}×` : "–")}
        ${stat("ui.pfHoldings", String(list.length))}
      </div>
    </div>
    <h2 class="section-title">${esc(t("ui.pfAllocTitle"))}</h2>
    <div class="donut-grid">
      ${donutChart(t("ui.pfByHolding"), (() => { const xs = p.positions.filter((h) => isNum(h.weight)).sort((a, b) => b.weight - a.weight); const top = xs.slice(0, 7).map((h) => ({ label: tickerOf(h), value: h.weight })); const rest = xs.slice(7).reduce((a, h) => a + h.weight, 0); return rest > 0 ? [...top, { label: t("ui.pfOther"), value: rest }] : top; })(), pct, String(p.positions.length))}
      ${donutChart(t("ui.pfSectors"), p.sectors.map((x) => ({ label: x.s === "other" ? t("ui.pfOther") : x.s === "etf" ? t("ui.pfEtfs") : sectorName(x.s), value: x.weight })), pct)}
      ${donutChart(t("ui.pfByCurrency"), (() => { const m = new Map(); for (const h of p.positions) if (isNum(h.weight)) { const c = h.row?.cur || "USD"; m.set(c, (m.get(c) || 0) + h.weight); } return [...m].sort((a, b) => b[1] - a[1]).map(([label, value]) => ({ label, value })); })(), pct)}
    </div>
    <div class="pf-grid">
      <div class="glass pad">
        <div class="score-name" style="margin-bottom:12px">${esc(t("ui.pfChecks"))}</div>
        ${p.warnings.length ? `<ul class="pf-warn">${p.warnings.map((w) => `<li><span class="pill tone-${tone[w.level]}"><span class="dot"></span>${esc(t(w.level === "critical" ? "ui.critical" : w.level === "warning" ? "ui.warningTag" : "ui.pfInfo"))}</span> ${esc(PW_TEXT[w.id](w))}</li>`).join("")}</ul>`
          : `<p class="small"><span class="pill tone-good"><span class="dot"></span>${esc(t("ui.pfOk"))}</span></p>`}
      </div>
    </div>
    <div class="glass table-wrap"><table class="list pf-table">
      <thead><tr><th>${esc(t("ui.company"))}</th><th class="num">${esc(t("ui.pfShares"))}</th><th class="num col-md">${esc(t("ui.pfPrice"))}</th><th class="num">${esc(t("ui.pfValueCol"))}</th>
        <th class="num col-md">${esc(t("ui.pfWeight"))}</th><th class="num">${esc(t("ui.overallScore"))}</th><th class="num col-lg">${esc(t("ui.risk"))}</th>
        <th class="num">${esc(t("ui.dividendYieldShort"))}</th><th class="num col-xl">${esc(t("ui.dividendSafety"))}</th><th></th></tr></thead>
      <tbody>${p.positions.map((h) => `<tr>
        <td>${h.row?.etf
          ? `<div class="co">${letterLogo({ t: tickerOf(h), n: h.row.n })}<div class="co-txt"><div class="tick">${esc(tickerOf(h))} <span class="badge">ETF</span>${h.row.ex ? `<span class="badge ex">${esc(h.row.ex)} · ${esc(h.row.cur || "USD")}</span>` : ""}</div><div class="cname">${esc(h.row.n)}</div>${isNum(h.row.er) ? `<div class="small muted">${esc(t("ui.etfExpense", { v: `${num(h.row.er * 100, 2)}%` }))}${h.row.ucits ? ` · ${esc(t(h.row.acc ? "ui.etfAcc" : "ui.etfDist"))}` : ""}</div>` : ""}</div></div>`
          : `<a class="co" href="#/c/${encodeURIComponent(h.t)}">${logo(h.row || { t: h.t })}<div class="co-txt"><div class="tick">${esc(h.t)}</div><div class="cname">${esc(h.row ? coName(h.row) : t("ui.notFound", { t: h.t }))}</div></div></a>`}</td>
        <td class="num"><input class="pf-shares" type="number" min="0" step="any" inputmode="decimal" value="${esc(h.shares)}" data-t="${esc(h.t)}" aria-label="${esc(t("ui.pfShares"))} ${esc(h.t)}"></td>
        <td class="num col-md">${h.row?.ucits ? fullMoney(h.row.pxLocal, h.row.cur) : isNum(h.price) ? fmt(h.price, "usd") : "–"}</td>
        <td class="num">${isNum(h.value) ? fullMoney(inCur(h.value), cur) : "–"}</td>
        <td class="num col-md">${isNum(h.weight) ? fmt(h.weight, "pct") : "–"}</td>
        <td class="num">${h.row?.etf ? `<span class="small muted" title="${esc(t("ui.etfNoScore"))}">–</span>` : h.row ? overallCell(h.row) : "–"}</td>
        <td class="num col-lg">${h.row?.etf ? "–" : scorePill(h.row?.sc?.risk, true)}</td>
        <td class="num">${h.row?.etf
          ? `<input class="pf-shares pf-dy" type="number" min="0" max="100" step="any" inputmode="decimal" data-t="${esc(h.t)}" value="${isNum(h.dy) ? +(h.dy * 100).toFixed(4) : ""}" placeholder="${isNum(h.row.dy) ? num(h.row.dy * 100, 2) : "%"}" aria-label="${esc(t("ui.etfYieldInput"))} ${esc(h.t)}">`
          : isNum(h.row?.dy) ? fmt(h.row.dy, "pct") : "–"}</td>
        <td class="num col-xl">${isNum(h.row?.ds) ? `<span class="pill tone-${DIVIDEND_TONE[dividendLevelOf(h.row.ds)]}"><span class="dot"></span>${h.row.ds}</span>` : "–"}</td>
        <td><button class="icon-btn" data-rm="${esc(h.t)}" aria-label="${esc(t("ui.remove"))} ${esc(h.t)}">×</button></td></tr>`).join("")}</tbody>
    </table></div>
    <p class="small muted" style="margin-top:12px">${esc(t("ui.pfNote", { d: updatedWhen(idx.generated, { lower: true }), c: cur }))}${p.etfWeight > 0 ? ` ${esc(t("ui.etfNote"))}` : ""}</p>
    <h2 class="section-title">${esc(t("ui.pfHistTitle"))}</h2>
    <div id="pf-history"><div class="glass empty small">${esc(t("ui.pfHistLoading"))}</div></div>
    ${p.missingYield.length ? `<div class="notice" style="margin-top:10px"><span>ℹ️</span><span>${esc(t("ui.etfYieldMissing", { list: p.missingYield.map(dispT).join(", ") }))}</span></div>` : ""}` : `<div class="glass empty">${esc(t("ui.pfEmpty"))}</div>`;

  app.innerHTML = `
    <div class="pf-title"><div class="prose" style="max-width:none;margin-top:8px"><h1>${esc(t("ui.navPortfolio"))}</h1><p style="max-width:820px">${esc(t("ui.pfIntro"))}</p></div>
      <label class="pf-cur">${esc(t("ui.pfCurrency"))} <select class="select" id="pf-cur">${PF_CURRENCIES.filter((c) => c === "USD" || fx[c]).map((c) => `<option value="${c}" ${c === cur ? "selected" : ""}>${c}</option>`).join("")}</select></label></div>
    <form class="glass pad pf-add" id="pf-add">
      ${pickerField("pf-t", t("ui.pfAddPlaceholder"), prefill, t("ui.company"))}
      <input id="pf-n" type="number" min="0" step="any" inputmode="decimal" placeholder="${esc(t("ui.pfShares"))}" aria-label="${esc(t("ui.pfShares"))}">
      <button class="btn btn-primary" type="submit">${esc(t("ui.pfAdd"))}</button>
      ${getWatch().length ? `<button class="btn" type="button" id="pf-watch">${esc(t("ui.pfFromWatch"))}</button>` : ""}
      <button class="btn" type="button" id="pf-shot" title="${esc(t("ocr.hint"))}"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg><span>${esc(t("ocr.button"))}</span></button>
      <input type="file" id="pf-file" accept="image/*" multiple hidden>
      <span class="small muted" id="pf-msg"></span>
    </form>
    <div id="ocr-panel"></div>
    ${summary}`;

  if (prefill) document.getElementById("pf-n").focus();
  const save = (next) => { setPortfolio(next); renderPortfolio(); };
  // Stocks with a price and ETFs, searched by ticker or name.
  if (!idx.pfRows || idx.pfRowsEtfs !== etfs || idx.pfRowsUcits !== ucits) {
    idx.pfRows = [...idx.companies.filter((c) => isNum(c.px)), ...(etfs.etfs || []).filter((e) => !idx.byT.has(e.t)).map((e) => ({ ...e, etf: true, cur: "USD", mc: e.aum })),
      ...(ucits.etfs || []).filter((e) => isNum(e.px)).map((e) => ({ ...e, etf: true, ucits: true, mc: 1e11 }))];
    idx.pfRowsEtfs = etfs;
    idx.pfRowsUcits = ucits;
  }
  const picker = attachPicker(document.getElementById("pf-t"), searchItems(idx.pfRows), (row) => {
    document.getElementById("pf-t").value = row.t;
    document.getElementById("pf-n").focus();
  });
  document.getElementById("pf-add").addEventListener("submit", (e) => {
    e.preventDefault();
    let tk = document.getElementById("pf-t").value.trim().toUpperCase();
    // A name or a mistyped ticker: the best match.
    if (tk && !rows.has(tk)) tk = picker.resolve()?.t || tk;
    const n = Number(document.getElementById("pf-n").value);
    if (!rows.has(tk)) { document.getElementById("pf-msg").textContent = t("ui.notFound", { t: tk }); return; }
    tk = rows.get(tk).t || tk; // "VUAG" → its listing "VUAG:LSE"
    if (!(n > 0)) { document.getElementById("pf-msg").textContent = t("ui.pfNeedShares"); return; }
    const cur = getPortfolio();
    const ex = cur.find((h) => h.t === tk);
    if (ex) ex.shares = +(ex.shares + n).toFixed(6); else cur.push({ t: tk, shares: n });
    if (location.hash !== "#/portfolio") history.replaceState(null, "", "#/portfolio");
    save(cur);
  });
  wireScreenshotImport(rows, save);
  document.getElementById("pf-watch")?.addEventListener("click", () => {
    const cur = getPortfolio();
    for (const tk of getWatch()) if (rows.has(tk) && !cur.some((h) => h.t === tk)) cur.push({ t: tk, shares: 1 });
    save(cur);
  });
  app.querySelectorAll(".pf-dy").forEach((inp) => inp.addEventListener("change", () => {
    const v = inp.value.trim() === "" ? null : Number(inp.value) / 100;
    save(getPortfolio().map((h) => (h.t === inp.dataset.t ? { t: h.t, shares: h.shares, ...(isNum(v) && v >= 0 && v < 1 ? { dy: v } : {}) } : h)));
  }));
  app.querySelectorAll(".pf-shares:not(.pf-dy)").forEach((inp) => inp.addEventListener("change", () => {
    const n = Number(inp.value);
    save(getPortfolio().map((h) => (h.t === inp.dataset.t ? { ...h, shares: n > 0 ? n : h.shares } : h)));
  }));
  app.querySelectorAll("[data-rm]").forEach((b) => b.addEventListener("click", () => save(getPortfolio().filter((h) => h.t !== b.dataset.rm))));
  document.getElementById("pf-cur")?.addEventListener("change", (e) => { try { localStorage.setItem("tsx-pf-cur", e.target.value); } catch {} renderPortfolio(); });
  if (list.length) portfolioHistoryView(p, fx, cur, rate).then((html) => {
    const el = document.getElementById("pf-history");
    if (el) { el.innerHTML = html; wireCharts(el); }
  }).catch(() => { const el = document.getElementById("pf-history"); if (el) el.innerHTML = `<div class="glass empty small">${esc(t("ui.notEnough"))}</div>`; });
}

// How the current holdings would have moved: their value month by month over the last two years (in the chosen
// currency; foreign prices at today's exchange rates) and their value-weighted TeraScore week by week, or by
// fiscal year while there are only a few weekly snapshots.
async function portfolioHistoryView(p, fx, cur, rate) {
  const held = p.positions.filter((h) => h.row && isNum(h.shares) && h.shares > 0);
  const stocks = held.filter((h) => !h.row.etf);
  const [comps, eh] = await Promise.all([Promise.all(stocks.map((h) => loadCompany(h.t).catch(() => null))), held.some((h) => h.row.etf && !h.row.ucits) ? loadEtfHistory() : { h: {} }]);
  const series = new Map();
  stocks.forEach((h, i) => { const d = comps[i]?.prices?.data; if (d?.length) series.set(h.t, new Map(d)); });
  for (const h of held.filter((x) => x.row.etf)) { const d = h.row.ucits ? h.row.h : eh.h?.[h.t]; if (d?.length) series.set(h.t, new Map(d)); }
  const now = new Date();
  const months = Array.from({ length: 24 }, (_, k) => { const d = new Date(now.getFullYear(), now.getMonth() - 23 + k, 1); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`; });
  // Closes carried forward over gaps; the current month is today's price.
  const closes = new Map();
  for (const h of held) {
    const s = series.get(h.t);
    if (!s) continue;
    let last = null;
    const firstKnown = [...s.keys()].sort()[0];
    if (firstKnown > months[0] && s.size < 12) continue;
    closes.set(h.t, months.map((m, i) => { if (i === months.length - 1) return h.row.ucits ? h.row.pxLocal : h.row.px; if (s.has(m)) last = s.get(m); else if (m < firstKnown) return null; return last; }));
  }
  const incl = held.filter((h) => closes.has(h.t));
  const toUsd = (h) => (h.row.ucits && h.row.cur !== "USD" ? fx[h.row.cur] || null : 1);
  const start = months.findIndex((_, i) => incl.every((h) => isNum(closes.get(h.t)[i])));
  const valuePts = incl.length && start >= 0 ? months.slice(start).map((m, j) => [m, incl.reduce((a, h) => a + h.shares * closes.get(h.t)[start + j] * toUsd(h), 0) / rate]) : [];
  const missing = held.filter((h) => !closes.has(h.t)).map((h) => h.row.dt || h.t);
  const valueSub = `${t("ui.pfHistValueSub", { c: cur })}${missing.length ? ` ${t("ui.pfHistMissing", { list: missing.join(", ") })}` : ""}`;
  const valueChart = lineChart(t("ui.pfHistValue"), valueSub, valuePts, (v) => fullMoney(v, cur), t("ui.notEnough"));
  // TeraScore: weekly snapshots weighted by today's value.
  const scored = stocks.map((h, i) => ({ h, c: comps[i] })).filter((x) => x.c && isNum(x.h.value));
  const weekly = [...new Set(scored.flatMap((x) => weeklyOf(x.c).map((w) => w[0])))].sort();
  let scorePts = weekly.map((d) => {
    let s = 0, w = 0;
    for (const x of scored) { const snap = weeklyOf(x.c).filter((q) => q[0] <= d && isNum(q[1])).pop(); if (snap) { s += snap[1] * x.h.value; w += x.h.value; } }
    return [d, w ? +(s / w).toFixed(1) : null];
  });
  if (isNum(p.score)) scorePts.push([now.toISOString().slice(0, 10), p.score]);
  let scoreTitle = t("ui.pfHistScoreWeekly");
  if (scorePts.filter(([, v]) => isNum(v)).length < 3) {
    // Few weekly snapshots yet: the point-in-time TeraScore of each fiscal year.
    const bm = await loadBenchmarks();
    const byYear = new Map();
    for (const x of scored) for (const y of scoreHistory(x.c, { benchmarks: bm })) {
      if (!isNum(y.overall)) continue;
      const e = byYear.get(y.year) || { s: 0, w: 0 };
      e.s += y.overall * x.h.value; e.w += x.h.value; byYear.set(y.year, e);
    }
    const totalW = scored.reduce((a, x) => a + x.h.value, 0);
    scorePts = [...byYear].sort((a, b) => a[0] - b[0]).filter(([, e]) => e.w >= 0.6 * totalW).slice(-8).map(([y, e]) => [String(y), +(e.s / e.w).toFixed(1)]);
    scoreTitle = t("ui.pfHistScoreYearly");
  }
  const scoreChart = lineChart(scoreTitle, t("ui.pfHistScoreSub"), scorePts, (v) => num(v, 0), t("ui.notEnough"));
  return `<div class="charts pf-charts">${valueChart}${scoreChart}</div>`;
}

// Exchange rates (USD per unit of a currency), for screenshots that show values in forints or euros.
let fxCache = null;
async function loadFx() {
  if (!fxCache) {
    try { const r = await fetch("data/fx.json", { cache: "no-cache" }); fxCache = r.ok ? (await r.json()).usdPer || {} : {}; } catch { fxCache = {}; }
  }
  return fxCache;
}

// Portfolio from screenshots: recognition in the browser (one or more images), then a table to check
// before adding.
function wireScreenshotImport(rows, save) {
  const file = document.getElementById("pf-file");
  const panel = document.getElementById("ocr-panel");
  document.getElementById("pf-shot").addEventListener("click", () => file.click());
  const box = (inner) => { panel.innerHTML = `<div class="glass pad ocr-panel">${inner}</div>`; };
  const status = (msg) => box(`<div class="ocr-status"><span class="spinner" aria-hidden="true"></span><span>${esc(msg)}</span></div><p class="small muted" style="margin:8px 0 0">${esc(t("ocr.privacy"))}</p>`);
  const closeBtn = (label) => {
    document.getElementById("ocr-cancel")?.addEventListener("click", () => { panel.innerHTML = ""; });
    return label;
  };
  file.addEventListener("change", async () => {
    const images = [...(file.files || [])];
    file.value = "";
    if (!images.length) return;
    status(t("ocr.loading"));
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    let found;
    try {
      const [ocr, fx] = await Promise.all([import("./ocr-import.js"), loadFx()]);
      // European ETFs are recognised by their ticker alone ("VUAG"); prices in their own currency.
      const lookup = ocr.buildLookup([...new Set(rows.values())].map((r) => ({ t: r.dt || r.t, n: r.n, mc: r.mc ?? r.aum ?? 0, px: r.ucits ? r.pxLocal : r.px })), fx);
      let current = 0;
      const progress = (p, phase) => status(phase !== "read" ? t("ocr.loading")
        : images.length > 1 ? t("ocr.readingN", { i: current + 1, n: images.length, p: Math.round(p * 100) }) : t("ocr.reading", { p: Math.round(p * 100) }));
      const reader = await ocr.createReader(progress);
      const lists = [];
      try {
        for (current = 0; current < images.length; current++) {
          const canvas = await ocr.prepareImage(images[current]);
          lists.push(ocr.parseHoldings(ocr.groupRows(await reader.read(canvas), { detailed: true }), lookup));
        }
      } finally {
        await reader.close();
      }
      found = ocr.mergeHoldings(lists);
    } catch (e) {
      box(`<p>${esc(t("ocr.failed", { e: e.message || String(e) }))}</p><button class="btn" type="button" id="ocr-cancel">${esc(t("ocr.close"))}</button>`);
      closeBtn();
      return;
    }
    if (!found.length) {
      box(`<p style="margin-top:0">${esc(t("ocr.none"))}</p><p class="small muted">${esc(t("ocr.hint"))}</p><button class="btn" type="button" id="ocr-cancel">${esc(t("ocr.close"))}</button>`);
      closeBtn();
      return;
    }
    const cur = new Map(getPortfolio().map((h) => [h.t, h.shares]));
    const watch = new Set(getWatch());
    const title = images.length > 1 ? t("ocr.foundImages", { n: found.length, k: images.length }) : t("ocr.found", { n: found.length });
    box(`<div class="score-name">${esc(title)}</div>
      <p class="small muted" style="margin:6px 0 12px">${esc(t("ocr.check"))} ${esc(t("ocr.privacy"))}</p>
      <div class="table-wrap"><table class="list ocr-table"><thead><tr><th aria-label="✓"></th><th>${esc(t("ui.company"))}</th><th class="num">${esc(t("ui.pfShares"))}</th></tr></thead><tbody>
      ${found.map((h, i) => {
        const r = rows.get(h.t) || { t: h.t, n: "" };
        const who = r.etf
          ? `<div class="co">${letterLogo({ t: h.t, n: r.n })}<div class="co-txt"><div class="co-top"><span class="tick">${esc(h.t)}</span><span class="badge">ETF</span></div><div class="cname small">${esc(r.n)}</div></div></div>`
          : companyCell(r, { star: false, watch });
        return `<tr><td><input type="checkbox" class="ocr-on" data-i="${i}" ${h.sure && isNum(h.shares) ? "checked" : ""} aria-label="${esc(h.t)}"></td>
          <td>${who}${cur.has(h.t) ? `<div class="small muted ocr-note">${esc(t("ocr.inPortfolio", { n: num(cur.get(h.t), Number.isInteger(cur.get(h.t)) ? 0 : 2) }))}</div>` : ""}</td>
          <td class="num"><input class="pf-shares ocr-n" type="number" min="0" step="any" inputmode="decimal" data-i="${i}" value="${isNum(h.shares) ? h.shares : ""}" placeholder="?" aria-label="${esc(t("ui.pfShares"))} ${esc(h.t)}">${h.src === "value" ? `<div class="small muted ocr-note">${esc(t("ocr.estimated"))}</div>` : ""}</td></tr>`;
      }).join("")}
      </tbody></table></div>
      <div class="ocr-actions"><button class="btn btn-primary" type="button" id="ocr-add">${esc(t("ocr.add"))}</button><button class="btn" type="button" id="ocr-cancel">${esc(t("ocr.cancel"))}</button><span class="small muted" id="ocr-msg"></span></div>`);
    panel.querySelectorAll(".ocr-n").forEach((inp) => inp.addEventListener("input", () => { const cb = panel.querySelector(`.ocr-on[data-i="${inp.dataset.i}"]`); if (cb && Number(inp.value) > 0) cb.checked = true; }));
    closeBtn();
    document.getElementById("ocr-add").addEventListener("click", () => {
      const picked = [...panel.querySelectorAll(".ocr-on")].filter((cb) => cb.checked).map((cb) => ({ t: found[Number(cb.dataset.i)].t, n: Number(panel.querySelector(`.ocr-n[data-i="${cb.dataset.i}"]`).value) }));
      if (!picked.length) { panel.innerHTML = ""; return; }
      if (picked.some((x) => !(x.n > 0))) { document.getElementById("ocr-msg").textContent = t("ocr.needShares"); return; }
      const list = getPortfolio();
      for (const x of picked) {
        const key = rows.get(x.t)?.t || x.t; // "VUAG" → its listing "VUAG:LSE"
        const ex = list.find((h) => h.t === key);
        if (ex) ex.shares = x.n; else list.push({ t: key, shares: x.n });
      }
      if (location.hash !== "#/portfolio") history.replaceState(null, "", "#/portfolio");
      save(list);
    });
  });
}

const dividendLevelOf = (score) => (score >= 75 ? "safe" : score >= 55 ? "moderate" : score >= 35 ? "risky" : "unsafe");

// ---------- Printable report ----------

const REPORT_ROWS = [["revenue", "money"], ["operatingIncome", "money"], ["netIncome", "money"], ["eps", "eps"], ["freeCashFlow", "money"], ["operatingMargin", "pct"], ["roic", "pct"], ["netDebtToEbitda", "xyears"]];

async function renderReport(ticker) {
  app.innerHTML = `<div class="skeleton"></div>`;
  const [c, idx] = await Promise.all([loadCompany(ticker), loadIndex().catch(() => null)]);
  if (!c) { app.innerHTML = `<div class="glass empty">${esc(t("ui.notFound", { t: ticker }))}</div>`; return; }
  const a = await analyzeWith(c);
  if (!a.ok) { app.innerHTML = `<div class="glass empty">${esc(t("ui.notEnough"))}</div>`; return; }
  document.title = `${c.ticker} – ${t("ui.reportTitle")} | TeraStockX`;
  const cur = c.currency || "USD";
  const d = dividendProfile(c, a);
  const self = idx?.companies.find((x) => x.t === c.ticker);
  const peers = self ? findPeers(idx.companies, self, 5) : [];
  const g = (s, inv) => grade(s, inv);
  const bar = (s, inv) => `<div class="rbar"><span class="tone-${g(s, inv).tone}" style="width:${isNum(s) ? s : 0}%"></span></div>`;
  const years = a.series.slice(-5);
  const flags = [...a.flags].sort((x, y) => ({ critical: 0, warning: 1, positive: 2 }[x.level] - { critical: 0, warning: 1, positive: 2 }[y.level]));
  const tag = { critical: t("ui.critical"), warning: t("ui.warningTag"), positive: t("ui.strength") };
  const cell = (v, kind) => (kind === "money" ? (isNum(v) ? money(v, cur) : "–") : kind === "eps" ? (isNum(v) ? num(v, 2) : "–") : isNum(v) || v === Infinity ? fmt(v, kind) : "–");

  app.innerHTML = `
    <div class="report-bar no-print">
      <a class="back" href="#/c/${encodeURIComponent(c.ticker)}">‹ ${esc(t("ui.back"))}</a>
      <button class="btn btn-primary" id="print" type="button">${esc(t("ui.printPdf"))}</button>
      <span class="small muted">${esc(t("ui.printHint"))}</span>
    </div>
    <article class="report">
      <header class="report-head">
        <div class="report-brand"><img src="assets/img/logo.svg" alt="" width="26" height="26"><span>TeraStock<b>X</b></span></div>
        <div class="small">${esc(t("ui.reportTitle"))} · ${esc(date(new Date().toISOString()))}</div>
      </header>
      <h1>${esc(c.name)} <span class="report-tk">${esc(c.ticker)}</span></h1>
      <p class="report-sub">${[c.exchange, c.country, c.sector ? sectorName(c.sector) : null, c.industry, t("ui.lastFy", { y: a.latestYear })].filter(Boolean).map(esc).join(" · ")}
        ${isNum(c.market?.price) ? `<br>${esc(t("ui.pfPrice"))}: ${fmt(c.market.price, "usd")} · ${esc(t("ui.marketCap"))}: ${money(a.metrics.marketCap)}` : ""}</p>

      <section class="report-summary">
        <div class="report-score"><div class="big">${a.scores.overall ?? "–"}<small>/100</small></div><div>TeraScore · ${esc(g(a.scores.overall).label)}</div></div>
        <table class="report-table compact"><tbody>
          <tr><td>${esc(t("ui.risk"))}</td><td>${a.scores.risk ?? "–"} · ${esc(g(a.scores.risk, true).label)}</td></tr>
          <tr><td>${esc(t("ui.distress"))}</td><td>${esc(t(`distress.${a.distress.level}`))}</td></tr>
          <tr><td>${esc(t("ui.trend"))}</td><td>${esc(t(`outlook.${a.outlook.level}`))}</td></tr>
          <tr><td>${esc(t("ui.dividendSafety"))}</td><td>${d.payer ? `${d.score ?? "–"} · ${esc(t(`dividend.${d.level}`))}` : esc(t("ui.dividendNoneShort"))}</td></tr>
          ${a.styles.length ? `<tr><td>${esc(t("ui.profile"))}</td><td>${a.styles.map((x) => esc(t(`styles.${x}`))).join(", ")}</td></tr>` : ""}
        </tbody></table>
      </section>
      <p>${esc(t(`verdict.${gradeKey(a.scores.overall)}`))}</p>

      <section><h2>${esc(t("ui.sectionScores"))}</h2>
        <table class="report-table"><tbody>${DIMENSIONS.map((k) => `<tr><td>${esc(t(`dims.${k}.name`))}</td><td class="n">${a.scores[k] ?? "–"}</td><td class="w">${bar(a.scores[k], k === "risk")}</td><td>${esc(g(a.scores[k], k === "risk").label)}</td></tr>`).join("")}</tbody></table>
      </section>

      <section><h2>${esc(t("ui.sectionKey"))}</h2>
        <table class="report-table two"><tbody>${KEY_METRICS.filter((k) => a.metrics[k] !== null && a.metrics[k] !== undefined).map((k) => `<tr><td>${esc(metricLabel(k))}</td><td class="n">${fm(a.metrics, k, cur)}</td></tr>`).join("")}</tbody></table>
      </section>

      <section><h2>${esc(t("ui.reportFinancials"))} <span class="small">(${esc(cur)})</span></h2>
        <table class="report-table"><thead><tr><th></th>${years.map((y) => `<th class="n">${y.year}</th>`).join("")}</tr></thead>
          <tbody>${REPORT_ROWS.map(([k, kind]) => `<tr><td>${esc(k === "eps" ? t("raw.epsDiluted") : k in (dict().raw || {}) ? t(`raw.${k}`) : metricLabel(k))}</td>${years.map((y) => `<td class="n">${cell(y[k], kind)}</td>`).join("")}</tr>`).join("")}</tbody></table>
      </section>

      ${peers.length ? `<section><h2>${esc(t("ui.peersTitle"))}</h2>
        <table class="report-table"><thead><tr><th>${esc(t("ui.company"))}</th><th class="n">${esc(t("ui.marketCap"))}</th><th class="n">TeraScore</th><th class="n">${esc(t("ui.risk"))}</th><th class="n">${esc(t("ui.pe"))}</th><th class="n">${esc(t("ui.dividendYieldShort"))}</th></tr></thead>
          <tbody>${[self, ...peers].map((r) => `<tr class="${r === self ? "self" : ""}"><td><b>${esc(r.t)}</b> ${esc(r.n)}</td><td class="n">${isNum(r.mc) ? money(r.mc) : "–"}</td><td class="n">${r.sc?.overall ?? "–"}</td><td class="n">${r.sc?.risk ?? "–"}</td><td class="n">${isNum(r.pe) ? `${num(r.pe, 1)}×` : "–"}</td><td class="n">${isNum(r.dy) ? fmt(r.dy, "pct") : "–"}</td></tr>`).join("")}</tbody></table>
      </section>` : ""}

      ${d.payer ? `<section><h2>${esc(t("ui.dividendTitle"))}</h2>
        <table class="report-table two"><tbody>
          <tr><td>${esc(t("ui.dividendSafety"))}</td><td class="n">${d.score ?? "–"} · ${esc(t(`dividend.${d.level}`))}</td></tr>
          <tr><td>${esc(t("ui.dividendYield"))}</td><td class="n">${isNum(d.yield) ? fmt(d.yield, "pct") : "–"}</td></tr>
          <tr><td>${esc(t("ui.dpsCagr"))}</td><td class="n">${isNum(d.dpsCagr) ? fmt(d.dpsCagr, "pct") : "–"}</td></tr>
          <tr><td>${esc(t("ui.yearsRaised"))}</td><td class="n">${esc(t("ui.yearsN", { n: d.growthYears }))}</td></tr>
          <tr><td>${esc(t("ui.earningsPayout"))}${d.basis === "ttm" ? ` (${esc(t("ui.ttm"))})` : ""}</td><td class="n">${payout(d.earningsPayout)}</td></tr>
          <tr><td>${esc(t("ui.fcfPayout"))}${d.basis === "ttm" ? ` (${esc(t("ui.ttm"))})` : ""}</td><td class="n">${payout(d.fcfPayout)}</td></tr>
        </tbody></table></section>` : ""}

      <section><h2>${esc(t("ui.sectionFlags"))}</h2>
        ${flags.length ? `<ul class="report-flags">${flags.map((f) => { const ft = flagText(f, cur); return `<li class="lv-${f.level}"><b>${esc(ft.title)}</b> <span class="small">(${esc(tag[f.level])})</span> – ${esc(ft.text)}</li>`; }).join("")}</ul>` : `<p>${esc(t("ui.noFlags"))}</p>`}
      </section>

      <footer class="report-foot">${esc(t("ui.footer"))}<br>${esc(t("ui.engine", { v: ENGINE_VERSION }))}${c.source?.retrieved ? ` · ${esc(t("ui.retrieved", { d: date(c.source.retrieved) }))}` : ""} · ${esc(location.host)} · ${CONTACT_EMAIL}</footer>
    </article>`;
  document.getElementById("print").addEventListener("click", () => window.print());
}

// ---------- Install as an app ----------

// Chrome, Edge and Android offer an install prompt; Safari (iPhone, iPad, Mac) installs via "Add to Home Screen".
let installPrompt = null;
addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installPrompt = e; document.querySelectorAll("[data-install-now]").forEach((b) => b.classList.remove("hidden")); });
addEventListener("appinstalled", () => { installPrompt = null; if (location.hash.startsWith("#/install")) renderInstall(); });

const isStandalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
function devicePlatform() {
  const ua = navigator.userAgent;
  if (/iPhone|iPod/.test(ua)) return "iphone";
  if (/iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "ipad";
  if (/Android/.test(ua)) return "android";
  return "desktop";
}

function installBanner() {
  let hidden = false;
  try { hidden = localStorage.getItem("tsx-install-hide") === "1"; } catch {}
  if (hidden || isStandalone()) return "";
  return `<div class="glass install-banner" id="install-banner">
    <img src="assets/img/icons/icon-192.png" alt="" width="40" height="40">
    <span>${esc(t("ui.installBanner"))}</span>
    <a class="btn btn-primary" href="#/install">${esc(t("ui.installHow"))}</a>
    <button class="icon-btn" id="install-x" type="button" aria-label="${esc(t("ui.close"))}">×</button>
  </div>`;
}

function renderInstall() {
  document.title = `${t("ui.installTitle")} | TeraStockX`;
  const dev = devicePlatform();
  const steps = (k) => `<ol class="install-steps">${[1, 2, 3, 4].map((i) => t(`install.${k}${i}`)).filter((x) => x && !x.startsWith("install.")).map((x) => `<li>${esc(x)}</li>`).join("")}</ol>`;
  const card = (k, title, icon) => `<div class="glass pad install-card ${dev === k || (k === "iphone" && dev === "ipad") ? "current" : ""}">
    <div class="install-card-head"><span class="install-icon" aria-hidden="true">${icon}</span><h2>${esc(title)}</h2>
      ${dev === k || (k === "iphone" && dev === "ipad") ? `<span class="badge">${esc(t("ui.installYourDevice"))}</span>` : ""}</div>
    ${steps(k)}</div>`;
  const cards = { iphone: card("iphone", t("ui.installIos"), "📱"), android: card("android", t("ui.installAndroid"), "🤖"), desktop: card("desktop", t("ui.installDesktop"), "💻") };
  const order = dev === "android" ? ["android", "iphone", "desktop"] : dev === "desktop" ? ["desktop", "iphone", "android"] : ["iphone", "android", "desktop"];
  app.innerHTML = `
    <div class="prose" style="max-width:none;margin-top:8px">
      <h1>${esc(t("ui.installTitle"))}</h1>
      <p style="max-width:820px">${esc(t("ui.installIntro"))}</p>
    </div>
    ${isStandalone() ? `<div class="notice"><span>✓</span><span>${esc(t("ui.installDone"))}</span></div>` : `
    <div class="install-now">
      <button class="btn btn-primary ${installPrompt ? "" : "hidden"}" type="button" data-install-now>${esc(t("ui.installNow"))}</button>
    </div>`}
    <ul class="install-benefits">${[1, 2, 3, 4].map((i) => `<li>${esc(t(`install.benefit${i}`))}</li>`).join("")}</ul>
    <div class="install-grid">${order.map((k) => cards[k]).join("")}</div>
    <p class="small muted" style="margin-top:16px">${esc(t("ui.installNote"))}</p>`;
  app.querySelector("[data-install-now]")?.addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice.catch(() => null);
    installPrompt = null;
    renderInstall();
  });
}

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

// ---------- Methodology ----------

function renderMethod() {
  document.title = `${t("method.title")} | TeraStockX`;
  const thr = (k, v) => fmt(v, METRIC_FORMAT[k]);
  const table = (parts) => `<div class="glass method-card"><table class="method-table">
    <thead><tr><th>${esc(t("ui.metric"))}</th><th>${esc(t("method.zero"))}</th><th>${esc(t("method.hundred"))}</th><th class="n">${esc(t("ui.weight"))}</th></tr></thead>
    <tbody>${parts.map((p) => `<tr><td><b>${esc(metricLabel(p.key))}</b><br><span class="small">${esc(metricDesc(p.key))}</span></td><td class="n">${thr(p.key, p.bad)}</td><td class="n">${thr(p.key, p.good)}</td><td class="n">${Math.round(p.weight * 100)}%</td></tr>`).join("")}</tbody></table></div>`;
  const dims = Object.keys(OVERALL_WEIGHTS).concat("marketRisk").map((d) => {
    const gen = PROFILES.general[d];
    const variants = ["financial", "realEstate"].filter((p) => PROFILES[p][d] !== gen);
    const note = d === "profitability" ? t("method.smoothText", { a: Math.round((1 - SMOOTH_PRIOR_WEIGHT) * 100), b: Math.round(SMOOTH_PRIOR_WEIGHT * 100) })
      : d === "liquidity" ? t("method.runwayText", { bad: num(RUNWAY_BAD, 2), good: num(RUNWAY_GOOD, 0) }) : "";
    return `<h2>${esc(t(`dims.${d}.name`))}</h2><p>${esc(t(`dims.${d}.q`))}</p>${table(gen)}${note ? `<p class="small">${esc(note)}</p>` : ""}
      ${variants.map((p) => `<p class="small"><b>${esc(t(`method.profile${p[0].toUpperCase()}${p.slice(1)}`))}</b></p>${PROFILES[p][d].length ? table(PROFILES[p][d]) : `<p class="small muted">${esc(t("ui.notScored"))}</p>`}`).join("")}`;
  }).join("");
  const bands = ["excellent", "strong", "moderate", "weak", "poor"].map((k) => `<span class="pill tone-${GRADE_TONE[k]}"><span class="dot"></span>${esc(t(`grades.${k}`))}</span>`).join(" ");
  app.innerHTML = `<div class="prose">
    <h1>${esc(t("method.title"))}</h1>
    <p>${esc(t("method.intro"))}</p>
    <p>${esc(t("method.scaling"))}</p>
    <p>${esc(t("method.partial", { s: MISSING_DIMENSION_SCORE })).replace("◐", DQ_HALF)}</p>
    <p>${esc(t("method.estimates"))}</p>
    <p>${esc(t("method.bands"))} ${bands} <span class="small">(80–100 · 65–79 · 45–64 · 25–44 · 0–24)</span></p>
    <p>${esc(t("method.profiles"))}</p>
    <h2>${esc(t("method.overall"))}</h2><p>${esc(t("method.overallText"))}</p>
    <div class="glass method-card"><table class="method-table"><tbody>${Object.entries(OVERALL_WEIGHTS).map(([k, w]) => `<tr><td>${esc(t(`dims.${k}.name`))}</td><td class="n">${Math.round(w * 100)}%</td></tr>`).join("")}</tbody></table></div>
    <h2 id="backtest">${esc(t("method.btTitle"))}</h2><div id="bt"><p class="small muted">…</p></div>
    ${dims}
    <h2>${esc(t("method.riskTitle"))}</h2><p>${esc(riskExplain())}</p>
    <h2>${esc(t("method.distressTitle"))}</h2><p>${esc(t("method.distressText"))}</p>
    <h2>${esc(t("method.trendTitle"))}</h2><p>${esc(t("method.trendText"))}</p>
    <h2>${esc(t("method.stylesTitle"))}</h2><p>${esc(t("method.stylesText"))}</p>
    <h2>${esc(t("ui.navTrend"))}</h2><p>${esc(t("method.historyText"))}</p>
    <h2>${esc(t("method.relativeTitle"))}</h2><p>${esc(t("method.relativeText"))}</p>
    <h2>${esc(t("method.eventsTitle"))}</h2><p>${esc(t("method.eventsText"))}</p>
    <h2>${esc(t("ui.insiderTitle"))}</h2><p>${esc(t("method.insiderText"))}</p>
    <h2>${esc(t("ui.screensTitle"))}</h2>
    <div class="glass method-card"><table class="method-table"><tbody>${SCREENS.map((sc) => `<tr><td><b>${esc(t(`screens.${sc.id}.name`))}</b><br><span class="small">${esc(t(`screens.${sc.id}.desc`))}</span></td></tr>`).join("")}</tbody></table></div>
    <h2>${esc(t("ui.peersTitle"))}</h2><p>${esc(t("method.peersText"))}</p>
    <h2>${esc(t("ui.dividendSafety"))}</h2><p>${esc(t("method.dividendText"))}</p>
    <div class="glass method-card"><table class="method-table"><tbody>${Object.entries(DIVIDEND_WEIGHTS).map(([k, w]) => `<tr><td><b>${esc(t(`dividend.parts.${k}`))}</b><br><span class="small">${esc(t(`dividend.partsText.${k}`))}</span></td><td class="n">${Math.round(w * 100)}%</td></tr>`).join("")}</tbody></table></div>
    <h2>${esc(t("ui.navPortfolio"))}</h2><p>${esc(t("method.portfolioText", { p: fmt(PORTFOLIO_LIMITS.position, "pct0"), s: fmt(PORTFOLIO_LIMITS.sector, "pct0"), n: PORTFOLIO_LIMITS.minHoldings }))} ${esc(t("method.portfolioEtfText"))}</p>
    <h2>${esc(t("ui.periodQuarterly"))}</h2><p>${esc(t("method.quarterlyText"))}</p>
    <h2>${esc(t("method.currencyTitle"))}</h2><p>${esc(t("method.currencyText"))}</p>
    <h2>${esc(t("method.sectorTitle"))}</h2><p>${esc(t("method.sectorText"))}</p>
    <h2>${esc(t("method.limitsTitle"))}</h2><p>${esc(t("method.limitsText"))}</p><p class="small muted">${esc(t("method.logosText"))}</p>
  </div>`;
  loadBacktest().then((b) => { const el = document.getElementById("bt"); if (el) el.innerHTML = backtestView(b); });
}

let backtestCache;
async function loadBacktest() {
  if (backtestCache === undefined) {
    try { const r = await fetch("data/backtest.json", { cache: "no-cache" }); backtestCache = r.ok ? await r.json() : null; } catch { backtestCache = null; }
  }
  return backtestCache;
}

// Methodology page: how the TeraScore of the time compared with the next 12 months (scripts/backtest.mjs).
function backtestView(b) {
  if (!b || b.engineVersion !== ENGINE_VERSION || !b.quintiles?.length) return `<p class="small muted">${esc(t("method.btPending"))}</p>`;
  const month = (ym) => (ym ? new Date(`${ym}-15T00:00:00Z`).toLocaleDateString(locale(), { year: "numeric", month: "short" }) : "–");
  const p0 = (v) => fmt(v, "pct0");
  const rows = [...b.quintiles].reverse().map((q, i, arr) => `<tr><td>${q.q}${i === 0 ? ` <span class="small muted">(${esc(t("method.btBest"))})</span>` : i === arr.length - 1 ? ` <span class="small muted">(${esc(t("method.btWorst"))})</span>` : ""}</td>
      <td class="n">${q.avgScore}</td><td class="n ${q.excess >= 0 ? "pos" : "neg"}">${fmt(q.excess, "spct")}</td><td class="n">${p0(q.bigLoss)}</td><td class="n">${p0(q.drawdown)}</td></tr>`).join("");
  const rq = b.riskQuintiles || [], lo = rq[0], hi = rq[rq.length - 1];
  const dl = Object.fromEntries((b.fundamental?.dividendLevels || []).map((x) => [x.level, p0(x.cutRate)]));
  return `<p>${esc(t("method.btIntro", { from: month(b.period?.first), to: month(b.period?.last), n: num(b.observations, 0), c: num(b.companies, 0), mc: money(b.minMarketCap) }))}</p>
    <div class="glass method-card bt-card"><table class="method-table bt-table">
      <thead><tr><th>${esc(t("method.btQuintile"))}</th><th class="n">${esc(t("method.btAvg"))}</th><th class="n">${esc(t("method.btExcess"))}</th><th class="n">${esc(t("method.btBigLoss"))}</th><th class="n">${esc(t("method.btDrawdown"))}</th></tr></thead>
      <tbody>${rows}</tbody></table></div>
    <p>${esc(t("method.btIc", { share: p0(b.positiveShare), k: b.formationDates, ic: num(b.rankIC, 2) }))}</p>
    ${isNum(b.fundamental?.aucLossOverall) ? `<p>${esc(t("method.btLoss", { p: p0(b.fundamental.aucLossOverall), y: num(b.fundamental.years, 0) }))}</p>` : ""}
    ${lo && hi ? `<p>${esc(t("method.btRisk", { lo: p0(lo.drawdown), hi: p0(hi.drawdown), blo: p0(lo.bigLoss), bhi: p0(hi.bigLoss) }))}</p>` : ""}
    ${dl.safe ? `<p>${esc(t("method.btDividend", dl))}</p>` : ""}
    <p class="small muted">${esc(t("method.btCaveats"))}</p>`;
}

ready.then(() => { renderChrome(); route(); });
// Web fonts can arrive after the first render and change text widths: fit the slogan and tab labels again.
document.fonts?.ready?.then(() => { fitTagline(); fitTabLabels(); });
