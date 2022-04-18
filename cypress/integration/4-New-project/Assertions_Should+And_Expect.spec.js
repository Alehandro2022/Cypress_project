/// <reference types="Cypress"/>


describe("Assertions", function() {

    it('SHOULD', () => {
        cy.visit('https://next.privat24.ua/mobile?lang=en')
        cy.viewport(1280, 720)
        cy.get('[data-qa-node="amount"]')
        .type(100)
        .should('have.value', 100)
        .and('be.visible')
    })

    it('Expect', () => {
        cy.visit('https://next.privat24.ua/mobile?lang=en')
        cy.viewport(1280, 720)
        cy.get('[data-qa-node="amount"]')
        .type(100).then(input => {
            expect(input).to.have.value(100)
        })   
    })

    it.only('Should', () => {
        cy.visit('https://next.privat24.ua/deposit?lang=en')
        cy.viewport(1280, 720)
        cy.get('[data-qa-value="UAH"]')
        .should('be.checked')   
    })
})