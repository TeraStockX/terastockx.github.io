// Language handling: English is the default and the fallback for any missing key. The other languages are
// loaded on demand (one file each), so a visitor downloads only English and the language they use.
// The choice is remembered per browser.
import en from "./en.js";

// Every language: code, native name, English name, short label, locale for numbers and dates, writing direction.
// Arabic-script languages and Bengali keep Latin digits, so prices, tickers and charts read the same everywhere.
const ALL_LANGS = [
  { code: "en", name: "English", english: "English", short: "EN", locale: "en-US" },
  { code: "hu", name: "Magyar", english: "Hungarian", short: "HU", locale: "hu-HU" },
  { code: "de", name: "Deutsch", english: "German", short: "DE", locale: "de-DE" },
  { code: "fr", name: "Français", english: "French", short: "FR", locale: "fr-FR" },
  { code: "es", name: "Español", english: "Spanish", short: "ES", locale: "es-ES" },
  { code: "zh", name: "中文", english: "Chinese", short: "中文", locale: "zh-CN" },
  { code: "hi", name: "हिन्दी", english: "Hindi", short: "HI", locale: "hi-IN" },
  { code: "ar", name: "العربية", english: "Arabic", short: "AR", locale: "ar-u-nu-latn", dir: "rtl" },
  { code: "bn", name: "বাংলা", english: "Bengali", short: "BN", locale: "bn-IN-u-nu-latn" },
  { code: "pt", name: "Português", english: "Portuguese", short: "PT", locale: "pt-BR" },
  { code: "id", name: "Bahasa Indonesia", english: "Indonesian", short: "ID", locale: "id-ID" },
  { code: "ur", name: "اردو", english: "Urdu", short: "UR", locale: "ur-PK-u-nu-latn", dir: "rtl" },
  { code: "ru", name: "Русский", english: "Russian", short: "RU", locale: "ru-RU" },
  { code: "ja", name: "日本語", english: "Japanese", short: "JA", locale: "ja-JP" },
  { code: "vi", name: "Tiếng Việt", english: "Vietnamese", short: "VI", locale: "vi-VN" },
  { code: "tr", name: "Türkçe", english: "Turkish", short: "TR", locale: "tr-TR" },
  { code: "fa", name: "فارسی", english: "Persian", short: "FA", locale: "fa-IR-u-nu-latn", dir: "rtl" },
  { code: "ko", name: "한국어", english: "Korean", short: "KO", locale: "ko-KR" },
  { code: "th", name: "ไทย", english: "Thai", short: "TH", locale: "th-TH" },
  { code: "it", name: "Italiano", english: "Italian", short: "IT", locale: "it-IT" },
  { code: "sv", name: "Svenska", english: "Swedish", short: "SV", locale: "sv-SE" },
  { code: "fi", name: "Suomi", english: "Finnish", short: "FI", locale: "fi-FI" },
  { code: "da", name: "Dansk", english: "Danish", short: "DA", locale: "da-DK" },
  { code: "nb", name: "Norsk", english: "Norwegian", short: "NO", locale: "nb-NO" },
  { code: "nl", name: "Nederlands", english: "Dutch", short: "NL", locale: "nl-NL" },
  { code: "pl", name: "Polski", english: "Polish", short: "PL", locale: "pl-PL" },
  { code: "he", name: "עברית", english: "Hebrew", short: "HE", locale: "he-IL", dir: "rtl" },
  { code: "el", name: "Ελληνικά", english: "Greek", short: "EL", locale: "el-GR" },
  { code: "cs", name: "Čeština", english: "Czech", short: "CS", locale: "cs-CZ" },
  { code: "ro", name: "Română", english: "Romanian", short: "RO", locale: "ro-RO" },
  { code: "uk", name: "Українська", english: "Ukrainian", short: "UK", locale: "uk-UA" },
  { code: "ms", name: "Bahasa Melayu", english: "Malay", short: "MS", locale: "ms-MY" },
  { code: "fil", name: "Filipino", english: "Filipino", short: "FIL", locale: "fil-PH" },
  { code: "sr", name: "Српски", english: "Serbian", short: "SR", locale: "sr-Cyrl-RS" },
  { code: "hr", name: "Hrvatski", english: "Croatian", short: "HR", locale: "hr-HR" },
];
// Languages whose dictionary is ready (the others are being translated).
const AVAILABLE = new Set(["en", "hu", "de", "fr", "es", "zh", "hi", "ar", "bn", "pt", "id", "ur", "ru", "ja", "vi", "tr", "fa", "ko"]);
export const LANG_LIST = ALL_LANGS.filter((l) => AVAILABLE.has(l.code));
const META = Object.fromEntries(LANG_LIST.map((l) => [l.code, l]));
export const langMeta = (code) => META[code] || META.en;

