const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const shots = [
    ['chain-home-phone', 'https://terastockx.com/#/', true, null],
    ['chain-market-phone', 'https://terastockx.com/#/news', true, '.pulse-grid'],
  ];
  for (const [name, url, phone, scroll] of shots) {
    const ctx = await b.newContext(phone ? { ...devices['iPhone 13'] } : { viewport: { width: 1360, height: 900 } });
    await ctx.addInitScript(() => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); });
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(2500);
    if (scroll) { await p.evaluate((s) => { const el = document.querySelector(s); if (el) window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 220); }, scroll); await p.waitForTimeout(1200); }
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => ({ hero: document.querySelector('.hero-stats')?.innerText.replace(/\n+/g, ' | '), asOf: [...document.querySelectorAll('p, .muted, small')].map((x) => x.innerText).find((s) => /Árfolyamok:/.test(s)) }));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
