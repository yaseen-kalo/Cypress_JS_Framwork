/// <reference types = 'Cypress' />

// mocha
describe('Handling web control UI using Cypress',() =>{
    it('Handling visibility and Invisibility of element using Cypress',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');

        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
    })
})