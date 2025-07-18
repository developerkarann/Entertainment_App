const Movies = require('./schema/moviesSchema')
const Series = require('./schema/seriesSchema')



const fetchMovies = async () => {
    console.log('Fetching movies...')
    try {
        const response = await fetch("https://streaming-availability.p.rapidapi.com/shows/search/title?country=IN&title=na&series_granularity=season&show_type=movie&output_language=en", {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
                "x-rapidapi-key": "778fab665dmsh2333d88e2cc967cp15ee3bjsnf11c823af326",
            }

        })

        let movies = await response.json()

        for (let movie of movies) {
            const exists = await Movies.findOne({ id: movie.id })
            if (!exists) {
                await Movies.create({
                    type: 'movie',
                    id: movie.id,
                    title: movie.title,
                    overview: movie.overview,
                    releaseYear: movie.releaseYear,
                    genres: movie.genres,
                    directors: movie.directors,
                    cast: movie.cast,
                    rating: movie.rating,
                    runtime: movie.runtime,
                    imageSet: movie.imageSet,
                })
            } else {
                return console.log('Movies Data Already Exists in the Database')
            }
        }
        console.log('Movies Imported!')
    } catch (err) {
        console.error('Failed to import movies:', err);
    }
}

const fetchSeries = async () => {
    console.log('Fetching series...')
    try {
        const response = await fetch("https://streaming-availability.p.rapidapi.com/shows/search/title?country=IN&title=trending&series_granularity=show&show_type=movie&output_language=en", {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
                "x-rapidapi-key": "778fab665dmsh2333d88e2cc967cp15ee3bjsnf11c823af326",
            }
        })

        let series = await response.json()

        for (let movie of series) {
            const exists = await Series.findOne({ id: series.id })
            if (!exists) {
                await Series.create({
                    type: 'series',
                    id: movie.id,
                    title: movie.title,
                    overview: movie.overview,
                    releaseYear: movie.releaseYear,
                    genres: movie.genres,
                    directors: movie.directors,
                    cast: movie.cast,
                    rating: movie.rating,
                    runtime: movie.runtime,
                    imageSet: movie.imageSet,
                })
            } else {
                return console.log('Series Data Already Exists in the Database')
            }
        }
        console.log('Series Imported!')
    } catch (err) {
        console.error('Failed to import movies:', err);
    }
}

// fetchMovies()
// fetchSeries()