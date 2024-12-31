import React, { useState } from 'react'

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedSlot">Date of Appointment:</label>
          <input
            type="date"
            id="selectedSlot"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
            <p>
            <b>Book Time Slot:</b>
            </p>
            <select>
                <option value="fruit">Select a time slot</option>
                <option value="9">9:00-10:00</option>
                <option value="10">10:00-11:00</option>
            </select>
        </div>
        
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
