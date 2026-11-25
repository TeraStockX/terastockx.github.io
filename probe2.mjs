// Successor registrants among companies with fewer than three annual reports: 8-K12B / 8-K12G3 filings, and
// candidate predecessors found by name (EDGAR full-text search and company search).
import { readFileSync } from "node:fs";
const SEC = { "User-Agent": process.env.SEC_USER_AGENT || "research probe admin@example.com", Accept: "application/json" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url, type = "json") {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: SEC, signal: AbortSignal.timeout(30000) });
      if (r.status === 429) { await sleep(2000); continue; }
      if (!r.ok) return { status: r.status };
      return { status: r.status, body: type === "json" ? await r.json() : await r.text() };
    } catch (e) { await sleep(1000); }
  }
  return { status: "ERR" };
}
const rows = JSON.parse(readFileSync("few-annual.json", "utf8"));
const found = [];
for (const [t, cik, name, mc, a] of rows) {
  const s = await get(`https://data.sec.gov/submissions/CIK${cik}.json`);
  await sleep(120);
  const r = s.body?.filings?.recent;
  if (!r?.form) continue;
  const hits = r.form.map((f, i) => [f, r.filingDate[i], r.items?.[i] || "", r.accessionNumber[i], r.primaryDocument?.[i]]).filter(([f]) => /^8-K12(B|G3)|^8-K15D5/.test(f));
  if (hits.length) found.push({ t, cik, name, mc, a, hits, former: s.body.formerNames, sic: s.body.sic, ein: s.body.ein });
}
console.log(`checked ${rows.length}, successors ${found.length}`);
for (const x of found) {
  console.log(`\n${x.t} | ${x.name} | CIK ${x.cik} | cap ${x.mc} M$ | annual ${x.a} | sic ${x.sic} | former ${JSON.stringify(x.former)}`);
  for (const h of x.hits.slice(0, 3)) console.log(`   ${h[0]} ${h[1]} items ${h[2]}`);
  // The successor's 8-K12B names its predecessor ("successor issuer to …").
  const [f, d, items, acc, doc] = x.hits[0];
  const txt = await get(`https://www.sec.gov/Archives/edgar/data/${Number(x.cik)}/${acc.replace(/-/g, "")}/${doc}`, "text");
  await sleep(150);
  const plain = String(txt.body || "").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ").replace(/&amp;/g, "&").replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"').replace(/&#8217;|&rsquo;/g, "'").replace(/\s+/g, " ");
  const m = plain.match(/.{0,220}successor (issuer|registrant).{0,220}/i);
  console.log(`   8-K12B text: ${m ? m[0] : plain.slice(0, 300)}`);
  // Candidates by name: the company search of EDGAR (Atom).
  const base = x.name.replace(/\/[A-Z]{2}\/?$/, "").replace(/,? (Inc|Corp|Corporation|Holdings?|Co|Ltd|plc|N\.V|PLC)\.?$/i, "").replace(/ (Holdings?|Inc\.?)$/i, "").trim();
  const q = await get(`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=${encodeURIComponent(base)}&type=10-K&dateb=&owner=include&count=40&output=atom`, "text");
  await sleep(150);
  const ents = [...String(q.body || "").matchAll(/<cik>(\d+)<\/cik>[\s\S]*?<name>([^<]+)<\/name>/g)].map((m) => `${m[1]} ${m[2]}`);
  const ents2 = [...String(q.body || "").matchAll(/CIK=(\d{10})[^>]*>[\s\S]{0,40}?<\/a>\s*<\/td>\s*<td[^>]*>([^<]+)/g)].map((m) => `${m[1]} ${m[2].trim()}`);
  console.log(`   company search "${base}" HTTP ${q.status}: ${JSON.stringify(ents.slice(0, 8))} ${JSON.stringify(ents2.slice(0, 8))} ${ents.length + ents2.length ? "" : String(q.body || "").replace(/\s+/g, " ").slice(0, 300)}`);
  const ft = await get(`https://efts.sec.gov/LATEST/search-index?q=${encodeURIComponent(`"${base}"`)}&forms=10-K`);
  await sleep(150);
  const hitsFt = (ft.body?.hits?.hits || []).map((h) => `${h._source?.ciks?.join("/")} ${h._source?.display_names?.join("/")}`);
  console.log(`   full-text search HTTP ${ft.status}: ${JSON.stringify([...new Set(hitsFt)].slice(0, 6))}`);
}
