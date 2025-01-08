import React, { useState, useEffect } from "react"
import doctorData from "./doctorData.json"

import "../../App.css"
import "./ReportsLayout.css"
// import doctorData from "/data/doctorsCatalog.json"

const ReportsLayout = () => {
  const [data, setData] = useState([]) // Doctors data
  const [selectedDoctor, setSelectedDoctor] = useState(null) // Selected doctor for the form
  const [formValues, setFormValues] = useState({
    username: "",
    reviewContent: "",
    doctorRating: ""
  }) // Form input values

  const getDoctorsDetails = () => {
    // define a function that fetches doctors' data either from the local storage or from the file
    fetch("/data/doctorsCatalog.json")
      .then(res => res.json())
      .then(data => {
        if (localStorage.getItem("reviews")) {
          const reviews = JSON.parse(localStorage.getItem("reviews"))
          setData(reviews)
        } else {
          setData(data)
        }
        setData(data)
      })
      .catch(err => console.log(err))
  }
  // load the data
  useEffect(() => {
    // setData(doctorData) // Load data from JSON file
    // if (localStorage.getItem("reviews")) {
    //   const reviews = JSON.parse(localStorage.getItem("reviews"))
    //   setData(reviews)
    // } else {
    //   setData(doctorData)
    // }
    getDoctorsDetails()
  }, [])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    const updatedData = data.map(doctor =>
      doctor.serialNumber === selectedDoctor
        ? {
            ...doctor,
            review: formValues.reviewContent,
            buttonDisabled: true // Add a flag to disable the button
          }
        : doctor
    )
    setData(updatedData)
    //  persist state into local storage
    localStorage.setItem("reviews", JSON.stringify(data))
    setSelectedDoctor(null) // Close the form
    setFormValues({ username: "", reviewContent: "", doctorRating: "" }) // Reset form
  }

  const handleCancel = () => {
    setSelectedDoctor(null) // Close the form
  }

  return (
    <div>
      <h1 style={{textAlign:"left",  }}>Reports</h1>
      <div className="reviewArea">
        <table>
          <thead>
            <tr>
              <th style={{ width: "140px" }}>Serial Number</th>
              <th style={{ width: "200px" }}>Doctor Name</th>
              <th style={{ width: "250px" }}>Doctor Speciality</th>
              <th>Provide Feedback</th>
              <th style={{ width: "300px" }}>Review</th>
            </tr>
          </thead>
          <tbody>
            {data.map(doctor => (
              <tr key={doctor.serialNumber}>
                <td>{doctor.serialNumber}</td>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: doctor.buttonDisabled ? "gray" : "#ff851b",
                      cursor: doctor.buttonDisabled ? "not-allowed" : "pointer"
                    }}
                    disabled={doctor.buttonDisabled}
                    onClick={() => setSelectedDoctor(doctor.serialNumber)}
                  >
                    {doctor.buttonDisabled ? "Feedback Submitted" : "Click here"}
                  </button>
                </td>
                <td>{doctor.review || "No review yet"}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Feedback Form */}
        {selectedDoctor && (
          <div
            className="form-container shadow"
            style={{
              marginTop: "20px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "300px"
            }}
          >
            {/* <div className="feedback-grid feedback-card"> */}
            <div>
              <h3 style={{ marginBottom: "20px" }}>Give Your Review</h3>
              <form onSubmit={handleFormSubmit}>
                {/* Input: Username */}
                <div style={{ marginBottom: "10px", textAlign: "left" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>Username:</label>
                  <input type="text" name="username" value={formValues.username} onChange={handleInputChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required />
                </div>

                {/* Input: Review Content */}
                <div style={{ marginBottom: "10px", textAlign: "left" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>Review:</label>
                  <input type="text" name="reviewContent" value={formValues.reviewContent} onChange={handleInputChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required />
                </div>

                {/* Input: Doctor Rating */}
                <div style={{ marginBottom: "10px", textAlign: "left" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>Doctor Rating:</label>
                  <input type="number" name="doctorRating" value={formValues.doctorRating} onChange={handleInputChange} style={{ width: "100%", padding: "8px", boxSizing: "border-box" }} required min="1" max="5" />
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    // style={{
                    //   backgroundColor: "green",
                    //   color: "white",
                    //   border: "none",
                    //   padding: "10px 20px",
                    //   borderRadius: "5px",
                    //   cursor: "pointer"
                    // }}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleCancel}
                    // style={{
                    //   backgroundColor: "red",
                    //   color: "white",
                    //   border: "none",
                    //   padding: "10px 20px",
                    //   borderRadius: "5px",
                    //   cursor: "pointer"
                    // }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReportsLayout
