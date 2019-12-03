/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const HttpError = require('../models/http-error');
const Item = require('../models/item');

const getItemById = async (req, res, next) => {
  const itemId = req.params.iid;
  let item;

  try {
    item = await Item.findById(itemId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find an item.',
      500,
    );
    return next(error);
  }

  if (!item) {
    const error = new HttpError(
      'Could not find an item for the provided id.',
      404,
    );
    return next(error);
  }

  res.json({ item: item.toObject({ getters: true }) });
};

const createItem = async (req, res, next) => {
  const {
 name, category, activities, weather
} = req.body;

  const createdItem = new Item({
    name,
    category,
    activities,
    weather,
  });

  try {
    await createdItem.save();
  } catch (err) {
    const error = new HttpError('Creating item failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ item: createdItem });
};

const deleteItem = async (req, res, next) => {
  const itemId = req.params.iid;

  let item;
  try {
    item = await Item.findByIdAndRemove(itemId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update item.',
      500,
    );
    return next(error);
  }

  res.status(200).json({ message: 'Deleted item.' });
};

const getItemsByActivity = async (array) => {
  let items;

  try {
    items = await Item.find({ activities: { $in: array } });
  } catch (err) {
    const error = new HttpError('Fetching items failed, please try again', 500);
    return next(error);
  }

  if (!items || items.length === 0) {
    const error = new HttpError(
      'Could not find an item for the provided name.',
      404,
    );
    return next(error);
  }

  return items;
};

const getItemsByWeather = async (array) => {
  let items;
  try {
    items = await Item.find({ weather: { $in: array } });
  } catch (err) {
    const error = new HttpError('Fetching items failed, please try again', 500);
    return next(error);
  }

  if (!items || items.length === 0) {
    const error = new HttpError(
      'Could not find an item for the provided name.',
      404,
    );
    return next(error);
  }

  return items;
};

const getDefaultItems = async () => {
  let items;

  try {
    items = await Item.find({ default: { $eq: true } });
  } catch (err) {
    const error = new HttpError(
      'Fetching default items failed, please try again',
      500,
    );
    return next(error);
  }

  if (!items || items.length === 0) {
    const error = new HttpError(
      'Could not find an item for the provided name.',
      404,
    );
    return next(error);
  }

  return items;
};

const createCustomItem = async (req, res, next) => {
  const { name, category } = req.body;

  const createdItem = new Item({
    name,
    category,
    custom: true,
  });

  try {
    await createdItem.save();
  } catch (err) {
    const error = new HttpError('Creating item failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ item: createdItem });
};

exports.getItemById = getItemById;
exports.createItem = createItem;
exports.deleteItem = deleteItem;
exports.getItemsByActivity = getItemsByActivity;
exports.getItemsByWeather = getItemsByWeather;
exports.getDefaultItems = getDefaultItems;
exports.createCustomItem = createCustomItem;
