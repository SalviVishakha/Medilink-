const Router = require("express").Router();
const { verifyAccessToken, checkIsPatient } = require("../middlewares/authentication");
const User = require("../models/user");
const lodash = require("lodash");

// GET /user
Router.get("/", verifyAccessToken, async (req, res) => {
    try {
        const doc = await User.findOne({ email: req.userEmail, role: req.userRole });
        if (!doc) {
            return res.status(404).json({
                message: "User not found",
                error: "Not found",
                data: null
            });
        }

        const userObj = doc.toObject();
        delete userObj.password;

        return res.status(200).json({
            message: "User fetch successful",
            error: null,
            data: userObj
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            message: "User fetch failed",
            error: error.message,
            data: null
        });
    }
});

// UPDATE /user
Router.put("/", verifyAccessToken, async (req, res) => {
    try {
        if (lodash.isEmpty(req.body)) {
            return res.status(400).json({
                message: "Bad request",
                error: "Send user information",
                data: null
            });
        }

        const userDoc = await User.findOneAndUpdate(
            { email: req.userEmail, role: req.userRole },
            { ...req.body },
            { new: true }
        );

        if (!userDoc) {
            return res.status(404).json({
                message: "User not found",
                error: "Not found",
                data: null
            });
        }

        const userObj = userDoc.toObject();
        delete userObj.password;

        return res.status(200).json({
            message: "User update successful",
            error: null,
            data: userObj
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            message: "User update failed",
            error: error.message,
            data: null
        });
    }
});

// DELETE /user
Router.delete("/", verifyAccessToken, async (req, res) => {
    try {
        const userDoc = await User.findOneAndDelete({ email: req.userEmail, role: req.userRole });
        
        if (!userDoc) {
            return res.status(404).json({
                message: "User not found",
                error: "Not found",
                data: null
            });
        }

        const userObj = userDoc.toObject();
        delete userObj.password;

        return res.status(200).json({
            message: "User delete successful",
            error: null,
            data: userObj
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            message: "User delete failed",
            error: error.message,
            data: null
        });
    }
});

// GET /user/doctors
Router.get("/doctors", 
    verifyAccessToken,
    checkIsPatient,
    async (req, res) => {
        try {
            const doctors = await User.find({ role: "doctor" })
                .select("name email _id profile.specialization profile.address");

            return res.status(200).json({
                message: "Doctors fetch successful",
                error: null,
                data: doctors
            });
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).json({
                message: "Doctors fetch failed",
                error: error.message,
                data: null
            });
        }
    }
);

module.exports = Router;