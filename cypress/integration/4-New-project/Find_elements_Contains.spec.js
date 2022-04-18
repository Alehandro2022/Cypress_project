/// <reference types="Cypress"/>

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.viewport(1280, 720)
    cy.contains('Sign in')
})

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.viewport(1280, 720)
    cy.contains('div', 'Sign in')
})

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.viewport(1280, 720)
    cy.contains('SIGN IN', {matchCase: false}) //отключено совпадение регистра
})

it.only('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.viewport(1280, 720)
    cy.get('footer').contains('Office')
})