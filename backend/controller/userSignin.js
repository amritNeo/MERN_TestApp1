const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const router = require("../routes");
const jwt = require('jsonwebtoken');


async function userSignInController(req, resp) {
    try {
        const { email, password } = req.body
        console.log(req.body)
        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }

        //check if user exist or not
        const user = await userModel.findOne({ email })
        if (!user) {
            throw new Error("User Not found");
        } else {
            // check the password
            const checkPassword = await bcrypt.compare(password, user.password)
            console.log("checkPassword", checkPassword)

            if(checkPassword){
                const tokenData = {
                    _id : user._id,
                    email: user.email
                }
                const token =  await jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });
                const tokenOption = {
                    //httpOnly : true,
                    secure : true,
                    maxAge: 1000000, // ttl in seconds (remove this option and cookie will die when browser is closed)
                    signed: true
                }
                resp.cookie("token", token, tokenOption).status(200).json({
                    message : "Login Successful",
                    data : token,
                    success : true,
                    error:false
                })
                  
            }else{
                throw new Error("Please check password");
            }

        }



    } catch (error) {
        resp.json({
            message: error.message,
            error: true,
            success: false
        })
        console.log(error.message)
    }

}

module.exports = userSignInController