import React, { useState, useEffect } from "react"
import "../../App.css"
import Popup from "reactjs-popup"
import "../../App.css"
import "./ReviewForm.css"

const ReviewForm = () => {
  const [doctorsData, setDoctorsData] = useState([])

  // Define afunction to store doctors' data into state and local storage
  const [popupOpen, setPopupOpen] = useState(false) // State to manage popup
  const [formValues, setFormValues] = useState({ name: "", review: "", rating: "" }) // Form values
  const [submittedMessage, setSubmittedMessage] = useState("")

  const doctorsCatalog = [
    {
      serialNumber: 1,
      name: "Dr. Jiao Yang",
      rating: 5,
      experience: 9,
      speciality: "Dentist",
      picture: "/images/doctors/yang.png",
      reviewGiven: ""
    },
    {
      serialNumber: 2,
      name: "Dr. Denis Raj",
      rating: 4,
      experience: 24,
      speciality: "Dentist",
      picture: "/images/doctors/raj.png",
      reviewGiven: ""
    },
    {
      serialNumber: 3,
      name: "Dr. Lyn Christie",
      ratings: 3,
      experience: 11,
      speciality: "Dentist",
      picture: "/images/doctors/christie.png",
      reviewGiven: ""
    }
  ]

  // BLOCK: STORE DOCTORS' DATA TO BOTH THE LOCAL STORAGE AND TO STATE
  // define function to fetch doctors data from the local file
  const getDoctorsDetails = () => {
    // fetch doctors data from the catalog
    fetch("/data/doctorsCatalog.json")
    fetch("/data/doctorsCatalog2.json")
      .then(res => res.json())
      .then(data => {
        // store data into the state
        // return data
        console.log("Data from the file: ", data, "Type:", typeof data)
        console.log("Doctors' names: \n")
        data.forEach(({ name }) => console.log(name))
        setDoctorsData(data)
        // store data into local storage if not there already
        if (!localStorage.getItem("doctorsData") || localStorage.getItem("doctorsData") === "[]") {
        }
        localStorage.setItem("doctorsData", JSON.stringify(data))
        if (!localStorage.getItem("doctorsData") || localStorage.getItem("doctorsData") === "[]") {
          console.log('Local storage "doctorsData" does not exist yet, will set it up now.')
          // console.log("State of doctorsData:", doctorsData)
          localStorage.setItem("doctorsData", JSON.stringify(doctorsData))
          // add doctors data into state
          setDoctorsData(localStorage.getItem("doctorsData"))
        }
      })
      .catch(err => console.log(err))
  }

  // Load the data by running teh above function
  // Run the above function to load data from file to state
  useEffect(() => {
    // first load doctors' data into local storage
    // getDoctorsDetails()
    setDoctorsData(doctorsCatalog)
    // load data from local storage into state
    // setDoctorsData(JSON.parse(localStorage.getItem("doctorsData")))
  }, [])
  // Copy doctors' data from state into local storage if not there yet
  useEffect(() => {
    // Store data into teh state
    getDoctorsDetails()
    // Store data into local storage
    if (!localStorage.getItem("doctorsData") || localStorage.getItem("doctorsData") === undefined || localStorage.getItem("doctorsData") === "[]") {
      console.log('Local storage "doctorsData" does not exist yet, will set it up now.')
      // console.log("State of doctorsData:", doctorsData)
      localStorage.setItem("doctorsData", JSON.stringify(doctorsData))
      // add doctors data into state
      setDoctorsData(localStorage.getItem("doctorsData"))
    }
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
