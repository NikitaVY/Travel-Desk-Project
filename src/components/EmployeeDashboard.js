// src/components/EmployeeDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [travelDetails, setTravelDetails] = useState({
    employeeId: '',
    employeeName: '',
    projectName: '',
    departmentName: '',
    reasonForTravelling: '',
    typeOfBooking: '',
    domesticOrInternational: '',
    adharCard: '',
    flightDetails: '',
    date: '',
    daysOfStay: '',
    mealRequired: '',
    mealPreferences: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravelDetails({ ...travelDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/requests', travelDetails);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            name="employeeId"
            value={travelDetails.employeeId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="employeeName"
            name="employeeName"
            value={travelDetails.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            className="form-control"
            id="projectName"
            name="projectName"
            value={travelDetails.projectName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departmentName">Department Name</label>
          <input
            type="text"
            className="form-control"
            id="departmentName"
            name="departmentName"
            value={travelDetails.departmentName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reasonForTravelling">Reason for Travelling</label>
          <input
            type="text"
            className="form-control"
            id="reasonForTravelling"
            name="reasonForTravelling"
            value={travelDetails.reasonForTravelling}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="typeOfBooking">Type of Booking</label>
          <select
            className="form-control"
            id="typeOfBooking"
            name="typeOfBooking"
            value={travelDetails.typeOfBooking}
            onChange={handleChange}
            required
          >
            <option value="ticketOnly">Ticket Only</option>
            <option value="hotelOnly">Hotel Only</option>
            <option value="ticketAndHotel">Ticket + Hotel</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="domesticOrInternational">Domestic/International</label>
          <select
            className="form-control"
            id="domesticOrInternational"
            name="domesticOrInternational"
            value={travelDetails.domesticOrInternational}
            onChange={handleChange}
            required
          >
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="adharCard">Adhar Card</label>
          <input
            type="text"
            className="form-control"
            id="adharCard"
            name="adharCard"
            value={travelDetails.adharCard}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="flightDetails">Flight Details</label>
          <input
            type="text"
            className="form-control"
            id="flightDetails"
            name="flightDetails"
            value={travelDetails.flightDetails}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={travelDetails.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="daysOfStay">Days of Stay</label>
          <input
            type="number"
            className="form-control"
            id="daysOfStay"
            name="daysOfStay"
            value={travelDetails.daysOfStay}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mealRequired">Meal Required</label>
          <select
            className="form-control"
            id="mealRequired"
            name="mealRequired"
            value={travelDetails.mealRequired}
            onChange={handleChange}
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mealPreferences">Meal Preferences</label>
          <input
            type="text"
            className="form-control"
            id="mealPreferences"
            name="mealPreferences"
            value={travelDetails.mealPreferences}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
  );
};

export default EmployeeDashboard;
