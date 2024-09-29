const express = require('express');
const RestaurantController = require('../controllers/RestaurantController');
const router = express.Router();

router.get('/', RestaurantController.getAllRestaurants);
router.post('/', RestaurantController.addRestaurant);

module.exports = router;
