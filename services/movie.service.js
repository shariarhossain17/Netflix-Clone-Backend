const Movie = require('../models/movie.model')


exports.createMovieService = async (data) => {
    const movie = await Movie.create(data);
    return movie
}