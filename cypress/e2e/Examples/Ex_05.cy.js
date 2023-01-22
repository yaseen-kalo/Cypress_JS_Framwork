/// <reference types = 'Cypress' />

// mocha
describe('Handling web control UI using Cypress',() =>{
    it('Verify and automate checkboxes with cypress',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // here first get specific checkbox through css locator and used .check() method
        // and did some assertion.
        cy.get('#checkBoxOption1').check().should('be.checked')
        .and('have.value','option1');
        // here then get the above specific checkbox through css locator and used .uncheck() method
        // and did some assertion.
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        .and('not.have.value','option2');
        // here get all checkbox using common css selector and used .check() method and passed multiple checkbox value which
        // we want to check and do some assertion.
        cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked');
    })
})