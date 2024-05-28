const jwt = require('jsonwebtoken');

async function authToken(req, res, next){
    try {
        const token = req.cookies?.token

        console.log("token", token)

        if(!token){
            return res.status(400).json({
                message: "User not Login",
                error : true,
                success : false,
            })
        }

        // invalid token
        jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY, function(err, decoded) {
           console.log("decoded", decoded)
           console.log("err",err)

           if(err){
            console.log('error auth',err);
           }

           req.userId = decoded?._id;
           next();
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message || error,
            data : [],
            error:true,
            success:false
        });
    }

}

module.exports = authToken