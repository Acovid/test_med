import React, { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import "./Notification.css"

// Function component Notification to display user notifications
const FakeNotification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [doctorData, setDoctorData] = useState(null)
  const [appointmentData, setAppointmentData] = useState(null)
  const [notificationIsVisible, setNotificationIsVisible] = useState(false)

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem("email")
    const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"))
    const storedAppointmentData = JSON.parse(localStorage.getItem("appointmentData"))
    // const setAppointmentData = JSON.parse(localStorage.getItem("appointmentData"))
    // console.log("storedUsername: ", storedUsername)
    // console.log("storedDoctorData: ", storedDoctorData)
    // console.log("storedAppointmentData: ", storedAppointmentData)
    // const appointmentObject = JSON.parse(storedAppointmentData)
    // console.log("appointmentObject.phone", appointmentObject.phone);

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true)
      setUsername(storedUsername)
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData)
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData)
      // console.log(appointmentData);
    }
  }, []) // Empty dependency array ensures useEffect runs only once after initial render

  // get appointment data from state
  // const appointmentObject = JSON.parse(appointmentData)
  // console.log("appointmentObject", appointmentObject)

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar></Navbar>
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      <>
        <div className="appointment-card">
          <div className="appointment-card__content">
            {/* Display title for appointment details */}
            <h3 className="appointment-card__title mb-4">Appointment Details</h3>
            <p className="appointment-card__message">
              {/* Display doctor's name from doctorData */}
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
            <p className="appointment-card__message">
              {/* Display doctor's speciality from doctorData */}
              <strong>Speciality:</strong> {doctorData?.speciality}
            </p>
            <p className="appointment-card__message">
              {/* Display user name */}
              <strong>Name:</strong> {appointmentData?.name}
            </p>
            <p className="appointment-card__message">
              {/* Display user's phone number */}
              <strong>Phone number:</strong> {appointmentData?.phone}
            </p>
            <p className="appointment-card__message">
              {/* Display appointment date */}
              <strong>Date:</strong> {appointmentData?.date}
            </p>
            <p className="appointment-card__message">
              {/* Display appointment time */}
              <strong>Time:</strong> {appointmentData?.time}
            </p>
          </div>
        </div>
      </>
    </div>
  )
}

// Export Notification component for use in other parts of the application
export default FakeNotification
