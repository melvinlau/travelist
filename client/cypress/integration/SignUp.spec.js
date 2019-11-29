/// <reference types="Cypress" />

context('Sign up', () => {

  beforeEach(() => {
    cy.visit('/signup'); // Later, to replace this with journey sequence
  })

  it('renders a blank sign up form', () => {
    cy.get('body').should('contain', 'Sign up');
    cy.get('input[data-cy=email]').should('have.value', '');
    cy.get('input[data-cy=password]').should('have.value', '');
    cy.get('input[data-cy=password-confirmation]').should('have.value', '');
  });

});
