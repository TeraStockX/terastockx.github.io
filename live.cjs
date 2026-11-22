const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const shots = [
    ['live-home-phone', 'https://terastockx.com/#/', true, '.controls'],
    ['live-watch-phone', 'https://terastockx.com/#/watchlist', true, '.controls'],
    ['live-adp-desktop', 'https://terastockx.com/#/c/ADP', false, null],
    ['live-ant-phone', 'https://terastockx.com/#/c/ANT', true, null],
    ['live-market-desktop', 'https://terastockx.com/#/news', false, null],
  ];
  for (const [name, url, phone, scroll] of shots) {
    const ctx = await b.newContext(phone ? { ...devices['iPhone 13'] } : { viewport: { width: 1360, height: 900 } });
    await ctx.addInitScript(() => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); localStorage.setItem('tsx-watch', '["AAPL","ADP","ANT","NVDA"]'); });
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(1500);
    if (scroll) { await p.evaluate((s) => document.querySelector(s)?.scrollIntoView(), scroll); await p.waitForTimeout(400); }
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => ({ stars: document.querySelectorAll('[data-star]').length, logos: document.querySelectorAll('.logo').length, ex: [...document.querySelectorAll('.badge.ex')].slice(0, 3).map((x) => x.textContent), partial: document.querySelectorAll('.dq-partial').length, watchBtn: !!document.getElementById('watch-btn') }));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
