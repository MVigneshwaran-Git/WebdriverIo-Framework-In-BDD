const {Given,When,Then} = require("@wdio/cucumber-framework");
const inputdata = require("../inputdata/inputdata");
const pa_login_page = require("../pageobjects/pa_login_page");
Given('I am on the practice automation website',async function () {
    await browser.url('https://practicetestautomation.com/practice-test-login/');
    await browser.maximizeWindow()
    await expect(browser).toHaveTitle('Test Login | Practice Test Automation');
           
    });
Given('I am entering my {string} and {string}',async function (string, string2) {
    await pa_login_page.enterUserName(inputdata.login_username);
    await pa_login_page.enterPassword(inputdata.login_password);
           
    });
When('I click the submit button',async function () {
    await pa_login_page.click_Submit();
           
    });
Then('login message is displayed',async function () {
    await pa_login_page.verifyLoginMessageDisplayed();
           
    });