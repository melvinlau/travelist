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

const getTripById = (req, res, next) => {
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
};

const getTripByUserId = (req, res, next) => {
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
};

exports.getTripById = getTripById;
exports.getTripByUserId = getTripByUserId;
