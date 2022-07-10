const mongoose = require('mongoose')

const layoutObject = {
    name: {
        type: String,
        required: true
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
    }]
}

const locationObject = {
    ward: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Ward'
    },
    address: {
        type: String,
        required: false
    }
}

module.exports = {
    layoutObject: layoutObject,
    locationObject: locationObject
}