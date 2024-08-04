const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

PORT = process.env.PORT

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    })


// Consider moving this to a seperate models folder.
const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    service: { type: String, required: true },
    loctician: { type: String, required: false },
})

const Booking = mongoose.model('Booking', BookingSchema)

app.get('/api/booking', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ date: 1 })
        res.json(bookings)
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Error fetching bookings.' });
    }
})


app.post('/api/booking', async (req, res) => {
    try {
        //destructure the object of form data, and plug them into the req body. 
        const { name, email, date, service, loctician } = req.body
        const newBooking = new Booking({ name, email, date, service, loctician })
        await newBooking.save()
        res.json(newBooking)
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).json({ message: 'Error saving bookings.' })
    }

})

app.listen(PORT, () => {
    console.log(`Server is connected on port : ${PORT}.`)
})