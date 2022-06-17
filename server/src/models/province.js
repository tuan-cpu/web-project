const mongoose  = require('mongoose')

const provinceSchema = mongoose.Schema({
    provinceId: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
})

const Province = mongoose.model('Province', provinceSchema)

module.exports = Province