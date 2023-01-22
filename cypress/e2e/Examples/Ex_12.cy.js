/// <reference types = 'Cypress' />

// mocha
describe('How to handle web table in Cypress',() =>{
    it('Handling web table with Cypress using each commands',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //1st way
        //first get the whole courses column and then find respected course
        // then use .next() method and convert it into text. It should be course price
        
        cy.get('[name="courses"] tbody tr td:nth-child(2)').each(($el,$index) => {
            if($el.text() === 'Learn SQL in Practical + Database Testing from Scratch'){

                expect($el.text()).to.eq('Learn SQL in Practical + Database Testing from Scratch');
                // const course = $el.text()

                cy.log($el.next().text());
                cy.wait(1000);
                expect($el.next().text()).to.equal("25");
            }
        })

        //2nd way
        cy.get('[name="courses"] tbody tr td:nth-child(2)').each(($el,$index) => {
            if($el.text() === 'WebSecurity Testing for Beginners-QA knowledge to next level'){
                cy.get('[name="courses"] tbody tr td:nth-child(2)').eq($index).next().then((price) => {
                    const course_price = price.text();
                    expect(course_price).to.be.equal('20');
                })
            }
        })
    })
})