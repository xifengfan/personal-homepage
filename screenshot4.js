const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3457', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'D:/Openclaw/.openclaw/workspace/v0.1-personal-homepage/screenshot-desktop.png', fullPage: false });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'D:/Openclaw/.openclaw/workspace/v0.1-personal-homepage/screenshot-mobile.png', fullPage: false });
  await browser.close();
  console.log('done');
})();
