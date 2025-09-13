import {test} from 'playwright/test'
import { LoginPage } from '../pageObjects/login'
import { SignUpPage } from '../pageObjects/signUp';

test('TC_AUTH_003: Verify login with empty fields.', async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.loginWithEmptyFields()
})

test('TC_AUTH_002: Verify login with invalid credentials.', async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.loginWithInvalidCredentials()
})

test('TC_AUTH_007: Verify error when signing up with existing email/phone', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.navigateToUrl()
  const signUpPage = new SignUpPage(page)
  await signUpPage.signUpWithExistingUser()
});


test.describe('Log out with already logged in state', () => {
  test.use({ storageState: 'storageStates/auth.json' });
  test('TC_AUTH_009: Verify logout functionality', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    await loginPage.logout()
})
 })
