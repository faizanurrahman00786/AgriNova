const express = require("express");
const router= express.Router();

const {createMSP,updateMSP,getAllMSP}= require("../controllers/msp");
const {auth,isAdmin}= require("../middlewere/auth");

router.post("/createmsp",auth,isAdmin,createMSP);
router.post("/updatemsp",auth,isAdmin,updateMSP);
router.get("/getallmsp",getAllMSP);

module.exports= router;