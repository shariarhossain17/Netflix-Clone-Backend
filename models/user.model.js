const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate:[validator.isEmail,"provide your email"]
  },
  password: {
    type: String,
    required: true,
  },

  profilePic: {
    type:String,
    default:""
  },
  isAdmin:{
    type:Boolean,
    default:false
  }

  
},{timestamps:true});

const User = mongoose.model("User",userSchema)

module.exports = User
