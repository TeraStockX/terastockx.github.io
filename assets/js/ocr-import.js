// Portfolio import from a screenshot of a broker app.
// 1. The image is prepared on a canvas (enlarged, grey, dark text on a light ground).
// 2. Text recognition with Tesseract.js runs in the browser: the image never leaves the device. The library
//    and its English model (about 7 MB, cached by the browser) are loaded from jsDelivr, at pinned versions,
//    only when the feature is used.
// 3. Recognised words are grouped into rows; each row is matched against the known tickers and company
//    names. The number of shares is read from the same row or the rows below it ("10 shares", "12 db",
//    "Qty 7"), from a quantity column ("Darab", "Shares", "Qty" header), or, when the screenshot shows only
//    the value of the position, estimated as value ÷ current price (marked as an estimate).
// Several screenshots can be read in one go (one recognition worker); a company found on more than one of
// them (overlapping screenshots) is listed once. The user checks and corrects the result before anything
// is added.

const DEFAULT_CDN = "https://cdn.jsdelivr.net/npm/";
const cdn = () => { try { return localStorage.getItem("tsx-ocr-base") || DEFAULT_CDN; } catch { return DEFAULT_CDN; } };
const LIB = "tesseract.js@6.0.1/dist/";
const CORE = "tesseract.js-core@6.0.0";
const LANG = "@tesseract.js-data/eng@1.0.0/4.0.0_best_int";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (window.Tesseract) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("text recognition could not be loaded"));
    document.head.appendChild(s);
  });
}

// Image file -> canvas ready for recognition.
export async function prepareImage(file) {
  const bmp = await createImageBitmap(file);
  let scale = Math.min(3, Math.max(1, 1800 / bmp.width));
  if (bmp.width * bmp.height * scale * scale > 16e6) scale = Math.sqrt(16e6 / (bmp.width * bmp.height));
  const w = Math.round(bmp.width * scale), h = Math.round(bmp.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bmp, 0, 0, w, h);
  bmp.close?.();
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  let sum = 0;
  for (let i = 0; i < d.length; i += 4) {
    const g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    d[i] = d[i + 1] = d[i + 2] = g;
    sum += g;
  }
  // Dark mode: invert, so the text is dark on a light ground. Then stretch the contrast.
  const invert = sum / (d.length / 4) < 128;
  let lo = 255, hi = 0;
  for (let i = 0; i < d.length; i += 4) {
    const g = invert ? 255 - d[i] : d[i];
    d[i] = g;
    if (g < lo) lo = g;
    if (g > hi) hi = g;
  }
  const span = Math.max(1, hi - lo);
  for (let i = 0; i < d.length; i += 4) d[i] = d[i + 1] = d[i + 2] = Math.round(((d[i] - lo) / span) * 255);
  ctx.putImageData(img, 0, 0);
  return canvas;
}

// One recognition worker for one or more images. onProgress(0..1, phase: "load" | "read")
export async function createReader(onProgress = () => {}) {
  const base = cdn();
  onProgress(0, "load");
  await loadScript(base + LIB + "tesseract.min.js");
  const worker = await window.Tesseract.createWorker("eng", 1, {
    workerPath: base + LIB + "worker.min.js",
    corePath: base + CORE,
    langPath: base + LANG,
    logger: (m) => {
      if (m.status === "recognizing text") onProgress(m.progress || 0, "read");
      else if (/load|initializ/.test(m.status || "")) onProgress(m.progress || 0, "load");
    },
  });
  await worker.setParameters({ tessedit_pageseg_mode: "11", preserve_interword_spaces: "1" });
  return {
    // Canvas -> recognised words [{ text, confidence, bbox }]
    async read(canvas) {
      const { data } = await worker.recognize(canvas, {}, { blocks: true });
      const words = [];
      for (const b of data.blocks || []) for (const p of b.paragraphs || []) for (const l of p.lines || []) for (const w of l.words || []) words.push({ text: w.text, confidence: w.confidence, bbox: w.bbox });
      return words;
    },
    close: () => worker.terminate(),
  };
}

export async function recognize(canvas, onProgress = () => {}) {
  const reader = await createReader(onProgress);
  try { return await reader.read(canvas); } finally { await reader.close(); }
}

// ---------- Matching (pure functions, tested in tests/run.mjs) ----------

