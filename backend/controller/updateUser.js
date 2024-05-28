const userModel = require("../models/userModel");

async function updateUserController(req, res) {
    try {
        const { userId, email, name, role } = req.body
        const sessionUser  =  req.userId
        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role }),
        }

        const user = await userModel.findById(sessionUser)
        console.log("user role", user.role)

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        res.json({
            message: 'User Update Successful',
            data : updateUser,
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

module.exports = updateUserController