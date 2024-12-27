import React, { useState, useEffect } from "react"
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

  // sessionStorage.setItem("name", "Aco")

  // useEffect will determine if a user is logged in
  useEffect(() => {
    // When the component mounts, check if there's a 'name' value in Session Storage.
    const storedName = sessionStorage.getItem("name")

    function userIsLoggedin() {
      // do stuff if user is logged in
      setName(storedName)
      console.log("-- Yes, there is a name in the session storage! This one:", storedName)
      setSignUpOrWelcome(<li className="welcome_user">Welcome {storedName}</li>)
      setLoginOrLogout(
        <li
          className="link"
          onClick={() => {
            sessionStorage.setItem("name", "")
            alert("I logged out")
          }}
        >
          <a href="/">
            {/* <img className="login_icon" src={login} alt="Enter" /> */}
            <button className="btn1">Logout</button>
          </a>
        </li>
      )
      console.log("signUpOrWelcome:", signUpOrWelcome)
      console.log("loginOrLogout:", loginOrLogout)
      // sessionStorage.setItem("name", null)
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
      console.log("signUpOrWelcome:", { signUpOrWelcome })
      // Save the entered name to Session Storage.
    }

    // this if statement will determine what to show in the menu: Sign Up & Login or Welcome, user and Logout
    if (sessionStorage.getItem("name") !== "") {
      // user is logged in
      userIsLoggedin()
    } else {
      // no user logged in
      userIsLoggedout()
    }
  }, [])

  return (
    <nav>
      {/* Navigation logo section */}
      {/* Link to the home page */}
      <a href="/">
        <img className="nav__logo" src={logo} alt="Stay Healthy logo" />
      </a>

      {/* Navigation icon section with an onClick event listener */}
      {/* <div className="nav__icon" onClick={handleClick}> */}
      <div className="nav__icon">
        {/* Font Awesome icon for bars (hamburger menu) */}
        <i className="fa fa-times fa fa-bars"></i>
      </div>

      {/*  Unordered list for navigation links with 'active' className  */}
      <ul className="nav__links active">
        {/*  List item for the 'Home' link  */}
        <li className="link">
          <a href="/">Home</a>
        </li>
        {/*  List item for the 'Appointments' link  */}
        <li className="link">
          <a href="#">Appointments</a>
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
