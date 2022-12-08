//const { default: $ } = require("webdriverio/build/commands/browser/$");
const find_element_page = require('../utilitiesFunct/find_elements');
class actions_on_elements {

    async click_element(element){
        //const element = await find_element_page.find_element(locatortype,value);
        if(element){
            element.click();
        }    
    }
    async get_element_innertext(locatortype,value){
        const element = await find_element_page.find_element(locatortype,value); 
         //find method can be changed as per requirement
        if(element){
            const text = await element.getText();
            return text;
        }
    }
    async is_enabled(locatortype,value){
        const element = await find_element_page.find_element(locatortype,value);
        if(element){
            const element_status = await element.isEnabled();
            return element_status;
        }
    }
    async set_value(element, key){
        //const element = await find_element_page.find_element(locatortype,value);
        if(element){
            await element.setValue(key);
        }
    }
    async get_property(element,attribute_type){  
        //const element = element //first find the element
        if(element){
            var property = await element.getProperty(attribute_type)// if tagname is passed then tag name
            return property; //need to be tested                       of the element will be returned
        }
    }
    async is_clickable(element){  
        //const element = element //first find the element
        if(element){
            var is_click = await element.isClickable();
            return is_click; //need to be tested
        }
    }
    async is_displayed(element){  
        //const element = element //first find the element
        if(element){
            var is_ele_displayed = await element.isDisplayed();
            return is_ele_displayed; //need to be tested
        }
    }
    async is_displayed_in_view(element){  
        //const element = element //first find the element
        if(element){
            var is_ele_displayed = await element.isDisplayedInViewPort();
            return is_ele_displayed; //need to be tested
        }
    }
    async is_equal(element_one, element_two){  
        //const element = element //first find the element
        if(element){
            var is_elements_equal = await element_one.isEqual(element_two)
            return is_elements_equal; //need to be tested
        }
    }
    async wait_for_enabled(element){
        await element.waitForEnabled({ timeout: 60000 });
    }
    async wait_for_displayed(element){
        await element.waitForDisplayed({ timeout: 60000 });
    }



}
module.exports = new actions_on_elements();