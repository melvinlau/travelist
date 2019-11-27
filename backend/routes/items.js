const express = require("express");
const tripsControllers = require("../controllers/trips");

const router = express.Router();

router.get("/:iid", itemsControllers.getItemById);

router.post("/", itemsControllers.createItem);

router.patch("/:iid", itemsControllers.updateItem);

router.delete("/:iid", itemsControllers.deleteItem);

module.exports = router;
