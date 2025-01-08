// Import necessary modules from React library
import React, { useEffect } from "react"
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Import CSS
import "./App.css"
// import the context provider
// import AppointmentContextProvider from "./context/AppointmentContextProvider"

// Import my components
import Navbar from "./Components/Navbar/Navbar"
import LandingPage from "./Components/LandingPage/LandingPage"
import SignUp from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login"
import InstantConsultation from "./Components/InstantConsultation/InstantConsultation"
// import BookingConsultation from "./Components/BookingConsultation/BookingConsultation"
// import FakeNotification from "./Components/Notification/FakeNotification"
import Notification from "./Components/Notification/Notification"
import ReviewForm from "./Components/ReviewForm/ReviewForm"
import ProfileForm from "./Components/ProfileCard/ProfileCard"

// test components
import FakeLogin from "./Components/Login/FakeLogin"
// import NavbarWithProfileCard from "./Components/TestComponents/NavbarWithProfileCard"

function App() {
  return (
    <div className="App">
      {/* Wrap all components into the context provider */}
      {/* <AppointmentContextProvider> */}
      {/* Set up BrowserRouterC for routing */}
      <BrowserRouter>
        <Navbar />
        <Notification />
        {/* Set up the Routes for different pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          {/* <Route path="/booking-consultation" element={<BookingConsultation />} /> */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fake-login" element={<FakeLogin />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/review" element={<ReviewForm />} />
          <Route path="/profile" element={<ProfileForm />} />
          {/* <Route path="/test-navbar" element={<NavbarWithProfileCard />} /> */}
        </Routes>
      </BrowserRouter>
      {/* </AppointmentContextProvider> */}
    </div>
  )
}

export default App
