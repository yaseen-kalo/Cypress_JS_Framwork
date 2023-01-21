/// <reference types = 'Cypress' />

// mocha
describe('Cypress Asynchronous Nature and its Promise Handling',() =>{
    // mocha
    it('e2e testing of adding items till checkout page',() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input.search-keyword').type('ca');
        cy.wait(2000);
        // getting all items
        cy.get('.products').find('.product').each(($el,$index) => {
            //getting text of items
            const item = $el.find("h4.product-name").text();
            // checking items is equal to or not
            if(item == 'Capsicum' || item == 'Carrot - 1 Kg')
            {
                //increment item count
                cy.wrap($el).find('.increment').click();
                // adding into cart
                cy.wrap($el).contains('ADD TO CART').click();
            }
        })
                // cy.get('.products').find('.product').each(($el,$index) => {
        //     const item = $el.find("h4.product-name").text();
        //     if(item == 'Carrot - 1 Kg')
        //     {
        //         cy.wrap($el).contains('ADD TO CART').click();
        //     }
        // })

        //checking items in shopping cart
        cy.get('.cart-icon').click();

        // naviagte to checkout page
        cy.get('button[type="button"]').contains('PROCEED TO CHECKOUT').click();
        //verify that we're in shopping cart page or not
        cy.url().should('include','cart');

        //placing an order
        cy.get('button').contains('Place Order').click();

    })
})