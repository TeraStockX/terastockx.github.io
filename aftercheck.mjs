// After the fix: the live market summary and the extended-hours quotes in the index.
const base = "https://terastockx.com/data/";
const get = async (f) => { const r = await fetch(`${base}${f}?t=${Date.now()}`); if (!r.ok) throw new Error(`${f} ${r.status}`); return r.json(); };
const [pulse, idx, etfs] = await Promise.all([get("pulse.json"), get("index.json"), get("etfs.json")]);
const rows = idx.companies || [];
console.log("now", new Date().toISOString());
console.log("pulse generated", pulse.generated, "| quotesAt", pulse.quotesAt, "| session", pulse.session, "| prevDay", pulse.prevDay);
console.log("etfs quotesAt", etfs.quotesAt, "| session", JSON.stringify(etfs.session));
console.log("index generated", idx.generated, "| rows", rows.length, "| with an extended-hours quote", rows.filter((r) => r.xs).length);
for (const s of pulse.stories || []) console.log(`  ${s.t} ${s.kind} since=${s.since ?? "-"} move=${s.move ?? "-"} (${s.when ?? "-"})`);
console.log("indices", JSON.stringify((pulse.indices || []).map((e) => [e.t, e.px, e.dc, e.xs ?? null, e.xc ?? null])));
