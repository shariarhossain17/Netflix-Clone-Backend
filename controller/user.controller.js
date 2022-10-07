const { registerService } = require("../services/user.services");

module.exports.registerUser = async (req, res) => {
  try {
    const user = await registerService(req.body);

    res.status(200).json({
      status: true,
      message: "user crete success",
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "user can't crete",
      error: error,
    });
  }
};
