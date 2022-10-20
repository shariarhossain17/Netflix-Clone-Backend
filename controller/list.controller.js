const { createListService } = require("../services/list.services");

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
