const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const shots = [
    ['stories-news-phone', 'https://terastockx.com/#/news', true, null],
    ['stories-home-phone', 'https://terastockx.com/#/', true, '#market-strip'],
    ['stories-nvda-phone', 'https://terastockx.com/#/c/NVDA', true, null],
    ['stories-news-desktop', 'https://terastockx.com/#/news', false, null],
  ];
  for (const [name, url, phone, scroll] of shots) {
    const ctx = await b.newContext(phone ? { ...devices['iPhone 13'] } : { viewport: { width: 1360, height: 1000 } });
    await ctx.addInitScript(() => { localStorage.setItem('tsx-lang', 'hu'); localStorage.setItem('tsx-install-hide', '1'); });
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(2500);
    if (scroll) { await p.evaluate((s) => { const el = document.querySelector(s); if (el) window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 110); }, scroll); await p.waitForTimeout(800); }
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => ({ stories: [...document.querySelectorAll('.story, .tn-row')].map((x) => x.innerText.replace(/\s+/g, ' ').slice(0, 140)).slice(0, 6), ext: document.querySelector('.ext-quote')?.innerText, note: document.querySelector('.session-note')?.innerText?.slice(0, 80) }));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
