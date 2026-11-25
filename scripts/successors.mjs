// Companies that continue under a new SEC registrant (a new CIK): a holding-company reorganization, a change of
// domicile, a second-step conversion of a savings bank. The new registrant's financial data start with its first
// report; the earlier years stay under the predecessor's CIK, which the update reads too (mergeCompanyFacts in
// scripts/sec-parse.mjs). Without it such a company would lose its annual history, and with it its TeraScore.

// Successor CIK → predecessor CIK, for changes made before the update recorded them itself (each one checked
// against the successor's Form 8-K12B, which names the predecessor).
export const PREDECESSORS = {
  "0002115436": "0000034088", // ExxonMobil Holdings Corp ← Exxon Mobil Corp (new Texas parent company, July 2026)
  "0002115119": "0001723596", // Columbia Financial, Inc. (Maryland) ← its mid-tier holding company (second-step conversion, July 2026)
  "0002126198": "0001575828", // Expro Ltd (Cayman Islands) ← Expro Group Holdings N.V. (July 2026)
  "0002119322": "0001438231", // Digimarc Corp (new parent company) ← Old Digimarc Corp (May 2026)
  "0002086841": "0001117171", // CBAK Energy Technology Ltd (Cayman Islands) ← CBAK Energy Technology, Inc. (June 2026)
};

// A company name without its legal form, state suffix and punctuation: "Exxon Mobil Corp" and "ExxonMobil
// Holdings Corp" are both "exxonmobil".
export function nameKey(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/\/[a-z]{2,3}\/?\s*$/, "")
    .replace(/\b(the|corp|corporation|inc|incorporated|co|company|holdings?|group|ltd|limited|plc|llc|lp|nv|sa|ag|se|new)\b\.?/g, " ")
    .replace(/[^a-z0-9]/g, "");
}

// The predecessor's CIK of a company: from the table above, kept from an earlier run, or the CIK the ticker had
// until now when it is the same company under a new CIK (the names agree and the earlier one has annual
// reports). A ticker taken over by another company has a different name and gets none.
export function predecessorCik(cik, old, name) {
  if (PREDECESSORS[cik]) return PREDECESSORS[cik];
  if (!old?.cik) return null;
  if (old.cik === cik) return old.predecessorCik || null;
  const a = nameKey(old.name), b = nameKey(name);
  return a.length >= 3 && b.length >= 3 && (a.startsWith(b) || b.startsWith(a)) && old.annual?.length ? old.cik : null;
}
