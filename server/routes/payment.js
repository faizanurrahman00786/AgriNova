const express = require("express");
const router= express.Router();

const {checkPayment}= require("../controllers/payment");
const {auth,isBuyer}= require("../middlewere/auth");

router.post("/payment", auth, isBuyer, checkPayment);

module.exports= router;