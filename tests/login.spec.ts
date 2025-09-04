import {test} from 'playwright/test'
import { LoginPage } from '../pageObjects/login'

test('login', async({page})=>{
    const loginpage = new LoginPage(page)
    await loginpage.login()
})

