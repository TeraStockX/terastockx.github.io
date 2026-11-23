// Company search by ticker and by name, tolerant of typos ("trsla" → Tesla, "nvdia" → NVIDIA, "aple" → Apple).
// A typo is measured as an edit distance in which a neighbouring key on the keyboard (QWERTY and the
// Hungarian/German QWERTZ layout) and two swapped letters count as half a mistake; a missing, extra or other
// letter counts as one. Short queries (up to 3 letters) are matched exactly only, longer ones allow 1 mistake,
// and from 6 letters 2.

// Neighbouring keys: the same row ±1 and the touching keys of the rows above and below.
const NEAR = (() => {
  const near = {};
  for (const rows of [["qwertyuiop", "asdfghjkl", "zxcvbnm"], ["qwertzuiop", "asdfghjkl", "yxcvbnm"]]) {
    rows.forEach((row, r) => {
      [...row].forEach((ch, i) => {
        const set = (near[ch] ||= new Set());
        const add = (c) => { if (c && c !== ch) set.add(c); };
        add(row[i - 1]);
        add(row[i + 1]);
        if (r > 0) { add(rows[r - 1][i]); add(rows[r - 1][i + 1]); }
        if (r < rows.length - 1) { add(rows[r + 1][i - 1]); add(rows[r + 1][i]); }
      });
    });
  }
  return near;
})();

// Edit distance with cheaper neighbouring-key substitutions, swaps and doubled letters; Infinity once it
// exceeds `max`.
export function typoDistance(a, b, max = 2) {
  const n = a.length, m = b.length;
  if (Math.abs(n - m) > max) return Infinity;
  let prev2 = null;
  let prev = Array.from({ length: m + 1 }, (_, j) => j);
  for (let i = 1; i <= n; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= m; j++) {
      const ca = a[i - 1], cb = b[j - 1];
      const sub = ca === cb ? 0 : NEAR[ca]?.has(cb) ? 0.5 : 1;
      // A doubled letter typed once or twice ("aple" for "apple") is half a mistake.
      const del = i > 1 && ca === a[i - 2] ? 0.5 : 1;
      const ins = j > 1 && cb === b[j - 2] ? 0.5 : 1;
      let v = Math.min(prev[j] + del, cur[j - 1] + ins, prev[j - 1] + sub);
      if (i > 1 && j > 1 && ca !== cb && ca === b[j - 2] && a[i - 2] === cb) v = Math.min(v, prev2[j - 2] + 0.5);
      cur[j] = v;
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return Infinity;
    prev2 = prev;
    prev = cur;
  }
  return prev[m] <= max ? prev[m] : Infinity;
}

