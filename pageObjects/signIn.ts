import {expect, Locator,Page } from 'playwright/test'

import * as dotenv from 'dotenv'

dotenv.config()

export class SignInPage{

    readonly page: Page
    readonly signInToolbarOption: Locator
    readonly signInButton: Locator
    readonly userNameField: Locator
    readonly continueButton: Locator
    readonly passwordField: Locator
    readonly signInSubmitButton: Locator

    //------------------------------
    readonly emptyEmailErrorMessage: Locator
    readonly invalidEmailErrorMessage: Locator
    readonly invalidPasswordErrorMessage: Locator

    //------------------------------
    readonly forgetPasswordOption: Locator

    readonly signOutOption: Locator
    
    constructor(page: Page){
        this.page = page;
        this.signInToolbarOption = page.locator('#nav-link-accountList');
        this.signInButton = page.locator('#nav-flyout-ya-signin')
        this.userNameField = page.locator('#ap_email_login')
        this.continueButton = page.locator('#continue')
        this.passwordField = page.locator('#ap_password')
        this.signInSubmitButton = page.locator('#signInSubmit')

        this.emptyEmailErrorMessage = page.getByText('Enter your mobile number or email')
        this.invalidEmailErrorMessage = page.getByText('Invalid email address.')
        this.invalidPasswordErrorMessage = page.getByText('Your password is incorrect')

        this.forgetPasswordOption = page.getByText('  Forgot password?')

        this.signOutOption = page.locator('.nav-text').getByText('Sign Out')

    }

    async navigateToUrl(){
        const baseUrl = process.env.BASE_URL
        if (!baseUrl){
            throw new Error ('BASE_URL not defined in .env')
        }
        
        await this.page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    }

    async signIn(){
        await this.signInToolbarOption.hover()
        await this.signInButton.click()
        await this.userNameField.waitFor({state: 'visible'})   
        await this.userNameField.fill('aayushchand900@gmail.com')
        await this.continueButton.click()
        await this.passwordField.fill('Veersa@123')
        await this.signInSubmitButton.click()
        await expect(this.signInToolbarOption).toContainText('Hello');
    }

    async signInWithEmptyFields(){
        await this.signInToolbarOption.hover()
        await this.signInButton.click()
        await this.userNameField.waitFor({state: 'visible'})
        await this.continueButton.click()
        await expect(this.emptyEmailErrorMessage).toBeVisible() 
    }

    async signInWithInvalidEmail(){
        await this.signInToolbarOption.hover()
        await this.signInButton.click()
        await this.userNameField.waitFor({state: 'visible'})
        await this.userNameField.fill('sfqwefasd')
        await this.continueButton.click()
        await expect(this.invalidEmailErrorMessage).toBeVisible() 
    }

    async signInWithInvalidPassword(){
        await this.signInToolbarOption.hover()
        await this.signInButton.click()
        await this.userNameField.waitFor({state: 'visible'})
        await this.userNameField.fill('aayushchand900@gmail.com')
        await this.continueButton.click()
        await this.passwordField.fill('dsvsdfsr')
        await this.signInSubmitButton.click()
        await expect(this.invalidPasswordErrorMessage).toBeVisible()
    }

    async verifyForgetPasswordIsPresent(){
        await this.signInToolbarOption.hover()
        await this.signInButton.click()
        await this.userNameField.waitFor({state: 'visible'})
        await this.userNameField.fill('aayushchand900@gmail.com')
        await this.continueButton.click()
        await expect(this.forgetPasswordOption).toBeVisible()
    }

    async signOut(){
        await this.signInToolbarOption.hover()
        await this.signOutOption.click()
        await expect(this.userNameField).toBeVisible()
    }
    


}
