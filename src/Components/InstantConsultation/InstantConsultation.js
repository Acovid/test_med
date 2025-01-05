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
    fetch("https://api.npoint.io/9a5543d36f1460da2f63")
      // fetch(doctorsCatalog)
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

  const doctorsPictures = [
    {
      name: "Dr. Jiao Yang",
      ratings: "⭐⭐⭐⭐⭐",
      experience: 9,
      speciality: "Dentist",
      picture: "/images/doctors/yang.png"
    },
    {
      name: "Dr. Denis Raj",
      ratings: "⭐⭐⭐⭐",
      experience: 24,
      speciality: "Dentist",
      picture: "/images/doctors/raj.png"
    },
    {
      name: "Dr. Lyn Christie",
      ratings: "⭐⭐⭐",
      experience: 11,
      speciality: "Dentist",
      picture: "/images/doctors/christie.png"
    },
    {
      name: "Dr. Jessica White",
      ratings: "⭐⭐⭐⭐",
      experience: 18,
      speciality: "Dentist",
      picture: "/images/doctors/white.png"
    },

    {
      name: "Dr. Elizabeth Clark",
      ratings: "⭐⭐⭐⭐",
      experience: 11,
      speciality: "Gynecologist/Obstetrician",
      picture: "/images/doctors/clark_elisabeth.png"
    },
    {
      name: "Dr. Eugene J. Turner",
      ratings: "⭐⭐⭐⭐",
      experience: 40,
      speciality: "Gynecologist/Obstetrician",
      picture: "/images/doctors/turner.png"
    },
    {
      name: "Dr. Alan Dalkin",
      ratings: "⭐⭐⭐⭐",
      experience: 33,
      speciality: "Gynecologist/Obstetrician",
      picture: "/images/doctors/dalkin.png"
    },
    {
      name: "Dr. Richard Pearson,",
      ratings: "⭐⭐⭐",
      experience: 40,
      speciality: "General Physician",
      picture: "/images/doctors/pearson.png"
    },
    {
      name: "Dr. Mark D. Okusa",
      ratings: "⭐⭐⭐",
      experience: 3,
      speciality: "General Physician",
      picture: "/images/doctors/okusa.png"
    },
    {
      name: "Dr. Sarah Johnson",
      ratings: "⭐⭐⭐⭐⭐",
      experience: 9,
      speciality: "Dentist",
      picture: "/images/doctors/johnson.png"
    },
    {
      name: "Dr. David Anderson",
      ratings: "⭐⭐⭐⭐",
      experience: 24,
      speciality: "Dentist",
      picture: "/images/doctors/anderson.png"
    },
    {
      name: "Dr. Kevin Miller",
      ratings: "⭐⭐⭐⭐⭐",
      experience: 11,
      speciality: "Dentist",
      picture: "/images/doctors/miller.png"
    },
    {
      name: " Dr. Stephny Grosh",
      ratings: "⭐⭐⭐⭐",
      experience: 18,
      speciality: "Dentist",
      picture: "/images/doctors/grosh.png"
    },

    {
      name: "Dr. Emily Clark",
      ratings: "⭐⭐⭐⭐⭐",
      experience: 11,
      speciality: "Gynecologist/Obstetrician",
      picture: "/images/doctors/clark_emily.png"
    },
    {
      name: "Dr. Samantha Turner",
      ratings: "⭐⭐⭐⭐",
      experience: 40,
      speciality: "Gynecologist/Obstetrician",
      picture: "/images/doctors/turner.png"
    },
    {
      name: "Dr. Rachel Parker",
      ratings: "⭐⭐⭐",
      experience: 33,
      speciality: "Gynecologist/Obstetrician",
      picture: "/images/doctors/parker.png"
    },
    {
      name: "Dr. Michael Smith",
      ratings: "⭐⭐⭐⭐⭐",
      experience: 40,
      speciality: "General Physician",
      picture: "/images/doctors/smith.png"
    },
    {
      name: "Dr. Laura Taylor",
      ratings: "⭐⭐⭐",
      experience: 3,
      speciality: "General Physician",
      picture: "/images/doctors/taylor.png"
    }
  ]

  useEffect(() => {
    getDoctorsDetails()
    const authtoken = sessionStorage.getItem("auth-token")
    if (!authtoken) {
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
                <h2>
                  {filteredDoctors.length} doctors are available {searchParams.get("location")}
                </h2>
                <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                {filteredDoctors.length > 0 ? filteredDoctors.map(doctor => <DoctorCardIC className="doctorcard" {...doctor} key={doctor.name} profilePic={"/images/doctors/anderson.png"} />) : <p>No doctors found.</p>}
                {/* {filteredDoctors.length > 0 ? (
                  filteredDoctors.map(doctor => (
                    <DoctorCardIC
                      className="doctorcard"
                      {...doctor}
                      key={doctor.name}
                      profilePic={doctorsPictures.filter(filteredPicture => {
                        // return filteredPicture.name === doctor.name;
                        if (filteredPicture.name === doctor.name) {
                          // console.log(filteredPicture.name, doctor.name)
                          console.log(filteredPicture.picture)
                          return filteredPicture.picture
                        }
                        // console.log(filteredPicture.name, doctor.name)
                      })}
                    />
                  ))
                ) : (
                  <p>No doctors found.</p>
                )} */}
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
