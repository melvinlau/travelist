const express = require('express');
const usersController = require('../controllers/usersControllers');

const router = express.Router();

router.get('/:uid/trips', usersController.getUserTrips)

router.post('/signup', usersController.signup);

router.post('/login', usersController.login);

module.exports = router;
