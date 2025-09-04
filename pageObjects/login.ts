import {expect, Locator,Page } from 'playwright/test'

export class LoginPage{

    readonly page: Page
    readonly userNameField: Locator
    readonly requestOtpButton: Locator
    readonly loginIcon: Locator
    readonly signupButton: Locator
    readonly text : Locator
    readonly name: Locator
    
    constructor(page){
        this.loginIcon = this.page.locator('.-dOa_b L_FVxe');
        this.userNameField = this.page.locator('.r4vIwl BV+Dqf')
        this.requestOtpButton = this.page.locator('.QqFHMw twnTnD _7Pd1Fp')
        this.text = this.page.getByText('Please enter the OTP sent to')
        this.name = this.page.getByText('Ayush')
        
    }

    async login(){
        await this.loginIcon.click()
        await this.userNameField.fill('aayushchand900@gmail.com')
        await this.requestOtpButton.click()
        // await expect (this.text).toBeVisible()
        // await expect (this.text).toBeVisible()
    }
    


}
