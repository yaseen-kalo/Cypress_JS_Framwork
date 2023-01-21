/// <reference types = 'Cypress' />

//mocha library
describe('Example 02:, Session 05 Deep diving into Cypress Command and its Asyncronous Nature', ()=> {

    // mocha
    it('able to click add to cart button of n item after getting multiple products', () =>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get("input[type='search']").type('ca');
        cy.wait(2000);
        //Parent Child Chainning (Find())
        cy.get('.products').find('.product').should('have.length',4);

        //getting 4 items and using eq(2) we select 3nd item out of 4 and then using contains method we pass text
        // add to cart and click it..
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    })

    // mocha
    it('able to click add to cart button of specific item after getting multiple products', () =>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get("input[type='search']").type('ca');
        cy.wait(2000);
        //Parent Child Chainning (Find())
        cy.get('.products').find('.product').should('have.length',4);

        //  getting 4 items and using eq(2) we select 3nd item out of 4 and then using contains method we pass text
        //  add to cart and click it..
        //  cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

        //getting 4 items and using text method

        cy.get('.products').find('.product').each(($el,$index) => {
            const item = $el.find("h4.product-name").text();
            if(item.includes('Capsicum')){
                // $el.find('button').click();
                cy.wrap($el).contains('ADD TO CART').click();
            }
        })
    })
})