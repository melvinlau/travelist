/// <reference types="Cypress" />

import { submitDestinationAndDate } from './_helpers';

context('Activity list page', () => {

  beforeEach(() => {
    submitDestinationAndDate();
  })

  it('renders a typical activity list item', () => {
    cy.get('[data-cy=activity-list-item]').within(() => {
      cy.get('[type="checkbox"]').should('be.visible');
      cy.get('[data-cy=activity-name]').should('be.visible');
      cy.get('[data-cy=activity-name]').should('not.be.empty');
    });
  });

  it('renders a button to generate a list', () => {
    cy.get('[data-cy=generate-list-button]').should('be.visible');
  });

});
