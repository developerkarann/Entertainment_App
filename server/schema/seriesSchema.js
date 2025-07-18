const mongoose = require('mongoose')

const seriesSchema = new mongoose.Schema({
    type: { type: String },
    id: { type: Number },
    title: { type: String },
    overview: { type: String },
    releaseYear: { type: Number },
    genres: { type: Array },
    directors: { type: Array },
    cast: { type: Array },
    rating: { type: Number },
    runtime: { type: Number },
    imageSet: { type: Object },
})

module.exports = mongoose.model('Series', seriesSchema)