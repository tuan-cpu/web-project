const mongoose  = require('mongoose')

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    certification: {
        type: String,
        required: false,
    },
    released: {
        type: Date,
        required: true,
    },
    runtime: {
        type: Number,
        required: true,
    },
    genre: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Genre'
    }],
    director: {
        type: String,
        required: true
    },
    actors: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    languages: [{
        type: String,
        required: true
    }],
    poster: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
    idbmRating: {
        type: Number,
        required: false
    }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie