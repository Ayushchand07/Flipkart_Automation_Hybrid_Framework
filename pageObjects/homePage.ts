import {Page, Locator, expect} from 'playwright/test'

export class HomePage{
    readonly page: Page
    readonly searchBar: Locator
    readonly searchIcon : Locator

    constructor(page: Page){
        this.page = page
        this.searchBar = page.locator('.nav-search-field').locator('#twotabsearchtextbox')
        this.searchIcon = page.locator('.nav-search-submit').locator('#nav-search-submit-button')
    }

    async searchProduct(productName:string){
        await this.searchBar.fill(productName)
        await this.searchIcon.click()
        
    }
}