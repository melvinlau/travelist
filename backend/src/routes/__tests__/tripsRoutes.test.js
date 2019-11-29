const supertest = require('supertest');
const app = require('../tripsRoutes');
const Trip = require('../../models/trip');

const req = supertest(app);

// describe('Items tests', () => {
// describe('Items tests', () => {
//   beforeAll(async () => {
//     const mongoDB = 'mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/test?retryWrites=true&w=majority';
//     mongoose.connect(mongoDB, { useNewUrlParser: true });
//   });

//   afterAll(async () => {
//     await mongoose.connection.close();
//   });


//     //   describe('Test the root path', () => {
//     //     test('It should response the GET method', () => request(app).post("/").then(response => {
//     //       expect(response.statusCode).toBe(200)
//     //     }));
//     //   });
//     // });

// it('Should save item to database', async (done) => {
//   const res = await req.post('/').send({
//     destination: 'Sydney',
//   });

//   const trip = await Trip.findOne({ destination: 'Sydney' });
//   done();
// });
// });
