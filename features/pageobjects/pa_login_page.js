const elementFindingPage = require("../utilitiesFunct/find_elements");
const performAction = require("../utilitiesFunct/actions_on_elements");
class paLoginPage {

    async enterUserName(username){
        var username_element = await elementFindingPage.find_element_by_id('username');
        await performAction.set_value(username_element,username);
    }
    async enterPassword(password){
        var password_element = await elementFindingPage.find_element_by_id('password');
        await performAction.set_value(password_element,password);
    }
    async click_Submit(){
        var submit_button_element = await elementFindingPage.find_element_with_tag_and_classname('button','btn');
        await performAction.click_element(submit_button_element);
    }
    async verifyLoginMessageDisplayed(){
        var verification_message = await elementFindingPage.find_element_by_text_containedIn_tag('h1','Log');
        await performAction.is_displayed(verification_message);
    }


}
module.exports = new paLoginPage();