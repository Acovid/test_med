import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import "../../App.css"
import "./ReviewForm.css"
// import doctorData from "/data/doctorsCatalog.json"

const ReviewForm = () => {
  const [doctorsData, setDoctorsData] = useState([])
  const [popupOpen, setPopupOpen] = useState(false) // State to manage popup
  const [formValues, setFormValues] = useState({ name: "", review: "", rating: "" }) // Form values

  // BLOCK get doctors data
  const getDoctorsDetails = () => {
    // fetch doctors data from the catalog in local file
    fetch("/data/doctorsCatalog.json")
      .then(res => res.json())
      .then(data => {
        setDoctorsData(data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    // Load the data fetched from the file
    getDoctorsDetails() // Assuming doctorData is imported
  }, [])
  // END BLOCK get doctors data

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log("Form Submitted:", formValues) // Replace this with your submit logic
    setPopupOpen(false) // Close the popup after submission
    setFormValues({ name: "", review: "", rating: "" }) // Reset the form
    window.location.reload()
  }

  const handleCancel = () => {
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
          {doctorsData.map((data, index) => (
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
                            onClick={handleCancel}
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
