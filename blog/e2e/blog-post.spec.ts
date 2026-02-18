import { test, expect, type Page } from '@playwright/test';

// Discover all blog post URLs from the homepage links
async function getBlogPostUrls(page: Page): Promise<string[]> {
  await page.goto('/');
  const links = page.locator('a[href*="/blog/"]');
  const count = await links.count();
  const hrefs = new Set<string>();
  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute('href');
    if (href) hrefs.add(href);
  }
  return [...hrefs];
}

test.describe('Blog post pages', () => {
  let postUrls: string[];

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    postUrls = await getBlogPostUrls(page);
    await page.close();
    expect(postUrls.length).toBeGreaterThanOrEqual(1);
  });

  test('every post returns 200', async ({ page }) => {
    for (const url of postUrls) {
      const response = await page.goto(url);
      expect(response?.status(), `${url} should return 200`).toBe(200);
    }
  });

  test('every post has a non-empty page title', async ({ page }) => {
    for (const url of postUrls) {
      await page.goto(url);
      const title = await page.title();
      expect(title.length, `${url} should have a title`).toBeGreaterThan(0);
    }
  });

  test('every post has a meta description', async ({ page }) => {
    for (const url of postUrls) {
      await page.goto(url);
      const content = await page.locator('meta[name="description"]').getAttribute('content');
      expect(content, `${url} should have a meta description`).toBeTruthy();
    }
  });

  test('every post has an article with an h1', async ({ page }) => {
    for (const url of postUrls) {
      await page.goto(url);
      await expect(page.locator('article')).toBeVisible();
      await expect(page.locator('article h1').first()).toBeVisible();
    }
  });

  test('every post has a category badge', async ({ page }) => {
    for (const url of postUrls) {
      await page.goto(url);
      const badge = page.locator('article header span', {
        hasText: /^\s*(TECH|SCIENCE|HISTORY|GAMING|MAKER|POP CULTURE|OTHER)\s*$/
      });
      await expect(badge, `${url} should have a category badge`).toBeVisible();
    }
  });

  test('every post has a depth meter with a valid label', async ({ page }) => {
    for (const url of postUrls) {
      await page.goto(url);
      const header = page.locator('article header');
      await expect(header.locator('text=DEPTH')).toBeVisible();
      const label = header.locator('span', {
        hasText: /^\s*(Surface|Shallow|Medium|Deep|Abyssal)\s*$/
      });
      await expect(label, `${url} should have a depth label`).toBeVisible();
    }
  });

  test('every post has at least one tag', async ({ page }) => {
    for (const url of postUrls) {
      await page.goto(url);
      const tags = page.locator('article header .bg-vault-panel');
      const count = await tags.count();
      expect(count, `${url} should have tags`).toBeGreaterThanOrEqual(1);
    }
  });

  test('every post has rendered prose content', async ({ page }) => {
    for (const url of postUrls) {
      await page.goto(url);
      const prose = page.locator('.prose');
      await expect(prose, `${url} should have prose content`).toBeVisible();
      const text = await prose.textContent();
      expect(text!.length, `${url} prose should not be empty`).toBeGreaterThan(0);
    }
  });

  test('every post has a back to collection link', async ({ page }) => {
    for (const url of postUrls) {
      await page.goto(url);
      const backLink = page.locator('a', { hasText: 'back to collection' });
      await expect(backLink).toBeVisible();
      await expect(backLink).toHaveAttribute('href', '/');
    }
  });

  test('source links have rel="noopener noreferrer"', async ({ page }) => {
    for (const url of postUrls) {
      await page.goto(url);
      const sourceLinks = page.locator('article footer a[target="_blank"]');
      const count = await sourceLinks.count();
      for (let i = 0; i < count; i++) {
        await expect(
          sourceLinks.nth(i),
          `${url} source link ${i} should have rel security attributes`
        ).toHaveAttribute('rel', 'noopener noreferrer');
      }
    }
  });
});
