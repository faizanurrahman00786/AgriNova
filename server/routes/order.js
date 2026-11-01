const express = require("express");
const router = express.Router();

const { getAllOrder } = require("../controllers/order");
const { auth } = require("../middlewere/auth");

router.get("/getallorder", auth, getAllOrder);

module.exports = router;