// .only после it (it.only) запускает только этот тест

/// <reference types="Cypress" />

it('By ID', () => {
    cy.visit("https://facebook.com/")
    cy.get('#email') // перед id ставится диез
});

it('By Class', () => {
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
    cy.get('button[class="DocSearch DocSearch-Button"]').click() // поиск по  тэгу и атрибуту этого тэга
    cy.get('.DocSearch-Input').type('rest')// перед названием класса ставится точка
});

it('By Tag', () => {
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
    cy.get('nav')//  перед названием тэга нет спецсимволов
});

it('By Tag Value', () => {
    cy.visit("https://facebook.com/")
    cy.get('[name="pass"]')//  атрибут тэга берётся в квадратные скобки
});

it('By Tag Value', () => {
    cy.visit("https://facebook.com/")
    cy.get('[data-testid="open-registration-form-button"]')//  атрибут тэга берётся в квадратные скобки
});

it('By Different Tag Value', () => {
    cy.visit("https://facebook.com/")
    cy.get('[role="button"][data-testid="open-registration-form-button"]')//  указано два атрибута тэга
});

it('By Different Types', () => {
    cy.visit("https://www.cypress.io/support/?utm_medium=Nav&utm_campaign=Support&utm_source=Test+Runner")
    cy.get('button[class="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button onetrust-lg close-icon"][aria-label="Close Banner"]')
    //  указано тєг и два атрибута этого тэга
});

it.only('By Contains Name', () => {
    cy.visit("https://next.privat24.ua/")
    cy.get('*[class^="card"]') //звёздочка даёт возможность найти все элементы, удовлетворяющие условию
});