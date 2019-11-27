const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//database structure
const ItemSchema = new Schema(
  {
    name: String,
    category: String,
    activities: Array,
    weather: Array
  },
  { timestamps: true }
);
module.exports = mongoose.model("Item", ItemSchema);