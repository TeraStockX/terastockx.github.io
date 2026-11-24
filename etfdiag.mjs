// Diag: why the Nasdaq ETF screener returns no rows, and how stale the live ETF prices are.
const BH = { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36", Accept: "application/json, text/plain, */*", "Accept-Language": "en-US,en;q=0.9" };
const BH2 = { ...BH, Origin: "https://www.nasdaq.com", Referer: "https://www.nasdaq.com/" };
async function probe(label, url, headers, timeout = 90000) {
  const t0 = Date.now();
  try {
    const r = await fetch(url, { headers, signal: AbortSignal.timeout(timeout) });
    const txt = await r.text();
    let info = "";
    try {
      const j = JSON.parse(txt);
      const d = j?.data;
      const rows = d?.data?.rows || d?.rows || d?.table?.rows || [];
      info = `json keys=${Object.keys(j || {})} data keys=${d ? Object.keys(d) : "-"} data.data keys=${d?.data ? Object.keys(d.data) : "-"} rows=${rows.length} status=${JSON.stringify(j?.status).slice(0, 200)} first=${JSON.stringify(rows[0] || null).slice(0, 300)} total=${d?.totalrecords ?? d?.data?.totalrecords ?? d?.asof ?? "-"}`;
    } catch { info = `not json: ${txt.slice(0, 200).replace(/\s+/g, " ")}`; }
    console.log(`${label}: HTTP ${r.status} ${r.headers.get("content-type")} ${txt.length} bytes in ${Date.now() - t0} ms | ${info}`);
  } catch (e) {
    console.log(`${label}: ERROR after ${Date.now() - t0} ms: ${e.message}`);
  }
}
await probe("screener download", "https://api.nasdaq.com/api/screener/etf?tableonly=true&download=true", BH);
await probe("screener download + origin", "https://api.nasdaq.com/api/screener/etf?tableonly=true&download=true", BH2);
await probe("screener paged 50", "https://api.nasdaq.com/api/screener/etf?tableonly=true&limit=50&offset=0", BH);
await probe("screener paged 5000", "https://api.nasdaq.com/api/screener/etf?tableonly=true&limit=5000&offset=0", BH);
await probe("screener download only", "https://api.nasdaq.com/api/screener/etf?download=true", BH);
await probe("stocks screener (works?)", "https://api.nasdaq.com/api/screener/stocks?tableonly=true&download=true&exchange=amex", BH);
const syms = ["SPY", "QQQ", "VOO", "ARKK", "SCHD", "AAAP", "AADR", "JEPI", "TLT", "GLD", "IBIT", "SOXL", "BND", "VTI", "XLE", "KWEB", "EWZ", "SMH", "IWM", "DIA"];
const q = syms.map((s) => `symbol=${s.toLowerCase()}%7cetf`).join("&");
const live = {};
try {
  const r = await fetch(`https://api.nasdaq.com/api/quote/watchlist?${q}`, { headers: BH, signal: AbortSignal.timeout(20000) });
  const j = await r.json();
  for (const x of j?.data || []) live[x.symbol] = x;
  console.log(`watchlist: HTTP ${r.status}, ${Object.keys(live).length} quotes; sample ${JSON.stringify((j?.data || [])[0]).slice(0, 400)}`);
} catch (e) { console.log(`watchlist error ${e.message}`); }
try {
  const d = await (await fetch(`https://terastockx.com/data/etfs.json?x=${Date.now()}`)).json();
  console.log(`live etfs.json: generated ${d.generated} quotesAt ${d.quotesAt} session ${JSON.stringify(d.session)} count ${d.count ?? d.etfs?.length}`);
  const by = new Map((d.etfs || []).map((e) => [e.t, e]));
  for (const s of syms) {
    const e = by.get(s), l = live[s];
    console.log(`  ${s}: site px ${e?.px} dc ${e?.dc} | live ${l?.lastSalePrice} ${l?.percentageChange} ${l?.lastTradeTimestampDateTime || ""}`);
  }
  const withDc = (d.etfs || []).filter((e) => e.dc !== undefined && e.dc !== null).length;
  console.log(`  ETFs with a change of the day: ${withDc} of ${(d.etfs || []).length}`);
} catch (e) { console.log(`live etfs.json error ${e.message}`); }
