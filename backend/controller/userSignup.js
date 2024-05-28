const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const router = require("../routes");


async function userSignUpController(request, response){
    try {
        const {email, password, name} =  request.body
        console.log(request.body)

        const user = await userModel.findOne({email})

        if(user){
            throw new Error("User already exisits");
        }
        if(!email){
            throw new Error("Please provide email");
        }
        if(!password){
            throw new Error("Please provide password");
        }
        if(!name){
            throw new Error("Please provide name");
        }
       
        var salt = bcrypt.genSaltSync(10);
        var hashPassword = bcrypt.hashSync(password, salt);
        if(!hashPassword){
            throw new Error("Error in encryption");
        }
        const payload = {
            ...request.body,
            role: "GENERAL",
            password:hashPassword
        }
        const userData = new userModel(payload)
        const saveUser = await userData.save()
        response.status(201).json({
            data : saveUser,
            success : true,
            error:false,
            message : "User Created Successfully"
        })

    } catch (error) {
        response.json({
            message: error.message,
            error :true,
            success:false
        })
        console.log(error.message)
    }
}

module.exports = userSignUpController