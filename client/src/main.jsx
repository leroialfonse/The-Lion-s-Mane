import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Staff from './pages/Staff.jsx'
import Services from './pages/Services.jsx'
import Booking from './pages/Booking.jsx'
import Admin from './pages/Admin.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes >
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='staff' element={<Staff />} />
        <Route path='services' element={<Services />} />
        <Route path='booking' element={<Booking />} />
        <Route path='admin' element={<Admin />} />
      </Route>
    </Routes>
  </Router>
)
