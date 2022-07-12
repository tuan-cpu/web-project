const mongoose  = require('mongoose')

const transactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    schedule: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Schedule'
    },
    bookSeats: [{
        type: String,
        required: true,
    }],
    countTicket: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'PaymentMethod'
    }
}, {
    timestamps: true
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction