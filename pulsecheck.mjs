// The live top stories: when they were built and their headlines.
const r = await fetch(`https://terastockx.com/data/pulse.json?t=${Date.now()}`);
const p = r.ok ? await r.json() : null;
console.log(`pulse.json generated ${p?.generated}, session ${p?.session}`);
for (const s of p?.stories || []) console.log(`  ${s.t.padEnd(6)} ${String(s.kind).padEnd(11)} ${s.at || '-'} | ${(s.title || '').slice(0, 90)}`);
