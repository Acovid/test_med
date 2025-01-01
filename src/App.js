// Import necessary modules from React library
import React, { useEffect } from "react"
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Import CSS
import "./App.css"
// Import my components
import Navbar from "./Components/Navbar/Navbar"
import LandingPage from "./Components/LandingPage/LandingPage"
import SignUp from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login"
import InstantConsultation from "./Components/InstantConsultation/InstantConsultation"
import BookingConsultation from "./Components/BookingConsultation/BookingConsultation"
import FakeLogin from "./Components/Login/FakeLogin"
// import FakeNotification from "./Components/Notification/FakeNotification"
import Notification from "./Components/Notification/Notification"

function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouterC for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />
        <Notification />
        {/* Set up the Routes for different pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fake-login" element={<FakeLogin />} />
          {/* <Route path="/fake-notification" element={<FakeNotification />} /> */}
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
