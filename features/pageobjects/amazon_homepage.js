//const { default: $ } = require("webdriverio/build/commands/browser/$");
const elementFindingPage = require("../utilitiesFunct/find_elements");
const performAction = require("../utilitiesFunct/actions_on_elements");
const moment= require('moment');
const actions_on_elements = require("../utilitiesFunct/actions_on_elements");
const { find_element } = require("../utilitiesFunct/find_elements");
class amazonhomePage{
    get searchBox(){
        return $('#twotabsearchtextbox')
    }

    get customerSupport(){
        return $("//a[text()='Mobiles']")

    }

    get searchButton(){
        return $('#nav-search-submit-button')
    }
    get iphoneTextMessage(){
        return $("//span[text()='RESULTS']");
    }
    async enterKeyInSearchBox(key){
        var search_box = await elementFindingPage.find_element('id','twotabsearchtextbox');
        await actions_on_elements.set_value(search_box,key)
    }
    async searchProduct(key){
        await this.searchBox.setValue(key);
        // await browser.pause(5000);
        // await this.searchButton.click();
    }
    
}


module.exports = new amazonhomePage();