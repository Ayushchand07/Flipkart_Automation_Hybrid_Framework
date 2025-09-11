import {test} from 'playwright/test'
import { LoginPage } from '../pageObjects/login'

test.use({ storageState: { cookies: [], origins: [] } });

test('TC_AUTH_003 – Verify login with empty fields.', async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.loginWithEmptyFields()
})