const User = require("../models/user.model");


// update user
exports.updateUserService = async (id, data) => {
  const users = await User.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return users;
};

// delete user
exports.deleteUserService = async (id) => {
  const users = await User.findByIdAndDelete(id);
  return users;
};

// get user by id
exports.getUserServiceById = async (email) => {
  const users = await User.findOne({ email: email });
  return users;
};

// get all user
exports.getAllUserService = async (query) => {
  const users = query ? await User.find().sort({_id:-1}).limit(10): await User.find({});
  return users;
};

exports.getStatsUser = async (month) => {
    const data = await User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      return data
}
