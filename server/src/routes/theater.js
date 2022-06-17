const express = require('express')
const router = new express.Router()
const Ward = require('../models/ward')
const User = require('../models/user')
const Genre = require('../models/genre')
const Theater = require('../models/theater')
const Cinema = require('../models/cinema')
const auth = require('../middleware/auth')
const mongoose = require('mongoose')

router.get('/theater?', async (req, res) => {
   // TODO
})


router.post('/theater', auth, async (req, res) => {
    if (req.user.role != 'admin') {
        res.status(401).send("No permission")
        return
    }
    let theaterData = req.body
    
    const wardId = theaterData.wardId
    const wardObj = await Ward.find({wardId: wardId})

    const theater = Theater({
        name: theaterData.name,
        location: {
            ward: wardObj[0]._id,
            address: theaterData.address
        }
    })

    try {
        await theater.save()
        res.status(201).send(theater)

    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router