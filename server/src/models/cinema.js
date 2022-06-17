const mongoose  = require('mongoose')
const layoutObject = require('./utils').layoutObject
const cinemaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    layout: layoutObject,
    theater: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Theater'
    }
})

const Cinema = mongoose.model('Cinema', cinemaSchema)

module.exports = Cinema