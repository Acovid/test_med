import React from 'react';
import "./Navbar.css";

// Define a functional component
const Navbar = () => {
  return (
    <nav>
    {/* Navigation logo section */}
      {/* Link to the home page */}
      <a href="/">
        <img className="nav__logo" src = "./stay-healthy-logo.png" alt="Stay Healthy logo"/>
      </a>

    {/* Navigation icon section with an onClick event listener */}
    <div className="nav__icon" onClick={handleClick}>
      {/* Font Awesome icon for bars (hamburger menu) */}
      <i className="fa fa-times fa fa-bars"></i>
    </div>

    {/*  Unordered list for navigation links with 'active' className  */}
    <ul className="nav__links active">
      {/*  List item for the 'Home' link  */}
      <li className="link">
        <a href="../Landing_Page/LandingPage.html">Home</a>
      </li>
      {/*  List item for the 'Appointments' link  */}
      <li className="link">
        <a href="#">Appointments</a>
      </li>
      {/*  List item for the 'Sign Up' link with a button  */}
      <li className="link">
        <a href="../Sign_Up//Sign_Up.html">
          <button className="btn1">Sign Up</button>
        </a>
      </li>

      {/*  List item for the 'Login' link with a button  */}
      <li className="link">
        <a href="../Login/Login.html">
          <img className="login_icon" src = "./login.svg" alt="Enter"/>
          <button className="btn1">Login</button>
        </a>
      </li>
    </ul>
</nav>
  );
};

// Export the component
export default Navbar;