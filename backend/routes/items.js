const express = require("express");
const itemsControllers = require("../controllers/items");

const router = express.Router();

router.get("/:iid", itemsControllers.getItemById);

router.post("/", itemsControllers.createItem);

router.patch("/:iid", itemsControllers.updateItem);

router.delete("/:iid", itemsControllers.deleteItem);

module.exports = router;
