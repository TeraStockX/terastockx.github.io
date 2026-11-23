const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [name, lang, vp] of [['v9-home-hu-phone', 'hu', 'phone'], ['v9-home-en-phone', 'en', 'phone'], ['v9-home-en-desktop', 'en', 1360], ['v9-home-hu-desktop', 'hu', 1360]]) {
    const ctx = await b.newContext(vp === 'phone' ? { ...devices['iPhone 13'] } : { viewport: { width: vp, height: 800 } });
    await ctx.addInitScript((l) => { localStorage.setItem('tsx-lang', l); localStorage.setItem('tsx-install-hide', '1'); }, lang);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('https://terastockx.com/#/', { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(3000);
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => { const el = document.querySelector('.hero .tagline'); return { text: el?.textContent, fs: el && getComputedStyle(el).fontSize, lines: el ? Math.round(el.getBoundingClientRect().height / parseFloat(getComputedStyle(el).lineHeight)) : null }; });
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
