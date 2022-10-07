const express = require("express");
const app = express();
const cors = require('cors');


app.use(cors())
app.use(express.json())

const userRoute = require('../routes/user.route')


app.use('/api/v1/auth',userRoute)


app.get('/',(req,res)=> {
    res.send("netflix server running")
})


module.exports = app