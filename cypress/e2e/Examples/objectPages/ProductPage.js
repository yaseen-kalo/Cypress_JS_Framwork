class ProductPage {
    getProduct(){
        return cy.get('.card.h-100');
    }

    getProductTitle(){
        return cy.get('.card.h-100 .card-body h4 a');
    }

    getCheckoutButton(){
        // cy.get('button[type="button"]');
        return cy.get('.navbar-nav.ml-auto li a');
    }
}

export default ProductPage;