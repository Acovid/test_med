import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import "../../App.css"
import "./ReviewForm.css"

const ReviewForm = () => {
  const [doctorsData, setDoctorsData] = useState([])
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
    fetch("/data/doctorsCatalog2.json")
      .then(res => res.json())
      .then(data => {
        // return data
        console.log("Data from the file: ", data, "Type:", typeof data)
        console.log("Doctors' names: \n")
        data.forEach(({ name }) => console.log(name))
        setDoctorsData(data)
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
    if (!localStorage.getItem("doctorsData") || localStorage.getItem("doctorsData") === undefined || localStorage.getItem("doctorsData") === "[]") {
      console.log('Local storage "doctorsData" does not exist yet, will set it up now.')
      // console.log("State of doctorsData:", doctorsData)
      localStorage.setItem("doctorsData", JSON.stringify(doctorsData))
      // add doctors data into state
      setDoctorsData(localStorage.getItem("doctorsData"))
    }
  }, [])

  if (!localStorage.getItem("doctorsData") || localStorage.getItem("doctorsData") === undefined || localStorage.getItem("doctorsData") === "[]") {
    console.log('Local storage "doctorsData" does not exist yet, will set it up now.')
    // console.log("State of doctorsData:", doctorsData)
    localStorage.setItem("doctorsData", JSON.stringify(doctorsCatalog))
    // add doctors data into state
    setDoctorsData(localStorage.getItem("doctorsData"))
  }

  //   console.log('Local storage "doctorsData" does not exist yet, will set it up now.')
  console.log("State of doctorsData:", doctorsData)
  // doctorsData.forEach(item => console.log("items in array: ", item))

  //   localStorage.setItem("doctorsData", JSON.stringify(getDoctorsDetails()))
  // } else {
  //   console.log('Local storage "doctorsData" exists.')
  // }
  // END BLOCK: STORE DOCTORS' DATA TO BOTH THE LOCAL STORAGE AND TO STATE

  // Function to handle form input changes
  const handleInputChange = e => {
    // const { name, value } = e.target
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  // Function to handle form submission
  const handleFormSubmit = e => {
    console.log("Triggered handleFormSubmit function:\n")
    e.preventDefault()
    // setSubmittedMessage(formValues)
    // create new object with doctors data which includes the object updated in the form submission
    const createNewDoctorsData = formValues => {
      const newDoctorsData = [
        {
          serialNumber: 1,
          name: "Aco",
          rating: "⭐⭐⭐⭐⭐",
          experience: 9,
          speciality: "Dentist",
          picture: "/images/doctors/yang.png",
          reviewGiven: ""
        },
        {
          serialNumber: 2,
          name: "Sveta",
          rating: "⭐⭐⭐⭐",
          experience: 24,
          speciality: "Dentist",
          picture: "/images/doctors/raj.png",
          reviewGiven: ""
        }
      ]
      console.log("Type of newDoctorsData: ", typeof newDoctorsData)
      return newDoctorsData
    }
    const newDoctorsData = createNewDoctorsData()
    // update the state with doctors data
    setDoctorsData(...doctorsData, newDoctorsData)
    setFormValues({ ...formValues, [e.target.name]: e.target.value })

    console.log("Form Submitted:", formValues) // Replace this with your submit logic
    setPopupOpen(false) // Close the popup after submission
    setFormValues({ name: "", review: "", rating: "" }) // Reset the form
    // setDoctorsData({ ...doctorsData, formValues })
    console.log("After form submission:\n")
    console.log("State doctorsData:\n", doctorsData)
    console.log("State formValues:\n", formValues)
    // window.location.reload()
  }

  const handleFormCancel = () => {
    setPopupOpen(false) // Close the popup
    setFormValues({ name: "", review: "" }) // Reset the form
    window.location.reload()
  }

  // define the style for the popup content
  const popupStyle = {
    width: "700px",
    height: "500px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    borderRadius: "10px",
    border: "solid 1px #f5e0db",
    backgroundColor: "#fff"
  }

  // create an array that will hold teh state
  const arrayOfDoctorsData = Object.values(doctorsData);
  console.log("arrayOfDoctorsData:", arrayOfDoctorsData, "type:", typeof(arrayOfDoctorsData));

  
  return (
    <div>
      {/* Page Title */}
      <h1 style={{ fontWeight: "bold", textAlign: "left", marginTop: "150px" }}>Reviews</h1>
      {/* Table */}
      <table className="reviewArea" border="1">
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
          {arrayOfDoctorsData.map((data, index) => (
            <tr key={index}>
              <td>{data.serialNumber}</td>
              <td>{data.name}</td>
              <td>{data.speciality}</td>
              <td>
                {/* popup below this line */}
                <Popup
                  style={{ backgroundColor: "#FFFFFF" }}
                  contentStyle={popupStyle}
                  open={popupOpen}
                  // onOpen={() => setPopupOpen(true)}
                  // onClose={() => setPopupOpen(false)}
                  trigger={<button>Click here</button>}
                  modal
                >
                  {close => (
                    <div style={{ padding: "20px", borderRadius: "5px" }}>
                      <h2>Give Your Review</h2>
                      <form onSubmit={handleFormSubmit}>
                        {/* Input: Name */}
                        <div className="form-group">
                          <label style={{ display: "block", marginBottom: "5px" }}>Name:</label>
                          <input type="text" name="name" value={formValues.name} onChange={handleInputChange} className="form-control" required />
                        </div>

                        {/* Input: Review */}
                        <div className="form-group">
                          <label style={{ display: "block", marginBottom: "5px" }}>Review:</label>
                          <input type="text" name="review" value={formValues.review} onChange={handleInputChange} className="form-control" required />
                        </div>

                        {/* Input: Rating */}
                        <div className="form-group">
                          <p>
                            <b>Rating:</b>
                          </p>
                          <select
                            onChange={e => {
                              formValues.rating = e.target.value
                            }}
                          >
                            <option value="">Select a rating</option>
                            <option value="1">1 - Excellent</option>
                            <option value="2">2 - Very Good</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Poor</option>
                            <option value="5">5 - Very Bad</option>
                          </select>
                        </div>

                        {/* Buttons */}
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <button
                            type="submit"
                            className="btn-primary"
                            style={{
                              marginRight: "10px"
                            }}
                          >
                            Submit
                          </button>

                          <button
                            type="button"
                            className="btn-danger"
                            style={{
                              marginLeft: "10px"
                            }}
                            onClick={handleFormCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </Popup>

                {/* Popup above this line */}

                {/* <button className="btn btp-primary" onClick={() => alert(`Feedback for ${data.name} clicked!`)}>
                  Click here
                </button> */}
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
