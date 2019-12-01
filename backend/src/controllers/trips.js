const HttpError = require('../models/http-error');
const Trip = require('../models/trip');
const itemsController = require('../controllers/items');
const Weather = require('../services/weather-services');

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
  // console.log(weather);
  res.json({ trip: trip.toObject({ getters: true }) });
};

const getTripsByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let trips;
  try {
    trips = await Trip.find({ user: userId });
  } catch (err) {
    const error = new HttpError(
      'Fetching places failed, please try again later',
      500,
    );
    return next(error);
  }

  if (!trips || trips.length === 0) {
    return next(
      new HttpError('Could not find trips for the provided user id.', 404),
    );
  }

  res.json({ trips: trips.map((trip) => trip.toObject({ getters: true })) });
};

const createTrip = async (req, res, next) => {
  const {
    destination, dateFrom, dateTo, activities, user,
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

  console.log(items);

  const createdTrip = new Trip({
    destination,
    dateFrom,
    dateTo,
    weather,
    activities,
    items,
    user,
  });

  try {
    await createdTrip.save();
  } catch (err) {
    const error = new HttpError('Creating trip failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ trip: createdTrip });
};

const addActivityItems = async (req, res, next) => {
  const {
    destination, activities,
  } = req.body;
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
  const {
    name, category,
  } = req.body;
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


exports.getTripById = getTripById;
exports.getTripsByUserId = getTripsByUserId;
exports.getTripWeatherById = getTripWeatherById;
exports.createTrip = createTrip;
exports.addActivityItems = addActivityItems;
exports.addCustomItem = addCustomItem;
exports.deleteTrip = deleteTrip;
exports.updatePackedItems = updatePackedItems;
