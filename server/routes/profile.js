const express = require("express");
const router= express.Router();

const {updateProfile,deleteAccount,getAllUserDetails,updateDisplayPicture,getMyProducts}= require("../controllers/profile");
const {auth,isFarmer}= require("../middlewere/auth");

router.post("/update-profile",auth,updateProfile);
router.delete("/deleteAccount",auth,deleteAccount);
router.get("/get-all-user-details",auth,getAllUserDetails);
router.put("/updatepicture",auth,updateDisplayPicture);
router.get("/getmyproducts",auth,isFarmer,getMyProducts);

module.exports= router;