import { test, expect } from '@playwright/test';
import { SignInPage } from '../pageObjects/signIn';

test.beforeEach(async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.navigateToUrl();
});

test('TC_AUTH_001: Verify login with valid credentials (happy path).', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signIn();
});

test('TC_AUTH_002: Verify login with invalid email.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signInWithInvalidEmail();
});

test('TC_AUTH_003: Verify login with invalid password.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signInWithInvalidPassword()
});

test('TC_AUTH_004: Verify login with empty fields.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signInWithEmptyFields()
});

test('TC_AUTH_005: Verify "Forgot Password" functionality is present.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.verifyForgetPasswordIsPresent()
});

test('TC_AUTH_006: Verify logout clears session & redirects to login page.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signIn()
  await signInPage.signOut()
});

test('TC_AUTH_007: Verify session persists after page refresh.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signIn()
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(signInPage.signInToolbarOption).toContainText('Hello');
});


