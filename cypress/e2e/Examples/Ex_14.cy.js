/// <reference types = 'Cypress' />

// mocha
describe('How to automate iFrame and Child windows using Cypress', () => {
    it('Handling Child window using Cypress', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // For ex: First we want to select the country here with dynamic dropdown and after that
        // we need to do some automation on open window button.(Scenario)
        cy.get('#autocomplete').type('Pa');

        cy.get('.ui-menu-item').each(($el,$index) => {
            if($el.text() === 'Pakistan'){
                cy.wrap($el).click();
            }
        })
        
        // Cypress does not support cross domain testing.
        // it can happen if both url come from same domain.
        // Cypress now only support remove attr method only,
        // this method outdated now..
        cy.get('#opentab').then(($el) => {
            const url = $el.prop('href');
            cy.log(url);
            cy.visit(url);
        })
    })
})