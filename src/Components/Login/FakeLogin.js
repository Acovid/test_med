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
      sessionStorage.setItem("email", "aco@mail.com")
      sessionStorage.setItem("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc3ZTY3Yjc3M2JhODJmNzZmOGRkMTA1In0sImlhdCI6MTczNjMzNzMzNX0.PWDoYisXVLSPKohPz6JOTHcnQ9VnjVNKcwsHKSQm3to")

      // Redirect to home page and reload the window
      navigate("/")
      window.location.reload()
    }
  }, [])
}

// Export the component
export default FakeLogin
