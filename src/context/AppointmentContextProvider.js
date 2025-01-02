import React, {useState} from "react"

import AppointmentContext from './AppointmentContext'

const AppointmentContextProvider = ({children}) => {
  const {appointment, setAppointment} = useState(null)

  return (
    <AppointmentContext.Provider value={{appointment, setAppointment}}>
      {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentContextProvider