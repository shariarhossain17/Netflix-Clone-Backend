const { createMovieService } = require("../services/movie.service");

module.exports.createMovie = async (req, res, next) => {
  try {
    if(!req.user.isAdmin){
        res.status(403).json({
            message:"you are not authorized"
        })
    }

    const movie = await createMovieService(req.body)

    res.status(200).json({
        status:true,
        message:"movie created",
        data:movie
    })
    
  } catch (error) {
    res.status(500).json({
        status:false,
        message:"can't movie created"
    })
  }
};
