/// <reference types = 'Cypress' />

// mocha
describe(' Advance automation to handling alerts, pop-up, child window using Cypress-Jquery',() =>{
    it('How to handle mouse hover popup in Cypress using .invoke/trigger and .show commands',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //1st way
        //first get the content doing mouseover using trigger function,
        // and then find the option using css locator which you wanna select and click() it.
        cy.get('#mousehover').trigger('mouseover')
        // cy.get('div.mouse-hover-content a[href="#top"]').click({force:true});
        cy.get('div.mouse-hover-content a').contains('Top').click({force:true});

        //2nd way
        // doing same above thing using invoke method..
        // here you can directly show the content and then slect one.
        // show method should only apply on the immediate parent elemnt of hidden elements.. 
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','top')



    })
})