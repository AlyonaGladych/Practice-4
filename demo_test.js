let LoginPage = require("../page_objects/login_page.js");

describe('login suite', function() {
    it('login pass test', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
      let productsPage = await loginPage.login("alyonagladych@gmail.com", "x&b*zmzA^oj");

      console.log(productsPage.header + '####################################');
      await browser.sleep(3000);
  
     expect(await productsPage.header.isHeaderVisible()).toEqual(true);
    });
});
