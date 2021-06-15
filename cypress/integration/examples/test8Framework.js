
/// <reference types="Cypress" />


import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('webelements', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })



    it('Webelements', function () {
        Cypress.config('defaultCommandTimeout', 10000)
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url')+"/angularpractice/")
        

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneur().should('be.disabled')

        Cypress.config('defaultCommandTimeout', 10000)

        homePage.getShopTab().click()


        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)

        });
        productPage.checkOutButton().click()
        var sum = 0
        //validating the total of checkout 
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            //logs the value of the product cy.log($el.text())
            const amount = $el.text()
            var res = amount.split(" ")// is spliting by space 
            res = res[1].trim()//gets the second index of the split
            sum = Number(sum) + Number(res) //adds the sum of the numbers 
            cy.log(res) //logs the element we splited 

        }).then(function () {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")// is spliting by space 
            var total = res[1].trim()
            expect(Number(total)).to.equal(Number(sum))
        })

        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        //cy.wait(5000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true }) //element is not interactable but we will force click it
        cy.wait(2000)
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').should('include.text', 'Success!')



    })


    
})
