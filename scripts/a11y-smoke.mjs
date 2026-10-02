import AxeBuilder from '@axe-core/playwright';
import { chromium } from 'playwright';

const baseUrl = process.env.A11Y_BASE_URL || process.env.BASE_URL || 'http://localhost:3000';
const paths = (process.env.A11Y_PATHS || '/en,/zh')
  .split(',')
  .map((path) => path.trim())
  .filter(Boolean);

const browser = await chromium.launch();
const context = await browser.newContext();
const violationsByUrl = [];

try {
  for (const path of paths) {
    const page = await context.newPage();
    const url = new URL(path, baseUrl).toString();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.locator('main').waitFor({ timeout: 15000 });
    await page.keyboard.press('Tab');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    if (results.violations.length > 0) {
      violationsByUrl.push({
        url,
        violations: results.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          description: violation.description,
          nodes: violation.nodes.length,
        })),
      });
    }

    await page.close();
  }
} finally {
  await context.close();
  await browser.close();
}

if (violationsByUrl.length > 0) {
  console.error(JSON.stringify(violationsByUrl, null, 2));
  process.exit(1);
}

console.log(`axe smoke scan passed for ${paths.length} route(s).`);
