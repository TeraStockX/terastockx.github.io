const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const shots = [
    ['v8-home-hu-phone', 'hu', true, null],
    ['v8-home-en-phone', 'en', true, null],
    ['v8-alphabet-hu-phone', 'hu', true, 'alphabet'],
    ['v8-berkshire-en-desktop', 'en', false, 'berkshire'],
  ];
  for (const [name, lang, phone, q] of shots) {
    const ctx = await b.newContext(phone ? { ...devices['iPhone 13'] } : { viewport: { width: 1360, height: 900 } });
    await ctx.addInitScript((l) => { localStorage.setItem('tsx-lang', l); localStorage.setItem('tsx-install-hide', '1'); }, lang);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto('https://terastockx.com/#/', { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(3000);
    if (q) { await p.fill('#q', q); await p.waitForTimeout(800); await p.evaluate(() => { const el = document.querySelector('#rows'); window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 160); }); await p.waitForTimeout(500); }
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => { const el = document.querySelector('.hero .tagline'); return { tagline: el?.textContent, lines: el ? Math.round(el.getBoundingClientRect().height / parseFloat(getComputedStyle(el).lineHeight)) : null, rows: [...document.querySelectorAll('#rows tr')].slice(0, 4).map((r) => r.querySelector('.co-txt')?.innerText.replace(/\s+/g, ' ')) }; });
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
