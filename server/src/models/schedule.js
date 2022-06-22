const mongoose  = require('mongoose')
const scheduleSchema = mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Movie'
    },
    cinema: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Cinema'
    },
    seats: [{
        seatId: {
            type: String,
            required: true,
        },
        seatType: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'SeatType'
        },
        status: {
            type: Boolean,
            default: false,
            required: true
        }
    }],
    timeStart: {
        type: Date,
        required: true
    },
    timeEnd: {
        type: Date,
        required: true
    },
    availableCount: {
        type: Number,
        required: true,
    },
    totalCount: {
        type: Number,
        required: true
    }
})

const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule