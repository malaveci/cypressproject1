
/// <reference types="Cypress" />


describe('webelements', function () {

    it('Webelements', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('#alertbtn').click()
       cy.get('[value="Confirm"]').click()
        cy.on('window:alert',(str)=>
        {
            //Mocha
           expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        cy.on('window:confirm',(str)=>
        {
            //Mocha
           expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //handling child windows (link will open on the same window )
        cy.get('#opentab').invoke('removeAttr','target').click()
        //validating if im going to the url 
        cy.url().should('include','https://www.rahulshettyacademy.com/#/index')

        cy.go('back')

    })



})
