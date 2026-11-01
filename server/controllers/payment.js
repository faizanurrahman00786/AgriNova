const User = require("../model/User");
const Order = require("../model/Order");
const Product = require("../model/Product");
const instance = require("../config/razorpay");

exports.checkPayment = async (req, res) => {

    try {
        const userId = req.user.id;
        const productId = req.body.productId;
        const stock = req.body.stock;

        let product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            })
        }

        if (stock > product.stock) {
            return res.status(500).json({
                success: false,
                message: "stock not available",
            })
        }

        const amount = (product.price) * stock;
        const currency = "INR";

        const options = {
            amount: amount * 100,
            currency,
            receipt: Math.random(Date.now()).toString(),
            notes: {
                productId: product._id,
                userId,
                stock,
            }
        };

        const paymentResponse = await instance.orders.create(options);

        return res.status(200).json({
            success: true,
            message: "Payment initiated",
            orderId: paymentResponse.id,
            currency: paymentResponse.currency,
            amount: paymentResponse.amount,
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Could not initiate order",
        });
    }

}


exports.verifySignature = async (req, res) => {

    const webhookSecret = "12345678";
    const signature = req.headers["x-razorpay-signature"];

    const shasum = crypto.createHmac("sha256", webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if (signature === digest) {
        console.log("Payment is Authorised");

        const { productId, userId, stock } = req.body.payload.payment.entity.notes;
        const orderId = req.body.payload.payment.entity.order_id;
        const amount = req.body.payload.payment.entity.amount;

        try {

            let userDetails = await User.findById(userId);
            let product = await Product.findById(productId).populate("seller", "firstName lastName email").exec();

            let orderDetails = await Order.create({

                orderId: orderId,
                orderDate: Date.now(),
                productName: product.productName,
                sellerName: product.seller._id,
                buyerName: userDetails._id,
                amount: amount,
            })

            await User.findByIdAndUpdate(
                userId,
                {
                    $push: {
                        orderHistory: orderDetails._id,
                    },
                },
                { new: true }
            );

            await User.findByIdAndUpdate(
                product.seller._id,
                {
                    $push: {
                        orderHistory: orderDetails._id,
                    },
                },
                { new: true }
            );

            await User.findOneAndUpdate(
                { accountType: "admin" },
                {
                    $push: {
                        orderHistory: orderDetails._id,
                    },
                },
                { new: true }
            );

            product.stock = (product.stock) - stock;
            let updatedProduct = await product.save();

            return res.status(200).json({
                success: true,
                data1: orderDetails,
                data2: updatedProduct,
            })

        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Payment couldn't verified",
            });
        }
    }

};