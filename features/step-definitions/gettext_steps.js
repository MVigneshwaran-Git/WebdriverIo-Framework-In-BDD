const { Given, When , Then} = require("@wdio/cucumber-framework");
const amazon_utilitiespage = require("../pageobjects/amazon_utilitiespage");
Given('I am on the search results page', async function () {
            expect(browser).toHaveUrlContaining("iphone");
         });
Given('I am printing the search term given in the searchbox', async function () {
           const searchboxValue = await amazon_utilitiespage.searchBox.getValue();
           console.log("the value passed to search box is "+ searchboxValue);
         });