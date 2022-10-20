const List = require('../models/list.model')


exports.createListService = async (data) => {
    const list = await List.create(data)
    return list
}