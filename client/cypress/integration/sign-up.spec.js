/// <reference types="Cypress" />

context('Sign up', () => {

  beforeEach(() => {
    cy.visit('/signup');
  })

  it('renders a sign up form', () => {
    cy.get('body').should('contain', 'Sign up');
    cy.get('input[name="email"]').should('have.value', '');
    cy.get('input[name="password"]').should('have.value', '');
    cy.get('input[name="password-confirmation"]').should('have.value', '');
  });

});
