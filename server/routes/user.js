const express = require("express");
const router= express.Router();

const {signup,login,sendOtp,logout,loginCheck}= require("../controllers/user");
const {resetPassword}= require("../controllers/resetPassword");
const {auth}= require("../middlewere/auth");

router.post("/signup",signup);
router.post("/login",login);
router.post("/sendotp",sendOtp);
router.get("/loginCheck",auth,loginCheck);
router.get("/logout",logout);
router.post("/reset-password",resetPassword);

module.exports= router;