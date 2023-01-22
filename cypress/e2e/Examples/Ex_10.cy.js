/// <reference types = 'Cypress' />

// mocha
describe('Advance automation to handling alerts, pop-up, child window using Cypress-Jquery',() =>{
    it('How Cypress auto handles alert in web apps',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();

        // cypress takes care about alert windows but if we want to verify the text of alert/confirm
        //  window we need to do it with below steps.
        cy.on('window:alert', ($str) => {
            //mocha
            expect($str).to.eq('Hello , share this practice page and share your knowledge');
        })

        cy.get("[value='Confirm']").click();
        cy.on('window:confirm', ($str)=>{
            expect($str).to.equal('Hello , Are you sure you want to confirm?');
            
            // if we don't want to canfirm then we have to pass return false;
            // return false;
        })
    })
})