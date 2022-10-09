const { rawListeners } = require("../models/user.model");
const {
  getUserService,
  updateUserService,
  deleteUserService,
  getUserServiceById,
  getAllUserService,
  getStatsUser,
} = require("../services/user.service");

const bCrypTo = require("bcryptjs");

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

      const users = await updateUserService(req.params.id, req.body);
      res.status(200).json({
        status: true,
        message: "user updated success",
        user: users,
      });
    } else {
      res.status(403).json({
        status: false,
        message: "you can update only your account",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "user can't updated",
    });
  }
};

// delete user
module.exports.deleteUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      const users = await deleteUserService(req.params.id);
      res.status(200).json({
        status: true,
        message: "user deleted success",
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "user can't deleted",
      });
    }
  } else {
    res.status(403).json({
      status: false,
      message: "you can delete only your account",
    });
  }
};

// get user by id
module.exports.getUserById = async (req, res) => {
  try {
    const users = await getUserServiceById(req.params.email);

    const { password: pwd, ...others } = users.toObject();
    res.status(200).json({
      status: true,
      message: "user get success",
      user: others,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "user can't get",
    });
  }
};

// get all user
module.exports.getAllUser = async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = await getAllUserService(query);
      res.status(200).json({
        status: true,
        message: "user get success",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "user can't get",
        err: error,
      });
    }
  } else {
    res.status(403).json({
      status: false,
      message: "you have no access this route",
    });
  }
};

// get user stats

module.exports.getUserStats = async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  try {

    console.log(months);
    const data = await getStatsUser(months)

    res.status(200).json({
        message:"success",
        data:data
    })
    
  } catch (error) {
    res.status(400).json({
        message:"can't get data",
        err:error
    })
  }
};
