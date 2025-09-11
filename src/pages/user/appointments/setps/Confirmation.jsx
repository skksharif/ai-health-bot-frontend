import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Confirmation.css";
import { MdCelebration } from "react-icons/md";

const Confirmation = ({ formData, prevStep }) => {
  return (
    <div className="conf-page">
      {/* Header */}
      <div className="conf-banner">
        <h2>Your appointment is confirmed <span><MdCelebration/></span></h2>
        <p>We've booked your appointment. Here are the details.</p>
      </div>

      <div className="conf-content">
        {/* Left column */}
        <div className="conf-left">
          {/* Doctor Card */}
          <div className="conf-doctor-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Doctor"
              className="conf-doctor-img"
            />
            <div className="conf-doctor-info">
              <h3 className="conf-doctor-name">Dr. Joseph McCall</h3>
              <p className="conf-specialty">Pediatrician</p>
              <div className="conf-rating">⭐⭐⭐⭐⭐ <span>(4.5)</span></div>
              <p className="conf-clinic">Clinic: City Care Medical Center</p>
              <p className="conf-mode">Mode: In-person</p>
              <p className="conf-phone">Phone: +1 234 567 890</p>
            </div>
            <button className="conf-call-btn">Call the doctor</button>
          </div>

          {/* Patient Info */}
          <div className="conf-patient">
            <h4>Patient Info</h4>
            <div className="conf-patient-row">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Patient"
                className="conf-patient-img"
              />
              <div>
                <p><strong>Emma Brown</strong></p>
                <p>Age: 35</p>
                <p>ID: #P12934</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="conf-right">
          <h3 className="conf-title">Appointment Details</h3>

          <div className="conf-detail-item">
            <FaCalendarAlt className="conf-icon" />
            <div>
              <strong>Date & Time:</strong>
              <p>Wed, Sept 16, 2025 - 10:30 AM</p>
            </div>
          </div>

          <div className="conf-detail-item">
            <FaMapMarkerAlt className="conf-icon" />
            <div>
              <strong>Location:</strong>
              <p>123 Health Street, Nairobi, South Africa</p>
            </div>
          </div>

          <div className="conf-detail-item">
            <FaClock className="conf-icon" />
            <div>
              <strong>Reminder:</strong>
              <p>We’ll notify you 24 hrs before</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="conf-actions">
            <button onClick={prevStep} className="conf-btn primary">Reschedule</button>
            <button className="conf-btn secondary">Cancel</button>
            <button className="conf-btn secondary">Add to Calendar</button>
            <button className="conf-btn primary">Get directions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
