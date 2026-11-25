// Live portfolio after the five new parts: alerts, gain, S&P 500, risk, dividend calendar (hu, phone and desktop).
const { chromium, devices } = require('playwright');
const PF = JSON.stringify([{ t: 'AAPL', shares: 10, cost: 180 }, { t: 'MSFT', shares: 5, cost: 420 }, { t: 'NVDA', shares: 20, cost: 95 }, { t: 'JNJ', shares: 8 }, { t: 'KO', shares: 30, cost: 62 }, { t: 'SPY', shares: 3, cost: 560 }, { t: 'XOM', shares: 12, cost: 110 }, { t: 'JPM', shares: 6 }, { t: 'SPCX', shares: 4, cost: 150 }]);
const SNAP = JSON.stringify({ XOM: { o: 71, r: 20, d: 'low', le: null, cf: [], dk: null } });
(async () => {
  const b = await chromium.launch();
  const r = await (await fetch('https://terastockx.com/data/dividends.json')).json().catch(() => null);
  console.log('dividends.json:', r ? `${Object.keys(r.d || {}).length} tickers, ${Object.keys(r.read || {}).length} days, generated ${r.generated}; AAPL ${JSON.stringify((r.d || {}).AAPL?.slice(-2))} MSFT ${JSON.stringify((r.d || {}).MSFT?.slice(-2))}` : 'missing');
  for (const [name, opts] of [['pf4-phone', { ...devices['iPhone 13'] }], ['pf4-desktop', { viewport: { width: 1366, height: 900 }, deviceScaleFactor: 1 }]]) {
    const ctx = await b.newContext(opts);
    await ctx.addInitScript(([pf, snap]) => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); localStorage.setItem('tsx-portfolio', pf); localStorage.setItem('tsx-pf-period', '1m'); localStorage.setItem('tsx-pf-cur', 'HUF'); localStorage.setItem('tsx-pf-snap', snap); localStorage.setItem('tsx-pf-seen', '2026-11-20T08:00:00Z'); }, [PF, SNAP]);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto('https://terastockx.com/#/portfolio', { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForSelector('.dv-row, #pf-div .empty', { timeout: 40000 }).catch(() => {});
    await p.waitForTimeout(1500);
    const info = await p.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - innerWidth,
      alerts: [...document.querySelectorAll('.pf-alerts li, .pf-alerts-none')].map((e) => e.innerText.replace(/\s+/g, ' ')),
      gain: [...document.querySelectorAll('.pf-summary .hero-stat')].map((e) => e.innerText.replace(/\s+/g, ' ')).slice(0, 2),
      gains: [...document.querySelectorAll('.pf-gain')].map((e) => e.innerText).slice(0, 3),
      kpis: [...document.querySelectorAll('#pf-move .pf-kpi')].map((e) => e.innerText.replace(/\s+/g, ' ')),
      line2: document.querySelectorAll('#pf-move path.line2').length,
      risk: [...document.querySelectorAll('#pf-risk .pf-kpi')].map((e) => e.innerText.replace(/\s+/g, ' ')),
      div: document.querySelector('.pf-div-card .pf-subtitle')?.innerText || document.querySelector('#pf-div')?.innerText,
      divRows: [...document.querySelectorAll('.dv-row')].map((e) => e.innerText.replace(/\s+/g, ' ')).slice(0, 4),
    }));
    console.log(name, JSON.stringify(info, null, 1), errs.join(' | ') || 'no errors');
    for (const [sel, file] of [['.pf-alerts, .pf-alerts-none', 'alerts'], ['.pf-summary', 'summary'], ['#pf-move', 'move'], ['#pf-risk', 'risk'], ['#pf-div', 'div']]) {
      const el = await p.$(sel);
      if (el) { await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(300); await el.screenshot({ path: `out/${name}-${file}.png` }); }
    }
    const hold = await p.$('.pf-hold .pf-row:not(.pf-head)');
    if (hold) { await hold.scrollIntoViewIfNeeded(); await hold.screenshot({ path: `out/${name}-holding.png` }); }
    await ctx.close();
  }
  await b.close();
})();
