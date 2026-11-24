const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [name, lang, vp] of [['co-hu-phone', 'hu', 'phone'], ['co-en-desktop', 'en', 1366]]) {
    const ctx = await b.newContext(vp === 'phone' ? { ...devices['iPhone 13'] } : { viewport: { width: vp, height: 900 } });
    await ctx.addInitScript((l) => { localStorage.setItem('tsx-lang', l); localStorage.setItem('tsx-install-hide', '1'); }, lang);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('https://terastockx.com/#/c/NVDA', { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForSelector('.summary', { timeout: 30000 }).catch(() => {});
    await p.waitForTimeout(1500);
    const info = await p.evaluate(() => [...document.querySelectorAll('#tab-analysis h2.section-title')].map((h) => h.childNodes[0].textContent.trim()));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
