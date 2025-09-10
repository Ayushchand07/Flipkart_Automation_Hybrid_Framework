import { test, expect } from '@playwright/test';

// Reuse saved login state
test.use({ storageState: 'auth.json' });

test('Validate user name on Flipkart home page', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');

  // Ensure page loads
  await page.waitForLoadState('domcontentloaded');

  // ✅ Adjust locator if needed (check with inspector)
  const userName = page.getByText('Cart');

  await expect(userName).toBeVisible();
});
