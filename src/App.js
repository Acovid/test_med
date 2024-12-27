// Import necessary modules from React library
import React, { useEffect } from "react"
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Import CSS
import "./App.css"
// Import custom Navbar component
import Navbar from "./Components/Navbar/Navbar"
// Import the landing page component
import Landing_Page from "./Components/Landing_Page/Landing_Page"

function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouterC for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />
        {/* Set up the Routes for different pages */}
        <Routes>
          {
            /* Define individual Route components for different pages */
            <Route path="/" element={<Landing_Page />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
