const jwt = require("jsonwebtoken");

// Middleware to verify access token
function verifyAccessToken(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(403).json({
                message: "Authentication failed",
                error: "Invalid or missing access token",
                data: null
            });
        }

        const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
        const verifiedData = jwt.verify(token, process.env.SECRET);

        console.log("verifyAccessToken:", verifiedData);

        req.userEmail = verifiedData.email;
        req.userRole = verifiedData.role;

        next();
    } catch (error) {
        return res.status(403).json({
            message: "Authentication failed",
            error: error.message || "Invalid token",
            data: null
        });
    }
}

// Middleware to check if user is a patient
function checkIsPatient(req, res, next) {
    if (req.userRole !== "patient") {
        return res.status(403).json({
            message: "Unauthorized access",
            error: "Only patients can access this resource",
            data: null
        });
    }

    next();
}

// Middleware to check if user is a doctor
function checkIsDoctor(req, res, next) {
    if (req.userRole !== "doctor") {
        return res.status(403).json({
            message: "Unauthorized access",
            error: "Only doctors can access this resource",
            data: null
        });
    }

    next();
}

module.exports = {
    verifyAccessToken,
    checkIsPatient,
    checkIsDoctor
};
