/// <reference types = 'Cypress' />

// mocha
describe('Handling web control UI using Cypress',() =>{
    it('Handling radio button using Cypress',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //select single radio button using specific attribute
        cy.get('input[value="radio1"]').check();
        cy.get('input[value="radio1"]').should('be.checked');

        //select multiple radio button once using common attribute.
        cy.get('.radioButton').check(['radio1','radio2']).should('be.checked');
    })
})