// Headlines of 8-K current reports for the news pages: the title of the press release attached to the
// filing (Exhibit 99.x) or, when there is none, the first sentence of the reported item. The text stays in
// the company's own (English) words; the pages translate only the type of the news.

// ---------- HTML to text blocks ----------

const NAMED = { nbsp: " ", amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", mdash: "—", ndash: "–", hellip: "…", bull: "•", middot: "·", reg: "®", trade: "™", copy: "©", eacute: "é", egrave: "è", aacute: "á", oacute: "ó", uacute: "ú", iacute: "í", ntilde: "ñ", ouml: "ö", uuml: "ü", auml: "ä", ccedil: "ç", sup2: "²" };
// Windows-1252 code points that HTML numeric entities in old filings still use.
const CP1252 = { 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 153: "™", 160: " " };
export function decodeEntities(s) {
  return String(s).replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/gi, (m, e) => {
    if (e[0] !== "#") return NAMED[e.toLowerCase()] ?? m;
    const n = e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : Number(e.slice(1));
    if (CP1252[n]) return CP1252[n];
    try { return String.fromCodePoint(n); } catch { return " "; }
  });
}

const stripTags = (s) => decodeEntities(s.replace(/<[^>]*>/g, " ")).replace(/[\s ​]+/g, " ").trim();
const BOLD_ELEMENT = /<(b|strong|h[1-3])\b[^>]*>([\s\S]*?)<\/\1\s*>/gi;
const BOLD_STYLE = /<(font|span|p|div|td|a)\b[^>]*font-weight:\s*(?:bold|bolder|[6-9]00)[^>]*>([\s\S]*?)<\/\1\s*>/gi;
const ITALIC_ELEMENT = /<(i|em)\b[^>]*>([\s\S]*?)<\/\1\s*>/gi;
const ITALIC_STYLE = /<(font|span|p|div|td)\b[^>]*font-style:\s*italic[^>]*>([\s\S]*?)<\/\1\s*>/gi;
const textIn = (raw, re) => { let n = 0; for (const m of raw.matchAll(re)) n += stripTags(m[m.length - 1]).length; return n; };

