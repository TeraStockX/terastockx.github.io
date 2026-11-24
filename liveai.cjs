const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [name, lang, vp, path] of [['ai-hu-phone-co', 'hu', 'phone', '#/c/MSFT'], ['ai-en-desktop-method', 'en', 1366, '#/methodology'], ['ai-hu-phone-pf', 'hu', 'phone', '#/portfolio']]) {
    const ctx = await b.newContext(vp === 'phone' ? { ...devices['iPhone 13'] } : { viewport: { width: vp, height: 900 } });
    await ctx.addInitScript((l) => { localStorage.setItem('tsx-lang', l); localStorage.setItem('tsx-install-hide', '1'); localStorage.setItem('tsx-portfolio', JSON.stringify([{ t: 'AAPL', shares: 10 }, { t: 'KO', shares: 30 }])); }, lang);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => { if (m.type() === 'error' && !/404/.test(m.text())) errs.push(m.text()); });
    await p.goto(`https://terastockx.com/${path}`, { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(2500);
    const info = await p.evaluate(() => ({ aiRoot: document.querySelector('.ai-root') ? (document.querySelector('.ai-root').hidden ? 'hidden' : 'shown') : 'none', aiModule: [...document.scripts].length, h2: document.querySelectorAll('h2').length, kpis: document.querySelectorAll('.pf-kpi').length }));
    console.log(name, JSON.stringify(info), errs.join(' ; ') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
