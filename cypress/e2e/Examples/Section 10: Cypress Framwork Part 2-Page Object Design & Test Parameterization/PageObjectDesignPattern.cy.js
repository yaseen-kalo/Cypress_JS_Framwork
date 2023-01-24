/// <reference types = 'cypress' />

import HomePage from '../objectPages/HomePage';

describe('Handling Page Object Design Pattern using Cypress Framework', () => {
    
    //Before hood
    before(() => {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
    })


    it('Automate Home Page using Page Object Design Pattern', () => {
        const homePage = new HomePage()
        homePage.getNameField().type(globalThis.data.name);
        homePage.getEmailField().type(globalThis.data.email);
        homePage.getPasswordField().type(globalThis.data.password);
        homePage.getGenderDD().select(globalThis.data.gender);
        homePage.getSubmitButton().click();
    })
})