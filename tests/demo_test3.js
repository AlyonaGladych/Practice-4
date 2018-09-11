let LoginPage = require("../page_objects/login_page.js");

describe('cancel creating product', function() {
    it('cancel after filling product information', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
     
      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await browser.sleep(3000);

      await productsPage.header.getAdministrationMenu().click();

      await browser.sleep(3000);

      let newProductPage = await productsPage.addProduct(); 

      await browser.sleep(3000);

      await newProductPage.createProductCancel('default name');

      await browser.sleep(3000);

      await newProductPage.searchForProduct('default name');

      await browser.sleep(3000);

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.isNoProductMessageVisible()).toEqual(true);
    });
  });