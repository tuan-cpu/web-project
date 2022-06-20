const express = require('express')
const router = new express.Router()
const Layout = require('../models/layout')
const auth = require('../middleware/auth')
const SeatType = require('../models/seatType')

router.get('/layout', async (req, res) => {
    
    const layouts = await Layout.find().populate([
        {
            path: "seats.seatType",
            model: SeatType
        }
    ])

    try {
        res.status(201).send(layouts)

    } catch (error) {
        res.status(400).send(error)
    }
    
})


router.post('/layout', auth, async (req, res) => {
    if (req.user.role != 'admin') {
        res.status(401).send("No permission")
        return
    }
    
    let layoutData = req.body
    let seatData = layoutData.seats
    let seats = []
    let seatTypeArr = {}
    const seatTypes = await SeatType.find()
    for (const seatType of seatTypes) {
        seatTypeArr[`${seatType.id}`] = seatType._id
    }

    for (const item of seatData) {
        data = item.split(":")
        row = data[0]
        col = data[1].split("-")
        type =  data[2]
        for (let i = parseInt(col[0]); i <= parseInt(col[1]); i++) {
            seats.push({
                seatId: row + i,
                seatType: seatTypeArr[type]
            })
        }
    }

    const layout = Layout({
        name: layoutData.name,
        seats: seats
    })

    try {
        await layout.save()
        res.status(201).send(layout)

    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router