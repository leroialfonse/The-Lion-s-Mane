import React, { useState, useEffect } from "react";

const Admin = () => {

    const [bookings, setBookings] = useState([])

    // Create an async function to fetch the bookings, and then loop through them to display.

    // useEffect here to immediately trigger the fetch, update state, and display the data in the ui. So that the data is present on page load.

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('http://localhost:5000/api/bookings')
            const data = await response.json()
            setBookings(data)
        }

        fetchBookings()
    }, [])






    return (
        <div>
            <h1>Appointment List</h1>

            <p>Here's your list of current appointments.</p>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        {/* Consider formatting these into a table. */}
                        {booking.name} - {booking.email} - {new Date(booking.date).toLocaleDateString()} - {booking.service} - {booking.stylist}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Admin;