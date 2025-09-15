import { test, expect } from '@playwright/test';
import { SignInPage } from '../pageObjects/signIn';
import { HomePage } from '../pageObjects/searchPage';

test.beforeEach(async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.navigateToUrl();
});

test('TC_SEARCH_001: Verify search with valid keyword returns relevant products.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signIn()
  const homePage = new HomePage(page);
  await homePage.searchProduct('Bat', 'bat','cricket')  
});

test('TC_SEARCH_002: Verify search with misspelled keyword suggests correct results.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signIn()
  const homePage = new HomePage(page);
  await homePage.searchProduct('criket bat', 'bat','cricket')  
});

test('TC_SEARCH_004: Verify price range filter narrows down results.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signIn()
  const homePage = new HomePage(page);
  await homePage.searchProduct('criket bat', 'bat','cricket')
  await homePage.validatePriceOfSearchedProducts(0,1000)
});

test('TC_SEARCH_005: Verify brand filter works correctly.', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signIn()
  const homePage = new HomePage(page);
  await homePage.searchProduct('criket bat', 'bat','cricket')
  await homePage.selectbrand('sg')
  await homePage.validateProductName('sg', 'gs')
});
