const { chromium, devices } = require('playwright');
const PF = JSON.stringify([{ t: 'AAPL', shares: 10 }, { t: 'MSFT', shares: 5 }, { t: 'NVDA', shares: 20 }, { t: 'JNJ', shares: 8 }, { t: 'KO', shares: 30 }, { t: 'SPY', shares: 3 }, { t: 'XOM', shares: 12 }, { t: 'JPM', shares: 6 }]);
(async () => {
  const b = await chromium.launch();
  for (const [name, vp, period] of [['pf-1w-phone', 'phone', '1w'], ['pf-1m-phone', 'phone', '1m'], ['pf-1w-desktop', 1366, '1w']]) {
    const ctx = await b.newContext(vp === 'phone' ? { ...devices['iPhone 13'] } : { viewport: { width: vp, height: 900 }, deviceScaleFactor: 2 });
    await ctx.addInitScript(([pf, per]) => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); localStorage.setItem('tsx-portfolio', pf); localStorage.setItem('tsx-pf-period', per); }, [PF, period]);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('https://terastockx.com/#/portfolio', { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForSelector('.pf-kpi', { timeout: 30000 }).catch(() => {});
    await p.waitForTimeout(2500);
    const info = await p.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      active: document.querySelector('#pf-move [aria-pressed="true"], #pf-move .on, #pf-move .active')?.textContent?.trim() || null,
      kpis: [...document.querySelectorAll('.pf-kpi')].map((k) => k.innerText.replace(/\s+/g, ' ')),
      rows: [...document.querySelectorAll('.pc-row')].map((r) => r.innerText.replace(/\s+/g, ' ')),
      charts: document.querySelectorAll('#pf-move .chart').length,
      notes: [...document.querySelectorAll('.pf-contrib-card > p, #pf-move .note, #pf-move p.small')].map((e) => e.innerText.replace(/\s+/g, ' ')),
    }));
    console.log(name, JSON.stringify(info, null, 1), errs.join(';') || 'no errors');
    const move = await p.$('#pf-move');
    if (move) { await move.scrollIntoViewIfNeeded(); await move.screenshot({ path: `out/${name}.png` }); }
    await ctx.close();
  }
  await b.close();
})();
