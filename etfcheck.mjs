// Diag: share of ETFs with a change of the day on the live site, and a sample against live quotes.
const BH = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", Accept: "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const syms = ["SPY", "ARKK", "AAAP", "AADR", "SOXL", "KWEB", "EWZ", "IBIT", "SCHD", "TQQQ"];
const q = syms.map((s) => `symbol=${s.toLowerCase()}%7cetf`).join("&") + "&symbol=ibit%7cstocks";
const live = {};
try { for (const x of (await (await fetch(`https://api.nasdaq.com/api/quote/watchlist?${q}`, { headers: BH })).json())?.data || []) live[x.symbol] = x; } catch {}
const d = await (await fetch(`https://terastockx.com/data/etfs.json?x=${Date.now()}`)).json();
const by = new Map((d.etfs || []).map((e) => [e.t, e]));
const withDc = (d.etfs || []).filter((e) => e.dc !== undefined && e.dc !== null).length;
console.log(`${new Date().toISOString()} live etfs.json quotesAt ${d.quotesAt}: ${withDc} of ${(d.etfs || []).length} ETFs with a change of the day`);
for (const s of syms) console.log(`  ${s}: site ${by.get(s)?.px} (${by.get(s)?.dc}) | Nasdaq ${live[s]?.lastSalePrice} ${live[s]?.percentageChange} ${live[s]?.assetClass || ""}`);
