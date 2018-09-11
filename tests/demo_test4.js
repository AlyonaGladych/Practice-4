let LoginPage = require("../page_objects/login_page.js");

describe('creating product with incomplete data', function() {
    it('save product without completing one mandatory field', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
     
      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await browser.sleep(3000);

      await productsPage.header.getAdministrationMenu().click();

      await browser.sleep(3000);

      let newProductPage = await productsPage.addProduct(); 

      await browser.sleep(3000);

      await newProductPage.createProductNotComplete('Alyona_Gladych Product 4');

      await browser.sleep(3000);

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.getValidationMessage().getText()).toEqual('Product Family is required.');
    });
  });