// Live news: when the market summary was built and the top stories with their age; the home page and the news page.
const { chromium, devices } = require('playwright');
(async () => {
  const get = async (u) => { try { const r = await fetch(u + '?t=' + Date.now()); return r.ok ? r.json() : null; } catch { return null; } };
  const p = await get('https://terastockx.com/data/pulse.json');
  const now = Date.now();
  const age = (iso) => (iso ? `${Math.round((now - Date.parse(iso)) / 60000)} min` : '-');
  console.log(`pulse.json generated ${p?.generated} (${age(p?.generated)} ago), quotesAt ${p?.quotesAt}, session ${p?.session}`);
  for (const s of p?.stories || []) console.log(`  ${s.t.padEnd(6)} ${String(s.kind).padEnd(11)} ${s.at || s.date || '-'} (${s.at ? Math.round((now - Date.parse(s.at)) / 3600000) + ' h' : '-'}) move ${s.move ?? '-'} ${s.when ?? ''} since ${s.since ?? '-'} | ${(s.title || '').slice(0, 70)}`);
  const n = await get('https://terastockx.com/data/news.json');
  console.log(`news.json generated ${n?.generated} (${age(n?.generated)} ago), events ${n?.events?.length}; newest: ${JSON.stringify((n?.events || []).slice(0, 3).map((e) => [e.t, e.date, e.items?.join(',')]))}`);
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['iPhone 13'] });
  await ctx.addInitScript(() => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); });
  const page = await ctx.newPage();
  await page.goto('https://terastockx.com/#/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  const line = await page.evaluate(() => [...document.querySelectorAll('.hp-line')].map((e) => e.innerText.replace(/\s+/g, ' ').slice(0, 400)));
  console.log('home lines:', JSON.stringify(line, null, 1));
  await page.screenshot({ path: 'out/news-home-phone.png' });
  await page.goto('https://terastockx.com/#/news', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'out/news-page-phone.png' });
  const items = await page.evaluate(() => [...document.querySelectorAll('.story, .st-row, .nrow')].slice(0, 8).map((e) => e.innerText.replace(/\s+/g, ' ').slice(0, 160)));
  console.log('news page:', JSON.stringify(items, null, 1));
  await b.close();
})();
