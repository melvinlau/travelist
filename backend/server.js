const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./models/data");
const Trip = require("./mongoose");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

//Database
const dbRoute =
  "mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/test?retryWrites=true&w=majority";

// connect back end to database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// check if database connection successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// optional: parses the request body to be a readable json format (for logging and bodyParser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

//get method for database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// router.post("/trips", Trip.createTrip);

//update method for database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findAndModify(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

//update method for database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

//create method for database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, activity } = req.body;

  if ((!id && id !== 0) || !activity) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  // data.destination = destination;
  data.activity = activity;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

//append /api for http requests
app.use("/api", router);

//launch backend
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
