// Probe from a GitHub runner: Nasdaq history for share classes, new listings and two funds; SEC data of the
// ExxonMobil registrants (old and new CIK) and of a few new registrants with older tickers.
const H = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", Accept: "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const SEC = { "User-Agent": process.env.SEC_USER_AGENT || "research probe admin@example.com", Accept: "application/json" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url, headers = H) {
  try {
    const r = await fetch(url, { headers, signal: AbortSignal.timeout(30000) });
    const txt = await r.text();
    let j = null; try { j = JSON.parse(txt); } catch {}
    return { status: r.status, j, txt };
  } catch (e) { return { status: "ERR " + e.message, j: null, txt: "" }; }
}
const from = "2025-10-01", to = "2026-11-25";
async function hist(sym, cls = "stocks") {
  const r = await get(`https://api.nasdaq.com/api/quote/${encodeURIComponent(sym)}/historical?assetclass=${cls}&fromdate=${from}&todate=${to}&limit=9999`);
  const rows = r.j?.data?.tradesTable?.rows || [];
  const msg = r.j?.status?.bCodeMessage ? JSON.stringify(r.j.status.bCodeMessage).slice(0, 160) : "";
  return `  ${sym} [${cls}] HTTP ${r.status} rows ${rows.length} ${rows[0] ? JSON.stringify(rows[0]) : ""} ${msg} ${!r.j ? r.txt.slice(0, 120).replace(/\s+/g, " ") : ""}`;
}
console.log("=== Nasdaq history, share classes");
for (const t of ["BRK.B", "BF.B", "HEI.A", "LEN.B", "MOG.B", "MKC.V"]) {
  const [a, b] = t.split(".");
  for (const v of [`${a}/${b}`, `${a}^${b}`, t, `${a}-${b}`, `${a}${b}`, `${a} ${b}`, `${a}.${b.toLowerCase()}`]) { console.log(await hist(v)); await sleep(300); }
}
console.log("=== Nasdaq info and chart endpoints, share classes");
for (const v of ["BF.B", "BF/B", "BF^B", "BRK.B", "BRK/B"]) {
  const r = await get(`https://api.nasdaq.com/api/quote/${encodeURIComponent(v)}/info?assetclass=stocks`);
  console.log(`  info ${v} HTTP ${r.status} symbol ${r.j?.data?.symbol} name ${r.j?.data?.companyName} last ${r.j?.data?.primaryData?.lastSalePrice} ${r.j?.status?.bCodeMessage ? JSON.stringify(r.j.status.bCodeMessage).slice(0, 120) : ""}`);
  await sleep(300);
  const c = await get(`https://api.nasdaq.com/api/quote/${encodeURIComponent(v)}/chart?assetclass=stocks&fromdate=${from}&todate=${to}`);
  const pts = c.j?.data?.chart || [];
  console.log(`  chart ${v} HTTP ${c.status} points ${pts.length} ${pts[0] ? JSON.stringify(pts[0]).slice(0, 160) : ""}`);
  await sleep(300);
}
console.log("=== Yahoo and Stooq, share classes");
for (const v of ["BF-B", "HEI-A", "BRK-B"]) {
  const r = await get(`https://query1.finance.yahoo.com/v8/finance/chart/${v}?range=1y&interval=1d`);
  console.log(`  yahoo ${v} HTTP ${r.status} points ${r.j?.chart?.result?.[0]?.timestamp?.length ?? 0} ${r.j ? "" : r.txt.slice(0, 80)}`);
  await sleep(500);
  const s = await get(`https://stooq.com/q/d/l/?s=${v.toLowerCase()}.us&i=d`);
  console.log(`  stooq ${v} HTTP ${s.status} lines ${s.txt.split("\n").length} ${s.txt.slice(0, 60).replace(/\s+/g, " ")}`);
  await sleep(500);
}
console.log("=== Nasdaq history, new listings and funds");
for (const [t, c] of [["SPCX", "stocks"], ["XOM", "stocks"], ["HONA", "stocks"], ["CBRS", "stocks"], ["IBIT", "etf"], ["IBIT", "stocks"], ["ETHA", "etf"], ["ETHA", "stocks"]]) { console.log(await hist(t, c)); await sleep(300); }

console.log("=== SEC: company_tickers.json");
const tk = await get("https://www.sec.gov/files/company_tickers.json", SEC);
const rows = Object.values(tk.j || {});
console.log(`  HTTP ${tk.status} rows ${rows.length}`);
for (const r of rows) if (["XOM", "CLBK", "HONA", "SKT"].includes(r.ticker) || [34088, 2115436].includes(r.cik_str)) console.log("  ", JSON.stringify(r));
for (const cik of ["0002115436", "0000034088", "0002115119", "0000899715"]) {
  await sleep(200);
  const s = await get(`https://data.sec.gov/submissions/CIK${cik}.json`, SEC);
  const rec = s.j?.filings?.recent || {};
  const list = (rec.form || []).map((f, i) => `${rec.filingDate[i]} ${f}`).slice(0, 14);
  console.log(`=== SEC submissions ${cik} HTTP ${s.status}: ${s.j?.name} | tickers ${JSON.stringify(s.j?.tickers)} | exchanges ${JSON.stringify(s.j?.exchanges)} | former ${JSON.stringify(s.j?.formerNames)} | sic ${s.j?.sic} | fye ${s.j?.fiscalYearEnd}`);
  console.log("   recent:", list.join("; "));
  const k8 = (rec.form || []).map((f, i) => [f, rec.filingDate[i], rec.primaryDocument?.[i], rec.items?.[i]]).filter(([f]) => /^8-K12|^15|^25|S-4|^10-12/.test(f));
  console.log("   successor/deregistration forms:", JSON.stringify(k8.slice(0, 8)));
  await sleep(200);
  const cf = await get(`https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json`, SEC);
  const facts = cf.j?.facts || {};
  const rev = facts["us-gaap"]?.Revenues?.units?.USD || facts["us-gaap"]?.RevenueFromContractWithCustomerExcludingAssessedTax?.units?.USD || [];
  const ni = facts["us-gaap"]?.NetIncomeLoss?.units?.USD || [];
  const annual = (a) => [...new Set(a.filter((v) => v.fp === "FY" && /^10-K/.test(v.form)).map((v) => v.end))].sort();
  const forms = {}; for (const ns of Object.values(facts)) for (const t of Object.values(ns)) for (const u of Object.values(t.units || {})) for (const v of u) forms[v.form] = (forms[v.form] || 0) + 1;
  console.log(`   companyfacts HTTP ${cf.status}: ${cf.j?.entityName} | concepts ${Object.values(facts).reduce((s, n) => s + Object.keys(n).length, 0)} | forms ${JSON.stringify(forms)}`);
  console.log(`   revenue FY ends ${JSON.stringify(annual(rev).slice(-6))} | net income FY ends ${JSON.stringify(annual(ni).slice(-6))}`);
  const latest = [...rev, ...ni].sort((a, b) => (a.filed < b.filed ? 1 : -1)).slice(0, 3).map((v) => `${v.form} ${v.fp} ${v.start}→${v.end} filed ${v.filed}`);
  console.log("   latest facts:", JSON.stringify(latest));
}
