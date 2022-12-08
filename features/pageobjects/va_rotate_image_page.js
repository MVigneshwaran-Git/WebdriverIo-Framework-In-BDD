const elementFindingPage = require("../utilitiesFunct/find_elements");
const performAction = require("../utilitiesFunct/actions_on_elements");

class RotateImagePage{
    async naviagateToPatientFile(){
        await browser.maximizeWindow();

const patientDocumentPage = await elementFindingPage.find_element_by_xpath(`//span[text()='PATIENT DOCUMENTS']`);
await performAction.wait_for_displayed(patientDocumentPage);
await performAction.click_element(patientDocumentPage);

const selectPatient = await elementFindingPage.find_element_by_xpath(`(//div[@class='tss-1d12z92-tableNameAndTask'])[1]`);
await performAction.wait_for_displayed(selectPatient);
await performAction.click_element(selectPatient);


    }
    async clickrotateRightButton(){
        const rotateRightButton = await elementFindingPage.find_element_by_xpath(`//button[@aria-label='Rotate right']`);
        await performAction.wait_for_displayed(rotateRightButton);
        await performAction.click_element(rotateRightButton);

    }

    async checkImageRotated(){
        // const attachedPdf = await elementFindingPage.find_element_by_xpath(`(//div[@class='react-pdf__Page__textContent'])[1]`);
        // var stat = await performAction.wait_for_displayed(attachedPdf);
        // if(stat){
        //     try{
        //         const getStyleValues = await attachedPdf.getAttribute('style');
        //         var rotateValue = Array.from(getStyleValues.matchAll(/\brotate\(([^deg]*)/g),m=>m[1]);
        //         console.log("image rotated with the degree of "+ rotateValue);
        //         if(rotateValue.toString() == "90"){
        //             console.log("yes the pdf is rotated towards right");
        //         }
        //         }
                
        //         catch(error){
        //             console.log("catch");
        //             console.log(error);
        //         }

        // }
        const image = await elementFindingPage.find_element_by_id('png-img');
            await performAction.wait_for_displayed(image);
            try{
                const getStyleValues = await image.getAttribute('style');
                var rotateValue = Array.from(getStyleValues.matchAll(/\brotate\(([^deg]*)/g),m=>m[1]);
                console.log("image rotated with the degree of "+ rotateValue);
                if(rotateValue.toString() == "90"){
                    console.log("yes the image is rotated towards right");
                }
                }
                
                catch(error){
                    console.log("catch");
                    console.log(error);
                }

        

        
        
                
    }
}
module.exports = new RotateImagePage();