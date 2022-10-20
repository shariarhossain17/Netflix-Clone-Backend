const router = require("express").Router();
const listController = require("../controller/list.controller");
const { verifyToken } = require("../middleware/veryfyToken");



router.route('/')
.post(verifyToken,listController.createList)
module.exports = router;
