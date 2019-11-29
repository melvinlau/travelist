const express = require('express');
const tripsControllers = require('../controllers/trips');

const router = express.Router();

router.get('/:tid', tripsControllers.getTripById);

router.get('/:tid/weather', tripsControllers.getTripWeatherById);

router.get('/user/:uid', tripsControllers.getTripsByUserId);

router.post('/', tripsControllers.createTrip);

router.patch('/:tid', tripsControllers.updateTrip);

router.delete('/:tid', tripsControllers.deleteTrip);

module.exports = router;
