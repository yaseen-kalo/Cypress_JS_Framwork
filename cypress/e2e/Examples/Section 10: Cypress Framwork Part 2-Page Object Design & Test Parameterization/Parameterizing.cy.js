/// <reference types = 'cypress' />

//mocha
describe('Parameterizing the test data from json file using forEach command',() => {
    before(() => {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/shop');
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })
    it('Ordering more than one product by getting product names from fixture/example.json file',() => {
        // here we want to get product name from fixture/example.json file and for that
        // first need to bring data from example file so we bring data 
        // using cy.fixture(example).then((data -this data hold the complete data of example file-) => {this.data -this one is for current file- = 
        // data -this is param which hold the complete data- })
        // After that we apply foreach loop on productName and call custom command and pass product name which we got with 
        // globalThis.data.productName this command. This process is called parameterization.
        globalThis.data.productName.forEach((element) => {
            cy.buyProduct(element);
        });
    })
})