const SUFFIX = /\b(incorporated|inc|corporation|corp|company|co|limited|ltd|plc|holdings?|group|sa|nv|ag|se|spa|lp|llc|the|class [abc]|common stock|ordinary shares?|american depositary shares?|ads|adr)\b/g;
const strip = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
// "Coca-Cola Co" → "coca cola"; "AT&T Inc." → "at&t"
// Latin letters, digits and CJK characters (names in Chinese: "苹果") are kept.
export const normName = (s) => strip(s).replace(/[’']/g, "").replace(/[^a-z0-9&\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af ]+/g, " ").replace(SUFFIX, " ").replace(/\s+/g, " ").trim();
export const normQuery = (s) => strip(s).replace(/[’']/g, "").replace(/[^a-z0-9&\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af ]+/g, " ").replace(/\s+/g, " ").trim();
const compact = (s) => s.replace(/[^a-z0-9\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/g, "");

// Names people use instead of the company's own.
const ALIASES = { google: "GOOGL", youtube: "GOOGL", facebook: "META", instagram: "META", whatsapp: "META", tsmc: "TSM", "jp morgan": "JPM", "coca cola": "KO" };

// Rows ({ t, n, mc, … }) -> search items, prepared once.
export function prepareSearch(rows) {
  return rows.filter((r) => r?.t).map((row) => {
    const nm = normName(row.n);
    const words = nm.split(" ").filter(Boolean);
    // A listing key such as "VUAG:LSE" is searched by its ticker ("VUAG").
    return { row, t: row.t, tk: compact(String(row.dt || row.t).toLowerCase()), nm, nc: compact(nm), words, mc: row.mc ?? row.aum ?? 0 };
  });
}

// How well an item matches a normalised query: 1000 exact ticker, 960 alias, 950 exact name, 900 ticker
// start, 850 name start, 800 a word of the name starts with it; then typo matches, 650 − 100 × mistakes
// (a neighbouring key or a swap is half a mistake); 500 the query inside a word ("tesl" in "atesla");
// 0 no match. { typos: false } skips the (slower) typo check.
export function matchCompany(item, q, { typos = true } = {}) {
  if (!item || !q) return 0;
  const qc = compact(q);
  if (!qc) return 0;
  if (item.tk === qc) return 1000;
  if (ALIASES[q] === item.t) return 960;
  if (item.nm === q || item.nc === qc) return 950;
  if (item.tk.startsWith(qc)) return 900 - Math.min(50, item.tk.length - qc.length);
  if (item.nm.startsWith(q) || item.nc.startsWith(qc)) return 850;
  if (item.words.some((w) => w.startsWith(q))) return 800;
  if (q.includes(" ") && ` ${item.nm}`.includes(` ${q}`)) return 790; // "s&p 500" in "vanguard s&p 500 etf"
  const inside = qc.length >= 4 && item.nc.includes(qc) ? 500 : 0;
  const max = qc.length <= 3 ? 0 : qc.length <= 5 ? 1 : 2;
  if (!typos || !max) return inside;
  // Cheap check first: a typo match must start with the same letter, a neighbouring key, or a swap.
  const f = qc[0], g = qc[1];
  const canStart = (x) => !!x && (x[0] === f || NEAR[f]?.has(x[0]) || x[1] === f || x[0] === g);
  // A mistyped ticker counts a little more than a mistyped name: four or more letters are usually a name.
  let best = Infinity;
  if (qc.length <= 7 && canStart(item.tk)) best = Math.min(best, typoDistance(qc, item.tk, max) * 1.5);
  for (const w of item.words) {
    if (!canStart(w)) continue;
    best = Math.min(best, typoDistance(q, w, max));
    // A typo in the beginning of a longer word ("teslq" while typing "tesla motors").
    if (w.length > q.length) best = Math.min(best, typoDistance(q, w.slice(0, q.length), max) + 0.25);
  }
  if (q.includes(" ")) best = Math.min(best, typoDistance(qc, item.nc.slice(0, qc.length), max));
  for (const [alias, t] of Object.entries(ALIASES)) if (t === item.t) best = Math.min(best, typoDistance(qc, compact(alias), max));
  return Math.max(inside, best <= max ? Math.round(650 - best * 100) : 0);
}

// Score of every matching item: Map(ticker -> score).
// Typo matches are looked for only when nothing matches exactly or partly.
export function scoreAll(items, query) {
  const q = normQuery(query);
  const out = new Map();
  if (!q) return out;
  for (const it of items) {
    const sc = matchCompany(it, q, { typos: false });
    if (sc > 0) out.set(it.t, sc);
  }
  if ([...out.values()].some((v) => v >= STRONG)) return out;
  for (const it of items) {
    if (out.has(it.t)) continue;
    const sc = matchCompany(it, q);
    if (sc > 0) out.set(it.t, sc);
  }
  return out;
}
export const STRONG = 700; // exact or partial match; below it, a typo match

// The best matches: exact and partial matches first, then typo matches; ties are broken by size (market
// cap), so the well-known company comes first.
// Larger companies come first among similar matches: up to 60 points for size (market cap or fund assets).
export const popularity = (mc) => (mc > 1e8 ? Math.min(60, (Math.log10(mc) - 8) * 12) : 0);
const rank = (a, b) => b.score + popularity(b.mc) - (a.score + popularity(a.mc)) || a.t.localeCompare(b.t);

export function searchCompanies(items, query, limit = 8) {
  const q = normQuery(query);
  if (!q) return [];
  // Exact and partial matches first (fast); typo matches only when they could still make the list.
  const strong = [], rest = [];
  for (const it of items) {
    const sc = matchCompany(it, q, { typos: false });
    if (sc >= STRONG) strong.push({ ...it, score: sc }); else rest.push(it);
  }
  if (strong.length >= limit) return strong.sort(rank).slice(0, limit);
  const weak = [];
  for (const it of rest) {
    const sc = matchCompany(it, q);
    if (sc > 0) weak.push({ ...it, score: sc });
  }
  return [...strong.sort(rank), ...weak.sort(rank)].slice(0, limit);
}
