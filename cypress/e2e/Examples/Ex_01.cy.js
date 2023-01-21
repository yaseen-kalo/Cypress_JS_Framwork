/// <reference types = 'Cypress' />

//mocha library
describe('Example 01:, Session 04 Getting started with Cypress Test Automation', ()=> {
    
    // mocha library 
    it('able to type in searchbox and do assertion on item list', () =>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get("input[type='search']").type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length',4);
    })
})