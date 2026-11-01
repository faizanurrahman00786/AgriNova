const User = require("../model/User");
const Profile = require("../model/Profile");
const OTP = require("../model/OTP");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../template/emailVerificationTemplate");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const otpgenerator = require("otp-generator");
require("dotenv").config();

exports.signup = async (req, res) => {

    try {

        const { firstName, lastName, email, password, otp, accountType } = req.body;

        if (!firstName || !lastName || !email || !password || !otp || !accountType) {
            return res.status(500).json({
                success: false,
                message: " Fill required fields",
            })
        }


        const userDetails = await User.findOne({ email });
        if (userDetails) {
            return res.status(500).json({
                success: false,
                message: "User already exist",
            })
        }
        const fetchedOtp = await OTP.findOne({ email });
        if (fetchedOtp.otp !== otp) {
            return res.status(500).json({
                success: false,
                message: "OTP doesn't match",
            })
        }

        let hashedPassword = await bcrypt.hash(password, 10);

        let profile = await Profile.create({
            gender: null,
            about: null,
            contactNumber: null,
            bankAccount: null,
            city: null,
        });
        let user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            personalInfo: profile._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
            accountType: accountType,
        });

        return res.status(200).json({
            success: true,
            message: "Signup successfully",
            data: user,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Couldn't signup",
        })
    }

}

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(500).json({
                success: false,
                message: "Fill all required fields",
            })
        }

        let user = await User.findOne({ email }).populate("personalInfo").exec();

        if (!user) {
            return res.status(500).json({
                success: false,
                message: "User doesn't exist, please signup",
            })
        }

        if (await bcrypt.compare(password, user.password)) {

            const token = jwt.sign(
                {
                    email: user.email,
                    id: user._id,
                    accountType: user.accountType,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1h",
                }
            );


            user.token = token;
            user.password = undefined;

            const options = {
                httpOnly: true,
                secure:true,
                sameSite: "none",
            };
            res.cookie("token", token, options).status(200).json({
                success: true,
                user,
                message: "User Login Successfully",
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect",
            });
        }

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Login failed",
        })
    }
}

exports.sendOtp = async (req, res) => {

    try {
        const email = req.body.email;
        if (!email) {
            res.status(401).json({
                success: false,
                message: "Email required",
            });
        }

        let otp = otpgenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });

        console.log("OTP", otp);

        const response = await OTP.findOne({ email });
        if (response) {
            response.otp = otp;
            await response.save();
            await mailSender(email,
                "Verify Your Email",
                emailTemplate(otp));
        }
        else {
            const otpPayload = { email, otp };
            await OTP.create(otpPayload);
        }


        res.status(200).json({
            success: true,
            message: "OTP Sent Successfully",
            
        });

    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: "OTP generating failed",
        });
    }
}


exports.loginCheck = async (req, res) => {

    try {

        const userId = req.user.id;

        let user = await User.findById(userId).populate("personalInfo").exec();

        user.password = undefined;

        if (!user) {
            return res.status(500).json({
                success: false,
                message: "User doesn't exist, please signup",
            })
        }


        res.status(200).json({
            success: true,
            user,
            message: "User Login Successfully",
        });


    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Login failed",
        })
    }
}

exports.logout = async (req, res) => {

    try {

        res.clearCookie("token");
        res.status(200).json({
            success: true,
            message: "User Logout Successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to logout",
        });
    }
}

