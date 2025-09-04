import {expect, Locator,Page } from 'playwright/test'

export class LoginPage{

    readonly page: Page
    readonly userNameField: Locator
    readonly passwordFied: Locator
    readonly loginButton: Locator
    readonly signupButton: Locator
    


}
