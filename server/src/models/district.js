const mongoose  = require('mongoose')

const districtSchema = mongoose.Schema({
    districtId: {
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
    province: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Province'
    }
})

const District = mongoose.model('District', districtSchema)

module.exports = District