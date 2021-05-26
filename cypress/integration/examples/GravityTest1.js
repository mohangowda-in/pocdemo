require('cypress-xpath')
var number = Math.floor((Math.random() * 10000) + 1)
function enablePO(){
    cy.wait(1000)
    cy.xpath('//body/div[1]/div[1]/span[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[1]/span[1]/div[1]').click()
    cy.wait(1000)
    cy.xpath('//h2[contains(text(),"Supply")]').click()
    cy.wait(1000)
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
    
    

    //Search existing PO then create duplicate PO
    it('Search existing PO and Create duplicate PO', function(){
        //cy.wait(4000)
        //cy.get('i.grv-icon-write-notes').click()
        cy.visit('https://staging.gravitysupplychain.com/#/app/board/1526/po-management')
        cy.wait(1500)
        cy.xpath('//span[contains(text(),"Please Select Existing PO")]').type('0009921941HMP{enter}')
        cy.wait(2500)
        cy.xpath('//button[contains(text(),"Duplicate PO")]').click()
        cy.xpath('//body/div[1]/div[1]/span[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]').type('PON'+number)
        cy.xpath('//button[contains(text(),"Create PO")]').click()
        cy.wait(1000)
        //cy.xpath('//a[contains(text(),"Close")]').click()
        //cy.wait(1500)
    })
    
    

})