// Paragraph-like blocks with their text and whether they are (mostly) bold or italic.
export function htmlBlocks(html) {
  const body = String(html)
    // The SGML envelope of a filed document (<TYPE>EX-99.1 <SEQUENCE>2 <FILENAME>… <TEXT>) is not text.
    .replace(/^[\s\S]{0,2000}?<TEXT>/i, "")
    .replace(/<ix:header>[\s\S]*?<\/ix:header>/gi, " ")
    .replace(/<(script|style|head|title)\b[\s\S]*?<\/\1\s*>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");
  const marked = body
    .replace(/<\/(p|div|h[1-6]|li|tr|td|th|table|center|ul|ol)\s*>|<br\s*\/?>/gi, "\u0001")
    .replace(/<(p|div|h[1-6]|li|tr|td|th|table|center)(\s[^>]*)?>/gi, "\u0001$&");
  const out = [];
  for (const raw of marked.split("\u0001")) {
    const text = stripTags(raw);
    if (!text) continue;
    const own = raw.match(/^<(p|div|h[1-6]|li|td|th)\b[^>]*>/i)?.[0] || "";
    const wholeBold = /^<h[1-3]/i.test(own) || /font-weight:\s*(?:bold|bolder|[6-9]00)/i.test(own);
    const wholeItalic = /font-style:\s*italic/i.test(own);
    const len = text.length;
    const bold = wholeBold || (textIn(raw, BOLD_ELEMENT) + textIn(raw, BOLD_STYLE)) >= 0.6 * len;
    const italic = wholeItalic || (textIn(raw, ITALIC_ELEMENT) + textIn(raw, ITALIC_STYLE)) >= 0.6 * len;
    out.push({ text, bold, italic });
  }
  return out;
}

// ---------- Press releases ----------

const MONTH = "(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)";
// "SANTA CLARA, Calif.—November 23, 2026—", "NEWARK, N.J., Nov. 23, 2026 –", "TAIPEI, Taiwan, November 23, 2026 (GLOBE NEWSWIRE) --"
const DATELINE = new RegExp(`^(.{2,90}?)[,—–―-]\\s*${MONTH}\\.?\\s+\\d{1,2},?\\s+\\d{4}\\b`);
const DATELINE_PREFIX = new RegExp(`^.{0,90}?${MONTH}\\.?\\s+\\d{1,2},?\\s+\\d{4}\\s*(?:\\([^)]{0,40}\\))?\\s*(?:\\/[^/]{0,40}\\/)?\\s*(?:--|[—–―-]+|:)?\\s*`);
const BOILERPLATE = [
  /^ex-?\d+(\.\d+)?$/i, /^\d{1,3}$/, /\.(htm|html|txt)$/i, /^exhibit\s+\d+(\.\d+)?\b/i,
  /^(press|news|media)\s+release\b/i, /^for immediate release\b/i, /\bdated\s+[A-Z][a-z]+\.?\s+\d{1,2},\s+\d{4}\.?$/i,
  /^(investor|media|press)\s+(relations|contacts?)\b/i, /^contacts?\s*:/i, /^(investors?|media)\s*:/i,
  /^for (additional|further|more) information\b/i,
  /◆|♦/, /\b[A-Z]{2}\s+\d{5}(?:-\d{4})?\b/, /\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}/, /@|www\.|https?:\/\//i,
  new RegExp(`^${MONTH}\\.?\\s+\\d{0,2},?\\s*\\d{4}$`, "i"),
];
const isBoilerplate = (s) => BOILERPLATE.some((re) => re.test(s));
const isBullet = (s) => /^[•·◆●▪■◦‣\-–—*]/.test(s);
const words = (s) => s.split(/\s+/).filter(Boolean).length;

