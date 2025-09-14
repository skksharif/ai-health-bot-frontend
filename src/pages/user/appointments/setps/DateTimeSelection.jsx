import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import {
  format,
  addDays,
  startOfWeek,
  eachDayOfInterval,
  startOfMonth,
  addMonths,
} from "date-fns";
import "react-day-picker/dist/style.css";
import "./DateTimeSelection.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import StarRating from "../components/StarRating";

const DateTimeSelection = ({ formData, setFormData, nextStep, prevStep }) => {
  const today = new Date();
  const todayOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const [selectedDate, setSelectedDate] = useState(
    formData.date ? new Date(formData.date) : todayOnly
  );
  const [selectedTime, setSelectedTime] = useState(formData.time || "");
  const [view, setView] = useState("week");
  const [currentStartOfWeek, setCurrentStartOfWeek] = useState(
    startOfWeek(todayOnly, { weekStartsOn: 1 })
  );
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(todayOnly));
  const [weekDates, setWeekDates] = useState([]);

  useEffect(() => {
    const days = eachDayOfInterval({
      start: currentStartOfWeek,
      end: addDays(currentStartOfWeek, 6),
    });
    setWeekDates(days);
  }, [currentStartOfWeek]);

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "7:00 PM",
    "8:00 PM",
  ];

  const handleConfirm = () => {
    setFormData({
      ...formData,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
    });
    nextStep();
  };

  const goToPreviousWeek = () => {
    const prevWeekStart = addDays(currentStartOfWeek, -7);
    if (prevWeekStart >= todayOnly) setCurrentStartOfWeek(prevWeekStart);
    else setCurrentStartOfWeek(todayOnly);
  };

  const goToNextWeek = () =>
    setCurrentStartOfWeek(addDays(currentStartOfWeek, 7));
  const goToPreviousMonth = () => {
    const prevMonth = addMonths(currentMonth, -1);
    if (prevMonth >= startOfMonth(todayOnly)) setCurrentMonth(prevMonth);
    else setCurrentMonth(startOfMonth(todayOnly));
  };
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <div className="dts-page">
      <div className="dts-header">
        <span onClick={prevStep} className="dts-back-btn">
          <MdArrowBackIos />
        </span>
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
          <p className="dts-rating">
            <StarRating rating={4.5} /> 4.5
          </p>
          <p className="dts-distance">1.5 km far from you</p>
          <button onClick={prevStep} className="dts-change-btn">
            Change Doctor
          </button>
        </div>

        {/* Schedule Section */}
        <div className="dts-schedule">
          <div className="dts-view-toggle">
            <button
              className={`dts-view-btn ${view === "week" ? "active" : ""}`}
              onClick={() => setView("week")}
            >
              Week view
            </button>
            <button
              className={`dts-view-btn ${view === "month" ? "active" : ""}`}
              onClick={() => setView("month")}
            >
              Month view
            </button>
          </div>

          {view === "week" ? (
            <div className="dts-week-wrapper">
              <div className="dts-week-header">
                <h4>{format(currentStartOfWeek, "MMMM yyyy")}</h4>
              </div>
              <div className="dts-week-navigation">
                <button onClick={goToPreviousWeek} className="week-arrow">
                  <MdArrowBackIos />
                </button>
                <div className="dts-week">
                  {weekDates.map((date) => {
                    const dateStr = format(date, "yyyy-MM-dd");
                    const isSelected =
                      format(selectedDate, "yyyy-MM-dd") === dateStr;
                    const isPast = date < todayOnly;
                    const isToday = date.getTime() === todayOnly.getTime();

                    return (
                      <div
                        key={dateStr}
                        className={`dts-day ${isSelected ? "active" : ""} ${
                          isPast ? "disabled" : ""
                        } ${isToday ? "today" : ""}`}
                        onClick={() => !isPast && setSelectedDate(date)}
                      >
                        <span className="dts-day-name">
                          {format(date, "EEE")}
                        </span>
                        <span className="dts-date">{format(date, "d")}</span>
                      </div>
                    );
                  })}
                </div>
                <button onClick={goToNextWeek} className="week-arrow">
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          ) : (
            <div className="dts-month-wrapper">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                disabled={{ before: todayOnly }}
                className="custom-month"
              />
            </div>
          )}

          <hr />

          {/* Time Slots */}
          <div className="dts-time-slots">
            <h3 className="dts-times-heading">Time Slots</h3>
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
          </div>

          {/* Legend */}
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
