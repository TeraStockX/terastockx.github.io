const { chromium } = require('playwright');
const PF = JSON.stringify([{ t: 'AAPL', shares: 10 }, { t: 'MSFT', shares: 5 }, { t: 'NVDA', shares: 20 }, { t: 'JNJ', shares: 8 }, { t: 'KO', shares: 30 }, { t: 'SPY', shares: 3 }, { t: 'XOM', shares: 12 }, { t: 'JPM', shares: 6 }]);
(async () => {
  const b = await chromium.launch();
  const phone = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
  const shot = async (ctxOpts, period, fn) => {
    const ctx = await b.newContext(ctxOpts);
    await ctx.addInitScript(([pf, per]) => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); localStorage.setItem('tsx-portfolio', pf); localStorage.setItem('tsx-pf-period', per); }, [PF, period]);
    const p = await ctx.newPage();
    await p.goto('https://terastockx.com/#/portfolio', { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForSelector('.pf-kpi', { timeout: 30000 });
    await p.waitForTimeout(1500);
    await p.addStyleTag({ content: '.tabbar{display:none!important}' });
    await fn(p);
    await ctx.close();
  };
  await shot(phone, '1d', async (p) => {
    await (await p.$('.pf-summary')).screenshot({ path: 'out/f1-osszegzes.png' });
    await (await p.$('.pf-checks')).screenshot({ path: 'out/f2-ellenorzes.png' });
    const rows = await p.$$('.pf-row:not(.pf-head)');
    const a = await rows[0].boundingBox(), c = await rows[1].boundingBox();
    await p.screenshot({ path: 'out/f3-tetelek.png', clip: { x: 0, y: a.y - 50, width: 390, height: c.y + c.height - a.y + 60 }, fullPage: true });
    await (await p.$('#pf-move')).screenshot({ path: 'out/f4-mozgas-1nap.png' });
  });
  await shot(phone, 'max', async (p) => { await (await p.$('#pf-move')).screenshot({ path: 'out/f5-mozgas-max.png' }); });
  await shot({ viewport: { width: 1366, height: 900 }, deviceScaleFactor: 1 }, '3m', async (p) => {
    await (await p.$('.pf-hold')).screenshot({ path: 'out/f6-tetelek-asztali.png' });
    await (await p.$('#pf-move')).screenshot({ path: 'out/f7-mozgas-3honap-asztali.png' });
  });
  await b.close();
  console.log('done');
})();
