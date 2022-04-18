//https://www.youtube.com/watch?v=nUTSmf5GoCA&t=4s&ab_channel=LookLiveUI

describe("Log in", function() {
    it("Sign in", function() {
        cy.visit("https://unsplash.com/")
        cy.contains("Log in").click()
        cy.get('input[type="email"]').type('asd@gmail.com')
        cy.get('input[type="password"]').type('123456789')
        cy.get('input[type="submit"]').click()      
    })
})