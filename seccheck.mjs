// The SEC's latest-filings feed: how many 8-Ks per day and when the newest was accepted (holiday check).
const UA = { "User-Agent": "TeraStockX diag research@terastockx.com", Accept: "application/atom+xml" };
for (const form of ["8-K", "10-Q"]) {
  const r = await fetch(`https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=${form}&company=&dateb=&owner=exclude&start=0&count=100&output=atom`, { headers: UA });
  const x = await r.text();
  const ups = [...x.matchAll(/<updated>([^<]+)<\/updated>/g)].map((m) => m[1]).slice(1);
  const byDay = {};
  for (const u of ups) byDay[u.slice(0, 10)] = (byDay[u.slice(0, 10)] || 0) + 1;
  console.log(`${form}: HTTP ${r.status}, newest ${ups[0]}, oldest on page ${ups[ups.length - 1]}, per day ${JSON.stringify(byDay)}`);
}
