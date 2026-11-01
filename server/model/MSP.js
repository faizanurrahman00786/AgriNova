const mongoose = require("mongoose");

const mspSchema = new mongoose.Schema(
    {
        cropName: {
            type: String,
            required: true,
        },
        season: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
            default: Date.now,
        }
    }
)
module.exports=mongoose.model("MSP",mspSchema);