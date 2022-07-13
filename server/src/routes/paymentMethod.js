const express = require('express')
const router = new express.Router()
const PaymentMethod = require('../models/paymentMethod')
const auth = require('../middleware/auth')

router.post('/paymentMethod', auth, async (req, res) => {
    if (req.user.role != 'admin') {
        res.status(401).send("No permission")
        return
    }

    let paymentMethodData = req.body
    
    const paymentMethod = PaymentMethod(paymentMethodData)

    try {
        await paymentMethod.save()
        res.status(201).send(seatType)

    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router