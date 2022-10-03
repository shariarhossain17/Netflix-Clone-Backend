const  mongoose = require("mongoose")
 
require("dotenv").config()

 const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DataBase, {
    })
    .then(data => {
        console.log("mongoDb connected");
    })
  } catch (error) {
    console.log(error.message)
  }
}


module.exports = connectDb