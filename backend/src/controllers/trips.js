const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const Trip = require('../models/trip');
const itemsController = require('../controllers/items');
const Weather = require('../services/weather-services');
const User = require('../models/user');

const getTripById = async (req, res, next) => {
  const tripId = req.params.tid;
  let trip;

  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a place.',
      500,
    );
    return next(error);
  }

  if (!trip) {
    const error = new HttpError(
      'Could not find a trip for the provided id.',
      404,
    );
    return next(error);
  }

  res.json({ trip: trip.toObject({ getters: true }) });
};

const getTripWeatherById = async (req, res, next) => {
  const tripId = req.params.tid;
  let trip;

  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a place.',
      500,
    );
    return next(error);
  }

  if (!trip) {
    const error = new HttpError(
      'Could not find a trip for the provided id.',
      404,
    );
    return next(error);
  }

  const city = trip.destination;
  const from = trip.dateFrom;
  const to = trip.dateTo;

  let weather;
  try {
    weather = await Weather.getWeather(city, from, to);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not get the weather',
      500,
    );
    return next(error);
  }

  res.json({ trip: trip.toObject({ getters: true }) });
};

const createTrip = async (req, res, next) => {
  const {
    destination, dateFrom, dateTo, activities, user
  } = req.body;

  let weather;
  try {
    weather = await Weather.getWeather(destination, dateFrom, dateTo);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not get the weather',
      500,
    );
    return next(error);
  }

  let weatherItems = [];
  try {
    weatherItems = await itemsController.getItemsByWeather(weather);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not get the weather items',
      500,
    );
    return next(error);
  }

  let defaultItems = [];
  try {
    defaultItems = await itemsController.getDefaultItems();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not get the default items',
      500,
    );
    return next(error);
  }

  const items = [...defaultItems, ...weatherItems];

  const createdTrip = new Trip({
    destination,
    dateFrom,
    dateTo,
    weather,
    activities,
    items,
  });

  let traveller;
  if (user) {
    try {
      traveller = await User.findById(user);
    } catch (err) {
      const error = new HttpError(
        'Creating place failed, please try again',
        500,
      );
      return next(error);
    }

    if (!traveller) {
      const error = new HttpError('Could not find user for provided id', 404);
      return next(error);
    }
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdTrip.save({ session: sess });
    if (traveller) {
      traveller.trips.push(createdTrip);
      await traveller.save({ session: sess });
    }

    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating place failed, please try again.',
      500,
    );
    return next(error);
  }

  res.status(201).json({ trip: createdTrip });
};

const addActivityItems = async (req, res, next) => {
  const { destination, activities } = req.body;
  const tripId = req.params.tid;

  let trip;
  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update trip.',
      500,
    );
    return next(error);
  }

  let itemsByActivity;
  try {
    itemsByActivity = await itemsController.getItemsByActivity(activities);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find items for this activity.',
      500,
    );
    return next(error);
  }

  trip.destination = destination;
  trip.activities = [...trip.activities, ...activities];
  trip.items = [...trip.items, ...itemsByActivity];

  try {
    await trip.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update trip.',
      500,
    );
    return next(error);
  }

  res.status(200).json({ trip: trip.toObject({ getters: true }) });
};

const addCustomItem = async (req, res, next) => {
  const { name, category } = req.body;
  const tripId = req.params.tid;

  let trip;
  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update trip.',
      500,
    );
    return next(error);
  }

  let customItems;
  try {
    customItems = await itemsController.createCustomItem(req.body);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not create this custom item.',
      500,
    );
    return next(error);
  }

  trip.items.push(customItems);

  try {
    await trip.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update trip.',
      500,
    );
    return next(error);
  }

  res.status(200).json({ trip: trip.toObject({ getters: true }) });
};

const deleteTrip = async (req, res, next) => {
  const tripId = req.params.tid;

  let trip;
  try {
    trip = await Trip.findByIdAndRemove(tripId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update trip.',
      500,
    );
    return next(error);
  }

  res.status(200).json({ message: 'Deleted trip.' });
};

const updatePackedItems = async (req, res, next) => {
  const { items, packedItems } = req.body;
  const tripId = req.params.tid;

  let trip;
  try {
    trip = await Trip.findById(tripId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update trip.',
      500,
    );
    return next(error);
  }

  trip.items = items;
  trip.packedItems = packedItems;

  try {
    await trip.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update trip.',
      500,
    );
    return next(error);
  }

  res.status(200).json({ trip: trip.toObject({ getters: true }) });
};

const getTripsById = async (tripsIds) => {
  let trips;

  try {
    trips = await Trip.find({ _id: { $in: tripsIds } });
    console.log('trips query', trips)
  } catch (err) {
    const error = new HttpError('Fetching items failed, please try again', 500);
    return next(error);
  }

  if (!trips || trips.length === 0) {
    const error = new HttpError(
      'Could not find a trip for the provided name.',
      404,
    );
    return next(error);
  }

  console.log("Trips by Id", trips)
  return trips
}

exports.getTripById = getTripById;
exports.getTripWeatherById = getTripWeatherById;
exports.createTrip = createTrip;
exports.addActivityItems = addActivityItems;
exports.addCustomItem = addCustomItem;
exports.deleteTrip = deleteTrip;
exports.updatePackedItems = updatePackedItems;
exports.getTripsById = getTripsById;
