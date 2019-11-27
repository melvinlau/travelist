const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET Request in Trips");
  res.json({ message: "It works!" });
});

const DUMMY_TRIP = [
  {
    id: "t1",
    destination: "Paris",
    dateFrom: "2019-11-28",
    dateTo: "2019-11-29",
    activity: "fishing",
    user: "u1"
  }
];

router.get("/:tid", (req, res, next) => {
  const tripId = req.params.tid;
  const trip = DUMMY_TRIP.find(t => {
    return t.id === tripId;
  });

  if (!trip) {
    const error = new Error("Could not find a trip for the provided id");
    error.code = 404;
    throw error;
  }

  res.json({ trip });
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;

  const trip = DUMMY_TRIP.find(t => {
    return t.user === userId;
  });

  if (!trip) {
    const error = new Error("Could not find a trip for the provided user id");
    error.code = 404;
    return next(error);
  }

  res.json({ trip });
});

module.exports = router;
