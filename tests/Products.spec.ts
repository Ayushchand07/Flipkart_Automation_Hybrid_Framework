import{test} from 'playwright/test'
import { LoginPage } from '../pageObjects/login';
import { HomePage } from '../pageObjects/homePage';

  test.use({ storageState: 'storageStates/auth.json' });
  test('TC_AUTH_009: Verify logout functionality', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    await loginPage.navigateToUrl()
    const homePage = new HomePage(page)
    await homePage.searchProduct("ball")
})