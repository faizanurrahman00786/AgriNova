const express = require("express");
const router= express.Router();

const {createProduct,getProductDetails,addStock,updatePrice,getAllProducts}= require("../controllers/product");
const {categoryProducts}= require("../controllers/category")
const {auth,isFarmer}= require("../middlewere/auth");

router.post("/createproduct",auth,isFarmer,createProduct);
router.post("/getproduct-details",getProductDetails);
router.post("/getall-products",getAllProducts);
router.post("/getcategoryproduct",categoryProducts);
router.post("/addstock",auth,isFarmer,addStock);
router.put("/updateprice",auth,isFarmer,updatePrice);

module.exports= router;