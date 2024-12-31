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

function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouterC for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />
        {/* Set up the Routes for different pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
