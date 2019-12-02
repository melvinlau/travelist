const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema(
  {
    name: String,
    category: String,
    activities: Array,
    default: Boolean,
    weather: Array,
    custom: Boolean,
  },
  { timestamps: true },
);
module.exports = mongoose.model('Item', ItemSchema);
