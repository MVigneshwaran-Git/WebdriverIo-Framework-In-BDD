const elementFindingPage = require("../utilitiesFunct/find_elements");
const performAction = require("../utilitiesFunct/actions_on_elements");
class paContactPage {

    async navigateToContactPage(){
        var contactLink = await elementFindingPage.find_element_by_text_containedIn_tag('a','Con');
        await performAction.click_element(contactLink);
    }


    async fillDetails(){ //xpath structure ----> //input#value

        var firstName = await elementFindingPage.find_element_with_tag_and_value('input','wpforms-161-field_0');
        await performAction.set_value(firstName,'john');

        var lastName = await elementFindingPage.find_element_with_tag_and_value('input','wpforms-161-field_0-last');
        await performAction.set_value(lastName,'doe');

        var emailBox = await elementFindingPage.find_element_with_tag_and_value('input','wpforms-161-field_1');
        await performAction.set_value(emailBox,'xyz@gmail.com');

        var commentBox = await elementFindingPage.find_element_with_tag_and_value('textarea','wpforms-161-field_2');
        await performAction.set_value(commentBox,'thanks');
    }
    async clickSubmit(){
        var submitButton = await elementFindingPage.find_element_with_tag_and_value('button','wpforms-submit-161');
        await performAction.click_element(submitButton);
        
    }
    async verifyThanksMessage(){
        var thanksMessage = await elementFindingPage.find_element_with_tag_and_value('div','wpforms-confirmation-161');
        await performAction.is_displayed(thanksMessage);
    }

}
module.exports = new paContactPage();