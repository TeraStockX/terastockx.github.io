// Extended-hours quotes in the live index and in a few company files.
const base = "https://terastockx.com/data/";
const get = async (f) => { const r = await fetch(`${base}${f}?t=${Date.now()}`); if (!r.ok) throw new Error(`${f} ${r.status}`); return r.json(); };
const idx = await get("index.json");
const rows = idx.companies || [];
const withX = rows.filter((r) => r.xs);
console.log("index generated", idx.generated, "| rows", rows.length, "| rows with an extended-hours quote", withX.length, JSON.stringify(withX.reduce((m, r) => ((m[r.xs] = (m[r.xs] || 0) + 1), m), {})));
for (const r of withX.sort((a, b) => Math.abs(b.xc) - Math.abs(a.xc)).slice(0, 8)) console.log(" ", r.t, r.xs, r.xc, r.xp);
for (const t of ["DELL", "NVDA", "AAPL"]) {
  const c = await get(`companies/${t}.json`);
  console.log(t, JSON.stringify({ price: c.market?.price, changePct: c.market?.changePct, quoteTime: c.market?.quoteTime, ext: c.market?.ext, retrieved: c.retrieved || c.retrievedAt || null }));
}
