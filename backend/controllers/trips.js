const HttpError = require("../models/http-error");
const Trip = require("../models/trip");

const getTripById = (req, res, next) => {
  const tripId = req.params.tid;
  let trip;

  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a place.', 500
    );
    return next(error);
  }


  if (!trip) {
    const error = new HttpError(
      "Could not find a trip for the provided id.", 
      404
      );
    return next(error);
  }

  res.json({ trip: trip.toObject({ getters: true }) });
};

const getTripsByUserId = (req, res, next) => {
  const userId = req.params.uid;

  let trips;

  const = 

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

  try {
    await createdTrip.save();
  } catch (err) {
    const error = new HttpError("Creating trip failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ trip: createdTrip });
};

const updateTrip = async (req, res, next) => {
  const { destination, activity, items } = req.body;
  const tripId = req.params.tid;

  let trip;
  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update trip.",
      500
    );
    return next(error);
  }

  trip.destination = destination;
  trip.activity = activity;
  trip.items = items;

  try {
    await trip.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update trip.",
      500
    );
    return next(error);
  }

  res.status(200).json({ trip: trip.toObject({ getters: true }) });
};

const deleteTrip = async (req, res, next) => {
  const tripId = req.params.tid;

  let trip;
  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update trip.",
      500
    );
    return next(error);
  }

  try {
    await trip.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update trip.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted trip." });
};

exports.getTripById = getTripById;
exports.getTripByUserId = getTripsByUserId;
exports.createTrip = createTrip;
exports.updateTrip = updateTrip;
exports.deleteTrip = deleteTrip;
