const jwt = require("jsonwebtoken");
require("dotenv").config()


exports.generateToken = (userInfo) =>{
    const payload = {
        email:userInfo.email,
        isAdmin:userInfo.isAdmin,
        id:userInfo._id
    }

    const token = jwt.sign(payload,process.env.jwt_token,{
        expiresIn:"5d"
    })

    return token
}