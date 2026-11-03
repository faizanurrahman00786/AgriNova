const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../template/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 60 * 5,
        },
    });

async function sendVerificationEmail(email, otp) {

    try {
        const mailResponse = await mailSender(
            email,
            "Verify Your Email",
            emailTemplate(otp)
        );
    } catch (error) {
        console.log("Error in sending email: ", error);

    }
}

OTPSchema.pre("save", async function () {

    await sendVerificationEmail(this.email, this.otp);

});

const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;
