//https://www.youtube.com/watch?v=CkqweUrVZy0&list=PLwCC0l-B_V8JNd2-YG5hh-beXmR8gWOtC&index=2&ab_channel=LookLiveUI

describe('Testing something on Rozetka', () => {
    //коментарий
    it('By', () => {
        //cy.visit('https://google.com');
        cy.visit('https://rozetka.com.ua/')
        cy.viewport(1920, 1080) //Размер окна
        cy.get('input[type="text"]').type('iphone 12')
        cy.contains('Найти').click()
        cy.contains('Мобильный телефон Apple iPhone 12 128GB Purple Официальная гарантия').click()
        cy.contains('Купить').click()
    })
})