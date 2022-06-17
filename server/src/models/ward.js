const mongoose  = require('mongoose')

const wardSchema = mongoose.Schema({
    wardId: {
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
    district: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'District'
    },
    province: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Province'
    }
})

const Ward = mongoose.model('Ward', wardSchema)

module.exports = Ward