import {expect, Locator,Page } from 'playwright/test'

export class LoginPage{

    readonly page: Page
    readonly userNameField: Locator
    readonly requestOtpButton: Locator
    readonly loginIcon: Locator
    readonly signupButton: Locator
    readonly text : Locator
    readonly name: Locator
    readonly verifyOtpButton : Locator
    
    constructor(page: Page){
        this.page = page
        this.loginIcon = page.getByText('Login').first();
        this.userNameField = page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox')
        this.requestOtpButton = page.getByRole('button', { name: 'Request OTP' })
        this.text = this.page.getByText('Please enter the OTP sent to')
        this.verifyOtpButton = page.getByRole('button', { name: 'Verify' })
        this.name = this.page.getByText('Ayush')
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
    


}
