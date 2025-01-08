import React from "react" // Importing the necessary modules from React library
import { Link } from "react-router-dom" // Importing the Link component from react-router-dom library
import "./LandingPage.css" // Importing the CSS styles for the Landing_Page component
import "../../App.css"

// Defining the Function component Landing_Page
const LandingPage = () => {
  return (
    <section className="hero-section">
      {" "}
      {/* Creating a section with class name 'hero-section' */}
      <div>
        <div data-aos="fade-up" className="flex-hero">
          {" "}
          {/* Creating a div with data-aos attribute and class name 'flex-hero' */}
          <h1>Stay Healthy </h1>
          {/* <br />
          <></> */}
          <h2 className="text-gradient">Your Health - Our Responsibility</h2>
          <div className="blob-cont">
            {" "}
            {/* Creating a div with class name 'blob-cont' */}
            <div className="blue blob"></div> {/* Creating a blue blob inside the 'blob-cont' div */}
          </div>
          <div className="blob-cont">
            {" "}
            {/* Creating another div with class name 'blob-cont' */}
            <div className="blue1 blob"></div> {/* Creating a different blue blob inside the second 'blob-cont' div */}
          </div>
          <br /><br />
          <h4>Your health is our priority, and we’re here to make accessing medical care easier than ever. With Stay Healthy, you can conveniently book appointments with trusted doctors at a time that works best for you. Whether you need a routine checkup or specialized care, we’ve got you covered. Take the first step toward better health today—your wellness journey starts here!</h4>
          <br />
          {/* buttons */}
          <div>
            <a href="/instant-consultation">
              {" "}
              {/* Creating a hyperlink to jump to the 'services' section */}
              <button className="btn btn-primary">Get Started</button>
            </a>
            <a href="/fake-login">
              {" "}
              <button className="btn btn-danger">Fake Login</button>
            </a>
            <a href="/test-navbar">
              {" "}
              <button className="btn btn-danger">Test Navbar</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage // Exporting the Landing_Page component to be used in other parts of the application
