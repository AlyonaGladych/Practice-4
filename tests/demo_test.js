let LoginPage = require("../page_objects/login_page.js");

describe('product creating', function() {
    it('fill all mandatory fields with valid data', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      await browser.sleep(3000);

      await productsPage.header.getAdministrationMenu().click();

      await browser.sleep(3000);

      let newProductPage = await productsPage.addProduct(); 

      //await browser.sleep(3000);

      await newProductPage.createProduct('Alyona_Gladych Product 8');

      //await browser.sleep(3000);

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.isIdVisible()).toEqual(true);
    });
  });