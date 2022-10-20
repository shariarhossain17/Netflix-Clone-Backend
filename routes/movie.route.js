const router = require("express").Router()
const movieController = require('../controller/movie.controller');
const { verifyToken } = require("../middleware/veryfyToken");


router.use(verifyToken)

router.route('/')
.post(movieController.createMovie)
.get(movieController.getAllMovie)

router.get("/random",movieController.gatRandomMovie)

router.route("/:id")
.patch(movieController.updateMovie)
.delete(movieController.deleteMovie)
.get(movieController.gateMovieById)


module.exports = router;