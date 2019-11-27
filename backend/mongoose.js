const mongoose = require("mongoose");
const Trip = require("./models/trip");

//Database
const dbRoute =
  "mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/test?retryWrites=true&w=majority";

// connect back end to database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// check if database connection successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createTrip = async (req, res, next) => {
  const createdTrip = new Trip({
    destination: req.body.destination,
    dateFrom: req.body.dateFrom,
    dateTo: req.body.dateTo
  });
  const result = await createdTrip.save();

  res.json(result);
};

// const updateTrip = async (req, res, next) => {
//   const { id, update } = req.body;
//   Data.findAndModify(id, update, err => {
//     if (err)
//       return res.json({
//         success: false,
//         error: err
//       });
//     return res.json({
//       success: true
//     });
//   });
// };

const updateTrip = async (req, res) => {
  const { id, update } = req.body;
  Data.findAndModify(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
};

// const addActivity = async (req, res, next) => {
//   // const { id, activity } = req.body;
//   Trip.updateOne(
//     { id: req.body.id },
//     { $set: { activity: req.body.activity } },
//     err => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true });
//     }
//   );
// };

// //update method for database
// router.post("/updateData", (req, res) => {
//   const { id, update } = req.body;
//   Data.findAndModify(id, update, err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

//   const createdTrip = new Trip({
//     destination: req.body.destination,
//     dateFrom: req.body.dateFrom,
//     dateTo: req.body.dateTo
//   });
//   const result = await createdTrip.save();

//   res.json(result);
// };

// //update method for database
// router.post("/updateData", (req, res) => {
//   const { id, update } = req.body;
//   Data.findAndModify(id, update, err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

exports.createTrip = createTrip;
// exports.addActivity = addActivity;
exports.updateTrip = updateTrip;