// Words -> rows, top to bottom (words whose vertical centres are close form a row). Words far apart
// (another column) are joined with two spaces, so numbers in neighbouring columns are not read as one
// number with a space as thousands separator. { detailed: true } also returns each word's position.
export function groupRows(words, { detailed = false } = {}) {
  const ws = words
    .filter((w) => String(w.text || "").trim() && (w.confidence ?? 100) >= 30 && w.bbox)
    .map((w) => ({ text: String(w.text).trim(), c: w.confidence ?? 100, x: w.bbox.x0, x1: w.bbox.x1, y: (w.bbox.y0 + w.bbox.y1) / 2, h: Math.max(1, w.bbox.y1 - w.bbox.y0) }))
    .sort((a, b) => a.y - b.y);
  const rows = [];
  for (const w of ws) {
    const r = rows.at(-1);
    if (r && Math.abs(w.y - r.y) <= Math.max(4, 0.55 * Math.min(w.h, r.h))) {
      r.words.push(w);
      r.y = r.words.reduce((sum, x) => sum + x.y, 0) / r.words.length;
      r.h = Math.max(r.h, w.h);
    } else rows.push({ y: w.y, h: w.h, words: [w] });
  }
  return rows.map((r) => {
    const ws2 = r.words.sort((a, b) => a.x - b.x);
    const text = ws2.map((w, i) => (i === 0 ? "" : w.x - ws2[i - 1].x1 > 0.9 * r.h ? "  " : " ") + w.text).join("");
    return detailed ? { text, words: ws2.map((w) => ({ t: w.text, c: w.c, x0: w.x, x1: w.x1 })) } : text;
  });
}

// Uppercase words that are tickers too, but in a screenshot are much more likely to be labels, currency
// codes ("FT" is how many Hungarian apps write forints) or units ("DB" = darab, pieces).
const STOP = new Set(("A I AN AM AT BE BY DO GO IF IN IS IT ME MY NO OF OK ON OR PM SO TO UP US WE " +
  "ALL AND ANY ARE BUY CAN DAY FOR HAS NEW NOW OLD ONE " +
  "OUT OWN PER SEE SET TWO WAY YOU YTD ETF ETN QTY AVG MKT NAV ROI LTP IRA ISA TFSA PIN APP WEB FAQ " +
  "CASH OPEN HIGH LOW MAX MIN TOTAL SELL HOLD VIEW MORE HOME INFO NEWS LIVE MENU LOGIN BACK NEXT EDIT " +
  "DONE GAIN LOSS RISK RATE COST FEE FEES TAX VALUE PRICE SHARE SHARES UNITS STOCK STOCKS FUND FUNDS " +
  "MARKET ORDER ORDERS TRADE WATCH LIST TODAY WEEK MONTH YEAR ABOUT HELP PRO PLUS GOLD " +
  "FT DB HUF EUR USD GBP CHF JPY CAD AUD NZD SEK NOK DKK PLN CZK RON BGN RSD CNY HKD SGD INR BRL MXN ZAR").split(" "));

const SUFFIX = /\b(incorporated|inc|corporation|corp|company|co|limited|ltd|plc|holdings?|group|sa|nv|ag|se|spa|lp|llc|the|class [abc]|common stock|ordinary shares?|american depositary shares?|ads|adr|units?)\b/g;
export const normName = (s) => String(s || "").toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9& ]+/g, " ").replace(SUFFIX, " ").replace(/\s+/g, " ").trim();

// Known securities -> lookup tables. rows: [{ t, n, mc, px }] (stocks and ETFs); fx: { currency: USD per unit }.
export function buildLookup(rows, fx = {}) {
  const tickers = new Set();
  const byName = new Map();
  const nameOf = new Map();
  const priceOf = new Map();
  for (const r of [...rows].sort((a, b) => (b.mc ?? 0) - (a.mc ?? 0))) {
    if (!r?.t) continue;
    tickers.add(r.t);
    if (r.n) nameOf.set(r.t, r.n);
    if (Number.isFinite(r.px) && r.px > 0) priceOf.set(r.t, r.px);
    const nm = normName(r.n);
    if (nm.length >= 4 && !byName.has(nm)) byName.set(nm, r.t);
  }
  // Short names people and apps use for the largest companies.
  for (const [alias, t] of Object.entries({ google: "GOOGL", alphabet: "GOOGL", facebook: "META", meta: "META", amazon: "AMZN", nvidia: "NVDA", tesla: "TSLA", apple: "AAPL", microsoft: "MSFT", netflix: "NFLX", berkshire: "BRK.B", "coca cola": "KO", jpmorgan: "JPM", "jp morgan": "JPM", palantir: "PLTR", broadcom: "AVGO", "johnson & johnson": "JNJ", "procter & gamble": "PG", "eli lilly": "LLY", "taiwan semiconductor": "TSM", "novo nordisk": "NVO", "advanced micro devices": "AMD" })) {
    if (tickers.has(t)) byName.set(alias, t);
  }
  const names = [...byName.keys()].sort((a, b) => b.length - a.length);
  return { tickers, byName, names, nameOf, priceOf, fx: { USD: 1, ...fx } };
}

