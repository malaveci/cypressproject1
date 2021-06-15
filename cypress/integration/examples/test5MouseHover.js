
/// <reference types="Cypress" />


describe('webelements', function () {

    it('Webelements', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //hidden elements
       //cy.get('div.mouse-hover-content').invoke('show')
       cy.contains('Top').click({force: true}) //clicks invisible elements
       cy.url().should('include', 'top')

    })



})
