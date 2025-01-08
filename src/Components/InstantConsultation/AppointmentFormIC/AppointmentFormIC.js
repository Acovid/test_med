import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  // const navigate = useNavigate()

  const handleFormSubmit = e => {
    e.preventDefault()
    onSubmit({ name, phoneNumber, selectedDate, selectedTime })
    setName(name)
    setPhoneNumber(phoneNumber)
    setSelectedDate(selectedDate)
    setSelectedTime(selectedTime)
    const appointment = {
      doctorName,
      doctorSpeciality,
      name,
      phone: phoneNumber,
      date: selectedDate,
      time: selectedTime
    }
    console.log(`FROM AppointmentFormIC.js - I booked this appointment:\nname: ${name}\nphone: ${phoneNumber}\ndate: ${selectedDate}\ntime: ${selectedTime}\n`)
    // Store appointment data to local storage
    localStorage.setItem("appointmentData", JSON.stringify(appointment))
    window.location.reload()
  }

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="selectedDate">Date of Appointment:</label>
        <input type="date" id="selectedDate" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <p>
          <b>Book Time Slot:</b>
        </p>
        <select onChange={e => setSelectedTime(e.target.value)}>
          <option value="">Select a time slot</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
        </select>
      </div>

      <button type="submit">Book Now</button>
    </form>
  )
}

export default AppointmentFormIC
