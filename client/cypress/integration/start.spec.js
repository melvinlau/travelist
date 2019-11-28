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

  it('captures the submitted destination and displays it on the next page', () => {
    cy.get('.start-form').within(() => {
      cy.get('input[name="destination"]').type('London');
      cy.get('input[name="date-from"]').type('2019-12-06');
      cy.get('input[name="date-to"]').type('2019-12-12');
      cy.get('.start-button').click();
    });
    cy.get('.start-form').should('contain', 'London');
  });

});