// Sentence end: not after an abbreviation ("Inc.", "Calif.", "U.S.") or an initial ("Harvey C. Jones").
const ABBR = new Set(["inc", "corp", "co", "ltd", "llc", "plc", "mr", "mrs", "ms", "dr", "jr", "sr", "st", "no", "nos", "vs", "etc", "calif", "fla", "mass", "conn", "penn", "wash", "ill", "mich", "minn", "ariz", "colo", "tenn", "jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec", "approx", "dept", "est", "fig", "gov", "intl", "n.v", "s.a", "l.p", "u.s", "u.k", "e.g", "i.e"]);
export function firstSentence(text, max = 240) {
  const s = String(text || "").trim();
  const re = /[.!?](?=["”’)]?\s+["“‘(]?[A-Z0-9])/g;
  let end = s.length;
  for (let m; (m = re.exec(s));) {
    const before = s.slice(0, m.index).match(/([A-Za-z.]+)$/)?.[1] || "";
    const w = before.toLowerCase().replace(/^\./, "");
    if (ABBR.has(w) || /^[A-Z]$/.test(before) || /^([A-Za-z]\.)+[A-Za-z]$/.test(before)) continue;
    end = m.index + 1;
    break;
  }
  return clip(s.slice(0, end), max);
}
export function clip(s, max = 240) {
  s = String(s || "").replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(" "), max * 0.6)).replace(/[\s,;:–—-]+$/, "")}…`;
}

// Shorter sentences: defined-term brackets ("the “Company”"), ticker brackets ("(NASDAQ: NVDA)") and the
// leading date ("On November 22, 2026, ") are left out.
export function tidySentence(s) {
  let t = String(s || "")
    .replace(/^\(\s*[a-z]\s*\)\s*/i, "") // sub-item marker: "(d) On November 17, …"
    .replace(/\s*\((?:collectively,\s*)?(?:the\s+|our\s+)?["“][^"”]{1,60}["”](?:\s*(?:or|and)\s*(?:the\s+)?["“][^"”]{1,60}["”])*\)/gi, "")
    .replace(/\s*\(\s*(?:NASDAQ|Nasdaq|NYSE(?: American| Arca)?|Cboe|TSX|OTC[A-Z]*|LSE)\s*:\s*[A-Z.\-]{1,8}(?:\s*[;,]\s*[A-Z]{2,6}\s*:\s*[A-Z.\-]{1,8})*\s*\)/g, "")
    .replace(new RegExp(`^On\\s+${MONTH}\\.?\\s+\\d{1,2},?\\s+\\d{4},?\\s+`, "i"), "")
    .replace(/\s+([,.;:])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  if (t) t = t[0].toUpperCase() + t.slice(1);
  return t;
}

// ALL-CAPS headlines in title case ("GRAHAM CORPORATION ACQUIRES …" → "Graham Corporation Acquires …").
const SMALL = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into", "of", "on", "or", "the", "to", "with", "its"]);
const KEEP_UPPER = /^(AI|CEO|CFO|COO|CTO|FDA|EPA|SEC|US|USA|U\.S\.|UK|EU|LNG|IPO|ETF|NYSE|IT|R&D|M&A|5G|GPU|CPU|EV|EVS|II|III|IV|LLC|LP|NV|SA|AG|SE|PLC|ESG|Q[1-4]|FY\d*|DAC|MW|GW|TV|PC|NFL|NBA|NHL|MLB)$/;
export function tidyTitle(s) {
  const t = String(s || "").replace(/\s+/g, " ").trim().replace(/^[“"]+|[”"]+$/g, "")
    // "November 23, 2026 KT-621 Phase 2b … Results Exhibit 99.1" → "KT-621 Phase 2b … Results"
    .replace(new RegExp(`^${MONTH}\\.?\\s+\\d{1,2},?\\s+\\d{4}\\s*[-–—:|]?\\s+`, "i"), "")
    .replace(/\s*[-–—(]?\s*Exhibit\s+\d+(?:\.\d+)?\)?\s*$/i, "")
    // "HP Inc. Media Relations HP Inc. Investor Relations HP Inc. Reports …": the press contacts above the headline
    // (two or more of them in a row, so a title about an investor relations head stays).
    .replace(/^(?:(?:[A-Z][\w.&,'’ -]{0,60}?\s)?(?:Media|Investor|Press|Public)\s+(?:Relations|Contacts?|Inquiries)\s*[:-]?\s+){2,}/, "")
    .trim();
  // Contact lines taken for a title ("For additional information: Media Investors"): no title.
  if (/^for (additional|further|more) information\b/i.test(t) || /^(media|investors?|contacts?)(\s+(and\s+)?(media|investors?|contacts?))*\s*:?$/i.test(t)) return "";
  const letters = t.replace(/[^A-Za-z]/g, "");
  if (letters.length < 12 || letters.replace(/[^A-Z]/g, "").length / letters.length < 0.85) return t;
  return t.split(" ").map((w, i) => {
    const core = w.replace(/[^A-Za-z0-9&.]/g, "");
    if (KEEP_UPPER.test(core)) return w;
    const lower = w.toLowerCase();
    if (i > 0 && SMALL.has(lower.replace(/[^a-z]/g, ""))) return lower;
    return lower.replace(/[a-z]/, (c) => c.toUpperCase());
  }).join(" ");
}

// Title and first sentence of a press release.
export function pressHeadline(html) {
  const blocks = htmlBlocks(html).filter((b) => /[A-Za-z]/.test(b.text));
  const dl = blocks.findIndex((b, i) => i < 80 && DATELINE.test(b.text));
  const head = (dl >= 0 ? blocks.slice(0, dl) : blocks.slice(0, 30)).filter((b) => !isBoilerplate(b.text));
  let title = "";
  // The headline: the first run of bold lines, without the bullet points and italic sub-headlines below it.
  const first = head.findIndex((b) => b.bold && !b.italic && !isBullet(b.text) && words(b.text) >= 2);
  if (first >= 0) {
    const parts = [];
    for (let i = first; i < head.length && head[i].bold && !head[i].italic && !isBullet(head[i].text); i++) {
      parts.push(head[i].text);
      if (parts.join(" ").length > 160) break;
    }
    title = parts.join(" ");
  }
  if (words(title) < 3) title = head.find((b) => !isBullet(b.text) && words(b.text) >= 4 && words(b.text) <= 40)?.text || "";
  const lede = dl >= 0 ? firstSentence(tidySentence(blocks[dl].text.replace(DATELINE_PREFIX, ""))) : "";
  return { title: title ? clip(tidyTitle(title), 200) : "", lede };
}

// ---------- 8-K main document ----------

// Which reported item says the most about the news.
const ITEM_ORDER = ["1.03", "4.02", "5.01", "1.05", "2.01", "1.01", "5.02", "2.05", "2.06", "3.01", "2.04", "4.01", "2.02", "8.01", "7.01", "1.02"];
const SKIP_SENTENCE = /^(as provided in general instruction|the information (in|contained in|furnished)|a copy of the|the foregoing|pursuant to the requirements|in accordance with general instruction|cautionary|forward-looking|this current report)/i;

// The first sentence of the most telling item of an 8-K ("The Board … reinstated Jen-Hsun Huang as …").
export function itemSentence(html, items = []) {
  const blocks = htmlBlocks(html);
  const wanted = ITEM_ORDER.filter((x) => items.includes(x));
  for (const item of wanted.length ? wanted : ITEM_ORDER) {
    const re = new RegExp(`^Item\\s*${item.replace(".", "\\.")}\\b`, "i");
    const at = blocks.findIndex((b) => re.test(b.text));
    if (at < 0) continue;
    for (let i = at; i < Math.min(blocks.length, at + 8); i++) {
      // The item heading itself ("Item 5.02 Departure of Directors …") and short lines are not the news.
      const text = i === at ? blocks[i].text.replace(re, "").replace(/^[.:\s]+/, "") : blocks[i].text;
      if (/^Item\s*\d\.\d\d/i.test(text) && i > at) break;
      if (words(text) < 8 || /^(departure of directors|entry into a material|results of operations|regulation fd|other events|completion of acquisition|financial statements and exhibits|termination of a material|costs associated|material impairments|notice of delisting|changes in registrant|non-reliance|bankruptcy|material cybersecurity)/i.test(text)) continue;
      if (SKIP_SENTENCE.test(text)) continue;
      return firstSentence(tidySentence(text));
    }
  }
  return "";
}

// ---------- Filing index ----------

// The first press release (EX-99.x) of a filing, from its index page: its path on www.sec.gov.
export function exhibitPath(indexHtml) {
  for (const row of String(indexHtml).matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((c) => c[1]);
    if (cells.length < 4) continue;
    const type = stripTags(cells[3]);
    const href = cells[2].match(/href="([^"]+)"/i)?.[1];
    if (/^EX-99/i.test(type) && href && /\.(htm|html|txt)$/i.test(href)) return href.replace(/^\/ix\?doc=/, "");
  }
  return null;
}

// ---------- Kind of news ----------

// A leadership change: the chief executive, the chief financial or operating officer, the president or the
// chair is the one appointed or leaving – not a new director who happens to be a CEO elsewhere.
const ROLE = "(?:chief executive|ceo|president|(?:executive\\s+|co-?)?chair(?:man|woman|person)?|chief financial|cfo|chief operating|coo)";
const ROLE_CASED = "(?:Chief Executive|CEO|President|Chair(?:man|woman|person)?|Chief Financial|CFO|Chief Operating|COO)";
const LEADERSHIP = [
  // "reinstated Jensen Huang as President", "appointed Mark Goines, the Lead Independent Director, as Chair"
  new RegExp(`\\b(?:appoint|name|elect|promot|hire|reinstat|select|tap)\\w*\\b[^.;]{0,120}?\\bas\\s+(?:its\\s+|the\\s+|our\\s+|new\\s+|next\\s+|interim\\s+|acting\\s+|company['’]s\\s+)*${ROLE}\\b`, "i"),
  // "Acme Names Jane Doe Chief Executive Officer"
  new RegExp(`\\b(?:Appoints|Names|Promotes|Hires|Taps|Selects|appoints|names|promotes|hires)\\s+(?:[A-Z][\\w.'’-]*\\s+){1,4}(?:as\\s+)?(?:its\\s+|the\\s+|new\\s+|interim\\s+)?${ROLE_CASED}\\b`),
  // "CEO Transition", "Chief Financial Officer to Step Down", "CEO succession"
  new RegExp(`\\b${ROLE}\\b(?:\\W+\\w+){0,6}?\\W+(?:to\\s+)?(?:resign|retire|step(?:s|ped|ping)?\\s+down|depart|leav|transition|succession|terminat)\\w*`, "i"),
  // "resigned as President", "will retire as Executive Chairman"
  new RegExp(`\\b(?:resign|retire|step(?:s|ped|ping)?\\s+down|depart)\\w*\\s+(?:\\w+\\s+){0,3}?(?:as|from)\\s+(?:its\\s+|the\\s+|his\\s+|her\\s+|their\\s+)?(?:position\\s+(?:as|of)\\s+)?${ROLE}\\b`, "i"),
];
export const isLeadershipChange = (text) => LEADERSHIP.some((re) => re.test(text));
const DEAL = /\b(merger|merge[sd]?\b|acqui(?:re[sd]?|sition|ring)|to be acquired|business combination|tender offer|takeover|buyout|take[- ]private|spin[- ]?off|divest(?:iture|s|ed)?|sale of (?:the|its|our) [a-z ]{0,30}business)\b/i;

export function classifyNews(items = [], text = "") {
  const s = new Set(items);
  if (s.has("1.03") || s.has("4.02")) return "critical";
  if (s.has("1.05")) return "cyber";
  if (s.has("5.01") || s.has("2.01") || ((s.has("1.01") || s.has("8.01") || s.has("7.01")) && DEAL.test(text))) return "deal";
  if (s.has("5.02") && isLeadershipChange(text)) return "leadership";
  if (s.has("2.05")) return "restructuring";
  if (s.has("3.01") || s.has("2.04") || s.has("2.06") || s.has("4.01")) return "major";
  if (s.has("2.02")) return "results";
  if (s.has("5.02")) return "board";
  return "other";
}

// ---------- Fetching ----------

// Title of one filing ({ url: primary document, items }): the press release's headline, else the item's
// first sentence. get(url, "text") returns the document or null.
export async function headlineFor(filing, get) {
  const dir = filing.url.replace(/[^/]+$/, "");
  const acc = dir.match(/\/(\d{10})(\d{2})(\d{6})\/$/);
  let title = "", lede = "";
  if (acc) {
    const index = await get(`${dir}${acc[1]}-${acc[2]}-${acc[3]}-index.htm`, "text").catch(() => null);
    const path = index && exhibitPath(index);
    if (path) {
      const html = await get(`https://www.sec.gov${path}`, "text").catch(() => null);
      if (html) ({ title, lede } = pressHeadline(html));
    }
  }
  if (!title && !lede) {
    const html = await get(filing.url, "text").catch(() => null);
    if (html) title = itemSentence(html, filing.items);
  }
  title = title || lede;
  return { title: title || null, lede: lede && lede !== title ? lede : null, kind: classifyNews(filing.items, `${title} ${lede}`) };
}
