before(() => 
{
    
    cy.visit(Cypress.env('url') + '/angularpractice/shop');
    cy.fixture('example').then((data) => {
        globalThis.data = data;
    })
})