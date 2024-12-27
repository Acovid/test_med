import React from "react"
import "./Login.css"

// Define a functional component
const Login = () => {
  const linkStyle = {
    color: "#ff851b",
    textDecoration: "none"
  }

  return (
        //  Main container div for the page content 
        <div class="container">
        {/*  Div for login grid layout  */}
        <div class="login-grid login-card">
          {/*  Div for login text  */}
          <div class="login-text">
            <h2>Login</h2>
          </div>
          {/*  Additional login text with a link to Sign Up page  */}
          <div class="login-text">
            Are you a new member? <span><a  href="/sign-up" style={linkStyle}> Sign Up Here</a></span>
          </div>
          <br />
          {/*  Div for login form  */}
          <div class="login-form">
            <form>
              {/*  Form group for email input  */}
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
              </div>
              {/*  Form group for password input  */}
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
              </div>
              {/*  Button group for login and reset buttons */}
              <div class="btn-group">
                <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
              </div>
              <br />
              {/*  Additional login text for 'Forgot Password' option  */}
              <div class="login-text">
                Forgot Password?
              </div>
            </form>
          </div>
        </div>
      </div>

  )
}

// Export the component
export default Login