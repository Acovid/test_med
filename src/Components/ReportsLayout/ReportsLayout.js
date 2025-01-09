import React, { useEffect, useState } from "react";
import doctorsData from "./doctorsData.json"; // Import JSON file

const DoctorsTable = () => {
  const [doctors, setDoctors] = useState([]);
  const [viewingReport, setViewingReport] = useState(null); // Manage report viewing state

  useEffect(() => {
    setDoctors(doctorsData); // Load doctors' data from JSON
  }, []);

  const handleViewReport = (reportName) => {
    // the URL of the report file
    const reportUrl = `${process.env.PUBLIC_URL}/reports/${reportName}`;
    window.open(reportUrl, "_blank"); // Open report in a new browser tab
  };

  const handleDownloadReport = (reportName) => {
    const reportUrl = `${process.env.PUBLIC_URL}/reports/${reportName}`;
    const anchor = document.createElement("a");
    anchor.href = reportUrl;
    anchor.download = reportName; // Set the file name for download
    anchor.click();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontWeight: "bold", textAlign: "left" }}>Doctors Reports</h1>
      <table
        border="1"
        style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}
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
          {doctors.map((doctor) => (
            <tr key={doctor.serialNumber}>
              <td>{doctor.serialNumber}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.doctorSpeciality}</td>
              <td>
                <button
                  onClick={() => handleViewReport(doctor.doctorReport)}
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  View Report
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDownloadReport(doctor.doctorReport)}
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Download Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;