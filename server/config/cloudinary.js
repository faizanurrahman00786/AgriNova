const cloudinary = require("cloudinary").v2;

async function cloudinaryConnect() {
    try {
        await cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        })
        console.log("Cloudinary connected successfully");
    } catch (error) {
        console.log(error);
    }

}
module.exports = cloudinaryConnect;