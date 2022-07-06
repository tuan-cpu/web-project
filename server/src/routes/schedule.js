const express = require('express')
const router = new express.Router()
const Movie = require('../models/movie')
const User = require('../models/user')
const Genre = require('../models/genre')
const Schedule = require('../models/schedule')
const Cinema = require('../models/cinema')
const auth = require('../middleware/auth')
const mongoose = require('mongoose')
const SeatType = require('../models/seatType')

router.get('/schedule', async (req, res) => {
   
    const schedules = await Schedule.find().populate([
        {
            path: "movie",
            model: Movie
        },
        {
            path: "cinema",
            model: Cinema
        },
        {
            path: "seats.seatType",
            model: SeatType
        }
    ])


    try {
        res.status(201).send(schedules)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.get('/schedule/:id', async (req, res) => {
    const scheduleId = req.params.id
    const schedules = await Schedule.findById(scheduleId).populate([
        {
            path: "movie",
            model: Movie
        },
        {
            path: "cinema",
            model: Cinema
        },
        {
            path: "seats.seatType",
            model: SeatType
        }
    ])


    try {
        res.status(201).send(schedules)

    } catch (error) {
        res.status(400).send(error)
    }
    
})


router.post('/schedule', auth, async (req, res) => {
    if (req.user.role != 'admin') {
        res.status(401).send("No permission")
        return
    }
    let scheduleData = req.body
    const movieId = scheduleData["movie"]
    const cinemaId = scheduleData["cinema"]

    const movie = await Movie.findById(movieId)
    const cinema = await Cinema.findById(cinemaId)


    scheduleData["timeEnd"] = addMinutes(new Date(scheduleData["timeStart"]), movie.runtime)
    
    
    let seats = []
    for (const seat of cinema.layout.seats) {
        seats.push({
            seatId: seat.seatId,
            seatType: seat.seatType,
            status: seat.status
        })
    }
    scheduleData["seats"] = seats
    scheduleData['totalCount'] = seats.length
    scheduleData['availableCount'] = scheduleData['totalCount']
    const schedule = Schedule(scheduleData)

    try {
        await schedule.save()
        res.status(201).send(schedule)

    } catch (error) {
        res.status(400).send(error)
    }

})


function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

module.exports = router