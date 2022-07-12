const express = require('express')
const User = require('../models/user')
const Movie = require('../models/movie')

const District = require('../models/district')
const Province = require('../models/province')
const Ward = require('../models/ward')

const router = new express.Router()
const auth = require('../middleware/auth')
const Transaction = require('../models/transaction')
const PaymentMethod = require('../models/paymentMethod')
const Schedule = require('../models/schedule')
const Cinema = require('../models/cinema')
const Theater = require('../models/theater')
// const { sendWelcomeEmail, sendResetpassEmail, sendFeedbackEmail } = require('../emails/account')

router.post('/users/register', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        // sendWelcomeEmail(user.email, user.name)
        res.status(201).send(user)
    } catch(e){
        res.status(400).send(e)
    }
})

router.get('/user', auth, async (req, res) => {
    const userId = req.user._id

    const userData = await User.findById(userId).populate([
        {
            path: "address.ward",
            model: Ward,
            populate: [{
                path: "district",
                model: District,
            },
            {
                path: "province",
                model: Province,
            },
            ]
        },
        {
            path: "watchedMovies", 
            model: Movie
        },
        {
            path: "transactionHistory", 
            model: Transaction
        },
    ])
    let i = 0
    let user = JSON.parse(JSON.stringify(userData));
    for await (let transactionId of user.transactionHistory) {
        let transaction = await Transaction.findById(transactionId).populate([
            {
                path: "schedule", 
                model: Schedule
            },
            // {
            //     path: "schedule.movie", 
            //     model: Movie
            // },
            // {
            //     path: "schedule.cinema", 
            //     model: Cinema
            // },
            {
                path: "paymentMethod", 
                model: PaymentMethod
            }
        ])
        const movie = await Movie.findById(transaction.schedule.movie)
        const cinema = await Cinema.findById(transaction.schedule.cinema).populate([
            {
                path: "theater",
                model: Theater
            }
        ])
        transaction.schedule.movie = movie
        transaction.schedule.cinema = cinema
        // console.log(movie);
        user.transactionHistory[i] = transaction
        // console.log(movie.availableSchedule[i]["cinemaName"]);
        i++
    }

    try {
        res.status(201).send(user)
    } catch(e){
        res.status(400).send(e)
    }
})


router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.username, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/resetpass', async (req, res) => {
    try {
        var user = await User.findOne({email : req.body.email})
        var randomstring = Math.random().toString(36).slice(-8);
        user.password = randomstring
        sendResetpassEmail(user.email, user.username, randomstring)
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)
        await req.user.save()

        res.send("Logout successfully.")
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()

        res.send("Logout all sessions successfully.")
    } catch (e) {
        console.log("err");
        res.status(500).send(e)
    }
})

module.exports = router
