/// <reference types = 'Cypress' />

// mocha
describe('Advance automation to handling alerts, pop-up, child window using Cypress-Jquery',() =>{
    it('Handling child tab with combination of Cypress and JQuery commands',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // 1st way
        cy.get('#opentab').then(($el) => {
            $el.removeAttr('target');
            cy.wrap($el).click();
        })
        cy.url().should('equal','https://www.rahulshettyacademy.com/');

        // 2nd way
        cy.go('back');
        cy.url().should('contain','rahulshettyacademy.com/AutomationPractice');

        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.url().should('equal','https://www.rahulshettyacademy.com/');

        cy.go('back');
        cy.url().should('contain','rahulshettyacademy.com/AutomationPractice');
    })
})