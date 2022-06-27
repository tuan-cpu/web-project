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
    var query = req.query
    let theaters;
    // console.log(Object.keys(query));
    if (!query) {
        theaters = await Theater.find(query).populate([
            {
                path: "location.ward",
                model: Ward
            }
        ]).limit(parseInt(query.limit))
    } else {
        theaters = await Theater.find(query).populate([
            {
                path: "location.ward",
                model: Ward
            }
        ]).limit(parseInt(query.limit))
        .then(
            theater => theater.filter(item => item.location.ward[Object.keys(query)[0]] == query[Object.keys(query)])
        )
    }

    try {
        res.status(201).send(theaters)

    } catch (error) {
        res.status(400).send(error)
    }
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