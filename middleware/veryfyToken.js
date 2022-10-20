const jwt = require("jsonwebtoken");

const { promisify } = require("util");

module.exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    console.log(token);

    if (!token) {
      res.status(401).json({
        status: false,
        message: "you are not authenticated",
      });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.jwt_token);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(403).json({
      status: false,
      message: "invalid token",
    });
  }
};
