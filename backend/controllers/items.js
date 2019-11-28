const HttpError = require("../models/http-error");
const Item = require("../models/item");

const getItemById = async (req, res, next) => {
  const itemId = req.params.iid;
  let item;

  try {
    item = await Item.findById(itemId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find an item.",
      500
    );
    return next(error);
  }

  if (!item) {
    const error = new HttpError(
      "Could not find an item for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ item: item.toObject({ getters: true }) });
};

const createItem = async (req, res, next) => {
  const { name, category, activities, weather } = req.body;

  const createdItem = new Item({
    name,
    category,
    activities,
    weather
  });

  try {
    await createdItem.save();
  } catch (err) {
    const error = new HttpError("Creating item failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ item: createdItem });
};

const updateItem = async (req, res, next) => {
  const { name, category, activities, weather } = req.body;
  const itemId = req.params.iid;

  let item;
  try {
    item = await Item.findById(itemId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update item.",
      500
    );
    return next(error);
  }

  item.name = name;
  item.category = category;
  item.activities = activities;
  item.weather = weather;

  try {
    await trip.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update item.",
      500
    );
    return next(error);
  }

  res.status(200).json({ item: item.toObject({ getters: true }) });
};

const deleteItem = async (req, res, next) => {
  const itemId = req.params.iid;

  let item;
  try {
    item = await Item.findByIdAndRemove(itemId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update item.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted item." });
};

exports.getItemById = getItemById;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;
