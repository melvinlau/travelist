const express = require("express");
const tripsControllers = require("../controllers/trips");

const router = express.Router();

router.get("/:tid", tripsControllers.getTripById);

router.get("/user/:uid", tripsControllers.getTripByUserId);

module.exports = router;
