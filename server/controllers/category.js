const Category = require("../model/Category");

exports.categoryProducts = async (req, res) => {

    try {
        const { categoryName } = req.body;
        let categoryProducts = await Category.findOne({ categoryName }).populate("productList").exec();

        if (!categoryProducts) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            })
        }
       
        return res.status(200).json({
            success: true,
            message: "fetched successfully",
            data: categoryProducts.productList,
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: "  couldn't fetched",
        })

    }
}