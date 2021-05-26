require('cypress-xpath')
var number = Math.floor((Math.random() * 10000) + 1)
function enablePO(){
    cy.xpath('//body/div[1]/div[1]/span[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[1]/span[1]/div[1]').click()
    cy.xpath('//h2[contains(text(),"Supply")]').click()
    cy.xpath('//div[contains(text(),"PO Management")]').click()
}

describe('Gravity Application', function(){

    //Vist to Gravity Supply Chain URL
    it('Visit the URL', function(){
        cy.visit('https://staging.gravitysupplychain.com/#/login-page/login')
    })

    //Login to application
    it('Login to Gravity Application', function(){
        //cy.get('#btn-make-appointment').click();
        cy.get('input[name=Username]').type('BNS_HARMAN_EXT_DEV');
        cy.get('input[name=Password]').type('BNS_HARMAN_EXT_DEV');
        cy.get('button.btn-login').click()
    })
    
    //Create new PO
    it('Create a new PO', function(){
        //enablePO()
        //cy.get('i.grv-icon-write-notes').click()
        //cy.wait(1500)
        cy.visit('https://staging.gravitysupplychain.com/#/app/board/1526/po-management')
        cy.wait(1600)
        cy.get('button.grv-btn-success.ng-scope').click()
        cy.xpath('//body/div[1]/div[1]/span[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]').type('PO' + number)
        cy.xpath('//span[contains(text(),"Customer")]').type('Harman{enter}')
        cy.wait(2000)
        cy.xpath('//body/div[1]/div[1]/span[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/grv-dash-selection[1]/span[1]/div[1]/a[1]/span[1]').type('3-Yuan Sound Electronic Co. Ltd{enter}')
        cy.wait(500)
        cy.xpath('//span[contains(text(),"Forwarder")]').type('Agility Logistics{enter}')
        cy.wait(500)
        cy.xpath('//span[contains(text(),"Mode")]').type('Air{enter}')
        cy.wait(500)
        cy.xpath('//span[contains(text(),"Country of Origin")]').type('Afghanistan{enter}')
        cy.wait(500)
        cy.xpath('//tbody/tr[@id="item-bottom"]/td[2]/span[1]').type('ITM01')
        cy.wait(500)
        cy.xpath('//tbody/tr[@id="item-bottom"]/td[15]/grv-dash-number[1]/input[1]').type('500')
        cy.wait(500)
        cy.xpath('//button[contains(text(),"Create PO")]').click()
        cy.wait(1500)
        cy.xpath('//a[contains(text(),"Close")]').click()
        cy.wait(1000)
        
    })

    
    
    

})