const tripService = require('../services/tripServices')

exports.createTrip = async (req, res) => {
  try {
    const trip = await tripService.createTrip(req.body)
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await tripService.getAllTrips();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
