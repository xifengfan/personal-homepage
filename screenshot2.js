const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://stellar-chebakia-68af66.netlify.app', { waitUntil: 'networkidle' });
  await page.fill('input[type="password"]', 'My-Drop-Site');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'D:/Openclaw/.openclaw/workspace/v0.1-personal-homepage/screenshot-desktop.png', fullPage: false });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'D:/Openclaw/.openclaw/workspace/v0.1-personal-homepage/screenshot-mobile.png', fullPage: false });
  await browser.close();
  console.log('done');
})();
