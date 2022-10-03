const port = process.env.PORT || 8000

const color = require("colors")


const app = require('./app/app')
const connectDb = require("./db/db")
connectDb()


app.listen(port, () => {
    console.log(`server on running ${port}`.red.bold);
})