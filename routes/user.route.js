const router = require("express").Router()
const userController = require("../controller/user.controller");
const { verifyToken } = require("../middleware/veryfyToken");




router.route('/')
.get(userController.getUser)



router.route('/:id')
.patch(verifyToken,userController.updateUser)



module.exports = router