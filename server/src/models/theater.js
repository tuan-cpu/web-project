const mongoose  = require('mongoose')
const locationObject = require('./utils').locationObject

const theaterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: locationObject
})

const Theater = mongoose.model('Theater', theaterSchema)

module.exports = Theater