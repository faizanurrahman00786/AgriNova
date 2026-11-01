const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
        },
        orderDate: {
            type: Date,
            required: true,
        },
        productName: {
            type: String,
            required: true,
        },
        sellerName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        buyerName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        }
    }
)
module.exports = mongoose.model("Order", orderSchema);
