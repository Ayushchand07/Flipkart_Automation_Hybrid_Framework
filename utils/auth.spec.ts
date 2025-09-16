import { test } from '@playwright/test';
import { SignInPage } from '../pageObjects/signIn';

test('Login and save Amazon session', async ({ page }) => {

  const signInPage = new SignInPage(page);
  await signInPage.navigateToUrl()
  await signInPage.signIn()

  await page.context().storageState({ path: 'storageStates/auth.json' });
});
