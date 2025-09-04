import { test } from '@playwright/test';
import { LoginPage } from '../pageObjects/login';

test('Login and save Flipkart session', async ({ page }) => {
  // Open Flipkart
  await page.goto('https://www.flipkart.com/');
  await page.waitForTimeout(10000)
  const loginpage = new LoginPage(page)
  await loginpage.login()

  // ⚡ Here you will do login manually once
  // Enter phone number → Enter OTP → Click Login
  // Give yourself enough time to type OTP
  await page.waitForTimeout(60000); // wait 20s for manual OTP entry

  // Save login state (cookies + local storage)
  await page.context().storageState({ path: 'auth.json' });
});
