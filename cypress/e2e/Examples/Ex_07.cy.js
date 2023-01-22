/// <reference types = 'Cypress' />

// mocha
describe('Handling web control UI using Cypress',() =>{
    it('Handling Dynamic dropdown using each command iteration',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // get input field and type 2/3 letters and it will show names
        cy.get('#autocomplete').type('pa')
        // here get list of names using css selector and using each iterate it 
        // and check either name is equal to the name which you want if yes then select it
        // cy.wrap($el).click()method
        cy.get('.ui-menu-item div').each(($el,$index) =>{
            const name = $el.text()
            if(name === 'Pakistan'){
                cy.wrap($el).click();
            }
        })
        //get iput field and do assertion either name is select which you had expected or not.
        cy.get('#autocomplete').should('have.value','Pakistan');
    })
})