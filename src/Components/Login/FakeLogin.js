// This component is a temporary solution when the Login does not work for any reason. It adds auth-token and email to the Session Storage

import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

// Define a functional component
const FakeLogin = () => {
  // Get navigation function from react-router-dom
  const navigate = useNavigate()

  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/")
    } else {
      // sessionStorage.setItem("auth-token", "email: aco@mail.com")
      sessionStorage.setItem("email", "aco@mail.com")
      // Redirect to home page and reload the window
      navigate("/")
      window.location.reload()
    }
  }, [])
}

// Export the component
export default FakeLogin
