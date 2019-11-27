const HttpError = require("../models/http-error");
const Trip = require("../models/trip");

const DUMMY_TRIP = [
  {
    id: "t1",
    destination: "Paris",
    dateFrom: "2019-11-28",
    dateTo: "2019-11-29",
    activity: "fishing",
    user: "u1"
  }
];

const getTripById = (req, res, next) => {
  const tripId = req.params.tid;
  const trip = DUMMY_TRIP.find(t => {
    return t.id === tripId;
  });

  if (!trip) {
    throw new HttpError("Could not find a trip for the provided id.", 404);
  }

  res.json({ trip });
};

const getTripByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const trip = DUMMY_TRIP.find(t => {
    return t.user === userId;
  });

  if (!trip) {
    return next(
      new HttpError("Could not find a trip for the provided user id.", 404)
    );
  }

  res.json({ trip });
};

const createTrip = async (req, res, next) => {
  const { destination, dateFrom, dateTo, activity, user } = req.body;
  const createdTrip = new Trip({
    destination,
    dateFrom,
    dateTo,
    activity,
    user
  });

  const result = await createdTrip.save();

  res.json(result);
};

// const updateTrip = (req, res, next) => {
//   const { title, description } = req.body;
//   const tripId = req.params.pid;

//   const updatedTrip = { ...DUMMY_TRIPS.find(p => p.id === placeId) };
//   const tripIndex = DUMMY_TRIPS.findIndex(p => p.id === placeId);
//   updatedTrip.title = title;
//   updatedTrip.description = description;

//   DUMMY_TRIPS[placeIndex] = updatedPlace;

//   res.status(200).json({ place: updatedPlace });
// };

// const deleteTrip = (req, res, next) => {
//   const placeId = req.params.pid;
//   DUMMY_TRIPS = DUMMY_TRIPS.filter(p => p.id !== placeId);
//   res.status(200).json({ message: "Deleted place." });
// };

exports.getTripById = getTripById;
exports.getTripByUserId = getTripByUserId;
exports.createTrip = createTrip;
// exports.updateTrip = updateTrip;
// exports.deleteTrip = deleteTrip;
