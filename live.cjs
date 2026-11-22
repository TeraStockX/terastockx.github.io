const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const shots = [
    ['live2-home-phone', 'https://terastockx.com/#/', true, null],
    ['live2-list-phone', 'https://terastockx.com/#/', true, '#rows'],
    ['live2-watch-phone', 'https://terastockx.com/#/watchlist', true, '#rows'],
    ['live2-company-desktop', 'https://terastockx.com/#/c/NVDA', false, null],
    ['live2-market-phone', 'https://terastockx.com/#/news', true, '.pulse-grid'],
  ];
  for (const [name, url, phone, scroll] of shots) {
    const ctx = await b.newContext(phone ? { ...devices['iPhone 13'] } : { viewport: { width: 1360, height: 900 } });
    await ctx.addInitScript(() => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); localStorage.setItem('tsx-watch', '["AAPL","ADP","ANT","NVDA"]'); });
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(2500);
    if (scroll) { await p.evaluate((s) => { const el = document.querySelector(s); if (el) window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 160); }, scroll); await p.waitForTimeout(1200); }
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => ({ imgs: [...document.querySelectorAll('img.logo')].filter((i) => i.complete && i.naturalWidth > 0).length, letters: document.querySelectorAll('.logo.letter').length, hero: document.querySelector('.hero-stats')?.innerText.replace(/\n+/g, ' | '), stars: document.querySelectorAll('[data-star]').length, logos: document.querySelectorAll('.logo').length, ex: [...document.querySelectorAll('.badge.ex')].slice(0, 3).map((x) => x.textContent), partial: document.querySelectorAll('.dq-partial').length, watchBtn: !!document.getElementById('watch-btn') }));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
