const User = require("../model/User");
const Profile = require("../model/Profile");
const imageUploader = require("../utils/imageUploader");
require("dotenv").config();

exports.updateProfile = async (req, res) => {

    try {

        const { gender, about, contactNumber, city } = req.body;
        const userId = req.user.id;

        const userDetails = await User.findById(userId);
        let profileDetails = await Profile.findByIdAndUpdate(userDetails.personalInfo,
            {
                gender: gender,
                about: about,
                contactNumber: contactNumber,
                city: city
            },
            { new: true },
        );

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: profileDetails,
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Profile couldn't updated",
        })
    }
}

exports.deleteAccount = async (req, res) => {

    try {

        const userId = req.user.id;

        const userDetails = await User.findById(userId);

        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        await Profile.findByIdAndDelete(userDetails.personalInfo);
        await User.findByIdAndDelete(userId);

        return res.status(200).json({
            success: true,
            message: "Account deleted successfully",

        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Account couldn't deleted",
        })
    }
}

exports.getAllUserDetails = async (req, res) => {

    try {
        const id = req.user.id;
        const userDetails = await User.findById(id)
            .populate("personalInfo")
            .populate("orderHistory")
            .exec();

        res.status(200).json({
            success: true,
            message: "User details fetched successfully",
            data: userDetails,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.updateDisplayPicture = async (req, res) => {

    try {
        const displayPicture = req.files.profilePic
        const userId = req.user.id

        const image = await imageUploader(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000
        )

        let updatedProfile = await User.findByIdAndUpdate(
            userId,
            { image: image.secure_url },
            { new: true }
        )
        res.status(200).json({
            success: true,
            message: "Image Updated successfully",
            data: updatedProfile,
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};

exports.getMyProducts = async (req, res) => {

    try {

        const userId = req.user.id
        const userDetails = await User.findById(userId).populate("product").exec();

        if (!userDetails) {
            return res.status(503).json({
                success: false,
                message: "Could not find user",
            })
        }

        return res.status(200).json({
            success: true,
            data: userDetails.product,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};
