const User = require('../models/user.model')

exports.registerService = async (data) => {
    const newUser = await User.create(data)
    return  newUser
}