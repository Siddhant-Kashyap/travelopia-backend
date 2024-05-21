const Trip = require('../models/Trip')

exports.createTrip = async (tripData) => {
  try {
    const trip = new Trip(tripData);
    await trip.save();
    return trip;
  } catch (error) {
    throw error;
  }
};

exports.getAllTrips = async () => {
  try {
    const trips = await Trip.find();
    return trips;
  } catch (error) {
    throw error;
  }
};
