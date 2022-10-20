const router = require("express").Router();
const listController = require("../controller/list.controller");
const { verifyToken } = require("../middleware/veryfyToken");

router.use(verifyToken);
router.route("/").post(listController.createList);

router.route("/:id").delete(listController.deleteList);
module.exports = router;
