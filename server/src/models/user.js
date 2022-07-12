const mongoose = require('mongoose')
const validator = require('validator')
const locationObject = require('./utils').locationObject
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: { 
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    phoneNumber: {
        type: String,
        unique: false,
        required: false,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
            criteria = /^(?=.*\d)(?=.*[a-z])/
            if (!value.match(criteria)) {
                throw new Error('Password must contain both character and digit.')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: false
        }
    }],
    watchedMovies: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie'
    }],
    address: locationObject,
    avatar: {
        type: String
    },
    role: {
        type: String,
        default: 'member'
    }
}, {
    timestamps: true
})

userSchema.virtual('transactionHistory', {
    ref: 'Transaction',
    localField: '_id',
    foreignField: 'user'
})


userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

userSchema.method.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    // delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}


userSchema.statics.findByCredentials = async(username, password) => {
    var user = await User.findOne({username : username})
    if(!user) {
        user = await User.findOne({email : username})
        if(!user){
            // console.log("hello")
            throw new Error('Unable to login')
        }
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

//Hash the plain text
userSchema.pre('save', async function (next) {
    const user = this
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


const User = mongoose.model('User', userSchema)

module.exports = User