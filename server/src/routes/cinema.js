const express = require('express')
const router = new express.Router()
const Cinema = require('../models/cinema')
const auth = require('../middleware/auth')

const Layout = require('../models/layout')

router.get('/cinema', async (req, res) => {
    
    //todo
    
})


router.post('/cinema', auth, async (req, res) => {
    if (req.user.role != 'admin') {
        res.status(401).send("No permission")
        return
    }
    let cinemaData = req.body
    const layoutName = cinemaData.layout

    let layout = await Layout.findOne({name: layoutName}, { _id: 0 })
    let seats = []
    for (const seat of layout.seats) {
        seats.push({
            seatId: seat.seatId,
            seatType: seat.seatType,
            status: seat.status
        })
    }

    cinemaData.layout = {
        name: layout.name,
        seats: seats
    }
    
    const cinema = Cinema(cinemaData)

    try {
        await cinema.save()
        res.status(201).send(cinema)

    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router