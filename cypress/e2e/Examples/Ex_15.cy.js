/// <reference types = 'Cypress' />
/// <reference types = 'Cypress-iframe' />
import 'cypress-iframe'

//mocha
describe('How to automate iFrame and Child windows using Cypress', () => {
    it('Handling iFrame using Cypress', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Blocked a frame with origin "https://rahulshettyacademy.com" from accessing a cross-origin frame.
        // Cypress block it, code is correct
        cy.frameLoaded('#courses-iframe');
        cy.iframe().contains('Mentorship').click();
        cy.get('.bronze-color div div h1').then(($el) => {
            const subscribtion = $el.text();
            cy.log(subscribtion);
        })
    })
})