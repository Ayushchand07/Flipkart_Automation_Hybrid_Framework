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

    async searchProduct(productName:string, suggestionWordsAllowed1: string, suggestionWordsAllowed2: string){
        await this.searchBar.fill(productName)
        await this.searchIcon.click()
        
       const productTitles = this.page.locator('.a-section.a-spacing-small.puis-padding-left-small')//.locator('.sg-col-inner').locator('.a-section').locator('.a-link-normal').locator('span');; 
       await expect(productTitles.first()).toBeVisible();

  // Step 4: Validation
  const allTitles = await productTitles.allTextContents();
  for (const title of allTitles) {
   expect(title.toLowerCase().includes(suggestionWordsAllowed2) || title.toLowerCase().includes(suggestionWordsAllowed1)).toBe(true);
  }
        
    }
}