// Dictionaries loaded so far (English always).
export const LANGS = { en };
export const EN = en;
const KEY = "tsx-lang";

export async function loadLang(code) {
  if (!META[code]) throw new Error(`unknown language ${code}`);
  if (!LANGS[code]) LANGS[code] = (await import(`./${code}.js`)).default;
  return LANGS[code];
}
// Every language, e.g. for the tests and the documentation.
export async function loadAllLangs() {
  await Promise.all(LANG_LIST.map((l) => loadLang(l.code)));
  return LANGS;
}

let current = "en";
try {
  const saved = localStorage.getItem(KEY);
  if (saved && META[saved]) current = saved;
} catch {}

function applyDocument() {
  if (typeof document === "undefined") return;
  document.documentElement.lang = current;
  document.documentElement.dir = langMeta(current).dir || "ltr";
}

// Resolves when the saved language is loaded (falls back to English if its file cannot be loaded).
export const ready = (current === "en" ? Promise.resolve() : loadLang(current).catch(() => { current = "en"; })).then(applyDocument);

export const lang = () => current;
export const dict = () => LANGS[current] || en;
export const locale = () => langMeta(current).locale;

export async function setLang(code) {
  if (!META[code]) return;
  await loadLang(code);
  current = code;
  try { localStorage.setItem(KEY, code); } catch {}
  applyDocument();
}

// t("ui.results", { n: 5 }) – falls back to English if a key is missing.
export function t(path, params) {
  const get = (d) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), d);
  let s = get(dict());
  if (s == null) s = get(en);
  if (s == null) return path;
  return params ? fill(s, params) : s;
}

export function fill(s, params) {
  return String(s).replace(/\{(\w+)\}/g, (_, k) => (params[k] ?? "–"));
}

// ---------- Number formatting ----------

const isNum = (x) => typeof x === "number" && Number.isFinite(x);
const cache = new Map();
function nf(opts) {
  const k = current + JSON.stringify(opts);
  if (!cache.has(k)) cache.set(k, new Intl.NumberFormat(locale(), opts));
  return cache.get(k);
}

export function money(v, currency = "USD") {
  if (!isNum(v)) return "–";
  return nf({ style: "currency", currency, notation: "compact", maximumFractionDigits: Math.abs(v) >= 1e9 ? 1 : 0 }).format(v);
}

// In right-to-left languages a number with its sign and unit ("+17.1%", "9.9×") is kept left-to-right
// with Unicode isolation marks, so the sign stays in front of the number.
export const ltr = (s) => (langMeta(current).dir === "rtl" ? `\u2066${s}\u2069` : s);

export function num(v, d = 1) {
  return isNum(v) ? ltr(nf({ minimumFractionDigits: d, maximumFractionDigits: d }).format(v)) : "–";
}

export function fmt(v, kind, currency = "USD") {
  if (v === Infinity) return kind === "mult" || kind === "xyears" ? "n/m" : "∞";
  if (v === -Infinity) return "−∞";
  if (!isNum(v)) return "–";
  const pct = (d) => nf({ style: "percent", minimumFractionDigits: d, maximumFractionDigits: d });
  switch (kind) {
    case "pct": return ltr(pct(1).format(v));
    case "pct0": return ltr(pct(0).format(v));
    case "spct": return ltr((v > 0 ? "+" : "") + pct(1).format(v));
    case "pp": return ltr(`${v > 0 ? "+" : ""}${num(v * 100, 1)} pp`);
    case "x": return ltr(`${num(v, 2)}×`);
    case "xyears": return ltr(`${num(v, 1)}×`);
    case "years": return t("ui.yearsUnit", { n: num(v, 1) });
    case "mult": return ltr(`${num(v, 1)}×`);
    case "of9": return ltr(`${v}/9`);
    case "money": return money(v, currency);
    case "usd": return nf({ style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(v);
    case "int": return ltr(nf({ maximumFractionDigits: 0 }).format(v));
    default: return num(v, 2);
  }
}

export const date = (d) => (d ? new Date(d).toLocaleDateString(locale(), { year: "numeric", month: "short", day: "numeric" }) : "–");
