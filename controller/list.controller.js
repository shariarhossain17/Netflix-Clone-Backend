const {
  createListService,
  deleteListService,
  getListService,
} = require("../services/list.services");

module.exports.createList = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      res.status(403).json({
        message: "you are not authorized",
      });
    }
    const list = await createListService(req.body);
    res.status(200).json({
      status: true,
      message: "list created success",
      data: list,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't create list",
      error: error,
    });
  }
};

// delete list
module.exports.deleteList = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      res.status(403).json({
        message: "you are not authorized",
      });
    }
    const list = await deleteListService(req.params.id);

    if (!list.deletedCount) {
      res.status(400).json({
        status: false,
        message: "can't deleted list"
      });
    }
    res.status(200).json({
      status: true,
      message: "list deleted success",
      data: list,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't deleted list",
      error: error,
    });
  }
};

// get all list
module.exports.getList = async (req, res, next) => {
    try {
        const query = req.query
      const list = await getListService(query);
      res.status(200).json({
        status: true,
        message: "list get success",
        data: list,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: "can't get list",
        error: error,
      });
    }
  };
