/// <reference types="Cypress" />

import axios from 'axios';
import { submitDestinationAndDate, submitActivities } from './_helpers';

context('User visits start page, fills form correctly and clicks button', () => {

  it('generates a PATCH request to update trip with activities list', () => {

    cy.server();

    let tripId;
    cy.route('POST', 'http://localhost:3001/api/trips/').as('createTripRequest');
    submitDestinationAndDate();
    cy.wait('@createTripRequest');
    cy.get('@createTripRequest').then(xhr => {
      tripId = xhr.responseBody.trip._id;
    });

    console.log(tripId);

    cy.route('PATCH', `http://localhost:3001/api/trips/${tripId}`).as('createListRequest');
    submitActivities();
    cy.wait('@createListRequest');
    cy.get('@createListRequest').then(xhr => {
      expect(xhr.method).to.eq('PATCH');
      expect(xhr.status).to.eq(200);
      expect(xhr.requestBody.activity.length).to.be.greaterThan(0);
      expect(xhr.requestBody.activity).to.eq(xhr.responseBody.activity);
      // expect(xhr.responseBody.trip.items.length).to.be.greaterThan(0);
      expect(xhr.responseBody.trip._id).to.eq(tripId);
    });

  })

});
