const Order = require("../model/Order");

exports.getAllOrder = async (req, res) => {

    try {

        let allOrder = await Order.find().populate("buyerName", "firstName lastName")
            .populate({
                path: "sellerName",
                select: "firstName lastName email",
                populate: {
                    path: "personalInfo",
                    select: "bankAccount",
                }
            })
        return res.status(200).json({
            success: true,
            message: "Order fetched successfully",
            body: allOrder,
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: " Order couldn't fetched",
        })

    }
}