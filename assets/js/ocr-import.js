// Portfolio import from a screenshot of a broker app.
// 1. The image is prepared on a canvas (enlarged, grey, dark text on a light ground).
// 2. Text recognition with Tesseract.js runs in the browser: the image never leaves the device. The library
//    and its English model (about 7 MB, cached by the browser) are loaded from jsDelivr, at pinned versions,
//    only when the feature is used.
// 3. Recognised words are grouped into rows; each row is matched against the known tickers and company
//    names, and the number of shares is read from the same row (or the row below).
// The user checks and corrects the result before anything is added.

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

// Canvas -> recognised words [{ text, confidence, bbox }]. onProgress(0..1, phase)
export async function recognize(canvas, onProgress = () => {}) {
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
  try {
    await worker.setParameters({ tessedit_pageseg_mode: "11", preserve_interword_spaces: "1" });
    const { data } = await worker.recognize(canvas, {}, { blocks: true });
    const words = [];
    for (const b of data.blocks || []) for (const p of b.paragraphs || []) for (const l of p.lines || []) for (const w of l.words || []) words.push({ text: w.text, confidence: w.confidence, bbox: w.bbox });
    return words;
  } finally {
    await worker.terminate();
  }
}

// ---------- Matching (pure functions, tested in tests/run.mjs) ----------

// Words -> rows of text, top to bottom (words whose vertical centres are close form a row). Words far
// apart (another column) are joined with two spaces, so numbers in neighbouring columns are not read as
// one number with a space as thousands separator.
export function groupRows(words) {
  const ws = words
    .filter((w) => String(w.text || "").trim() && (w.confidence ?? 100) >= 30 && w.bbox)
    .map((w) => ({ text: String(w.text).trim(), x: w.bbox.x0, x1: w.bbox.x1, y: (w.bbox.y0 + w.bbox.y1) / 2, h: Math.max(1, w.bbox.y1 - w.bbox.y0) }))
    .sort((a, b) => a.y - b.y);
  const rows = [];
  for (const w of ws) {
    const r = rows.at(-1);
    if (r && Math.abs(w.y - r.y) <= Math.max(4, 0.55 * Math.min(w.h, r.h))) {
      r.words.push(w);
      r.y = r.words.reduce((s, x) => s + x.y, 0) / r.words.length;
      r.h = Math.max(r.h, w.h);
    } else rows.push({ y: w.y, h: w.h, words: [w] });
  }
  return rows.map((r) => {
    const ws = r.words.sort((a, b) => a.x - b.x);
    return ws.map((w, i) => (i === 0 ? "" : w.x - ws[i - 1].x1 > 0.9 * r.h ? "  " : " ") + w.text).join("");
  });
}

// Uppercase words that are tickers too, but in a screenshot are much more likely to be labels.
const STOP = new Set(("A I AN AM AT BE BY DO GO IF IN IS IT ME MY NO OF OK ON OR PM SO TO UP US WE " +
  "ALL AND ANY ARE BUY CAN DAY EUR FOR GBP HAS HUF CHF JPY CAD AUD SEK NOK DKK PLN CZK USD NEW NOW OLD ONE " +
  "OUT OWN PER SEE SET TWO WAY YOU YTD ETF ETN QTY AVG MKT NAV ROI LTP IRA ISA TFSA PIN APP WEB FAQ " +
  "CASH OPEN HIGH LOW MAX MIN TOTAL SELL HOLD VIEW MORE HOME INFO NEWS LIVE MENU LOGIN BACK NEXT EDIT " +
  "DONE GAIN LOSS RISK RATE COST FEE FEES TAX VALUE PRICE SHARE SHARES UNITS STOCK STOCKS FUND FUNDS " +
  "MARKET ORDER ORDERS TRADE WATCH LIST TODAY WEEK MONTH YEAR ABOUT HELP PRO PLUS GOLD").split(" "));

const SUFFIX = /\b(incorporated|inc|corporation|corp|company|co|limited|ltd|plc|holdings?|group|sa|nv|ag|se|spa|lp|llc|the|class [abc]|common stock|ordinary shares?|american depositary shares?|ads|adr|units?)\b/g;
export const normName = (s) => String(s || "").toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9& ]+/g, " ").replace(SUFFIX, " ").replace(/\s+/g, " ").trim();

