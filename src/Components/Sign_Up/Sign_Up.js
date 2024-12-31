import React, { useState } from "react"
import "./Sign_Up.css"
import { Link, useNavigate } from "react-router-dom"
import { API_URL } from "../../config"

// Define a functional component
const Sign_Up = () => {
  // State variables using useState hook
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [showerr, setShowerr] = useState("") // State to show error messages
  const navigate = useNavigate() // Navigation hook from react-router

  // use it for inline style in some element(s)
  const linkStyle = {
    color: "#ff851b",
    textDecoration: "none"
  }

  // Function to handle form submission
  const register = async e => {
    e.preventDefault() // Prevent default form submission
    // API Call to register user
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone: phone
      })
    })
    const json = await response.json() // Parse the response JSON
    if (json.authtoken) {
      // Store user data in session storage
      sessionStorage.setItem("auth-token", json.authtoken)
      sessionStorage.setItem("name", name)
      sessionStorage.setItem("phone", phone)
      sessionStorage.setItem("email", email)
      console.log(`Signed up with name ${name}, phone ${phone} and email ${email}`)
      // Redirect user to home page
      navigate("/")
      window.location.reload() // Refresh the page
    } else {
      if (json.errors) {
        // console.log(`ERROR! Sign up was unsuccessful!`)
        for (const error of json.errors) {
          setShowerr(error.msg) // Show error messages
        }
      } else {
        setShowerr(json.error)
      }
    }
  }

  // JSX to render the Sign Up form
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      {/*  Main container with margin-top  */}

      <div className="signup-grid signup-card">
        {/*  Grid layout for sign-up form  */}

        <div className="signup-text">
          {/*  Title for the sign-up form  */}
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1">
          {/*  Text for existing members to log in  */}
          Already a member?{" "}
          <span>
            <a href="/Login" style={linkStyle}>
              Login
            </a>
          </span>
        </div>

        <div className="signup-form">
          {/*  Form for user sign-up  */}
          <form method="POST" onSubmit={register}>
            {/*  Start of the form  */}

            {/* <div className="form-group">
              <label htmlFor="role">Role</label>
              <select name="role" id="role" style={{ padding: "6px" }}>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </select>
            </div> */}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input value={name} type="text" onChange={e => setName(e.target.value)} name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
              <p>Enter 10 numbers</p>
            </div>

            <div className="form-group">
              {/*  Form group for user's email  */}
              {/*  Label for email input field  */}
              {showerr && (
                <div className="err" style={{ color: "red" }}>
                  {showerr}
                </div>
              )}
              {/*  Email input field  */}

            <div className="form-group">
              {/*  Form group for user's password  */}
              {/*  Label for password input field  */}
              {/*  Password input field */}

            <div className="btn-group">
              {/*  Button group for form submission and reset  */}
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                Submit
              </button>
              {/*  Submit button  */}
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                Reset
              </button>
              {/*  Reset button  */}
            </div>
          </form>
          {/*  End of the form  */}
        </div>
      </div>
    </div>
  )
}

// Export the component
export default Sign_Up
