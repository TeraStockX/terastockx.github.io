const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const shots = [
    ['v6-aapl-breakdown-phone', '#/c/AAPL', true, 'hu', '.breakdown'],
    ['v6-pltr-breakdown-phone', '#/c/PLTR', true, 'hu', '.breakdown'],
    ['v6-nvda-desktop', '#/c/NVDA', false, 'hu', '.breakdown'],
    ['v6-method-phone', '#/methodology', true, 'hu', '.bt-card'],
    ['v6-method-en-desktop', '#/methodology', false, 'en', '#backtest'],
    ['v6-home-phone', '#/', true, 'hu', '#rows'],
  ];
  for (const [name, hash, phone, lang, scroll] of shots) {
    const ctx = await b.newContext(phone ? { ...devices['iPhone 13'] } : { viewport: { width: 1360, height: 1000 } });
    await ctx.addInitScript((l) => { localStorage.setItem('tsx-lang', l); localStorage.setItem('tsx-install-hide', '1'); }, lang);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('https://terastockx.com/' + hash, { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(3000);
    if (scroll) { await p.evaluate((s) => { const el = document.querySelector(s); if (el) window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 110); }, scroll); await p.waitForTimeout(800); }
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => ({
      ring: document.querySelector('.ring-value')?.textContent,
      bd: [...document.querySelectorAll('.bd-row')].map((r) => r.innerText.replace(/\s+/g, ' ')).slice(0, 9),
      bt: document.querySelector('#bt')?.innerText.replace(/\s+/g, ' ').slice(0, 300),
      engine: document.body.innerText.match(/2\.\d\.\d/)?.[0],
      overflow: document.documentElement.scrollWidth > window.innerWidth,
    }));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
