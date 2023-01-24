class HomePage 
{
    getNameField() {
        return cy.get('input[name="name"]:nth-child(2)');
    }

    getEmailField(){
        return cy.get('input[name="email"]');
    }
    
    getPasswordField(){
        return cy.get('#exampleInputPassword1');
    }

    getGenderDD(){
        return cy.get("#exampleFormControlSelect1");
    }

    getDOBFirld(){
        return cy.get('input[name="bday"]');
    }

    getSubmitButton(){
        return cy.get('input[value="Submit"]');
    }
}

export default HomePage;