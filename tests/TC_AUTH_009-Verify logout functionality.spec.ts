import {test} from 'playwright/test'
import { LoginPage } from '../pageObjects/login'

test.use({storageState: 'auth.json'})

test('TC_AUTH_009: Verify logout functionality', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.logout()

})
