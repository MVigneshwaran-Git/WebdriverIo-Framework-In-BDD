//const { default: $ } = require("webdriverio/build/commands/browser/$");

class amazon_utilitiespage {
    get searchBox(){
        return $('#twotabsearchtextbox')
    }
}
module.exports = new amazon_utilitiespage();