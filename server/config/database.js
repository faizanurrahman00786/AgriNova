const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database is connected successfully");

    } catch (error) {
        console.log("Database couldn't connected",error);
    }
}
module.exports = dbConnect;