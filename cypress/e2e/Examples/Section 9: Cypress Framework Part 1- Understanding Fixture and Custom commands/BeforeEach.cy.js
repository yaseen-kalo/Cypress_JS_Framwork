/// <reference types = 'Cypress' />

// mocha
describe('Before Each Hook',() => {
    
    //before Each hook, before each block will execute before every it block..
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    })

    it('Order a product', () => {
        cy.get('.search-keyword').type('Ca');
        cy.wait(1500);

        cy.get('.products .product').each(($el, $index, $list) => {
            const capsicum_item = $el.find('.product-name').text();
            if(capsicum_item =='Capsicum'){
                // cy.log(capsicum_item);
                // cy.wrap($el).find('.product-action').click();
                cy.wrap($el).contains('ADD TO CART').click();
            }
        })
        cy.get('.cart .cart-icon').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        // cy.get('button[type="button"]').contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })

    it('Verify that footer contain GreenKart or not', () => {
        cy.get('footer p').then(($el) => {
            expect($el.text()).to.include('GreenKart');
        });
    })
})