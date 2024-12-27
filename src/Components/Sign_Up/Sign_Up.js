import React from "react"
import "./Sign_Up.css"

// Define a functional component
const Sign_Up = () => {
  const linkStyle = {
    color: "#ff851b",
    textDecoration: "none"
  }

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
          <form>
            {/*  Start of the form  */}

            <div className="form-group">
              {/*  Form group for role  */}
              <label for="role">Role</label>
              {/*  Label for role input field  */}
              <select name="role" id="role" style={{ padding: "6px" }}>
                {/*  Dropdown menu for role  */}
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
              </select>
            </div>

            <div className="form-group">
              {/*  Form group for user's name  */}
              <label for="name">Name</label>
              {/*  Label for name input field  */}
              <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
              {/*  Text input field for name  */}
            </div>

            <div className="form-group">
              {/*  Form group for user's phone number  */}
              <label for="phone">Phone</label>
              {/*  Label for phone input field  */}
              <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"/>
              {/*  Tel input field for phone number  */}
              <p>Enter 10 numbers</p>
            </div>

            <div className="form-group">
              {/*  Form group for user's email  */}
              <label for="email">Email</label>
              {/*  Label for email input field  */}
              <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
              {/*  Email input field  */}
            </div>

            <div className="form-group">
              {/*  Form group for user's password  */}
              <label for="password">Password</label>
              {/*  Label for password input field  */}
              <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
              {/*  Password input field */}
            </div>

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
