import React, { useState } from "react";
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
    'Hughie',
    'Jan Michael Vincent'
]



const Booking = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState(new Date())
    const [service, setService] = useState('')
    const [loctician, setLoctician] = useState('')

    const navigate = useNavigate()

    // Prevent default form behavior (including reloading the page), and instead, follow these instructions.
    const handleSubmit = async (e) => {
        e.preventDefault()
        // Go fetch something. In this case, the return route for our booking. Don't forget some error handling try/catch...
        const response = await fetch('http://localhost:3001/api/booking', {
            // Setting the method, and then telling what headers to use. 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Strignifying the data in the JSON object, to pull from our form, and make useable for the request. 
            body: JSON.stringify({ name, email, date, service, loctician })
        })
        // Consider using react toast for this.
        if (response.ok) {
            alert(`Got it, ${name}! Your appointment for ${date.toLocaleDateString()} was successful. We will send an email to ${email} with available times`);
            // navigate to this location, so that the page doesn't refresh and kick you.
            navigate('/');
        } else {
            alert('Booking failed, please try again.')
        }
    }
    return (
        <div>
            {/* A form for booking */}
            <h2>Book your Appointment</h2>
            {/* We want to control the form ourself. So, we're going to use a custom function and a prevent default, so that the page doesn't refresh onSubmit. We're stripping out the default function. So, we'll use some state here. */}
            <form onSubmit={handleSubmit}>
                <div>
                    {/* Apply a label to the form in JSX syntax. */}
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label >Date:</label>
                    <Calendar
                        // Let's control what happens when a user clicks on a date. In this case, we'll set taht date, capture that date, and show it back to the user.
                        onChange={setDate}
                        value={date}
                        required
                    />
                    <p>Selected Date: {date.toLocaleDateString()}</p>
                </div>
                <div>
                    <label htmlFor="service">Service: </label>
                    <select
                        id="service" value={service}
                        onChange={(e) => setService(e.target.value)}
                        required>
                        <option value="" disabled>Select a service</option>
                        {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="loctician">Loctician: </label>
                    <select
                        id="loctician" value={loctician}
                        onChange={(e) => setLoctician(e.target.value)}
                    >
                        <option value="" disabled>Select a loctician (optional)</option>
                        {locticians.map((locticians, index) => (
                            <option key={index} value={locticians}>{locticians}</option>
                        ))}
                    </select>
                </div>

                <button type="submit">Book</button>
            </form>
        </div>
    )
}

export default Booking;