// "1,234.5" / "1 234,5" / "12,5" / "10" -> number
export function parseNumber(s) {
  let x = String(s).replace(/[\s  ']/g, "");
  const c = x.lastIndexOf(","), d = x.lastIndexOf(".");
  if (c >= 0 && d >= 0) {
    const dec = c > d ? "," : ".";
    x = x.split(dec === "," ? "." : ",").join("");
    return Number(x.replace(",", "."));
  }
  if (c >= 0) {
    const parts = x.split(",");
    return parts.length === 2 && parts[1].length !== 3 ? Number(parts.join(".")) : Number(parts.join(""));
  }
  if (d >= 0) {
    const parts = x.split(".");
    return parts.length > 2 ? Number(parts.join("")) : Number(x);
  }
  return Number(x);
}

const NUM_RE = /[-+−]?\d{1,3}(?:[   ,.]\d{3})+(?:[.,]\d+)?|[-+−]?\d+(?:[.,]\d+)?/g;
// Units, labels and headers are matched without accents (the recognition model may drop them).
const plain = (s) => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// "10 shares", "12 db", "3,5 részvény", "4 Stück", "2 units", "5x"
const UNIT_AFTER = /^\s*(shares?|sh\b|db\b|db\.|darab|reszveny|rv\b|egyseg|units?|pcs\b|stk\b|stuck|aktien|actions?|acciones|titres?|x\b)/i;
// "Qty 10", "Mennyiség: 10", "Volumen 10"
const LABEL_BEFORE = /(qty|quantity|mennyiseg|darabszam|darab|db|anzahl|stuckzahl|stuck|quantite|cantidad|shares|units|egysegek|egyseg|volumen|pozicio|position)\s*[:=]?\s*$/i;
// A column header of quantities (a word of a header row: several words, no numbers). Words that are also
// section titles ("Részvények", "Shares", "Positions", "Actions") are left out.
const QTY_HEADER = /^(qty|quantity|units|darab|db|darabszam|mennyiseg|volumen|egysegek|anzahl|stuck|stuckzahl|stk|quantite|qte|cantidad)[:.]?$/i;
const MONEY_NEAR = /[$€£¥]|\b(usd|eur|huf|ft|gbp|chf)\b/i;
const MONEY_TAIL = /^(?:[ \u00a0\u202f]\d{3})+(?:[.,]\d{1,2})?\s*(?:ft|huf|usd|eur|[$€£])/i;
const CURRENCY_SIGN = { "$": "USD", "€": "EUR", "£": "GBP" };

// The number of shares in a row of text: [value, strength] (2: "10 shares", "Qty 10", "10 @ 150";
// 1: the only plain number, or the only one not written like an amount of money with two decimals).
export function sharesIn(textIn) {
  const text = plain(textIn);
  const nums = [];
  for (const m of text.matchAll(NUM_RE)) {
    const raw = m[0], start = m.index, end = start + raw.length;
    const before = text.slice(Math.max(0, start - 14), start), after = text.slice(end, end + 24);
    const v = parseNumber(raw.replace("−", "-"));
    if (!Number.isFinite(v) || v <= 0) continue;
    if (UNIT_AFTER.test(after) || /^\s*@/.test(after) || LABEL_BEFORE.test(before)) return [v, 2];
    const signed = /^[-+−]/.test(raw);
    // "1779 643 Ft": the recognition sometimes joins only some groups of an amount; the rest is money too.
    const money = MONEY_NEAR.test(before.slice(-3)) || MONEY_NEAR.test(after.slice(0, 4)) || MONEY_TAIL.test(after);
    const pct = /^\s*%/.test(after);
    if (!signed && !money && !pct) nums.push({ v, cents: /[.,]\d{2}$/.test(raw) });
  }
  const noCents = nums.filter((n) => !n.cents);
  if (noCents.length === 1) return [noCents[0].v, 1];
  return nums.length === 1 ? [nums[0].v, 1] : [null, 0];
}

// Amounts of money in a row: [{ v, cur }]. Gains and losses ("+$412.20", "-1 200 Ft") are left out.
// The first group may have up to 4 digits ("1779 643 Ft": the recognition joined two of the groups).
const AMOUNT = "\\d{1,4}(?:[ \\u00a0\\u202f.,]\\d{3})*(?:[.,]\\d{1,2})?";
const MONEY_AFTER = new RegExp(`(${AMOUNT})\\s*(ft|huf|usd|eur|[$€£])(?![a-z])`, "gi");
const MONEY_BEFORE = new RegExp(`(usd|eur|huf|[$€£])\\s*(${AMOUNT})`, "gi");
const CODE = { FT: "HUF", HUF: "HUF", USD: "USD", EUR: "EUR", $: "USD", "€": "EUR", "£": "GBP" };
export function moneyIn(text) {
  const out = [], used = [];
  const add = (m, amount, unit, at) => {
    const before = text.slice(Math.max(0, at - 3), at);
    if (/[-+−]\s*$/.test(before) || used.some(([a, b]) => at < b && at + m.length > a)) return;
    const v = parseNumber(amount);
    const cur = CODE[unit.toUpperCase()];
    if (cur && v > 0) { out.push({ v, cur, at }); used.push([at, at + m.length]); }
  };
  for (const m of text.matchAll(MONEY_BEFORE)) add(m[0], m[2], m[1], m.index);
  for (const m of text.matchAll(MONEY_AFTER)) add(m[0], m[1], m[2], m.index);
  return out.sort((a, b) => a.at - b.at).map(({ v, cur }) => ({ v, cur }));
}

// Shares estimated from the value of the position: value ÷ current price. The largest amount is taken as
// the value (gains, losses and the share price are smaller); an amount close to the price is the price
// itself. Returns { shares, whole } (whole: within 3% of a whole number, so very likely right) or null.
export function sharesFromValue(texts, price, fx = { USD: 1 }) {
  if (!(price > 0)) return null;
  let best = null;
  for (const text of texts) for (const a of moneyIn(text)) {
    const usd = fx[a.cur] ? a.v * fx[a.cur] : null;
    if (!usd) continue;
    const r = usd / price;
    if (r < 0.001 || (r > 0.9 && r < 1.1)) continue;
    if (!best || usd > best.usd) best = { usd, r };
  }
  // A table without currency signs ("AMZN  257,37  2 058,96"): when the row shows the share price, a larger
  // number that is a whole multiple of it is the value of the position.
  if (!best) {
    const nums = texts.flatMap((t) => [...plain(t).matchAll(NUM_RE)].filter((m) => !/^[-+−]/.test(m[0]) && !/^\s*%/.test(t.slice(m.index + m[0].length))).map((m) => parseNumber(m[0])));
    if (nums.some((v) => Math.abs(v / price - 1) <= 0.1)) {
      for (const v of nums) {
        const r = v / price, near = Math.round(r);
        if (near >= 2 && Math.abs(r - near) / near <= 0.03 && (!best || v > best.usd)) best = { usd: v, r };
      }
    }
  }
  if (!best) return null;
  const near = Math.round(best.r);
  const whole = near >= 1 && Math.abs(best.r - near) / near <= 0.03;
  return { shares: whole ? near : Math.round(best.r * 10000) / 10000, whole };
}

// The horizontal span of a quantity column header ("Darab", "Qty", "Shares"…), if the screenshot has one.
function quantityColumn(rows) {
  for (const r of rows) {
    if (r.words.length < 2 || /\d/.test(r.text)) continue;
    const w = r.words.find((x) => QTY_HEADER.test(plain(x.t)));
    if (w) return { x0: w.x0, x1: w.x1 };
  }
  return null;
}
// The number of a row that stands under the quantity header.
function sharesInColumn(row, col) {
  let best = null;
  const hx = (col.x0 + col.x1) / 2;
  for (const w of row.words) {
    if (!/^\d[\d.,]*$/.test(w.t)) continue;
    const v = parseNumber(w.t);
    if (!(v > 0)) continue;
    const overlap = Math.min(w.x1, col.x1) - Math.max(w.x0, col.x0);
    const dist = overlap > 0 ? 0 : Math.abs((w.x0 + w.x1) / 2 - hx);
    if (!best || dist < best.dist) best = { v, dist };
  }
  return best && best.dist <= Math.max(20, 0.6 * (col.x1 - col.x0)) ? best.v : null;
}

const isNumber = (s) => /^[-+−]?[\d.,]+$/.test(s || "");

// The company a row names: a ticker, or failing that a company name. Ticker words must be uppercase
// ASCII, not a label, currency or unit, recognised with some confidence, and a short one (1–2 letters) must
// not follow a number ("52 345 FT", "10 DB" are an amount and a quantity).
function companyIn(row, lookup) {
  const toks = row.words.length ? row.words.map((w) => ({ t: w.t, c: w.c })) : row.text.split(/\s+/).map((t) => ({ t, c: 100 }));
  for (let k = 0; k < toks.length; k++) {
    const w = toks[k].t.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}./-]+$/gu, "").replace(/\.$/, "").replace(/[/-]/, ".");
    if (!/^[A-Z][A-Z0-9.]{1,6}$/.test(w) || STOP.has(w) || toks[k].c < 50) continue;
    if (w.length <= 2 && k > 0 && isNumber(toks[k - 1].t)) continue;
    // Share classes: "BRK.B", "BRK-B", "BRK/B" or "BRK B".
    const next = toks[k + 1]?.t || "";
    const cls = /^[A-C]$/.test(next) ? `${w}.${next}` : null;
    if (cls && lookup.tickers.has(cls)) return { t: cls, how: "ticker" };
    if (lookup.tickers.has(w)) return { t: w, how: "ticker" };
  }
  const norm = ` ${normName(row.text)} `;
  for (const nm of lookup.names) if (norm.includes(` ${nm} `)) return { t: lookup.byName.get(nm), how: "name" };
  return null;
}

