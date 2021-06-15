
/// <reference types="Cypress" />


describe('webelements', function () {

    it('Webelements', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //get the values of href(get the link of the button and act upon it)
        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)
            
        })
    })



})
