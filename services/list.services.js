const List = require("../models/list.model");

exports.createListService = async (data) => {
  const list = await List.create(data);
  return list;
};

// delete  list
exports.deleteListService = async (id) => {
  const list = await List.deleteOne({ _id: id });
  return list;
};
// get all list
exports.getListService = async (query) => {
  const type = query.type;
  const genre = query.genre;
  console.log(type, genre);
  let list = [];

  if (type) {
    if (genre) {
      list = await List.aggregate([
        { $sample: { size: 10 } },
        { $match: { type: type, genre: genre } },
      ]);
    }
    else{
        list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: type } },
          ]);
    }
  } else {
    list = await List.aggregate([{ $sample: { size: 10 } }]);
  }

  return list;
};
