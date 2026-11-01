const nodemailer = require("nodemailer");

async function mailSender(email, title, body) {

    try {
        let transporter = await nodemailer.createTransport({
            host: smtp.gmail.com,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            }
        })
        const emailInfo = await transporter.sendMail({
            from: "AgriNova",
            to: email,
            subject: title,
            html: body
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Email not sent",
        })
    }

}
module.exports = mailSender;

