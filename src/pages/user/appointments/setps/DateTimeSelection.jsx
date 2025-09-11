import React, { useState } from "react";
import "./DateTimeSelection.css";
import { ChevronLeft } from "lucide";
import { MdArrowBackIos } from "react-icons/md";
import StarRating from "../components/StarRating";

const DateTimeSelection = ({ formData, setFormData, nextStep, prevStep }) => {
  const [selectedDate, setSelectedDate] = useState(formData.date || "");
  const [selectedTime, setSelectedTime] = useState(formData.time || "");

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = [14, 15, 16, 17, 18, 19, 20]; // Example week
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM",
    "7:00 PM", "8:00 PM",
  ];

  const handleConfirm = () => {
    setFormData({ ...formData, date: selectedDate, time: selectedTime });
    nextStep();
  };

  return (
    <div className="dts-page">
      {/* Progress Header */}
      <div className="dts-header">
        <span onClick={prevStep} className="dts-back-btn"><MdArrowBackIos/></span>
        <button
          className="dts-confirm-btn"
          disabled={!selectedDate || !selectedTime}
          onClick={handleConfirm}
        >
          Confirm Appointment
        </button>
      </div>

      <div className="dts-content">
        {/* Doctor Card */}
        <div className="dts-doctor-card">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="doctor"
            className="dts-doctor-img"
          />
          <p className="dts-type">In-person</p>
          <h3 className="dts-doctor-name">Dr. Joseph McCall</h3>
          <p className="dts-specialty">Pediatrician</p>
          <p className="dts-rating"><StarRating rating={4.5}/>4.5</p>
          <p className="dts-distance"> 1.5 km far from you</p>
          <button onClick={prevStep} className="dts-change-btn">
            Change Doctor
          </button>
        </div>

        {/* Date and Time Selection */}
        <div className="dts-schedule">
          {/* Toggle Views */}
          <div className="dts-view-toggle">
            <button className="dts-view-btn active">Week view</button>
            <button className="dts-view-btn">Month view</button>
          </div>

          {/* Week Days */}
          <div className="dts-week">
            {weekDays.map((day, index) => (
              <div
                key={day}
                className={`dts-day ${
                  selectedDate === dates[index] ? "active" : ""
                }`}
                onClick={() => setSelectedDate(dates[index])}
              >
                <span>{day}</span>
                <span className="dts-date">{dates[index]}</span>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="dts-times">
            {timeSlots.map((time) => (
              <button
                key={time}
                className={`dts-time-btn ${
                  selectedTime === time ? "active" : ""
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>

          <div className="dts-legend">
            <span className="dts-legend-item">
              <span className="dot available"></span> Available
            </span>
            <span className="dts-legend-item">
              <span className="dot unavailable"></span> Unavailable
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
    