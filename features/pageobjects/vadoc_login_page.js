const elementFindingPage = require("../utilitiesFunct/find_elements");
const performAction = require("../utilitiesFunct/actions_on_elements");
const inputdata = require("../inputdata/inputdata");

class VaDocLoginPage {
    async clickLoginLink(){
        await browser.pause(3000);
        const loginLink = await elementFindingPage.find_element_with_tag_and_classname('button','mui-1ujwixi');
        await performAction.click_element(loginLink);
        var parentwindow = await browser.getWindowHandle();
        await browser.pause(4000);
        var newWindow = await browser.getWindowHandles();
        for(var i=0; i<newWindow.length; i++){
            if(await newWindow[i]!=parentwindow){
                await browser.switchToWindow(newWindow[i])
            }
        }  
    }
    async enterCredentials(){
        const username =await  elementFindingPage.find_element_with_tag_and_value('input','email');
        await performAction.wait_for_displayed(username);
        await performAction.set_value(username,'rlin@test2.com');
        const password = await elementFindingPage.find_element_with_tag_and_value('input','password');
        await performAction.set_value(password,'Vision360');
        
        
        const signInButton = await elementFindingPage.find_element_with_tag_and_classname('button','css-14s8p65');
        await performAction.wait_for_enabled(signInButton);
        await performAction.click_element(signInButton);
        await browser.pause(3000);    
    }
    async selectRole(){
        const roleSelect = await elementFindingPage.find_element_with_tag_and_value('div','role-select');
        await performAction.wait_for_displayed(roleSelect)
        await performAction.click_element(roleSelect);
        //await browser.pause(3000);
        const role = await elementFindingPage.find_element_by_xpath(`//li[text()='Dundee Practice']`);
        await performAction.wait_for_displayed(role);
        await performAction.click_element(role);
        await browser.pause(3000);
        
    }
    
    async selectButton(){
        const submitButton = await elementFindingPage.find_element_with_tag_and_classname('button','css-14s8p65');
        await performAction.wait_for_displayed(submitButton);
        await performAction.click_element(submitButton);
        //await browser.pause(1000);

        //---------------------------------------------------
        var newWindow = await browser.getWindowHandles();
        for(var w=0; w<newWindow.length;w++){
            await browser.switchToWindow(newWindow[w]);
            var t = await browser.getTitle();
            if(t.includes("Document Management")){
                console.log('matched and break');
                break;
            }
            break
        }
       

    }
    async verifyHomePage(){
        const uploadButton = await elementFindingPage.find_element_with_tag_and_classname('button','mui-1ujwixi');
        await performAction.wait_for_displayed(uploadButton);

    }
    
}
module.exports = new VaDocLoginPage();