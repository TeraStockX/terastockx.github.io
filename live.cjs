const { chromium, devices } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [name, lang, vp, hash] of [['a-home-hu-phone', 'hu', 'phone', '#/'], ['a-news-hu-phone', 'hu', 'phone', '#/news'], ['a-news-en-desktop', 'en', 1360, '#/news']]) {
    const ctx = await b.newContext(vp === 'phone' ? { ...devices['iPhone 13'] } : { viewport: { width: vp, height: 900 } });
    await ctx.addInitScript((l) => { localStorage.setItem('tsx-lang', l); localStorage.setItem('tsx-install-hide', '1'); }, lang);
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', (e) => errs.push(e.message));
    await p.goto(`https://terastockx.com/${hash}`, { waitUntil: 'networkidle', timeout: 60000 });
    await p.waitForTimeout(3000);
    await p.screenshot({ path: `out/${name}.png` });
    const info = await p.evaluate(() => [...document.querySelectorAll('.story-row .nrow-top, .story-row .nrow-move, .hp-story')].slice(0, 6).map((e) => e.innerText.replace(/\s+/g, ' ').trim()));
    console.log(name, JSON.stringify(info), errs.join(';') || 'no errors');
    await ctx.close();
  }
  await b.close();
})();
