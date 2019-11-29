/// <reference types="Cypress" />

import axios from 'axios';
import { submitDestinationAndDate } from './_helpers';

context('User visits start page, fills form correctly and clicks button', () => {

  it('generates a POST request and creates a trip', () => {

    cy.server();
    cy.route('POST', 'http://localhost:3001/api/trips/').as('createTripRequest');
    submitDestinationAndDate();
    cy.wait('@createTripRequest');
    cy.get('@createTripRequest').then(xhr => {
      expect(xhr.method).to.eq('POST');
      expect(xhr.status).to.eq(201);
      expect(xhr.requestBody).to.contain(
        {
          "destination": "London",
          "dateFrom": "2019-12-06",
          "dateTo": "2019-12-08"
        }
      );
      expect(xhr.responseBody.trip).to.have.property('_id');
    });

  })

});
