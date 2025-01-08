import React, { useState, useEffect } from "react"
import "../../App.css"
import "./ReviewForm.css"
// import doctorData from "/data/doctorsCatalog.json"

const ReviewForm = () => {
  const [doctorsData, setDoctorsData] = useState([])

  // Define afunction to store doctors' data into state and local storage
  const getDoctorsDetails = () => {
    // fetch doctors data from the catalog
    fetch("/data/doctorsCatalog.json")
      .then(res => res.json())
      .then(data => {
        // store data into the state
        setDoctorsData(data)
        // store data into local storage if not there already
        if (!localStorage.getItem("doctorsData") || localStorage.getItem("doctorsData") === "[]") {
        }
        localStorage.setItem("doctorsData", JSON.stringify(data))
      })
      .catch(err => console.log(err))
  }

  // Load the data by running teh above function
  useEffect(() => {
    // Store data into teh state
    getDoctorsDetails()
    // Store data into local storage
  }, [])
  // console.log("doctorsData: ", doctorsData, "\n");

  return (
    <div>
      <h1 className="heading">Reviews</h1>
      <div className="reviewArea">
        <table>
          <thead>
            <tr>
              <th style={{ width: "140px" }}>Serial Number</th>
              <th style={{ width: "200px" }}>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>Provide Feedback</th>
              <th style={{ width: "300px" }}>Review Given</th>
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
                <td style={{ width: "300px" }}>{data.reviewGiven}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReviewForm
