const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const Schedule = require('../models/schedule')
const SeatType = require('../models/seatType')
const Transaction = require('../models/transaction')
const auth = require('../middleware/auth')


router.post('/book', auth, async (req, res) => {
    const userId = req.user._id

    const scheduleId = req.body.schedule
    const paymentMethodId = req.body.paymentMethod
    const seats = req.body.seats
    const schedule = await Schedule.findById(scheduleId).populate([
        {
            path: "seats.seatType",
            model: SeatType
        }
    ])

    const user = await User.findById(userId)

    var amount = 0
    for (let seat of schedule.seats) {
        if (seats.includes(seat.seatId)) {
            seat.status = true
            amount += seat.seatType.price
        } 
    }
    const transaction = Transaction({
        user: userId,
        schedule: scheduleId,
        countTicket: seats.length,
        amount: amount,
        paymentMethod: paymentMethodId
    })
    user.watchedMovies.push(schedule.movie)

    try {
        await schedule.save()
        await user.save()
        res.status(201).send(schedule)

    } catch (error) {
        res.status(400).send(error)
    }

    try {
        await transaction.save()
        res.status(201).send(transaction)

    } catch (error) {
        res.status(400).send(error)
    }

})


module.exports = router