import React, { useState, useEffect } from "react"
import "./ReviewForm.css"
// import doctorData from "/data/doctorsCatalog.json"

const ReviewForm = () => {
  const [doctorsData, setDoctorsData] = useState([])

  const getDoctorsDetails = () => {
    // fetch doctors data from the catalog in local file
    fetch("/data/doctorsCatalog.json")
      .then(res => res.json())
      .then(data => {
        setDoctorsData(data)
      })
      .catch(err => console.log(err))
  }

  // Load the data (if needed dynamically, fetch from API or read file)
  useEffect(() => {
    getDoctorsDetails() // Assuming doctorData is imported
  }, [])
  // console.log("doctorsData: ", doctorsData, "\n");

  return (
    <div className="reviewArea">
      <table >
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctorsData.map((data, index) => (
            <tr key={index}>
              <td>{data.serialNumber}</td>
              <td>{data.name}</td>
              <td>{data.speciality}</td>
              <td>
                <button className="btn btp-primary" onClick={() => alert(`Feedback for ${data.name} clicked!`)}>
                  Click here
                </button>
              </td>
              <td>{data.reviewGiven}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReviewForm
