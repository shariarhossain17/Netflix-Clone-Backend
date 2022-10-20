const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const userAuthRoute = require("../routes/user.auth.route");
const userRoute = require("../routes/user.route");
const movieRoute = require("../routes/movie.route");
const listRoute = require('../routes/list.route')

app.use("/api/v1/auth", userAuthRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/movie", movieRoute);
app.use('/api/v1/list',listRoute)

app.get("/", (req, res) => {
  res.send("netflix server running");
});

module.exports = app;
