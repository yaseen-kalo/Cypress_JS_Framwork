/// <reference types = 'Cypress' />

//mocha

describe('Building customized Cypress commands for reusing the code',() => {
    before(() => {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
        
    })
    it('Oder product by ',() => {
        cy.contains('Shop').click();

        //these method is define in commands.js file,
        // here we call the method and pass product name only.
        cy.buyProduct('Nokia Edge');
        cy.buyProduct('iphone X');
        cy.get('.nav-item.active').click();
    })
})
