// Live after-hours state: index rows with after-hours quotes, the market summary's time, the index chips and the top
// stories; a Hungarian phone screenshot of the home page's market line and top stories.
const { chromium, devices } = require('playwright');
(async () => {
  const get = async (u) => { try { const r = await fetch(`${u}?t=${Date.now()}`); return r.ok ? r.json() : null; } catch { return null; } };
  const idx = await get('https://terastockx.com/data/index.json');
  const rows = idx?.companies || [];
  const post = rows.filter((r) => r.xs === 'post'), pre = rows.filter((r) => r.xs === 'pre');
  console.log(`index generated ${idx?.generated}: rows ${rows.length}, xs=post ${post.length}, xs=pre ${pre.length}`);
  for (const t of ['NVDA', 'AAPL', 'MSFT', 'DELL', 'HPQ', 'NTNX', 'DE']) { const r = rows.find((x) => x.t === t); console.log(`  ${t}: px ${r?.px} dc ${r?.dc} xs ${r?.xs} xc ${r?.xc} xp ${r?.xp}`); }
  const p = await get('https://terastockx.com/data/pulse.json');
  console.log(`pulse generated ${p?.generated}, quotesAt ${p?.quotesAt}, session ${p?.session}, prevDay ${p?.prevDay}`);
  for (const i of p?.indices || []) console.log(`  index ${JSON.stringify(i).slice(0, 200)}`);
  for (const s of p?.stories || []) console.log(`  story ${s.t.padEnd(6)} ${String(s.kind).padEnd(11)} ${s.at || '-'} move ${s.move ?? '-'} ${s.when ?? ''} since ${s.since ?? '-'} | ${(s.title || '').slice(0, 70)}`);
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['iPhone 13'] });
  await ctx.addInitScript(() => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); });
  const page = await ctx.newPage();
  const errs = []; page.on('pageerror', (e) => errs.push(e.message));
  await page.goto('https://terastockx.com/#/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2500);
  const lines = await page.evaluate(() => [...document.querySelectorAll('.hp-line')].map((e) => e.innerText.replace(/\s+/g, ' ').slice(0, 500)));
  console.log('home lines:', JSON.stringify(lines, null, 1), errs.join(' | ') || 'no errors');
  const first = await page.$('.hp-line');
  if (first) {
    const box = await page.evaluate(() => { const ls = [...document.querySelectorAll('.hp-line')]; const a = ls[0].getBoundingClientRect(), z = ls[ls.length - 1].getBoundingClientRect(); return { y: a.top + window.scrollY - 70, h: z.bottom - a.top + 90 }; });
    await page.screenshot({ path: 'out/ah-home-phone.png', clip: { x: 0, y: Math.max(0, box.y), width: 390, height: Math.min(1400, box.h) } });
  }
  await page.screenshot({ path: 'out/ah-home-phone-top.png' });
  await b.close();
})();
