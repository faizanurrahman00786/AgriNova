const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
    try {

        const token = req.cookies.token;

        if (!token) {
            return res.status(403).json({
                success: false,
                message: "Token not found",
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorize,please login",
        })
       
    }
}

exports.isFarmer = async (req, res, next) => {
    try {
        if (req.user.accountType !== "farmer") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Farmer',
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        })
    }
}

exports.isBuyer = async (req, res, next) => {
    try {
        if (req.user.accountType !== "buyer") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Buyer',
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        })
    }
}

exports.isAdmin = async (req, res, next) => {
    try {
        if (req.user.accountType !== "admin") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Admin',
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        })
    }
}
