const mongoose = require('mongoose');

const { Schema } = mongoose;

const TripSchema = new Schema(
  {
    destination: String,
    dateFrom: Date,
    dateTo: Date,
    activities: Array,
    weather: Array,
    image: String,
    items: Array,
    packedItems: Array,
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);
module.exports = mongoose.model('Trip', TripSchema);
