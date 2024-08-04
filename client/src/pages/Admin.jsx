import React, { useState, useEffect } from "react";

const Admin = () => {

    const [bookings, setBookings] = useState([])

    // Create an async function to fetch the bookings, and then loop through them to display.

    // useEffect here to immediately trigger the fetch, update state, and display the data in the ui. So that the data is present on page load.

    useEffect(() => {
        // Add some error handling try/catch..

        const fetchBookings = async () => {
            const response = await fetch('http://localhost:3001/api/booking')
            const data = await response.json()
            setBookings(data)
        }

        fetchBookings()
    }, [])






    return (
        <div>
            <h1>Appointment List</h1>

            <p>Here`s your list of current appointments.</p>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        {/* Consider formatting these into a table. */}
                        Client Name: {booking.name}
                        Client Email: {booking.email}
                        Appointment Date: {new Date(booking.date).toLocaleDateString()}
                        Service Scehduled: {booking.service}
                        Requested Stylist: {booking.stylist}
                        <table>
                            <thead>Client Info</thead>
                            <tbody>
                                <thead>Client Name</thead>
                                <tr><td>{booking.name}</td></tr>
                                <thead>Client Email</thead>
                                <tr><td>{booking.email}</td></tr>
                            </tbody>
                        </table>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Admin;