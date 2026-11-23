const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const shots = [
    ['v3-home-phone', '#/', true, 'hu', '.hero-stats'],
    ['v3-news-phone', '#/news', true, 'hu', null],
    ['v3-portfolio-phone', '#/portfolio', true, 'hu', '.pf-summary'],
    ['v3-portfolio-donuts-phone', '#/portfolio', true, 'hu', '.donut-grid'],
    ['v3-zh-home-phone', '#/', true, 'zh', '.hero-stats'],
  ];
  for (const [name, hash, phone, lang, scroll] of shots) {
    const ctx = await b.newContext(phone ? { ...devices['iPhone 13'] } : { viewport: { width: 1360, height: 1000 } });
    await ctx.addInitScript((l) => { localStorage.setItem('tsx-lang', l); localStorage.setItem('tsx-install-hide', '1'); localStorage.setItem('tsx-watch', '["AAPL","NVDA"]'); localStorage.setItem('tsx-portfolio', JSON.stringify([{ t: 'AAPL', shares: 10 }, { t: 'NVDA', shares: 20 }, { t: 'VOO', shares: 3 }, { t: 'VUAG:LSE', shares: 15 }, { t: 'SXR8:XETRA', shares: 4 }])); }, lang);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('https://terastockx.com/' + hash, { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(3000);
    if (scroll) { await p.evaluate((s) => { const el = document.querySelector(s); if (el) window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 100); }, scroll); await p.waitForTimeout(800); }
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => ({ pulse: document.querySelector('.home-pulse')?.innerText.replace(/\s+/g, ' ').slice(0, 160), nrows: document.querySelectorAll('.nrow').length, pf: [...document.querySelectorAll('.pf-table tbody tr')].map((r) => r.innerText.replace(/\s+/g, ' ').slice(0, 70)), value: document.querySelector('.pf-summary .hero-stat .v')?.textContent }));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
