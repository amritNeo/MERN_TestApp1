const userModel = require("../models/userModel");

async function UserDetailsController(req, res) {
    try {
        console.log("req userId", req.userId);
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            error: false,
            success: true,
            data: user,
            message: "User details"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }

}

module.exports = UserDetailsController