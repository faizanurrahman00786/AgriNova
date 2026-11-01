const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        personalInfo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Profile",
            required: true,
        },
        accountType: {
            type: String,
            required: true,
            enum: ["farmer", "buyer", "admin"],
        },
        image: {
            type: String,
            required: true,
        },
        product: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }],
        dsHistory: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "CropDis",
        }],
        orderHistory: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        }]
    }
)
module.exports = mongoose.model("User", userSchema);
