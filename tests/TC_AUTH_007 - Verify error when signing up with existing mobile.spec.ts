import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pageObjects/signUp';
import { LoginPage } from '../pageObjects/login';

test('TC_AUTH_007: Verify error when signing up with existing email/phone', async ({ page }) => {

  const loginPage = new LoginPage(page)
  await loginPage.navigateToUrl()
  const signUpPage = new SignUpPage(page)
  await signUpPage.signUpWithExistingUser()
});
