let LoginPage = require("../page_objects/login_page.js");

describe('product creating: name validation', function() {
    it('product name validation - not unique name', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
     
      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await browser.sleep(2000);

      await productsPage.header.getAdministrationMenu().click();

      await browser.sleep(2000);

      let newProductPage = await productsPage.addProduct(); 

      await browser.sleep(2000);

      await newProductPage.createProduct('Alyona_Gladych Product 1');

      await browser.sleep(2000);

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.getErrorMessage().getText()).toEqual('Name must be unique');
    });
  });