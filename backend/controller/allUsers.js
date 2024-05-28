const userModel = require("../models/userModel");

async function allUsersContoller(req, res) {
    try {
        console.log("user ID all users ", req.userId)
        const allUsers = await userModel.find()

        res.json({
            message : 'All Users',
            data: allUsers,
            error: false,
            success: true
        })

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }

}

module.exports = allUsersContoller