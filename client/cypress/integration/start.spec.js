/// <reference types="Cypress" />

context('Index page', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('renders a form for user to begin journey on Travelist', () => {
    cy.get('.start-form').within(() => {
      cy.get('input[name="destination"]').should('have.value', '');
      cy.get('input[name="date-from"]').should('have.value', '');
      cy.get('input[name="date-to"]').should('have.value', '');
      cy.get('.start-button').should('contain','Start planning');
    });
  });

});
