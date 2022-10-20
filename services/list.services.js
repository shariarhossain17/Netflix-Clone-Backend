const List = require('../models/list.model')


exports.createListService = async (data) => {
    const list = await List.create(data)
    return list
}

// delete  list
exports.deleteListService = async (id) => {
    const list = await List.deleteOne({_id:id})
    return list
}
// get all list
exports.deleteListService = async (id) => {
    const list = await List.deleteOne({_id:id})
    return list
}