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

  const doctorsData = 
  [
    {
      serialNumber: 1,
      name: "Dr. Jessica White",
      speciality: "Cardiology",
      reportFile: "dr_white_patient_report.pdf"
    },
    {
      serialNumber: "2",
      name: "Dr. Jane Smith",
      speciality: "Neurology",
      reportFile: "dr_smith_patient_report.pdf"
    }
  ]

  useEffect(() => {
    setData(doctorData) // Load data from the array
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
      <h1 style={{ textAlign: "left" }}>Reports</h1>
      <div className="reviewArea">
        <table>
          <thead>
            <tr>
              <th style={{ width: "140px" }}>Serial Number</th>
              <th style={{ width: "200px" }}>Doctor Name</th>
              <th style={{ width: "250px" }}>Doctor Speciality</th>
              <th>View Report</th>
              <th style={{ width: "200px" }}>Download Report</th>
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
                      cursor: doctor.buttonDisabled ? "not-allowed" : "pointer",
                      width: "200px"
                    }}
                    disabled={doctor.buttonDisabled}
                    onClick={() => setSelectedDoctor(doctor.serialNumber)}
                  >
                    {doctor.buttonDisabled ? "Feedback Submitted" : "View Report"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: doctor.buttonDisabled ? "gray" : "#ff851b",
                      cursor: doctor.buttonDisabled ? "not-allowed" : "pointer",
                      width: "200px"
                    }}
                    disabled={doctor.buttonDisabled}
                    onClick={() => setSelectedDoctor(doctor.serialNumber)}
                  >
                    {doctor.buttonDisabled ? "Feedback Submitted" : "Download Report"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ReportsLayout