// Known securities -> lookup tables. rows: [{ t, n, mc }] (stocks and ETFs).
export function buildLookup(rows) {
  const tickers = new Set();
  const byName = new Map();
  const nameOf = new Map();
  for (const r of [...rows].sort((a, b) => (b.mc ?? 0) - (a.mc ?? 0))) {
    if (!r?.t) continue;
    tickers.add(r.t);
    if (r.n) nameOf.set(r.t, r.n);
    const nm = normName(r.n);
    if (nm.length >= 4 && !byName.has(nm)) byName.set(nm, r.t);
  }
  // Short names people and apps use for the largest companies.
  for (const [alias, t] of Object.entries({ google: "GOOGL", alphabet: "GOOGL", facebook: "META", meta: "META", amazon: "AMZN", nvidia: "NVDA", tesla: "TSLA", apple: "AAPL", microsoft: "MSFT", netflix: "NFLX", berkshire: "BRK.B", "coca cola": "KO", jpmorgan: "JPM", "jp morgan": "JPM", palantir: "PLTR", broadcom: "AVGO", "johnson & johnson": "JNJ", "procter & gamble": "PG", "eli lilly": "LLY", "taiwan semiconductor": "TSM", "novo nordisk": "NVO", "advanced micro devices": "AMD" })) {
    if (tickers.has(t)) byName.set(alias, t);
  }
  const names = [...byName.keys()].sort((a, b) => b.length - a.length);
  return { tickers, byName, names, nameOf };
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
const UNIT_AFTER = /^\s*(shares?|sh\b|db\b|db\.|darab|units?|pcs\b|stk\b|stück|aktien|actions?|acciones|titres?|x\b)/i;
const LABEL_BEFORE = /(qty|quantity|mennyiség|darabszám|darab|anzahl|stückzahl|quantité|cantidad|shares|units|position)\s*[:=]?\s*$/i;
const MONEY_NEAR = /[$€£¥]|\b(usd|eur|huf|ft|gbp|chf)\b/i;

// The number of shares in a row of text: [value, strength] (2: "10 shares", "Qty 10", "10 @ 150";
// 1: the only plain number, or the only one not written like an amount of money with two decimals).
export function sharesIn(text) {
  const nums = [];
  for (const m of text.matchAll(NUM_RE)) {
    const raw = m[0], start = m.index, end = start + raw.length;
    const before = text.slice(Math.max(0, start - 14), start), after = text.slice(end, end + 12);
    const v = parseNumber(raw.replace("−", "-"));
    if (!Number.isFinite(v) || v <= 0) continue;
    if (UNIT_AFTER.test(after) || /^\s*@/.test(after) || LABEL_BEFORE.test(before)) return [v, 2];
    const signed = /^[-+−]/.test(raw);
    const money = MONEY_NEAR.test(before.slice(-3)) || MONEY_NEAR.test(after.slice(0, 4));
    const pct = /^\s*%/.test(after);
    if (!signed && !money && !pct) nums.push({ v, cents: /[.,]\d{2}$/.test(raw) });
  }
  const plain = nums.filter((n) => !n.cents);
  if (plain.length === 1) return [plain[0].v, 1];
  return nums.length === 1 ? [nums[0].v, 1] : [null, 0];
}

// Rows of text -> [{ t, shares, how, row }]
export function parseHoldings(rows, lookup) {
  const out = [];
  const seen = new Set();
  const found = rows.map((text) => {
    const hits = [];
    const toks = text.split(/\s+/);
    toks.forEach((tok, k) => {
      const w = tok.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9./-]+$/g, "").replace(/\.$/, "").replace(/[/-]/, ".");
      if (w.length < 2 || w.length > 7 || w !== w.toUpperCase() || !/[A-Z]/.test(w) || STOP.has(w)) return;
      // Share classes: "BRK.B", "BRK-B", "BRK/B" or "BRK B".
      const cls = /^[A-C]$/.test(toks[k + 1] || "") ? `${w}.${toks[k + 1]}` : null;
      if (cls && lookup.tickers.has(cls)) hits.push({ t: cls, how: "ticker" });
      else if (lookup.tickers.has(w)) hits.push({ t: w, how: "ticker" });
    });
    if (!hits.length) {
      const norm = ` ${normName(text)} `;
      for (const nm of lookup.names) if (norm.includes(` ${nm} `)) { hits.push({ t: lookup.byName.get(nm), how: "name" }); break; }
    }
    return hits[0] || null;
  });
  rows.forEach((text, i) => {
    const hit = found[i];
    if (!hit || seen.has(hit.t)) return;
    // Numbers that belong to the name ("S&P 500", "3M") are not share counts.
    const nameWords = new Set(String(lookup.nameOf?.get(hit.t) || "").toLowerCase().split(/\s+/).filter(Boolean));
    const clean = (s) => s.split(/(\s+)/).filter((w) => !nameWords.has(w.toLowerCase()) && w !== hit.t).join("");
    let [shares, strength] = sharesIn(clean(text));
    // The count is often a few lines below the name ("10 shares"; long names wrap), up to the next company.
    for (let j = i + 1; j <= i + 4; j++) {
      if (strength === 2 || j >= rows.length || found[j]) break;
      const [s2, st2] = sharesIn(clean(rows[j]));
      if (st2 > strength) [shares, strength] = [s2, st2];
    }
    seen.add(hit.t);
    out.push({ t: hit.t, shares: strength ? shares : null, how: hit.how, row: text });
  });
  return out;
}
