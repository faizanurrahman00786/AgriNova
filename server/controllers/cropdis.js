const CropDis = require("../model/CropDis");
const User = require("../model/User");
require("dotenv").config();
const fs= require("fs");

const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

exports.getAllCropDis = async (req, res) => {

    try {

        const userId = req.user.id
        const userDetails = await User.findById(userId).populate("dsHistory").exec();

        if (!userDetails) {
            return res.status(503).json({
                success: false,
                message: "Could not find user",
            })
        }

        return res.status(200).json({
            success: true,
            data: userDetails.dsHistory,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};


exports.cropDisCheck = async (req, res) => {

    try {

        const userId= req.user.id;
        const file = req.files.cropImage;


        // Format the image for the Gemini SDK using file.data.
        const imagePart = {
            inlineData: {
                data:  fs.readFileSync(file.tempFilePath).toString("base64"),
                mimeType: file.mimetype
            },
        };

        const prompt = `Analyze this crop leaf image. Identify if it has a disease. 
                    Respond ONLY with a JSON object following this exact structure:
         {
            "cropName": "name of the plant identified (e.g. Tomato, Wheat)",
            "healthy": Yes or No,
            "diseaseName": "string or healthy if healthy",
            "confidence": "percentage",
            "symptoms": ["list of visible symptoms"],
            "treatment": "short description of organic/chemical fixes"
         }
        `;

        // 3. Send to Gemini
        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash-lite',
            contents: [prompt, imagePart],
            config: { responseMimeType: "application/json" }
        });

        const cropDisData = JSON.parse(response.text.trim());

        const savedCropDis= await CropDis.create({
            cropName: cropDisData.cropName,
            cropDis: cropDisData.diseaseName,
            healthy: cropDisData.healthy,
        })

         await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    dsHistory: savedCropDis._id,
                },
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            data: cropDisData,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to analyze crop image'
        });
    }
};
