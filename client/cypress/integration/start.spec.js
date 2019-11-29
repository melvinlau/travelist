/// <reference types="Cypress" />

import { submitDestinationAndDate } from './_helpers';

context('Index page', () => {

  it('renders a form to begin journey on Travelist', () => {
    cy.visit('/');
    cy.get('input[data-cy=destination]').should('have.value', '');
    cy.get('input[data-cy=start-date]').should('have.value', '');
    cy.get('input[data-cy=end-date]').should('have.value', '');
    cy.get('[data-cy=start-button]').should('be.visible');
  });

  it('captures the submitted destination and displays it on the next page', () => {
    submitDestinationAndDate();
    cy.get('body').should('contain', 'London');
  });

});
