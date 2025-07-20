const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true
    },
    bookmarks: [
        {
            movieId: {
                type: String
            },
            title: {
                type: String
            },
            image: {
                type: String
            },
            type: {
                type: String
            }
        }
    ]
})

module.exports = mongoose.model('Users', userSchema)