const { chromium, devices } = require('playwright');
const PF = JSON.stringify([{ t: 'AAPL', shares: 10 }, { t: 'MSFT', shares: 5 }, { t: 'NVDA', shares: 20 }, { t: 'JNJ', shares: 8 }, { t: 'KO', shares: 30 }, { t: 'SPY', shares: 3 }, { t: 'XOM', shares: 12 }, { t: 'JPM', shares: 6 }]);
(async () => {
  const b = await chromium.launch();
  for (const [name, lang, vp, period] of [['pf-hu-phone-1d', 'hu', 'phone', '1d'], ['pf-hu-phone-max', 'hu', 'phone', 'max'], ['pf-hu-desktop-3m', 'hu', 1366, '3m'], ['pf-en-desktop-1y', 'en', 1366, '1y']]) {
    const ctx = await b.newContext(vp === 'phone' ? { ...devices['iPhone 13'] } : { viewport: { width: vp, height: 900 } });
    await ctx.addInitScript(([l, pf, per]) => { localStorage.setItem('tsx-lang', l); localStorage.setItem('tsx-install-hide', '1'); localStorage.setItem('tsx-portfolio', pf); localStorage.setItem('tsx-pf-period', per); }, [lang, PF, period]);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('https://terastockx.com/#/portfolio', { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForSelector('.pf-kpi', { timeout: 30000 }).catch(() => {});
    await p.waitForTimeout(2000);
    const info = await p.evaluate(() => ({ overflow: document.documentElement.scrollWidth > innerWidth, tabs: [...document.querySelectorAll('#tabbar .nav-label')].map((e) => e.textContent).join('|'), nav: [...document.querySelectorAll('#nav .nav-label')].map((e) => e.textContent).join('|'), kpis: [...document.querySelectorAll('.pf-kpi')].map((k) => k.innerText.replace(/\s+/g, ' ')), rows: document.querySelectorAll('.pc-row').length, charts: document.querySelectorAll('#pf-move .chart').length, bars: [...document.querySelectorAll('.pf-bar')].map((e) => e.innerText.replace(/\s+/g, ' ')).join(' / '), notes: [...document.querySelectorAll('.pf-contrib-card > p')].map((e) => e.innerText) }));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await p.screenshot({ path: `out/${name}.png`, fullPage: true });
    await ctx.close();
  }
  await b.close();
})();
