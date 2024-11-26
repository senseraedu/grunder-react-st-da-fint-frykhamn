/// <reference types="cypress" />



describe('cleaning page', () => {
  beforeEach(() => {

    cy.visit('http://localhost:5173/')
  })


  it('should navigate to bokings page', () => {
    // check if button  when clicked on navigates to bookings page
    cy.get('[data-testid=nav-button]').click()
    cy.url().should('include', '/bookings')
  })


})
