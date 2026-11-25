// Daily closes in the data branch: company files (prices.daily) and fund price files (data/etf-prices).
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
const root = process.argv[2];
const read = (f) => JSON.parse(readFileSync(f, "utf8"));
const co = join(root, "data/companies");
let n = 0, withDaily = 0;
const lens = [], last = {};
for (const f of readdirSync(co)) {
  if (!f.endsWith(".json")) continue;
  n++;
  const d = read(join(co, f)).prices?.daily;
  if (Array.isArray(d) && d.length) { withDaily++; lens.push(d.length); last[d.at(-1)[0]] = (last[d.at(-1)[0]] || 0) + 1; }
}
lens.sort((a, b) => a - b);
console.log("companies", n, "| with prices.daily", withDaily, "| points: median", lens[lens.length >> 1], "min", lens[0], "max", lens.at(-1));
console.log("last daily close (date: companies)", JSON.stringify(Object.entries(last).sort((a, b) => b[1] - a[1]).slice(0, 5)));
for (const t of ["AAPL", "MSFT", "NVDA", "JNJ", "KO", "XOM", "JPM"]) {
  const p = read(join(co, `${t}.json`)).prices || {};
  console.log(` ${t}: daily ${p.daily?.length ?? 0} ${JSON.stringify(p.daily?.[0])} … ${JSON.stringify(p.daily?.at(-1))} | monthly ${p.data?.length ?? 0} (${p.source ?? "-"})`);
}
const ep = join(root, "data/etf-prices");
const files = existsSync(ep) ? readdirSync(ep).filter((f) => f.endsWith(".json")) : [];
const eu = files.filter((f) => f.includes("_"));
const etfs = read(join(root, "data/etfs.json")).etfs || [];
console.log("etf-prices files", files.length, "| European (key with ':')", eu.length, "| etfs.json funds", etfs.length, "| sizes KB: total", Math.round(files.reduce((s, f) => s + statSync(join(ep, f)).size, 0) / 1024));
const top = etfs.filter((x) => x.aum > 0 && !String(x.t).includes(":")).sort((a, b) => b.aum - a.aum).slice(0, 600).map((x) => x.t);
console.log("top 600 US funds without a price file:", JSON.stringify(top.filter((t) => !existsSync(join(ep, `${t}.json`))).slice(0, 20)));
for (const f of ["SPY.json", "VOO.json", "QQQ.json", ...eu.slice(0, 2)]) {
  if (!existsSync(join(ep, f))) { console.log(" missing", f); continue; }
  const j = read(join(ep, f));
  console.log(` ${f}: t ${j.t} | daily ${j.daily?.length} ${JSON.stringify(j.daily?.at(-1))} | monthly ${j.monthly?.length} ${JSON.stringify(j.monthly?.[0])} … ${JSON.stringify(j.monthly?.at(-1))}`);
}
