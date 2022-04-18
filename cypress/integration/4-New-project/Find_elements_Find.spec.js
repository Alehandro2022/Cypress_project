/// <reference types="Cypress" />

it('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit')
    cy.get('tbody').find('td').find('div').find('button').eq('0')
})

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('div').find('nav').find('ul').find('li').find('a').contains('Syntax')
})