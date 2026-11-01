const User = require("../model/User");
const OTP = require("../model/OTP");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");

exports.resetPassword = async (req, res) => {
    try {
        let { email, password, otp } = req.body;
        const fetchedOTP = await OTP.findOne({ email });
        if (!fetchedOTP) {
            return res.status(404).json({
                success: false,
                message: "OTP not found",
            })
        }
        if (fetchedOTP.otp !== otp) {
            return res.status(500).json({
                success: false,
                message: "Incorrect OTP",
            })
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not exist",
            })
        }
        let hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
        mailSender(email, "Password updated successfully", passwordUpdated(email, user.firstName));

        return res.status(200).json({
            success: true,
            message: "Password updated successfully",
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Password not updated",
        })
    }
}