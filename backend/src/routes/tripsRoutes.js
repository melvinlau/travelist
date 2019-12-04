const express = require('express');
const tripsControllers = require('../controllers/trips');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/:tid', tripsControllers.getTripById);

router.get('/:tid/weather', tripsControllers.getTripWeatherById);

// router.use(checkAuth);

router.post('/', tripsControllers.createTrip);

router.patch('/:tid', tripsControllers.addActivityItems);

router.patch('/:tid/items/custom', tripsControllers.addCustomItem);

router.patch('/:tid/items/packed', tripsControllers.updatePackedItems);

router.delete('/:tid', tripsControllers.deleteTrip);

module.exports = router;
