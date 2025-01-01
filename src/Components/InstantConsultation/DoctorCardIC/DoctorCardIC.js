import React, { useEffect, useState } from "react"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import "./DoctorCardIC.css"
import AppointmentFormIC from "../AppointmentFormIC/AppointmentFormIC"
import { v4 as uuidv4 } from "uuid"
import Notification from "../../Notification/Notification"

const DoctorCardIC = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false)
  const [appointments, setAppointments] = useState([])

  const handleBooking = () => {
    setShowModal(true)
  }

  const handleCancel = appointmentId => {
    const updatedAppointments = appointments.filter(appointment => appointment.id !== appointmentId)
    setAppointments(updatedAppointments)
  }

  const handleFormSubmit = appointmentData => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData
    }
    const updatedAppointments = [...appointments, newAppointment]
    setAppointments(updatedAppointments)
    setShowModal(false)
  }

  // define the style of the Book/Cancel appointment style
  const popupStyle = {
    width: "420px",
    height: "700px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    borderRadius: "10px",
    border: "solid 1px #f5e0db",
    backgroundColor: "#fff"
  }

  // console.log('appointment name:', appointment.name)

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
            {" "}
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />{" "}
          </svg>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
        {/* for reference  */}
        {/* <div>
              <button className='book-appointment-btn'>                    
                <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
              </div> */}
      </div>

      <div className="doctor-card-options-container">
        <Popup
          style={{ backgroundColor: "#FFFFFF" }}
          contentStyle={popupStyle}
          trigger={
            <button className={`book-appointment-btn ${appointments.length > 0 ? "cancel-appointment-btn" : ""}`}>
              {appointments.length > 0 ? <div>Cancel Appointment</div> : <div>Book Appointment</div>}
              <div>No Booking Fee</div>
            </button>
          }
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          {close => (
            <div className="doctorbg" style={{ height: "100vh", overflow: "scroll" }}>
              <div>
                <div className="doctor-card-profile-image-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    {" "}
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />{" "}
                  </svg>
                </div>
                <div className="doctor-card-details">
                  <div className="doctor-card-detail-name">{name}</div>
                  <div className="doctor-card-detail-speciality">{speciality}</div>
                  <div className="doctor-card-detail-experience">{experience} years experience</div>
                  <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                </div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <br></br>
                  <br></br>
                  <h3 style={{ textAlign: "center" }}>Appointment Booked!</h3>
                  {appointments.map(appointment => (
                    <div className="bookedInfo" key={appointment.id}>
                      <br></br>
                      <br></br>
                      <br></br>
                      <div style={{ background: "#F5F5F5", padding: "10px", borderRadius: "10px" }}>
                        <p>Name: {appointment.name}</p>
                        <p>Phone Number: {appointment.phoneNumber}</p>
                        <p>Date: {appointment.selectedDate}</p>
                        <p>Time: {appointment.selectedTime}</p>
                      </div>

                      <br></br>
                      <br></br>
                      <br></br>
                      <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                    </div>
                  ))}
                </>
              ) : (
                <AppointmentFormIC doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
              )}
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default DoctorCardIC
