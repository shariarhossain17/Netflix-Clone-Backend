const router = require("express").Router()
const movieController = require('../controller/movie.controller');
const { verifyToken } = require("../middleware/veryfyToken");


router.route('/')
.post(verifyToken,movieController.createMovie)


module.exports = router;