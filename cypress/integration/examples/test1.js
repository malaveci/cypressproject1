


//auto complete 
/// <reference types="Cypress" />   



describe('My first test suite', function () {
    it('my first test case', function () {
        console.log('hello andi')
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
        //cy.visit('http://34.234.125.71/ops/views/ops.html#!#intelypro_tab')
        cy.get('.search-keyword').type('ca')
        cy.wait(3000)
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)   //VISIBLE IS USED FOR VISIBLE ELEMENTS 
        //parent  child chaningi (look below )
        cy.get('.products').as('productLocator')
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq('1').contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {

                $el.find('button').click()
            }
        })

            cy.get('.brand').should('have.text','GREENKART')
         cy.get('.brand').then(function(logoelement)
         {
            cy.log(logoelement.text())
         })
        // cy.log(logoelement.text())
    })




})