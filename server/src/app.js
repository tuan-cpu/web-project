require('./db/mongoose')
var cors = require('cors')
const express = require('express')
const userRouter = require('./routes/user')
const movieRouter = require('./routes/movie')
const theaterRouter = require('./routes/theater')
const seatTypeRouter = require('./routes/seatType')
const layoutRouter = require('./routes/layout')
const cinemaRouter = require('./routes/cinema')
const scheduleRouter = require('./routes/schedule')
const bookingRouter = require('./routes/booking')
const locationRouter = require('./routes/location')

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080']
}));
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use('/api', movieRouter)
app.use('/api', theaterRouter)
app.use('/api', seatTypeRouter)
app.use('/api', layoutRouter)
app.use('/api', cinemaRouter)
app.use('/api', scheduleRouter)
app.use('/api', bookingRouter)
app.use('/api', userRouter)
app.use('/api', locationRouter)

module.exports = app