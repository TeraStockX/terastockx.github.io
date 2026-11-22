import { readFileSync } from "node:fs";
const list = JSON.parse(readFileSync("gaplist.json", "utf8"));
const UA = process.env.SEC_USER_AGENT || "TeraStockX research";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ANNUAL = new Set(["10-K", "10-K/A", "20-F", "20-F/A", "40-F", "40-F/A", "10-KT"]);
const days = (a, b) => (new Date(b) - new Date(a)) / 86400000;
const near = (a, b) => Math.abs(days(a, b)) <= 10;
const CAPEX_RE = /^(PaymentsTo|PaymentsFor|PurchaseOf|Purchases|CapitalExpenditure|AdditionsTo|AcquisitionOf|PaymentsToAcquire|Capital)/;
const CAPEX_NOT = /(Dividend|Repurchase|Business|Investments?$|Securities|Debt|Interest|Tax|Treasury|Stock|Equity|Loans|Notes|Derivative|Insurance|Pension|Royalt|Contingent|Lease(?!hold))/;
const DEBT_RE = /(Debt|Notes|Borrowing|Loan|LineOfCredit|Convertible|CommercialPaper)/;
const DEBT_NOT = /(Proceeds|Repayment|Payments|Interest|Issuance|Expense|Amortization|Fair|Gain|Loss|Receivable|Securities|Investment|Allowance|Unamortized|Discount|Premium|Covenant|Maturit|Rate|Term|Policy|Face|Capacity|Available|Remaining|Increase|Decrease|Conversion|Converted|Extinguishment|Held|Number|Percent|Ratio|Weighted|Excluding|Restricted|Noncash|Assumed|Forgiveness|Acquired|Origination|Transfer|Sold|Purchased|Impairment|Charge|Writeoff|Writedown|Recorded|Related|Provision|Accrued|CostsIncurred|Fees|Deferred(?!.*Debt)|Effective|Contractual|Guarantee)/;
const agg = { capex: {}, debt: {} };
const per = { capex: {}, debt: {} };
const focus = new Set(["LLY", "VZ", "NEE", "TM", "SHEL", "COP", "PLD", "ADP", "ABNB", "ANET", "SHOP", "PLTR", "AAPL", "BABA", "PDD", "SNY", "NVS", "TTE"]);
const done = new Map();
async function facts(cik) {
  if (done.has(cik)) return done.get(cik);
  for (let i = 0; i < 3; i++) {
    const r = await fetch(`https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json`, { headers: { "User-Agent": UA } });
    await sleep(130);
    if (r.ok) { const j = await r.json(); done.set(cik, j); return j; }
    await sleep(1500);
  }
  return null;
}
for (const kind of ["capex", "debt"]) {
  for (const [t, cik, end] of list[kind]) {
    const cf = await facts(cik);
    if (!cf) { console.log("fail", t); continue; }
    const hits = [];
    for (const ns of ["us-gaap", "ifrs-full"]) {
      for (const [tag, node] of Object.entries(cf.facts?.[ns] || {})) {
        if (kind === "capex" ? !(CAPEX_RE.test(tag) && !CAPEX_NOT.test(tag)) : !(DEBT_RE.test(tag) && !DEBT_NOT.test(tag))) continue;
        for (const [unit, arr] of Object.entries(node.units || {})) {
          if (!/^[A-Z]{3}$/.test(unit)) continue;
          const v = arr.find((x) => ANNUAL.has(x.form) && near(x.end, end) && (kind === "debt" ? !x.start : x.start && days(x.start, x.end) > 300));
          if (v) { hits.push(`${tag}=${Math.round(v.val / 1e6)}`); break; }
        }
      }
    }
    for (const h of hits) { const tag = h.split("=")[0]; (agg[kind][tag] ||= []).push(t); }
    if (focus.has(t) || hits.length === 0) per[kind][t] = hits;
  }
  console.log(`\n===== ${kind}: tags present at the latest fiscal year end (companies) =====`);
  for (const [tag, ts] of Object.entries(agg[kind]).sort((a, b) => b[1].length - a[1].length).slice(0, 45)) console.log(`${ts.length}\t${tag}\t${ts.slice(0, 8).join(" ")}`);
  console.log(`----- ${kind}: focus companies and companies with no hit -----`);
  for (const [t, hits] of Object.entries(per[kind])) console.log(`${t}: ${hits.join(", ") || "(none)"}`);
}
