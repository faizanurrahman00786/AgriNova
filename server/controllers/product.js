const User = require("../model/User");
const Product = require("../model/Product");
const Category = require("../model/Category");
const MSP = require("../model/MSP");
const imageUploader = require("../utils/imageUploader");

exports.createProduct = async (req, res) => {

    try {

        const userId = req.user.id;
        const userDetails = await User.findById(userId);

        let { productName,
            price, stock, description, category } = req.body;
        const thumbnail = req.files.thumbnailImage;

        const mspProduct = await MSP.findOne({ cropName: productName });

        if (price < mspProduct.price)
            price = mspProduct.price;

        if (
            !productName ||
            !description ||
            !price ||
            !stock ||
            !category ||
            !thumbnail
        ) {
            return res.status(400).json({
                success: false,
                message: "All Fields are Mandatory",
            });
        }

        const categoryDetails = await Category.findOne({ categoryName: category });
        if (!categoryDetails) {
            return res.status(404).json({
                success: false,
                message: "Category Details Not Found",
            });
        }

        const thumbnailImage = await imageUploader(
            thumbnail,
            process.env.FOLDER_NAME
        );


        const product = await Product.create({

            productName,
            stock, price,
            image: thumbnailImage.secure_url,
            description,
            seller: userDetails._id

        });

        await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    product: product._id
                },
            },
            { new: true }
        );

        await Category.findOneAndUpdate(
            { categoryName: category },
            {
                $push: {
                    productList: product._id,
                },
            },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: product,
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: true,
            message: "Product couldn't created",
        })
    }

}

exports.getProductDetails = async (req, res) => {

    try {

        const productId = req.body.productId;

        const productDetails = await Product.findById(
            productId)
             .populate({
                path: "seller",
                select: "firstName lastName email image",
                populate: {
                    path: "product",
                    populate:{
                        path:"seller"
                    }
                }
            })

        if (!productDetails) {
            return res.status(400).json({
                success: false,
                message: "Could not find the product",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product Details fetched successfully",
            data: productDetails,
        })

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getAllProducts = async (req, res) => {

    try {

        const { city } = req.body;

        const allProducts = await Product.find({})
            .populate({
                path: "seller",
                select: "firstName lastName email",
                populate: {
                    path: "personalInfo",
                    select: "city"
                }
            })
            .exec();

        
        let matchedProducts = allProducts.filter(function (Product) {
            if (Product.seller.personalInfo.city === city)
                return Product;
        })

        return res.status(200).json({
            success: true,
            message: "All products fetched successfully",
            data: matchedProducts,
        });

    } catch (error) {

        console.log(error);
        return res.status(404).json({
            success: false,
            message: "Couldn't fetched products",
        });
    }
};

exports.addStock = async (req, res) => {

    try {
        const { productId, stock } = req.body;

        let productDetails = await Product.findById(productId);

        if (!productDetails) {
            return res.status(400).json({
                success: false,
                message: "Could not find the product",
            });
        }

        productDetails.stock = stock + productDetails.stock;
        let updatedProduct = await productDetails.save();

        return res.status(200).json({
            success: true,
            message: "Stock updated successfully",
            data: updatedProduct,
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Could not update the product",
        });
    }

}

exports.updatePrice = async (req, res) => {

    try {
        let { productId, price } = req.body;

        let productDetails = await Product.findById(productId);

        if (!productDetails) {
            return res.status(400).json({
                success: false,
                message: "Could not find the product",
            });
        }

        const mspProduct = await MSP.findOne({ cropName: productDetails.productName });

        if (price < mspProduct.price)
            price = mspProduct.price;

        productDetails.price = price;
        let updatedProduct = await productDetails.save();

        return res.status(200).json({
            success: true,
            message: "Price updated successfully",
            data: updatedProduct,
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Could not update the product",
        });
    }

}