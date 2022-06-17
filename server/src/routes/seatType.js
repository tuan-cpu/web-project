const express = require('express')
const router = new express.Router()
const SeatType = require('../models/seatType')
const auth = require('../middleware/auth')

router.get('/seatType', async (req, res) => {

    const seatTypes = await SeatType.find()

    try {
        res.status(201).send(seatTypes)

    } catch (error) {
        res.status(400).send(error)
    }
})


router.post('/seatType', auth, async (req, res) => {
    if (req.user.role != 'admin') {
        res.status(401).send("No permission")
        return
    }

    let seatTypeData = req.body
    
    const seatType = SeatType(seatTypeData)

    try {
        await seatType.save()
        res.status(201).send(seatType)

    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router