// Rows (strings, or { text, words } from groupRows(…, { detailed: true })) -> [{ t, shares, how, src, sure, row }]
// src: "count" (read from the screenshot) | "value" (value ÷ price) | null (not found); sure: tick it by default.
export function parseHoldings(rowsIn, lookup) {
  const rows = rowsIn.map((r) => (typeof r === "string" ? { text: r, words: [] } : { text: r.text, words: r.words || [] }));
  const col = quantityColumn(rows);
  const found = rows.map((r) => companyIn(r, lookup));
  const out = [];
  const seen = new Set();
  rows.forEach((r, i) => {
    const hit = found[i];
    if (!hit || seen.has(hit.t)) return;
    // Numbers that belong to the name ("S&P 500", "3M") are not share counts.
    const nameWords = new Set(String(lookup.nameOf?.get(hit.t) || "").toLowerCase().split(/\s+/).filter(Boolean));
    const clean = (s) => s.split(/(\s+)/).filter((w) => !nameWords.has(w.toLowerCase()) && w !== hit.t).join("");
    // The rows that belong to this company: its own and the next few, up to the next company.
    const block = [r];
    for (let j = i + 1; j <= i + 4 && j < rows.length && !found[j]; j++) block.push(rows[j]);
    let shares = null, strength = 0;
    for (const b of block) {
      let [v, st] = sharesIn(clean(b.text));
      if (st < 2 && col) { const cv = sharesInColumn(b, col); if (cv) [v, st] = [cv, 2]; }
      if (st > strength) [shares, strength] = [v, st];
      if (strength === 2) break;
    }
    let src = strength ? "count" : null, sure = strength > 0;
    if (!strength) {
      const est = sharesFromValue(block.map((b) => clean(b.text)), lookup.priceOf?.get(hit.t), lookup.fx);
      if (est) { shares = est.shares; src = "value"; sure = est.whole; }
    }
    seen.add(hit.t);
    out.push({ t: hit.t, shares, how: hit.how, src, sure, row: r.text });
  });
  return out;
}

// Results of several screenshots -> one list. A company on more than one screenshot (they overlap when a
// long list is captured in parts) is listed once, with the count read from the screenshot if any.
export function mergeHoldings(lists) {
  const rank = (h) => (h.src === "count" ? 3 : h.src === "value" && h.sure ? 2 : h.src === "value" ? 1 : 0);
  const byT = new Map();
  for (const list of lists) for (const h of list) {
    const cur = byT.get(h.t);
    if (!cur || rank(h) > rank(cur)) byT.set(h.t, h);
  }
  return [...byT.values()];
}
