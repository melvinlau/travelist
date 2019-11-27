const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//database structure
const ItemSchema = new Schema(
  {
    name: String,
    tags: Array,
    category: String,
    weather: Array
  },
  { timestamps: true }
);
module.exports = mongoose.model("Item", ItemSchema);