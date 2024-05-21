const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://siddhant:siddhant@travelopia.s5gfb0a.mongodb.net/?retryWrites=true&w=majority&appName=travelopia', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

module.exports = connectDB;
