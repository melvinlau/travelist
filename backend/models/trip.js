const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//database structure
const DataSchema = new Schema(
  {
    id: Number,
    destination: String
  },
  { timestamps: true }
);
module.exports = mongoose.model("Data", DataSchema);
