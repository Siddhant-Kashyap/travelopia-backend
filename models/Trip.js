const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  budget: {
    type: String,
  },
  destination: {
    type: String,
  },
  interest: {
    type: String,
  },
  traveler: {
    type: Number,
    min: 1
  },
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  days: {
    type: String
  },
  notes: {
    type: String
  }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
