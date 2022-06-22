const mongoose  = require('mongoose')
const layoutObject = require('./utils').layoutObject

const layoutSchema = mongoose.Schema(layoutObject)

const Layout = mongoose.model('Layout', layoutSchema)

module.exports = Layout