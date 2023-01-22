/// <reference types = 'Cypress' />

// mocha
describe('Handling web control UI using Cypress',() =>{
    it('Handling Static dropdown using select command with Cypress',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');
    })
})