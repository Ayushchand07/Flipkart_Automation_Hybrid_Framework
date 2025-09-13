import {Page, Locator, expect} from 'playwright/test'

export class HomePage{
    readonly page: Page
    readonly searchBar: Locator
    readonly searchIcon : Locator

    constructor(page: Page){
        this.page = page
        this.searchBar = page.locator('._3NorZ0').getByRole('textbox',{name: 'Search for Products, Brands and More'})
        this.searchIcon = page.locator('._2iLD__')
    }

    async searchProduct(productName:string){
        await this.searchBar.fill(productName)
        await this.searchIcon.click()
    }
}