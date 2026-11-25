#!/bin/bash
# Runs the changed update code for a few tickers against a copy of the data branch, then reports the results.
set -u
W=/tmp/w
rm -rf $W && cp -r code $W
git fetch -q --depth=1 origin data && git archive FETCH_HEAD data | tar -x -C $W
cd $W
echo "=== tests"; node tests/run.mjs 2>&1 | grep -E "^# (pass|fail)"
T="BIP,XOM,ANT"
echo "=== update --tickers $T"
start=$(date +%s)
node scripts/update-data.mjs --tickers "$T" --skip-insiders --skip-logos 2>&1 | grep -vE "DEP0|trace-deprecation|punycode" | cut -c1-260 | tail -40
echo "took $(( $(date +%s) - start ))s"
echo "=== results"
node -e '
const fs=require("fs");
const idx=JSON.parse(fs.readFileSync("data/index.json","utf8")).companies;
for (const t of process.argv[1].split(",")) {
  const c=JSON.parse(fs.readFileSync(`data/companies/${t}.json`,"utf8"));
  const r=idx.find((x)=>x.t===t)||{};
  console.log(`${t} | ${c.name} | cik ${c.cik} pred ${c.predecessorCik||"-"} | annual ${c.annual?.length||0} ${JSON.stringify((c.annual||[]).map(y=>y.year))} | quarterly ${c.quarterly?.length||0} | ttm ${c.ttm?.periodEnd||"-"} rev ${c.ttm?.revenue ?? "-"} | daily ${c.prices?.daily?.length||0} ${JSON.stringify(c.prices?.daily?.[0])}…${JSON.stringify(c.prices?.daily?.at(-1))} monthly ${c.prices?.data?.length||0} | score ${r.sc?.[0] ?? "-"} cov ${r.cov ?? "-"} | src ${JSON.stringify(c.source?.predecessor||null)}`);
}' "$T"
