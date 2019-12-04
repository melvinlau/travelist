const mongoose = require('mongoose');
const httpMocks = require('node-mocks-http');
const Trip = require('../../models/trip');
const tripsController = require('../trips');

const tripController = describe('Trips tests', () => {
  beforeAll(async () => {
    const mongoDB = 'mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/test?retryWrites=true&w=majority';
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    await Trip.remove({});
  });

  beforeEach(async () => {
    const trip = new Trip({
      id: 1, destination: 'Sydney', dateFrom: '2020-05-01', dateTo: '2020-05-05',
    });
    await trip.save();
  });

  afterEach(async () => {
    await Trip.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('Trip model test', () => {
    it('has a module', () => {
      expect(Trip).toBeDefined();
    });
  });

  describe('creates and saves a trip successfully', () => {
    it('gets a trip', async () => {
      const foundTrip = await Trip.findOne({ destination: 'Sydney' });
      expect(foundTrip.destination).toEqual('Sydney');
    });
  });

  describe('creates and saves a trip successfully', () => {
    it('gets a trip', async () => {
      const req = httpMocks.createRequest({
        params: { id: 1 },
      });
      const res = httpMocks.createResponse();
    });
  });

  describe('Gets trips by id', () => {
    it('retrieves trips by id', async () => {
      // const input = await itemsController.createCustomItem({ body: { name: 'Mirror', category: 'miscellaneous' } });
      const trip1 = new Trip({ destination: 'Sydney', dateFrom: '2020-03-01', dateTo: '2020-06-05' });
      const trip2 = new Trip({ destination: 'London', dateFrom: '2020-01-01', dateTo: '2020-05-05' });
      const trip3 = new Trip({ destination: 'Bangkok', dateFrom: '2020-02-01', dateTo: '2020-03-05' });
      const tripIds = [trip1.id, trip2.id, trip3.id]
      const foundTrips = await tripsController.getTripsById(tripIds)
      console.log(trip1)
      console.log(tripIds)
      console.log(foundTrips)
      expect(foundTrips.length).toEqual(3);
      expect(foundTrips[0].destination).toEqual('Blah')
    });
  });
  // need to stub/mock middleware

  // describe('sets trip items appropriately based on activities', () => {
  //   it('gets a trip', async () => {
  //     const reqMock = {
  //       body: { activities: ['beach'] },
  //       params: { tid: 1 },
  //     };
  //     updatedTrip = await tripsController.updateTrip(reqMock);
  //     expect(updatedTrip).toEqual(['Tshirt']);
  //   });
  // });

  // describe('sets trip items appropriately based on activities', () => {
  //   it('gets a trip', async () => {
  //     const req = httpMocks.createRequest({
  //       params: { id: 1 }
  //     });
  //     const res = httpMocks.createResponse();
  //     return getThings(req, res).then((response) => {
  //       assert.equal(Array.isArray(response.things), 'true');
  //     });
  //   });
  // });

  // test('getThings resolves to an array of objects', (assert) => {
  //   const req = httpMocks.createRequest({
  //     params: { id: '12345' }
  //   });
  //   const res = httpMocks.createResponse();
  //   return getThings(req, res).then((response) => {
  //     assert.equal(Array.isArray(response.things), 'true');
  //   });
});
