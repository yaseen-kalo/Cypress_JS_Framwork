/// <reference types = 'Cypress' />

//mocha
describe('Data driving form fixture file',() => {
    before(() =>{
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
        cy.fixture('example').then((data) => {
            //after trying this.data I got an error, then I used globalThis 
            // and it works fine.
            globalThis.data = data;
        })
    })
    it('Submit contact form for order', () => {
        cy.get('input[name="name"]:nth-child(2)').type(globalThis.data.name);
        cy.get('select').select(globalThis.data.gender);

        cy.get('input[name="name"]:nth-child(2)').should('have.value','Smith');
        
        // for doing assertion on html element property chai assertion gives us have.attr method
        // it takes property name and its value.
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');

        cy.get('#inlineRadio3').should('be.disabled');
    })
})