import React from "react";
import "./Confirmation.css";

const Confirmation = ({ formData, prevStep }) => {
  return (
    <div className="conf-page">
      {/* Progress Header */}
      <div className="conf-header">
        <div className="conf-steps">
          <span className="conf-step completed">Select Doctors</span>
          <span className="conf-step completed">Choose date and time</span>
          <span className="conf-step active">Confirmation</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="conf-content">
        {/* Left Section - Doctor Info */}
        <div className="conf-left">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Doctor"
            className="conf-doctor-img"
          />
          <h3 className="conf-doctor-name">Dr. Joseph McCall</h3>
          <p className="conf-specialty">Pediatrician</p>
          <div className="conf-rating">⭐ 4.5</div>
          <p className="conf-clinic">Clinic: City Care Medical Center</p>
          <p className="conf-mode">Mode: In-person</p>
          <p className="conf-phone">Phone: +1 234 567 890</p>
          <button className="conf-call-btn">Call the doctor</button>

          {/* Patient Info */}
          <div className="conf-patient">
            <h4>Patient Info</h4>
            <p>Name: Emma Brown</p>
            <p>Age: 35</p>
            <p>ID: #P12934</p>
          </div>
        </div>

        {/* Right Section - Appointment Details */}
        <div className="conf-right">
          <h3 className="conf-title">Appointment Details</h3>
          <div className="conf-detail-item">
            <strong>Date & Time:</strong>
            <p>{formData.date}, {formData.time}</p>
          </div>
          <div className="conf-detail-item">
            <strong>Location:</strong>
            <p>123 Health Street, Nairobi, South Africa</p>
          </div>
          <div className="conf-detail-item">
            <strong>Reminder:</strong>
            <p>We’ll notify you 24 hrs before</p>
          </div>

          <div className="conf-actions">
            <button onClick={prevStep} className="conf-reschedule">Reschedule</button>
            <button className="conf-cancel">Cancel</button>
            <button className="conf-add">Add to Calendar</button>
            <button className="conf-directions">Get directions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
