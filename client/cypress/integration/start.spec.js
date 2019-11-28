/// <reference types="Cypress" />

context('Index page', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('renders a form for user to begin journey on Travelist', () => {
    cy.get('.start-form').within(() => {
      cy.get('input[name="destination"]').should('have.value', '');
      cy.get('input[name="start-date"]').should('have.value', '');
      cy.get('input[name="end-date"]').should('have.value', '');
      cy.get('.start-button').should('contain','Start planning');
    });
  });

  it('captures the submitted destination and displays it on the next page', () => {
    cy.get('.start-form').within(() => {
      cy.get('input[name="destination"]').type('London');
      cy.get('input[name="start-date"]').type('2019-12-06');
      cy.get('input[name="end-date"]').type('2019-12-12');
      cy.get('.start-button').click();
    });
    cy.get('body').should('contain', 'London');
  });

});
