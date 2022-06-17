const mongoose  = require('mongoose')

const seatTypeSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const SeatType = mongoose.model('SeatType', seatTypeSchema)

module.exports = SeatType