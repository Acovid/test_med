// Import necessary modules from React library
import React from "react"
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
import Notification from "./Components/Notification/Notification"
import ReviewForm from "./Components/ReviewForm/ReviewForm"
import ProfileForm from "./Components/ProfileCard/ProfileCard"
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout"

// test components
import FakeLogin from "./Components/Login/FakeLogin"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Notification />
        {/* Set up the Routes for different pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fake-login" element={<FakeLogin />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/review" element={<ReviewForm />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/reports" element={<ReportsLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
