import React, { useState, useEffect } from "react";
import doctorData from "./doctorData.json";

const DoctorTable = () => {
  const [data, setData] = useState([]); // Doctors data
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Selected doctor for the form
  const [formValues, setFormValues] = useState({
    username: "",
    reviewContent: "",
    doctorRating: "",
  }); // Form input values

  useEffect(() => {
    setData(doctorData); // Load data from JSON file
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedData = data.map((doctor) =>
      doctor.serialNumber === selectedDoctor
        ? {
            ...doctor,
            review: formValues.reviewContent,
            buttonDisabled: true, // Add a flag to disable the button
          }
        : doctor
    );
    setData(updatedData);
    setSelectedDoctor(null); // Close the form
    setFormValues({ username: "", reviewContent: "", doctorRating: "" }); // Reset form
  };

  const handleCancel = () => {
    setSelectedDoctor(null); // Close the form
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Page Title */}
      <h1 style={{ fontWeight: "bold", textAlign: "left" }}>Doctors Reviews</h1>

      {/* Table */}
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {data.map((doctor) => (
            <tr key={doctor.serialNumber}>
              <td>{doctor.serialNumber}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.doctorSpeciality}</td>
              <td>
                <button
                  style={{
                    backgroundColor: doctor.buttonDisabled ? "gray" : "blue",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: doctor.buttonDisabled ? "not-allowed" : "pointer",
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
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "300px",
          }}
        >
          <h3>Provide Feedback</h3>
          <form onSubmit={handleFormSubmit}>
            {/* Input: Username */}
            <div style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Username:</label>
              <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                required
              />
            </div>

            {/* Input: Review Content */}
            <div style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Review:</label>
              <input
                type="text"
                name="reviewContent"
                value={formValues.reviewContent}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                required
              />
            </div>

            {/* Input: Doctor Rating */}
            <div style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Doctor Rating:</label>
              <input
                type="number"
                name="doctorRating"
                value={formValues.doctorRating}
                onChange={handleInputChange}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                required
                min="1"
                max="5"
              />
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DoctorTable;