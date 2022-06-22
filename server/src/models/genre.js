const mongoose  = require('mongoose')

const genreSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
})

const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre