import mongoose from 'mongoose';

const restSchema = new mongoose.Schema({
  credentials: {
    required: true,
    type: Object
  },
  info: {
    required: true,
    type: Object
  },
  booked: {
    required: true,
    type: Array
  }
});

module.exports = mongoose.model('Rest', restSchema);
