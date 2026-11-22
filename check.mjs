import { readFileSync, existsSync } from "node:fs";
import { analyze } from "./site/assets/js/scoring.js";
const isNum = (x) => typeof x === "number" && Number.isFinite(x);
for (const t of process.argv.slice(2)) {
  const f = `site/data/companies/${t}.json`;
  if (!existsSync(f)) { console.log(t, "missing"); continue; }
  const c = JSON.parse(readFileSync(f, "utf8"));
  const L = c.annual?.at(-1) || {};
  const a = analyze(c);
  console.log(`${t}: FY${L.year} capex=${L.capex ?? "∅"} debt=${L.totalDebt ?? "∅"} lb.debt=${c.latestBalance?.totalDebt ?? "∅"} | overall=${a.scores?.overall} completeness=${a.completeness} missing=${(a.missing || []).join(",") || "-"} est=${(a.estimated || []).join(",") || "-"} | retrieved=${c.source?.retrieved} lastReport=${JSON.stringify(c.lastReport)} logo=${existsSync(`site/data/logos/${t}.webp`)}`);
}
