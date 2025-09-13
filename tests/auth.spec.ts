import { test } from '@playwright/test';
import { LoginPage } from '../pageObjects/login';

test('Login and save Flipkart session', async ({ page }) => {
  test.setTimeout(90000); // extend timeout
  await page.goto('https://www.flipkart.com/');

  const loginPage = new LoginPage(page);
  await loginPage.login();

  // ✅ Make sure account menu is visible before saving state
  await page.waitForTimeout(10000)
  // Save storage state
  await page.context().storageState({ path: 'storageStates/auth.json' });
});
