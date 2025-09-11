import {expect, Locator,Page } from 'playwright/test'

import * as dotenv from 'dotenv'

dotenv.config()

export class LoginPage{

    readonly page: Page
    readonly userNameField: Locator
    readonly requestOtpButton: Locator
    readonly loginIcon: Locator
    readonly signupButton: Locator
    readonly text : Locator
    readonly name: Locator
    readonly verifyOtpButton : Locator
    readonly emptyEmailToaster : Locator

    readonly profileIcon : Locator
    readonly logoutOption: Locator
    
    constructor(page: Page){
        this.page = page
        this.loginIcon = page.getByText('Login').first();
        this.userNameField = page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox')
        this.requestOtpButton = page.getByRole('button', { name: 'Request OTP' })
        this.text = this.page.getByText('Please enter the OTP sent to')
        this.verifyOtpButton = page.getByRole('button', { name: 'Verify' })
        this.name = this.page.getByText('Ayush')
        this.emptyEmailToaster = this.page.getByText('Please enter valid Email ID/Mobile number')
        this.profileIcon = this.page.locator("._1TOQfO")
        this.logoutOption = this.page.getByText('Logout')

    }

    async navigateToUrl(){
        if (!process.env.BASE_URL){
            throw new Error ('BASE_URL not defined in .env')
        }
        
        await this.page.goto(process.env.BASE_URL);
    }

    async login(){
        // await this.loginIcon.click()
        await this.page.waitForTimeout(5000)      
        await this.userNameField.fill('8586063697')
        await this.requestOtpButton.click()
        await expect (this.text).toBeVisible()
        await this.page.waitForTimeout(30000)
        //await this.verifyOtpButton.click()

    }

    async loginWithEmptyFields(){
        await this.navigateToUrl();
        await this.loginIcon.click()
        await this.page.waitForTimeout(5000)
        await this.requestOtpButton.click()
        await expect(this.emptyEmailToaster).toBeVisible()
    }

    async logout(){
        await this.profileIcon.hover()
        await this.logoutOption.click()
        await expect(this.loginIcon).toBeVisible()
    }
    


}
