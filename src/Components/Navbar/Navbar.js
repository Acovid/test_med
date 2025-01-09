import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"
import logo from "./stay-healthy-logo.png"
// import logo from "/images/stay-healthy-logo.png"
import login from "./login.svg"
import ProfileCard from "../ProfileCard/ProfileCard"
import ReportsLayout from "../ReportsLayout/ReportsLayout"

// Define a functional component
const Navbar = () => {
  // user's name and mail
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  // flip: either display menu option Sign Up or Welcome user
  const [signUpOrWelcome, setSignUpOrWelcome] = useState("")
  // flip: either display menu option Login or Logout
  const [loginOrLogout, setLoginOrLogout] = useState("")
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false) // Manage dropdown visibility
  const [showProfileComponent, setShowProfileComponent] = useState(false) // Manage ProfileCard component visibility
  const [showReportsComponent, setShowReportsComponent] = useState(false) // Manage ProfileCard component visibility

  const toggleProfileCard = () => {
    setIsProfileCardOpen(prev => !prev)
    setShowProfileComponent(false) // Reset to hide ProfileCard component
  }

  const openProfileComponent = () => {
    setShowProfileComponent(true) // Show ProfileCard component
  }

  const openReportsComponent = () => {
    setShowReportsComponent(true) // Show ProfileCard component
  }

  const navigate = useNavigate() // Navigation hook from react-router

  // useEffect will determine if a user is logged in
  useEffect(() => {
    // When the component mounts, check if there's a 'email' value in Session Storage.
    let userName = ""
    if (sessionStorage.getItem("email")) {
      // if email exists in the session storage
      const email = sessionStorage.getItem("email")
      userName = email.substring(0, email.indexOf("@"))
      // console.log(`Session storage: \n email: ${email} \n userName: ${userName}`)
      // console.log("userName: ", userName)
      // in navbar display the welcome message and Logout button
      setName(userName)
      setMail(email)
      userIsLoggedin()
    } else {
      // in navbar display the Sign Up and Login button
      userIsLoggedout()
    }

    function userIsLoggedin() {
      // do stuff if user is logged in
      setSignUpOrWelcome(
        <li className="welcome_user" onClick={toggleProfileCard}>
          Welcome {userName}
        </li>
      )
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
            <button className="btn1" style={{ margin: "0 80px 0 0" }}>
              Login
            </button>
          </a>
        </li>
      )
    }
  }, [])

  return (
    <>
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
          <li className="link" style={{ marginRight: "50px" }}>
            <a href="/review">Review</a>
          </li>

          {/* show either Sign Up or Welcome - depending if the user is logged in */}
          {signUpOrWelcome}

          {/* show either Login or Logout - depending if the user is logged in */}
          {loginOrLogout}
        </ul>
      </nav>

      {/* Dropdown Profile Card */}
      {isProfileCardOpen && !showProfileComponent && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "185px",
            width: "185px",
            padding: "20px",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "5px",
            zIndex: "1000"
          }}
        >
          <a
            href="#"
            onClick={openProfileComponent}
            style={{
              textDecoration: "none",
              color: "#ff851b",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Your Profile
          </a>
          <br />
          <br />
          <a
            href="#"
            onClick={openReportsComponent}
            style={{
              textDecoration: "none",
              color: "#ff851b",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Reports
          </a>
        </div>
      )}

      {/* ProfileCard Component */}
      {showProfileComponent && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            // border: "1px solid gray",
            borderRadius: "5px",
            padding: "20px",
            top: "100px",
            right: "100px",
            zIndex: "1000",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            color: "#3d3c3c"
          }}
        >
          <ProfileCard />
        </div>
      )}

      {/* Reports Component */}
      {showReportsComponent && (
        <div>
          <ReportsLayout />
        </div>
      )}
    </>
  )
}

// Export the component
export default Navbar
