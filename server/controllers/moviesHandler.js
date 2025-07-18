const Movies = require('../schema/moviesSchema')

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movies.find({});
        if (!movies) {
            return res.status(401).json({ suceess: false, message: 'Failed to fetch movies' })
        }
        return res.status(200).json({
            sucess: true,
            message: 'Movies Fetched sucessfully',
            data: movies
        })
    } catch (error) {
        return res.status(401).json({ suceess: false, message: error.message })

    }
}

exports.findMovie = async (req, res) => {
    const { id } = req.params
    try {
        const movie = await Movies.find({ id });
        if (!movie ) {
            return res.status(401).json({ suceess: false, message: 'Failed to fetch movie' })
        }
        res.status(200).json({
            sucess: true,
            message: 'Movie Fetched sucessfully',
            data: movie
        })
    } catch (error) {
        return res.status(401).json({ suceess: false, message: error.message })
    }
}