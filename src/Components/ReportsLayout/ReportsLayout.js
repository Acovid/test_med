import React, { useEffect, useState } from "react"
import doctorsData from "./doctorsData.json" // Import JSON file
import "./ReportsLayout.css"
import "../../App.css"

const DoctorsTable = () => {
  const [doctors, setDoctors] = useState([])
  const [showReports, setShowReports] = useState(true) // Manage visibility of the Doctors Reports window

  useEffect(() => {
    setDoctors(doctorsData) // Load doctors' data from JSON
  }, [])

  const handleDownloadReport = reportName => {
    const reportUrl = `${process.env.PUBLIC_URL}/reports/${reportName}`
    const anchor = document.createElement("a")
    anchor.href = reportUrl
    anchor.download = reportName // Set the file name for download
    anchor.click()
  }

  return (
    <div>
      {showReports && (
        <div
          className="reports-area"
          // Uncomment and customize if needed
          // style={{
          //   margin: "200px auto",
          //   position: "relative",
          //   width: "900px",
          //   border: "1px solid #ddd",
          //   borderRadius: "8px",
          //   padding: "15px",
          //   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          //   backgroundColor: "white",
          // }}
        >
          {/* Header with Close Icon */}
          {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width:"800px" }}> */}
          <div id="header">
            <button
              onClick={() => setShowReports(false)}
              className="nowrap"
              style={{
                background: "none",
                border: "none",
                fontSize: "30px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "#333",
                whiteSpace: "nowrap",
                marginRight: "0px",
                textAlign:"right",
                marginTop: "-5px"
                // marginLeft: "auto", // Push the button to the right
              }}
            >
              &times;
            </button>
            <h1
              className="nowrap"
              style={{
                fontWeight: "bold",
                textAlign: "left",
                margin: "-50px 0 0 0",
                // width: "20px",
                whiteSpace: "nowrap" // Prevents text from wrapping
                // overflow: "hidden", // Ensures no overflow beyond the parent container
                // textOverflow: "ellipsis", // Adds "..." if the text is too long
              }}
            >
              Doctors Reports
            </h1>
          </div>
          {/* end of header */}
          {/* Table */}
          <table
            border="1"
            style={{
              borderCollapse: "collapse",
              width: "100%",
              marginTop: "20px"
            }}
          >
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>View Report</th>
                <th>Download Report</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map(doctor => (
                <tr key={doctor.serialNumber}>
                  <td>{doctor.serialNumber}</td>
                  <td>{doctor.doctorName}</td>
                  <td>{doctor.doctorSpeciality}</td>
                  {/* button view report */}
                  <td>
                    <button onClick={() => window.open(`${process.env.PUBLIC_URL}/reports/${doctor.doctorReport}`, "_blank")} className="btn btn-primary">
                      View Report
                    </button>
                  </td>
                  {/* button download report */}
                  <td>
                    <button onClick={() => handleDownloadReport(doctor.doctorReport)} className="btn btn-primary">
                      Download Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default DoctorsTable
