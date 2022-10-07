const mongoose = require("mongoose");
const validator = require("validator")
const bCrypTo = require("bcryptjs")

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


userSchema.pre("save",function(next){
  if(!this.isModified("password")){
    return next()
  }

  const password = this.password;

  const  hashPassword = bCrypTo.hashSync(password)

  this.password = hashPassword;
  next()
})


userSchema.methods.comparePassword = function(password,hash){
  const isPasswordValid =  bCrypTo.compareSync(password,hash)
  return isPasswordValid
}

const User = mongoose.model("User",userSchema)

module.exports = User
