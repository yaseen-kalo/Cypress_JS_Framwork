/// <reference types = 'Cypress' />

// mocha
describe('Cypress Asynchronous Nature and its Promise Handling',() =>{
    // mocha
    it('getting logo text and verify it using should assertion',() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        // getting element and resolve promise and then did assertion.
        cy.get('.brand').then(($el) =>{
            cy.log($el.text())
            cy.wrap($el).should('have.text','GREENKART');
            expect($el.text()).to.equal('GREENKART');
        })
    })
})