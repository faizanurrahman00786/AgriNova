const express = require("express");
const router= express.Router();

const {cropDisCheck,getAllCropDis}= require("../controllers/cropdis");
const {auth}= require("../middlewere/auth");

router.post("/cropdscheck",auth,cropDisCheck);
router.get("/getallds",auth,getAllCropDis);

module.exports= router;