const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const router = require("../routes");
const jwt = require('jsonwebtoken');


async function userLogoutController(req, resp) {
    try {
        resp.clearCookie("token");

        resp.json({
            data:[],
            message: "Logout Successful",
            error: false,
            success: true
        })

    } catch (error) {
        resp.json({
            message: error.message,
            error: true,
            success: false
        })
        console.log(error.message)
    }

}

module.exports = userLogoutController