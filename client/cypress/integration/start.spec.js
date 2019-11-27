/// <reference types="Cypress" />

context('Start page', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('renders a start form', () => {
    cy.get('.start-form').within(() => {
      cy.get('input[name="destination"]').should('have.value', '');
      cy.get('input[name="start-date"]').should('have.value', '');
      cy.get('input[name="end-date"]').should('have.value', '');
      cy.get('.start-button').should('contain','Start planning');
    });
  });

});
