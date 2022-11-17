const { Given, When, Then } = require('@wdio/cucumber-framework');
const amazonhomePage = require("../pageobjects/amazon_homepage");
const elementFindingPage = require("../utilitiesFunct/find_elements");
const performAction = require("../utilitiesFunct/actions_on_elements");
const actions_on_elements = require('../utilitiesFunct/actions_on_elements');
const inputdata = require("../inputdata/inputdata");


Given('I am on the Amazon app',async function () {
           
          await browser.url('https://www.amazon.in/');//openUrl //convert into business function
          expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
          //await amazonhomePage.sshot(); 
         });
Given('I click the searchbox and entered {string}',async function (key) {
          await amazonhomePage.enterKeyInSearchBox(inputdata.search_key);
          // await expect(amazonhomePage.customerSupport).toExist();
          // await amazonhomePage.searchBox.setValue(key);
          //await amazonhomePage.sshot();  
         });
When('I click the searchbutton',async function () {
           await amazonhomePage.clickSearchButton();
           //await amazonhomePage.sshot(); 
         });
Then('I am on {string} products page',async function (string) {
           await amazonhomePage.verifyResultPage();
           //await expect(amazonhomePage.iphoneTextMessage).toBeExisting();
           //await amazonhomePage.sshot(); 
         });