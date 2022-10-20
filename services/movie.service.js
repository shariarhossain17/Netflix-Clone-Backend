const Movie = require("../models/movie.model");

exports.createMovieService = async (data) => {
  const movie = await Movie.create(data);
  return movie;
};
// update movie
exports.updateMovieService = async (id, data) => {
  const movie = await Movie.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return movie;
};

// delete movie service
exports.deleteMovieService = async (id) => {
  const movie = await Movie.deleteOne({_id:id});
  return movie;
};

// get movie by id
exports.getMovieServiceById = async (id) => {
  const movie = await Movie.findById(id);
  return movie;
};
// get random movie
exports.getRandomMovieService= async (type) => {
  let movie;
  if(type === "series"){
    movie = await Movie.aggregate([
        {$match:{isSeries:true}},
        {$sample:{size:1},}
    ])
  }
  else{
    movie = await Movie.aggregate([
        {$match:{isSeries:false}},
        {$sample:{size:1},}
    ])
  }

  return movie
};
