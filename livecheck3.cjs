// Live check after the successor and price-history fixes: ExxonMobil's page (TeraScore, predecessor in the
// source line), SpaceX's and Anthropic's pages (daily price chart), the portfolio without the XOM note.
const { chromium, devices } = require('playwright');
const PF = JSON.stringify([{ t: 'AAPL', shares: 10 }, { t: 'MSFT', shares: 5 }, { t: 'NVDA', shares: 20 }, { t: 'JNJ', shares: 8 }, { t: 'KO', shares: 30 }, { t: 'SPY', shares: 3 }, { t: 'XOM', shares: 12 }, { t: 'JPM', shares: 6 }, { t: 'SPCX', shares: 4 }]);
(async () => {
  const b = await chromium.launch();
  const ctxOpts = { ...devices['iPhone 13'] };
  for (const t of ['XOM', 'SPCX', 'ANT', 'BIP']) {
    const ctx = await b.newContext(ctxOpts);
    await ctx.addInitScript(() => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); });
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto(`https://terastockx.com/#/c/${t}`, { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(2500);
    const info = await p.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      title: document.querySelector('h1')?.innerText?.replace(/\s+/g, ' '),
      score: document.querySelector('.summary')?.innerText?.replace(/\s+/g, ' ').slice(0, 160) || null,
      unscored: document.querySelector('#tab-analysis .score-name')?.innerText || null,
      charts: [...document.querySelectorAll('.chart h3')].map((h) => `${h.innerText} | ${h.nextElementSibling?.innerText || ''}`),
      source: [...document.querySelectorAll('p, div.small, .src, footer')].map((e) => e.innerText).find((x) => /SEC EDGAR/.test(x))?.replace(/\s+/g, ' ').slice(0, 300) || null,
    }));
    console.log(`page ${t}`, JSON.stringify(info), errs.join(';') || 'no errors');
    await p.screenshot({ path: `out/live-${t}-top.png` });
    const ch = await p.$('.chart');
    if (ch) { await ch.scrollIntoViewIfNeeded(); await p.waitForTimeout(400); await ch.screenshot({ path: `out/live-${t}-chart.png` }); }
    await ctx.close();
  }
  for (const [name, period] of [['pf-1w', '1w'], ['pf-1m', '1m']]) {
    const ctx = await b.newContext(ctxOpts);
    await ctx.addInitScript(([pf, per]) => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); localStorage.setItem('tsx-portfolio', pf); localStorage.setItem('tsx-pf-period', per); }, [PF, period]);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('https://terastockx.com/#/portfolio', { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForSelector('.pf-kpi', { timeout: 30000 }).catch(() => {});
    await p.waitForTimeout(2500);
    const info = await p.evaluate(() => ({
      kpis: [...document.querySelectorAll('.pf-kpi')].map((k) => k.innerText.replace(/\s+/g, ' ')),
      rows: [...document.querySelectorAll('.pc-row')].map((r) => r.innerText.replace(/\s+/g, ' ')),
      notes: [...document.querySelectorAll('.pf-contrib-card > p, #pf-move .note, #pf-move p.small')].map((e) => e.innerText.replace(/\s+/g, ' ')),
    }));
    console.log(name, JSON.stringify(info, null, 1), errs.join(';') || 'no errors');
    const move = await p.$('#pf-move');
    if (move) { await move.scrollIntoViewIfNeeded(); await move.screenshot({ path: `out/live-${name}.png` }); }
    await ctx.close();
  }
  await b.close();
})();
