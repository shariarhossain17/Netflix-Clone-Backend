const router = require("express").Router()
const movieController = require('../controller/movie.controller');
const { verifyToken } = require("../middleware/veryfyToken");


router.route('/')
.post(verifyToken,movieController.createMovie)

router.route("/:id")
.patch(verifyToken,movieController.updateMovie)
.delete(verifyToken,movieController.deleteMovie)


module.exports = router;