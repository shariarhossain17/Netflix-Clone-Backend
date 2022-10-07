const User = require('../models/user.model')

exports.registerService = async (data) => {
    const newUser = await User.create(data)
    return  newUser
}
exports.logInService = async (email) => {
    const user = await User.findOne({email:email})
    return  user
}