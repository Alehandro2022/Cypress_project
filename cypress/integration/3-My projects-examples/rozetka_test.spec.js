describe('Testing something on Rozetka', () => {
    //коментарий
    it('By', () => {
        //cy.visit('https://google.com');
        cy.visit('https://rozetka.com.ua/')
        cy.get("input[title='search']").type('Сковородки').type('{enter}')
        cy.contains('Tefal')
    })
})