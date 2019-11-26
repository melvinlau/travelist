const express = require("express");
const Data = require("../mongoose");

const router = express.Router();

router.post("/createTrip", Data.createTrip);

//get method for database
// router.get("/getData", (req, res) => {
//   Data.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   });
// });

// //update method for database
// router.post("/updateData", (req, res) => {
//   const { id, update } = req.body;
//   Data.findAndModify(id, update, err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// //update method for database
// router.delete("/deleteData", (req, res) => {
//   const { id } = req.body;
//   Data.findOneAndRemove(id, err => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });

// //create method for database
// router.post("/putData", (req, res) => {
//   let data = new Data();

//   const { id, activity } = req.body;

//   if ((!id && id !== 0) || !activity) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//   // data.destination = destination;
//   data.activity = activity;
//   data.id = id;
//   data.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });
