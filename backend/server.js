const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const tripsRoutes = require("./src/routes/trips");
const HttpError = require("./src/models/http-error");

const router = express.Router();

const API_PORT = 3001;
const app = express();

app.use(cors());

// optional: parses the request body to be a readable json format (for logging and bodyParser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

//append /api for http requests
app.use("/api/trips", tripsRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

//launch backend
mongoose
  .connect(
    "mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/development?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    () => console.log('connected to database')
  )
  .then(() => {
    app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
  })
  .catch(err => {
    console.log(err);
  });
