const mongoose = require("mongoose");

const cropDisSchema = new mongoose.Schema(
    {
        cropName: {
            type: String,
            required: true,
        },
        healthy: {
            type: String,
            required: true,
        },
        cropDis: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
)
module.exports = mongoose.model("CropDis", cropDisSchema);