const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        gender: {
            type: String,
        },
        about: {
            type: String,
        },
        contactNumber: {
            type: Number,
        },
        bankAccount: {
            type: Number,
        },
        city: {
            type: String,
        }
    }
)
module.exports = mongoose.model("Profile", profileSchema);