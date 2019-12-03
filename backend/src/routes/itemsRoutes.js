const express = require('express');
const itemsControllers = require('../controllers/items');

const router = express.Router();

router.get('/:iid', itemsControllers.getItemById);

router.post('/custom', itemsControllers.createCustomItem);

router.post('/', itemsControllers.createItem);

router.delete('/:iid', itemsControllers.deleteItem);

router.get('/activity/:name', itemsControllers.getItemsByActivity);

router.get('/weather/:tag', itemsControllers.getItemsByWeather);

module.exports = router;
