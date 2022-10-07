const { registerService, logInService } = require("../services/user.services");


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

    const {email,password} = req.body

    if(!email || !password){
      res.status(401).json({
        status:false,
        message:'please provide email or password',
      })
    };

    const user = await logInService(email);


    if(!user){
      res.status(403).json({
        status:false,
        message:'wrong password or email',
      })
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    console.log(isPasswordValid);

    if (!isPasswordValid) {
      res.status(403).json({
        message: "Password incorrect",
      });
    }

    const {password:pwd,...others} = user.toObject()

    res.status(200).json({
      status: true,
      message: "login success",
      user: others,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "user can't find",
      error: error,
    });
  }
};

