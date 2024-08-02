import React from "react";
// Access to react calendar component. Easier than building my own.
import Calendar from 'react-calendar'
// Will allow for redirects to the homepage after a user completes making a booking.
import { useNavigate } from 'react-router-dom'

const services = [
    'Retwist',
    'Retwist w/Style',
    'Detox',
    'Color',
    'Consultation'
];

const locticians = [
    'BossLady',
    'Newie',
    'Jan Michael Vincent'
]

const Booking = () => {
    return (
        <div>
            {/* A form for booking */}
            <h2>Book your Appointment</h2>
            {/* We want to control the form ourself. So, we're going to use a custom function and a prevent default, so that the page doesn't refresh onSubmit. We're stripping out the default function. So, we'll use some state here. */}
            <form onSubmit={handleSubmit}>
                <input id="name">Name: </input>
                <input id="email">Email: </input>
                <input id="service">Service: </input>
                <input id="loctician">Loctician: </input>
                <button type="submit">Book</button>
            </form>
        </div>
    )
}

export default Booking;