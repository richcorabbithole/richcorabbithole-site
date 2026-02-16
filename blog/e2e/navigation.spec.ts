import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('clicking a post card navigates to a blog post', async ({ page }) => {
    await page.goto('/');
    const firstPostLink = page.locator('a[href*="/blog/"]').first();
    const href = await firstPostLink.getAttribute('href');
    await firstPostLink.click();
    await page.waitForURL(`**${href}`);
    await expect(page.locator('article')).toBeVisible();
  });

  test('back to collection link returns to homepage', async ({ page }) => {
    // Navigate to the first available blog post
    await page.goto('/');
    const firstPostLink = page.locator('a[href*="/blog/"]').first();
    await firstPostLink.click();
    await page.waitForLoadState();

    await page.locator('a', { hasText: 'back to collection' }).click();
    await page.waitForURL('/');
    await expect(page.locator('article').first()).toBeVisible();
  });

  test('header brand link navigates to homepage', async ({ page }) => {
    await page.goto('/');
    const firstPostLink = page.locator('a[href*="/blog/"]').first();
    await firstPostLink.click();
    await page.waitForLoadState();

    await page.locator('header a[href="/"]').first().click();
    await page.waitForURL('/');
    await expect(page.locator('article').first()).toBeVisible();
  });

  test('[collection] nav link navigates to homepage', async ({ page }) => {
    await page.goto('/');
    const firstPostLink = page.locator('a[href*="/blog/"]').first();
    await firstPostLink.click();
    await page.waitForLoadState();

    await page.locator('a', { hasText: '[collection]' }).click();
    await page.waitForURL('/');
  });

  test('non-existent page returns 404', async ({ page }) => {
    const response = await page.goto('/blog/does-not-exist/');
    expect(response?.status()).toBe(404);
  });
});
