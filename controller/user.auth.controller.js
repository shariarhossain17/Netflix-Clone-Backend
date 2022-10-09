const { registerService, logInService } = require("../services/user.auth.services");
const { generateToken } = require("../utils/token");



// register user
module.exports.registerUser = async (req, res) => {
  try {
    const user = await registerService(req.body);

    res.status(200).json({
      status: true,
      message: "user crete success",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "user can't crete",
      error: error,
    });
  }
};

//  login user
module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: false,
        message: "please provide email or password",
      });
    }

    const user = await logInService(email);

    if (!user) {
      return res.status(403).json({
        status: false,
        message: "please signup",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        message: "Password incorrect",
      });
    }

    

   const token = generateToken(user)

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: true,
      message: "login success",
      data: {
        user: others,
        token:token
      },
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "user can't find",
      error: error,
    });
  }
};
