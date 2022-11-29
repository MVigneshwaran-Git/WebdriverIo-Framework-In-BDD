const { Given, When, Then } = require('@wdio/cucumber-framework');
const amazonhomePage = require("../pageobjects/amazon_homepage");
const inputdata = require("../inputdata/inputdata");

Given('I am on the Amazon app',async function () {
          browser.url('https://www.amazon.in/');//openUrl //convert into business function
          expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
         });
Given('I click the searchbox and entered {string}',async function (key) {
          await amazonhomePage.enterKeyInSearchBox(inputdata.search_key);
         });
When('I click the searchbutton',async function () {
           await amazonhomePage.clickSearchButton();
         });
Then('I am on {string} products page',async function (string) {
           await amazonhomePage.verifyResultPage();
         });