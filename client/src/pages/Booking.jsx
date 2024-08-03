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
                {/* Apply a label to the form in JSX syntax. */}
                <label htmlFor="naem">Name</label>
                <input
                    type="text"
                    id="name" value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* calendar placeholder. */}

                <label htmlFor="services">Services</label>
                <select
                    id="service" value={service}
                    onChange={(e) => setService(e.target.value)}
                    required>
                    <option value="" disabled>Select a service</option>
                    {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                    ))}
                </select>
                <label htmlFor="loctician">Loctician</label>
                <select
                    id="loctician" value={loctician}
                    onChange={(e) => setLoctician(e.target.value)}
                >
                    <option value="" disabled>Select a loctician (optional)</option>
                    {locticians.map((loctician, index) => (
                        <option key={index} value={loctician}>{loctician}</option>
                    ))}
                </select>


                <button type="submit">Book</button>
            </form>
        </div>
    )
}

export default Booking;