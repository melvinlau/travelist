/// <reference types="Cypress" />

context('Start page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('renders a start form', () => {
    // cy.get('startForm').contains('Start')
    cy.get('.start-form').within(() => {
      cy.get('input[name="destination"]').should('have.value', '')
    })
  })

})
