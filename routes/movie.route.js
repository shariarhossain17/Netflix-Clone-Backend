const router = require("express").Router()
const movieController = require('../controller/movie.controller')


router.route('/')
.post(movieController.createMovie)


module.exports = router;