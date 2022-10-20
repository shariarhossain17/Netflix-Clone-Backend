const {
  createMovieService,
  updateMovieService,
  deleteMovieService,
  getMovieServiceById,
  getRandomMovieService,
} = require("../services/movie.service");

module.exports.createMovie = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      res.status(403).json({
        message: "you are not authorized",
      });
    }

    const movie = await createMovieService(req.body);

    res.status(200).json({
      status: true,
      message: "movie created",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "can't movie created",
      error: error,
    });
  }
};

// update movie
module.exports.updateMovie = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      res.status(403).json({
        message: "you are not authorized",
      });
    }

    const movie = await updateMovieService(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "movie updated",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "can't movie updated",
      error: error,
    });
  }
};
// delete movie
module.exports.deleteMovie = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({
        message: "you are not authorized",
      });
    }

    const movie = await deleteMovieService(req.params.id);

    if (!movie.deletedCount) {
      res.status(500).json({
        status: false,
        message: "can't movie deleted",
      });
    }
    res.status(200).json({
      status: true,
      message: "movie deleted",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "can't movie deleted",
      error: error,
    });
  }
};

// get movie by id
module.exports.gateMovieById = async (req, res, next) => {
  try {
    const movie = await getMovieServiceById(req.params.id);
    res.status(200).json({
      status: true,
      message: "movie get success",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "can't movie get",
      error: error,
    });
  }
};
module.exports.gatRandomMovie = async (req, res, next) => {
  try {
    const {type} = req.query
    const movie = await getRandomMovieService(type);
    res.status(200).json({
      status: true,
      message: "movie get success",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "can't movie get",
      error: error,
    });
  }
};
