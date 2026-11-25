// Candidate predecessors of Brookfield Infrastructure Partners Inc. (BIP) and Versa Bancorp (VRSA), and the
// phase timings of today's daily run.
const SEC = { "User-Agent": process.env.SEC_USER_AGENT || "research probe admin@example.com", Accept: "application/json" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url) {
  try { const r = await fetch(url, { headers: SEC, signal: AbortSignal.timeout(30000) }); return { status: r.status, body: r.ok ? await r.json() : null }; } catch (e) { return { status: "ERR " + e.message }; }
}
for (const q of ['"VersaBank"', '"Brookfield Infrastructure Partners L.P."', '"Brookfield Infrastructure Corporation"']) {
  for (const forms of ["40-F", "20-F", "10-K"]) {
    const ft = await get(`https://efts.sec.gov/LATEST/search-index?q=${encodeURIComponent(q)}&forms=${forms}`);
    const hits = [...new Set((ft.body?.hits?.hits || []).map((h) => `${h._source?.ciks?.join("/")} ${h._source?.display_names?.join("/")}`))];
    console.log(`full-text ${q} ${forms} HTTP ${ft.status}: ${JSON.stringify(hits.slice(0, 5))}`);
    await sleep(200);
  }
}
for (const cik of ["0001406234", "0001788348", "0002155396", "0002100848"]) {
  const s = await get(`https://data.sec.gov/submissions/CIK${cik}.json`);
  const r = s.body?.filings?.recent || {};
  console.log(`\nsubmissions ${cik} HTTP ${s.status}: ${s.body?.name} | tickers ${JSON.stringify(s.body?.tickers)} | recent ${(r.form || []).slice(0, 10).map((f, i) => `${r.filingDate[i]} ${f}`).join("; ")}`);
  await sleep(150);
  const cf = await get(`https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json`);
  const facts = cf.body?.facts || {};
  const forms = {}; for (const ns of Object.values(facts)) for (const t of Object.values(ns)) for (const u of Object.values(t.units || {})) for (const v of u) forms[v.form] = (forms[v.form] || 0) + 1;
  const rev = facts["ifrs-full"]?.Revenue?.units || facts["us-gaap"]?.Revenues?.units || {};
  const [unit, arr] = Object.entries(rev)[0] || ["-", []];
  const fy = [...new Set(arr.filter((v) => v.fp === "FY").map((v) => v.end))].sort().slice(-6);
  console.log(`   companyfacts HTTP ${cf.status}: ${cf.body?.entityName} | taxonomies ${Object.keys(facts)} | forms ${JSON.stringify(forms)} | revenue ${unit} FY ends ${JSON.stringify(fy)}`);
  await sleep(150);
}
