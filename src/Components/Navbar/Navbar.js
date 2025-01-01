import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"
import logo from "./stay-healthy-logo.png"
import login from "./login.svg"

// Define a functional component
const Navbar = () => {
  const [name, setName] = useState("")
  // user's name
  const [signUpOrWelcome, setSignUpOrWelcome] = useState("")
  // flip: either display menu option Sign Up or Welcome user
  const [loginOrLogout, setLoginOrLogout] = useState("")
  // flip: either display menu option Login or Logout

  const navigate = useNavigate() // Navigation hook from react-router

  // useEffect will determine if a user is logged in
  useEffect(() => {
    // When the component mounts, check if there's a 'email' value in Session Storage.
    let userName = ""
    if (sessionStorage.getItem("email")) {
      // if email exists in the session storage
      const email = sessionStorage.getItem("email")
      console.log(`email: ${email}`)
      userName = email.substring(0, email.indexOf("@"))
      console.log("userName: ", userName)
      // in navbar display the welcome message and Logout button
      userIsLoggedin()
    } else {
      // in navbar display the Sign Up and Login button
      userIsLoggedout()
    }

    function userIsLoggedin() {
      // do stuff if user is logged in
      setSignUpOrWelcome(<li className="welcome_user">Welcome {userName}</li>)
      setLoginOrLogout(
        <li
          className="link"
          //  run this function when user clicks Logout
          onClick={() => {
            console.log(`User ${userName} logged out`)
            sessionStorage.clear()
            navigate("/")
            // window.location.reload()
          }}
        >
          <a href="/">
            {/* <img className="login_icon" src={login} alt="Enter" /> */}
            <button className="btn1">Logout</button>
          </a>
        </li>
      )
    }

    function userIsLoggedout() {
      // do stuff if user is logged out
      console.log("-- No name in the session storage.")
      setSignUpOrWelcome(
        <li className="link">
          <a href="/sign-up">
            <button className="btn1">Sign Up</button>
          </a>
        </li>
      )
      setLoginOrLogout(
        <li className="link">
          <a href="/Login">
            {/* <img className="login_icon" src={login} alt="Enter" /> */}
            <button className="btn1">Login</button>
          </a>
        </li>
      )
    }
  }, [])

  return (
    <nav>
      <a href="/">
        <img className="nav__logo" src={logo} alt="Stay Healthy logo" />
      </a>

      <div className="nav__icon">
        {/* Font Awesome icon for bars (hamburger menu) */}
        <i className="fa fa-times fa fa-bars"></i>
      </div>

      {/*  Unordered list for navigation links with 'active' className  */}
      <ul className="nav__links active">
        <li className="link">
          <a href="/">Home</a>
        </li>
        <li className="link">
          <a href="/instant-consultation">Appointments</a>
        </li>

        {/* show either Sign Up or Welcome - depending f the user is logged in */}
        {signUpOrWelcome}
        {/*  List item for the 'Sign Up' link with a button  */}
        {/* <li className="link">
          <a href="/sign-up">
            <button className="btn1">Sign Up</button>
          </a>
        </li> */}

        {/* show either Login or Logout - depending f the user is logged in */}
        {loginOrLogout}
        {/*  List item for the 'Login' link with a button  */}
        {/* <li className="link">
          <a href="/Login">
            {/* <img className="login_icon" src={login} alt="Enter" /> */}
        {/* <button className="btn1">Login</button>
          </a>
        </li> */}
      </ul>
    </nav>
  )
}

// Export the component
export default Navbar
