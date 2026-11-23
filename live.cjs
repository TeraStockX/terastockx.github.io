const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [name, lang, phone] of [['v7-home-en-phone', 'en', true], ['v7-home-hu-phone', 'hu', true], ['v7-home-en-desktop', 'en', false]]) {
    const ctx = await b.newContext(phone ? { ...devices['iPhone 13'] } : { viewport: { width: 1360, height: 900 } });
    await ctx.addInitScript((l) => { localStorage.setItem('tsx-lang', l); localStorage.setItem('tsx-install-hide', '1'); }, lang);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('https://terastockx.com/#/', { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(3000);
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => ({ tagline: document.querySelector('.hero .tagline')?.textContent, slogan: document.querySelector('.hero .slogan')?.textContent }));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
