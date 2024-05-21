const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// Routes
router.post('/trips', tripController.createTrip);
router.get('/trips', tripController.getAllTrips);

module.exports = router;