const { Given, When, Then } = require('@wdio/cucumber-framework');
const VaDocLoginPage = require("../pageobjects/vadoc_login_page");
const VAFileUploadPage = require('../pageobjects/va_fileupload_page');
const rotatePage = require("../pageobjects/va_rotate_image_page");

Given('I am on the VA login page',async function () {
        
        await VaDocLoginPage.clickLoginLink();
        
    });

Given('I entering my {string} and {string}',async function (string, string2) {
    await VaDocLoginPage.enterCredentials();
});

Given('I am choosing the role',async function () {
  await VaDocLoginPage.selectRole();
        
         });
When('I click the select button',async function () {
  await VaDocLoginPage.selectButton();
           
         });
Then('I am on homepage',async function () {
  await expect(browser).toHaveTitleContaining('Document Management')
         });
Given('I click on the upload button and browsing my files',async function () {
  await VAFileUploadPage.clickUploadButton();
        });
Given('I am choosing the file from my local memory',async function () {
  await VAFileUploadPage.sendFilePath();
        });
When('I click the continue button',async function () {

  await VAFileUploadPage.clickContinueButton();
        });
Then('the chosen file will be uploaded',async function () {
 await VAFileUploadPage.verifySuccessMessage();
        });
Then('I am on the image view', async function () {
  await rotatePage.naviagateToPatientFile();

          });
When('I click the rotate right side button',async function () {
  await rotatePage.clickrotateRightButton();
          });
 Then('The image is rotated towards right side', async function () {
  await rotatePage.checkImageRotated();
          });
