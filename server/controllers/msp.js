const MSP = require("../model/MSP");
const Product = require("../model/Product");

exports.createMSP = async (req, res) => {

    try {
        const { cropName, season, price } = req.body;
        if (!cropName || !season || !price) {
            return res.status(500).json({
                success: false,
                message: " Fill required fields",
            })
        }

        let fetchedCrop = await MSP.findOne({ cropName });

        if (fetchedCrop) {
            return res.status(500).json({
                success: false,
                message: "Crop MSP already exist",
            })
        }
        let savedMSP = await MSP.create({
            cropName, season, price
        });

        return res.status(200).json({
            success: true,
            message: "MSP created successfully",
            data: savedMSP,
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: " MSP couldn't created",
        })

    }
}

exports.updateMSP = async (req, res) => {

    try {
        const { cropName, price } = req.body;
        if (!cropName || !price) {
            return res.status(500).json({
                success: false,
                message: " Fill required fields",
            })
        }
        let mspDetails = await MSP.findOne({ cropName });

        if (!mspDetails) {
            return res.status(404).json({
                success: false,
                message: "Crop not found",
            })
        }

        mspDetails.price = price;
        mspDetails.date = Date.now();
        let updatedMSP = await mspDetails.save();

        let ProductList = await Product.find({ productName: cropName });
        let promises = [];
        ProductList.forEach(function (product) {
            if (product.price < updatedMSP.price) {
                product.price = updatedMSP.price;
                promises.push(product.save());
            }
        })
        await Promise.all(promises);


        return res.status(200).json({
            success: true,
            message: "MSP updated successfully",
            data: updatedMSP,
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: " MSP couldn't updated",
        })
    }
}

exports.getAllMSP = async (req, res) => {

    try {

        let allMSP = await MSP.find()
        return res.status(200).json({
            success: true,
            message: "MSP fetched successfully",
            data: allMSP,
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: " MSP couldn't fetched",
        })

    }
}
