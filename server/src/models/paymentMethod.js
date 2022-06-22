const mongoose  = require('mongoose')

const paymentMethodSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema)

module.exports = PaymentMethod