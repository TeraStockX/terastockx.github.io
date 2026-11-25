// Overnight check: the live market summary (pulse.json), its top stories in the order shown, and the
// "since the news" changes against the companies' daily closes.
import { dailyCloses } from "./newscripts/market.mjs";

const base = "https://terastockx.com/data/";
const get = async (f) => {
  const r = await fetch(`${base}${f}?t=${Date.now()}`, { headers: { "cache-control": "no-cache" } });
  if (!r.ok) throw new Error(`${f} ${r.status}`);
  return r.json();
};
const now = new Date();
const hours = (iso) => (iso ? `${((now - new Date(iso)) / 3600000).toFixed(1)}h` : "-");
const newsTime = (s) => s.at || (s.date ? `${s.date}T05:00:00Z` : null);

const [pulse, sp, idx] = await Promise.all([get("pulse.json"), get("story-prices.json"), get("index.json")]);
console.log("now", now.toISOString());
console.log("pulse generated", pulse.generated, "| quotesAt", pulse.quotesAt, "| session", pulse.session, "| prevDay", pulse.prevDay);
console.log("index generated", idx.generated, "| rows", (idx.companies || []).length);
console.log("story-prices updated", sp.updated, "| items", Object.keys(sp.items || {}).length, "| last closes", Object.keys(sp.last || {}).length);

console.log("=== stories (in the order shown)");
for (const [i, s] of (pulse.stories || []).entries()) {
  console.log(`${i + 1}. ${s.t} kind=${s.kind} age=${hours(newsTime(s))} at=${s.at || s.date || "-"} since=${s.since ?? "-"} move=${s.move ?? "-"} (${s.when ?? "-"}) dc=${s.dc ?? "-"} | ${(s.title || "").slice(0, 90)}`);
}
console.log("=== headlines");
for (const h of (pulse.headlines || []).slice(0, 12)) console.log(`${h.type} ${h.t} ${h.date || h.fs || ""} ${(h.title || "").slice(0, 70)}`);

console.log("=== since the news vs the daily closes (stories with news)");
for (const s of (pulse.stories || []).filter((x) => x.kind !== "move")) {
  const k = sp.items?.[s.url];
  const l = sp.last?.[s.t];
  let closes = [];
  try { closes = await dailyCloses(s.t, 21); } catch (e) { console.log(s.t, "closes error", e.message); }
  const pbHist = k?.day ? closes.find((c) => c[0] === k.day) : null;
  const lastHist = closes.at(-1);
  const kept = Number.isFinite(k?.pb) && Number.isFinite(l?.close) ? +((l.close / k.pb - 1) * 100).toFixed(2) : null;
  const hist = pbHist && lastHist ? +((lastHist[1] / pbHist[1] - 1) * 100).toFixed(2) : null;
  console.log(`${s.t}: since=${s.since ?? "-"} | kept: close before the news ${k?.pb ?? "-"} (${k?.day ?? "-"}), latest close ${l?.close ?? "-"} (${l?.day ?? "-"}, read ${hours(l?.at)} ago) -> ${kept ?? "-"} | Nasdaq history: ${pbHist ? pbHist.join(" ") : "-"} -> ${lastHist ? lastHist.join(" ") : "-"} = ${hist ?? "-"}`);
  await new Promise((r) => setTimeout(r, 300));
}

const nv = (pulse.stories || []).find((s) => s.t === "NVDA");
console.log("=== NVDA story", JSON.stringify(nv));
console.log("NVDA kept closes", JSON.stringify(Object.entries(sp.items || {}).filter(([, v]) => v.t === "NVDA")), JSON.stringify(sp.last?.NVDA));
try { console.log("NVDA Nasdaq closes", JSON.stringify((await dailyCloses("NVDA", 21)).slice(-8))); } catch (e) { console.log("NVDA closes error", e.message); }
