import { Locator, expect, Page } from "@playwright/test";
import { LoginPage } from "./signIn";

export class SignUpPage extends LoginPage{

    readonly createNewAccountOption : Locator
    readonly userNameField : Locator
    readonly continueButton: Locator
    readonly errorToaster : Locator

    constructor(page: Page){
        super(page)
        this.createNewAccountOption = page.getByText('Create an account')
        this.userNameField = page.locator('form').filter({ hasText: 'Enter Mobile number' }).getByRole('textbox')
        this.continueButton = page.getByRole('button', {name: 'Continue'});
        this.errorToaster = page.locator('.eIDgeN').getByText('You are already registered. Please log in.')

    }

    async signUpWithExistingUser(){
        // const existingUserName = process.env.USERNAME
        await this.signInToolbarOption.hover()
        await this.signInButton.click()
        await this.createNewAccountOption.click()
        await this.userNameField.fill('7827660564')
        await this.continueButton.click()
        await this.errorToaster.waitFor({state: "visible"})
        //await expect(this.errorToaster).toBeVisible()
        await expect(this.createNewAccountOption).toBeVisible()
        await expect(this.requestOtpButton).toBeVisible()

    }
}