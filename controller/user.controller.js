const { rawListeners } = require("../models/user.model");
const {
  getUserService,
  updateUserService,
} = require("../services/user.service");

const bCrypTo = require("bcryptjs");

module.exports.getUser = async (req, res) => {
  try {
    const users = await getUserService();
    res.status(200).json({
      status: true,
      message: "user get success",
      user: users,
    });
  } catch (error) {
    res.status();
  }
};

// update user
module.exports.updateUser = async (req, res) => {
  try {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      if (req.body.password) {
        const password = req.body.password;
        console.log(password);
        const hashPassword = bCrypTo.hashSync(password);

        req.body.password = hashPassword;
      }
    }
    const users = await updateUserService(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "user updated success",
      user: users,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "user can't updated",
    });
  }
};
