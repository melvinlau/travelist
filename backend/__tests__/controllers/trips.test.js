const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/test1?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
const Trip = require('../../src/models/trip');
// const tripData = { id: 1, destination: 'Sydney', dateFrom: "2020-05-01", dateTo: "2020-05-05", activity: ["museum", "beach"], items: [], user: 1 }

// const db = mongoose.connection

// db.once('open', _ => {
//   console.log('Database connected:', mongoDB)
// })

// db.on('error', err => {
//   console.error('connection error:', err)
// })

describe("Trip model test", () => {
  beforeAll(async () => {
    await Trip.remove({});
  });

  afterEach(async () => {
    await Trip.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("has a module", () => {
    expect(Trip).toBeDefined();
  });
});

describe("creates and saves a trip successfully", () => {
  it("gets a trip", async () => {
    const trip = new Trip({ destination: 'Sydney', dateFrom: "2020-05-01", dateTo: "2020-05-05" });
    await trip.save();

    const foundTrip = await Trip.findOne({ destination: "Sydney" });
    const expected = "Sydney";
    const actual = foundTrip.destination;
    expect(actual).toEqual(expected);
  });
});


// describe('Trip model test', () => {
//   beforeAll(async () => {
//     const url = `mongodb://127.0.0.1/trips`
//     await mongoose.connect(url, { useNewUrlParser: true })
//     //   { useNewUrlParser: true, useCreateIndex: true }, (err) => {
//     //     if (err) {
//     //       console.log(err);
//     //       process.exit(1);
//     //     }
//     //   });
//     // db = await connection.db(global.__MONGO_DB_NAME__);
//   });

//   // it('creates and saves a trip successfully', async () => {
//   //   const validTrip = new TripModel(tripData);
//   //   const savedTrip = await validTrip.save();

//   //   expect(savedTrip._id).toBeDefined();
//   //   expect(savedTrip.destination).toBe(tripData.destination);
//   //   expect(savedTrip.dateFrom).toBe("2020-05-01");
//   //   expect(savedTrip.dateTo).toBe("2020-05-05");
//   //   expect(savedTrip.activity).toBe(["museum", "beach"]);
//   //   expect(savedTrip.items).toBe([]);
//   //   expect(savedTrip.user).toBe(1);
//   // });

//   // afterAll(async () => {
//   //   await connection.close();
//   // });
//   it('Should save user to database', async done => {
//     const res = await request.post('/api/trips')
//       .send(tripData)

//     const trip = await Trip.findOne({ destination: 'Sydney' })
//     expect(trip.destination).toBeTruthy()
//     expect(trip.activity).toBeTruthy()

//     // expect(trip.body.destination).to
//     done()
//   })

//   // afterEach(async () => {
//   //   await Trip.deleteMany()
//   // })

// });