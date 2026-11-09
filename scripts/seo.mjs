// Pages for search engines. The app routes with "#/c/AAPL", and search engines ignore everything after
// "#", so to them the whole site is one page. This writes one real page per company (c/<TICKER>/index.html)
// with its own title, description and a short summary, plus sitemap.xml and robots.txt. Each page is the
// app itself (same shell, <base> pointing to the site root) and opens the company's analysis.
// Generated on every build; not committed (see .gitignore).

import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { gradeKey } from "../assets/js/scoring.js";
import en from "../assets/js/i18n/en.js";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const isNum = (x) => typeof x === "number" && Number.isFinite(x);
const pct = (v, d = 1) => `${(v * 100).toFixed(d)}%`;
function money(v) {
  const a = Math.abs(v);
  return a >= 1e12 ? `$${(v / 1e12).toFixed(2)}T` : a >= 1e9 ? `$${(v / 1e9).toFixed(1)}B` : a >= 1e6 ? `$${(v / 1e6).toFixed(0)}M` : `$${Math.round(v)}`;
}

// Safe as a directory name and in a URL (tickers are letters, digits and ".", e.g. BRK.B).
export const tickerPath = (t) => (/^[A-Z0-9.\-]+$/.test(t) ? t : null);

export function companyMeta(row, keys, date) {
  const sc = Array.isArray(row.sc) ? Object.fromEntries(keys.map((k, i) => [k, row.sc[i]])) : row.sc || {};
  const sector = row.s ? en.sectors?.[row.s] || row.s : null;
  const facts = [];
  if (isNum(sc.overall)) facts.push(`TeraScore ${sc.overall}/100 (${en.grades[gradeKey(sc.overall)]})`);
  if (isNum(sc.risk)) facts.push(`risk ${sc.risk}/100`);
  if (isNum(row.pe)) facts.push(`P/E ${row.pe.toFixed(1)}`);
  if (isNum(row.dy) && row.dy > 0) facts.push(`dividend yield ${pct(row.dy)}`);
  if (isNum(row.mc)) facts.push(`market cap ${money(row.mc)}`);
  const title = `${row.n} (${row.t}) ${isNum(sc.overall) ? `TeraScore ${sc.overall}/100 – ` : "– "}Stock analysis | TeraStockX`;
  const description = `${row.n} (${row.t}) fundamental analysis${facts.length ? `: ${facts.join(", ")}` : ""}. Profitability, cash flow, balance sheet, growth, valuation and risk${sector ? ` compared with ${sector} peers` : ""}, from SEC filings. Updated ${date}.`;
  return { title, description, sc, sector, facts };
}

export function buildSeo({ root, siteUrl, index }) {
  const base = siteUrl ? (siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`) : null;
  const shell = readFileSync(join(root, "index.html"), "utf8");
  const keys = index.scoreKeys || [];
  const date = String(index.generated || "").slice(0, 10);
  const outDir = join(root, "c");
  rmSync(outDir, { recursive: true, force: true });
  const urls = [];
  let pages = 0;
  for (const row of index.companies) {
    const t = tickerPath(row.t);
    if (!t || !row.sc) continue; // only analysed companies
    const m = companyMeta(row, keys, date);
    const url = base ? `${base}c/${t}/` : null;
    const head = [
      `<base href="../../">`,
      `<title>${esc(m.title)}</title>`,
      `<meta name="description" content="${esc(m.description)}">`,
      url ? `<link rel="canonical" href="${esc(url)}">` : "",
      `<meta property="og:type" content="website">`,
      `<meta property="og:site_name" content="TeraStockX">`,
      `<meta property="og:title" content="${esc(m.title)}">`,
      `<meta property="og:description" content="${esc(m.description)}">`,
      url ? `<meta property="og:url" content="${esc(url)}">` : "",
      base ? `<meta property="og:image" content="${esc(base)}assets/img/icons/icon-512.png">` : "",
      `<script>if (!location.hash) history.replaceState(null, "", location.pathname + location.search + "#/c/${t}");</script>`,
    ].filter(Boolean).join("\n  ");
    // Shown until the app has loaded (and to crawlers that do not run scripts).
    const summary = `<h1>${esc(row.n)} (${esc(row.t)})</h1>
    <p>${esc(m.description)}</p>
    <p><a href="#/c/${t}">Open the full TeraStockX analysis of ${esc(row.n)}</a></p>`;
    let html = shell
      .replace(/<title>[^<]*<\/title>/, "")
      .replace(/<meta name="description"[^>]*>/, "")
      .replace("<meta charset=\"utf-8\">", `<meta charset="utf-8">\n  ${head}`)
      .replace(/<main id="app"([^>]*)><\/main>/, `<main id="app"$1>${summary}</main>`);
    mkdirSync(join(outDir, t), { recursive: true });
    writeFileSync(join(outDir, t, "index.html"), html);
    if (url) urls.push(url);
    pages++;
  }
  if (base) {
    const all = [base, ...urls];
    writeFileSync(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all.map((u) => `  <url><loc>${esc(u)}</loc><lastmod>${date}</lastmod></url>`).join("\n")}\n</urlset>\n`);
    writeFileSync(join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${base}sitemap.xml\n`);
  }
  return { pages, sitemap: base ? urls.length + 1 : 0 };
}
