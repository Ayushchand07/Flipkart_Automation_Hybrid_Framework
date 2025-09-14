import { test, expect } from '@playwright/test';
import { SignInPage } from '../pageObjects/signIn';
import { HomePage } from '../pageObjects/homePage';

test.beforeEach(async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.navigateToUrl();
});

test('TC_SEARCH_001: Verify search with valid keyword returns relevant products.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signIn()
  const homePage = new HomePage(page);
  await homePage.searchProduct("Bat")  
});


