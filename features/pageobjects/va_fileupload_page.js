const elementFindingPage = require("../utilitiesFunct/find_elements");
const performAction = require("../utilitiesFunct/actions_on_elements");


class VaDocLoginPage {
    
    async clickUploadButton(){
        await browser.maximizeWindow();
        await browser.pause(2000);
        var ti = browser.getTitle();
        console.log("current window is " + ti);
        const uploadButton = await elementFindingPage.find_element_with_tag_and_classname('button','mui-1ujwixi');
        await performAction.wait_for_displayed(uploadButton);
        await performAction.click_element(uploadButton);
        await browser.pause(10000);       
        
    }
    async sendFilePath(){
        const path = require('path');
        const fileTextBox = await elementFindingPage.find_element_by_xpath(`//input[@type='file']`);
        await browser.execute(
            (el) => el.style.display = 'block',
            fileTextBox
        );

        //await performAction.is_clickable(fileTextBox);
        //await performAction.click_element(fileTextBox);------------------------------caused the invalid argument exeption
        
            // const filePath = path.join('C:/DEV/webdriverIO/WebdriverIo-Framework-In-BDD/vision.png');
            // const remoteFilePath = await browser.uploadFile(filePath);
            // 
            // fileTextBox.addValue(remoteFilePath);
            //const path = require('path');
            try{
            const filePath = await path.join('C:/DEV/webdriverIO/WebdriverIo-Framework-In-BDD/vision.png');
            await fileTextBox.setValue(filePath);
            await browser.pause(5000);      
        }
        catch(error){
            console.log("catch block");
            console.error(error);
        }
        
    }
    async clickContinueButton(){
        const continueButton = await elementFindingPage.find_element_by_xpath(`//button[text()='Continue']`);
        await performAction.wait_for_enabled(continueButton);
        await performAction.click_element(continueButton);
    }

    async verifySuccessMessage(){
        const successMessage = await elementFindingPage.find_element_by_xpath(`//div[text()='Successfully uploaded 1 document(s)']`);
        await performAction.wait_for_displayed(successMessage);
        console.log(successMessage.getText());

    }
}
module.exports = new VaDocLoginPage();