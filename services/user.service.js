const User = require("../models/user.model");
const bCrypTo = require("bcryptjs");

exports.getUserService = async () => {
  const users = await User.find({});
  return users;
};
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
exports.deleteUserService = async (id) => {
  const users = await User.findByIdAndDelete(id);
  return users;
};
