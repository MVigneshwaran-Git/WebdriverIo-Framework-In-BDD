//This js file holds the methods to perform business scenarios

//const { default: $ } = require("webdriverio/build/commands/browser/$");
const elementFindingPage = require("../utilitiesFunct/find_elements");
const performAction = require("../utilitiesFunct/actions_on_elements");
const inputdata = require("../inputdata/inputdata");
class amazonhomePage{
        //we will find the elements by using elementFindingPage
        //we will perform the action on elements by using performAction class
        
    async enterKeyInSearchBox(key){
        var search_box = await elementFindingPage.find_element('id',inputdata.searchBox_xpath);
        await performAction.set_value(search_box,key)
    }
    async clickSearchButton(){
        var search_button = await elementFindingPage.find_element('id',inputdata.searchButton_xpath);
        await performAction.click_element(search_button);
    }
    async verifyResultPage(){
        var iphone_header = await elementFindingPage.find_element_by_xpath(inputdata.iphone_header_xpath);
        await performAction.is_displayed(iphone_header);
    }












    // async searchProduct(key){
    //     await this.searchBox.setValue(key);
    //     // await browser.pause(5000);
    //     // await this.searchButton.click();
    // }
    
}


module.exports = new amazonhomePage();