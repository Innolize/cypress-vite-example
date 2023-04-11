/// <reference types="cypress"/>

// describe('login', () => {
//   beforeEach(() => {
//     cy.visit('/signin')
//   })
//   it('Should display errors if email and password parameters are incorrect', () => {
//     cy.get('#signin-form').as('form')

//     cy.get('@form').find('input[name=email]').type('12345')

//     cy.get('@form').find('input[name=password]').type('12345')

//     cy.get('@form').contains('Sign In').click()

//     cy.get('@form').contains('Enter a valid email')
//     cy.get('@form').contains(
//       'Password should be of minimum 8 characters length'
//     )
//   })

//   it('Should display empty field errors ', () => {
//     cy.get('#signin-form').as('form')

//     cy.get('@form').find('input[name=email]').click()

//     cy.get('@form').find('input[name=password]').click()

//     cy.get('@form').contains('Sign In').click()

//     cy.get('@form').contains('Email is required')
//     cy.get('@form').contains('Password is required')
//   })

//   it('Should be redirected to "/princing" if credentials are correct', () => {
//     cy.get('#signin-form').as('form')

//     cy.get('@form').find('input[name=email]').type('test@gmail.com')

//     cy.get('@form').find('input[name=password]').type('password')

//     cy.get('@form').contains('Sign In').click()

//     cy.url().should('eq', `${Cypress.config().baseUrl}/pricing`)
//   })
// })
