const express = require('express')
const router = new express.Router()
const Ward = require('../models/ward')
const District = require('../models/district')
const Province = require('../models/province')

router.get('/location/province', async (req, res) => {
    
    const provinces = await Province.find()

    try {
        res.status(201).send(provinces)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.get('/location/district/:id', async (req, res) => {
    const provinceId = req.params.id
    const districts = await District.find({province: provinceId}).populate([
        {
            path: "province",
            model: Province
        }
    ])

    try {
        res.status(201).send(districts)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.get('/location/ward/:id', async (req, res) => {
    const districtId = req.params.id
    const wards = await Ward.find({district: districtId}).populate([
        {
            path: "district",
            model: District
        },
        {
            path: "province",
            model: Province
        }
    ])

    try {
        res.status(201).send(wards)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

module.exports = router