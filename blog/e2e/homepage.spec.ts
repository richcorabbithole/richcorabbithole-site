import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('returns 200 status', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('has a page title', async ({ page }) => {
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  test('has site header with navigation', async ({ page }) => {
    const header = page.locator('header').first();
    await expect(header).toBeVisible();
    await expect(header.locator('nav')).toBeVisible();
    await expect(header.locator('a[href="/"]').first()).toBeVisible();
  });

  test('has at least one article card', async ({ page }) => {
    const articles = page.locator('article');
    await expect(articles.first()).toBeVisible();
    const count = await articles.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('every article has a category badge', async ({ page }) => {
    const articles = page.locator('article');
    const count = await articles.count();
    for (let i = 0; i < count; i++) {
      const badge = articles.nth(i).locator('span[style*="--color-cat-"]');
      await expect(badge).toBeVisible();
    }
  });

  test('every article has a depth meter', async ({ page }) => {
    const articles = page.locator('article');
    const count = await articles.count();
    for (let i = 0; i < count; i++) {
      await expect(articles.nth(i).locator('text=DEPTH')).toBeVisible();
    }
  });

  test('all post links point to /blog/ paths', async ({ page }) => {
    const postLinks = page.locator('a[href*="/blog/"]');
    const count = await postLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);
    for (let i = 0; i < count; i++) {
      const href = await postLinks.nth(i).getAttribute('href');
      expect(href).toMatch(/^\/blog\/.+\/$/);
    }
  });

  test('has site footer', async ({ page }) => {
    const footer = page.locator('body > footer');
    await expect(footer).toBeVisible();
  });

  test('has at least one stylesheet', async ({ page }) => {
    const links = page.locator('link[rel="stylesheet"]');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
});
