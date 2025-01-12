import React, { useEffect, useState } from "react"
import "./InstantConsultation.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import FindDoctorSearchIC from "./FindDoctorSearchIC/FindDoctorSearchIC"
import DoctorCardIC from "./DoctorCardIC/DoctorCardIC"
// import FakeNotification from "../Notification/FakeNotification"
// import the context provider
// import AppointmentContextProvider from "../../context/AppointmentContextProvider"

const InstantConsultation = () => {
  const [searchParams] = useSearchParams()
  const [doctors, setDoctors] = useState([])
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [isSearched, setIsSearched] = useState(false)

  const getDoctorsDetails = () => {
    // fetch("https://api.npoint.io/9a5543d36f1460da2f63")
    // fetch doctors data from the catalog in local file
    fetch("/data/doctorsCatalog.json")
      .then(res => res.json())
      .then(data => {
        if (searchParams.get("speciality")) {
          // window.reload()
          const filtered = data.filter(doctor => doctor.speciality.toLowerCase() === searchParams.get("speciality").toLowerCase())

          setFilteredDoctors(filtered)

          setIsSearched(true)
          // window.reload()
        } else {
          setFilteredDoctors([])
          setIsSearched(false)
        }
        setDoctors(data)
      })
      .catch(err => console.log(err))
  }
  
  const handleSearch = searchText => {
    if (searchText === "") {
      setFilteredDoctors([])
      setIsSearched(false)
    } else {
      const filtered = doctors.filter(doctor =>
        //
        doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
      )

      setFilteredDoctors(filtered)
      setIsSearched(true)
      window.location.reload()
    }
  }
  const navigate = useNavigate()

  useEffect(() => {
    getDoctorsDetails()
    const authtoken = sessionStorage.getItem("auth-token")
    if (!authtoken) {
      alert("To get doctors details, please login.")
      navigate("/login")
    }
  }, [searchParams])

  return (
    <>
      {/* <AppointmentContextProvider> */}
      <center>
        <div className="searchpage-container search-results-card">
          <FindDoctorSearchIC onSearch={handleSearch} />
          <div className="search-results-container">
            {isSearched ? (
              <center>
                <h2 style={{marginTop: "60px"}}>
                  {filteredDoctors.length} doctors are available {searchParams.get("location")}
                </h2>
                <h3 >Book appointments with minimum wait-time & verified doctor details</h3>
                {filteredDoctors.length > 0 ? filteredDoctors.map(doctor => <DoctorCardIC className="doctorcard" {...doctor} key={doctor.name} />) : <p>No doctors found.</p>}
              </center>
            ) : (
              ""
            )}
          </div>
        </div>
      </center>
      {/* </AppointmentContextProvider> */}
    </>
  )
}

export default InstantConsultation
