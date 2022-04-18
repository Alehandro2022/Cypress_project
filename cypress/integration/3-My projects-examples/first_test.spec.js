//https://www.youtube.com/watch?v=N0Eqlz5G-Jo&list=PLwCC0l-B_V8JNd2-YG5hh-beXmR8gWOtC&index=1&ab_channel=QAWithNatalia
//Установка Cypress и маленький тест

describe('Testing something on Google', () => {
    //коментарий
    it ('I can search something', () => {        
        cy.visit('https://google.com')
        cy.get("input[title='Пошук']").type('Что-то').type('{enter}')
        cy.contains('https://context.reverso.net')
        cy.contains('https://kak-pravilno.net')
    });
})