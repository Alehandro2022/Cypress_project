//https://www.youtube.com/watch?v=6v-4Q54J4qo&t=173s&ab_channel=LookLiveUI
//связь с login из PageObject

import Login from './PageObject/login'
//Если папка PageObject выше по дереву на один уровень, то - ../ и т.д.


describe('Assert', () =>{
    

    const login = new Login()

   it('Assert Web Tests', () =>{
       cy.visit("https://unsplash.com/")
       cy.viewport(1920, 1080) //Размер окна
       cy.location('protocol').should('eq', 'https:') //Проверка - http или https
       cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash') //Проверка названия вкладки

       login.btnLogin()
       .should('be.visible') //Видно ли кнопку "Log in"
       .click()//Нажатие на неё
       
       login.email()
       .type('pofig34512@freg.com')
       .should('have.value', 'pofig34512@freg.com') 
       //сравнивает вводимый e-mail с ожидаемым

       login.password()
       .type('1234567')
       .should('have.value', '1234567') 
       //сравнивает вводимый password с ожидаемым

       login.clickBtnLogin()
       .should('be.visible') //Видно ли кнопку "Login"
       .click()//Нажатие на неё

       cy.contains('Invalid email or password.').should('be.visible')
       //Видно ли ответ про неправильний адрес или пароль
   })
})