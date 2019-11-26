const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes/api");
const Data = require("./mongoose");
const router = express.Router();

const API_PORT = 3001;
const app = express();
app.use(cors());

// optional: parses the request body to be a readable json format (for logging and bodyParser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.post("/createTrip", Data.createTrip);
// router.post("/addActivity", Data.addActivity);
router.post("/updateTrip", Data.updateTrip);

//append /api for http requests
app.use("/api", router);

//launch backend
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
