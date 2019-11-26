/// <reference types="Cypress" />

context('Start page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('renders a start form', () => {
    cy.get('.start-button').contains('Start')
  })

})
