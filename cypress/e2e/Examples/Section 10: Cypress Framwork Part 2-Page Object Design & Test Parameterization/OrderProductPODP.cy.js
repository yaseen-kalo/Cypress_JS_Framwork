/// <reference types = 'cypress' />
import ProductPage from '../objectPages/ProductPage';

//mocha
//just for pactice page object design pattern..
describe('Automate the Product Page using Page Object Design Pattern',() => 
{
    before(() => 
    {
        
        cy.visit(Cypress.env('url') + '/angularpractice/shop');
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })

    //mocha
    it('order multiple product',()=> 
    {
        const productPage = new ProductPage();
        // here we get name of product by using foreach loop..
        globalThis.data.productName.forEach(element => {
            // here we get all prodcut's info
            productPage.getProduct().each(($el, $index, $list) => 
        {
            // here we get name of all product..
            const product_name = $el.find('.card-body h4 a').text();
            // cy.log(product_namae);
            // here we compare names of product we we want..
            if(product_name.includes(element))
            {
                // here we add that specific product in our basket...
                cy.wrap($el).find('.card-footer button').click();
            }
        })
        });
        // productPage.getCheckoutButton().click();
        productPage.getCheckoutButton().click();

            //declear variable to get sum of all product
            var total = 0;
            // get value on individual product and do each command
                cy.get('tr td:nth-child(4) strong').each((data) => {
                    //store amount of each command and split it with currency sign
                    // then trim it so spaces got remove and then parse it into number coz it 
                    // initially are in string then resolve promise so total = 0 instantly do not print.
                    //Same thing do for total value but here with promise becasue we have only one total and then compare it before that
                    // don't forget to convert total value into int(number)...
                    const amount = data.text();
                    // cy.log(amount);
                    var res = amount.split(" ");
                    res = res[1].trim();
                    // res = parseInt(res);
                    total = Number(total) + Number(res);
                }).then(() => {
                    cy.log(total);
                })

                cy.get('tr td:nth-child(5) h3 strong').then(($el) => {
                    var total_cost = $el.text();
                    var val = total_cost.split(" ")
                    val = val[1].trim();
                    // cy.log(val);
                    expect(Number(val)).to.equals(total);
                })

        // cy.pause();
        cy.get('button.btn-success').click();
        cy.get('#country').type('Pa');
        // cy.wait(2000);
        cy.get('.suggestions ul li a').each(($el) => {
            const count = $el.text();
            if(count === 'Pakistan'){
                cy.wrap($el).click();
            }
        })
        cy.get('#country').should('have.value','Pakistan');
        cy.get('.checkbox label[for="checkbox2"]').click();
        cy.get('form input').click();
        // cy.get('.alert').should('have.text',' Success! Thank you! Your order will be delivered in next few weeks :-).');
        cy.get('.alert').then(($el) => {
            expect($el.text()).to.include('Success! Thank you! Your order will be delivered in next few weeks');
        })
    })
})