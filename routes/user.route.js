const router = require("express").Router();
const userController = require("../controller/user.controller");
const { verifyToken } = require("../middleware/veryfyToken");

router.route("/").get(verifyToken, userController.getAllUser);

router.get("/stats", userController.getUserStats);

router
  .route("/:id")
  .patch(verifyToken, userController.updateUser)
  .delete(verifyToken, userController.deleteUser);

router.route("/:email").get(userController.getUserById);

module.exports = router;
