/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');
const User = require('../models/user');
const tripsController = require('../controllers/trips');

const signup = async (req, res, next) => {
  // eslint-disable-next-line object-curly-newline
  const { name, email, password, trips } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500,
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422,
    );
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      'Could not create user, please try again.',
      500,
    );
    return next(error);
  }

  console.log('user controller: signup request: trips', trips);

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    trips: trips,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again.', 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      'supersecret_dont_share',
      { expiresIn: '1h' },
    );
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500,
    );
    return next(error);
  }

  res
    .status(201)
    .json({
      userId: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      trips: createdUser.trips,
      token: token
    });

};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500,
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401,
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      'Could not log you in, please check your credentials and try again.',
      500,
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401,
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      'supersecret_dont_share',
      { expiresIn: '1h' },
    );
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500,
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    token: token,
  });
};

const getUserTrips = async (req, res, next) => {
  const userId = req.params.uid;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      'Fetching places failed, please try again later',
      500,
    );
    return next(error);
  }

  if (!user) {
    return next(
      new HttpError('Could not find user for the provided user id.', 404),
    );
  }

  const trips = await tripsController.getTripsById(user.trips)
  console.log("user trips", trips)
  res.json({ trips: trips });
};

exports.signup = signup;
exports.login = login;
exports.getUserTrips = getUserTrips;
