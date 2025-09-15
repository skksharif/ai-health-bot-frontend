import React from "react";
import "./SmartCalender.css";
import { SlCalender } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const times = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];

// Schedule data (Dynamic input)
const schedule = {
  Monday: {
    "9:00 AM": "Alice",
    "10:00 AM": "Hannah",
    "11:00 AM": "Kevin",
    "1:00 PM": "Rita",
  },
  Tuesday: {
    "9:00 AM": "Bob",
    "10:00 AM": "Ethan",
    "1:00 PM": "Olivia",
    "3:00 PM": "Will",
  },
  Wednesday: {
    "9:00 AM": "Fiona",
    "12:00 PM": "Liam",
    "2:00 PM": "Sam",
  },
  Thursday: {
    "10:00 AM": "Isaac",
    "11:00 AM": "Mia",
    "12:00 PM": "Paul",
    "1:00 PM": "Tina",
    "2:00 PM": "Xena",
  },
  Friday: {
    "9:00 AM": "Charlie",
    "11:00 AM": "Conference",
    "12:00 PM": "Dr. Patel",
    "1:00 PM": "Ulysses",
    "2:00 PM": "Yara",
  },
  Saturday: {
    "9:00 AM": "George",
    "12:00 PM": "Noah",
    "1:00 PM": "Quinn",
    "3:00 PM": "Zara",
  },
  Sunday: {
    "9:00 AM": "Diana",
    "10:00 AM": "Jasmine",
    "11:00 AM": "Case consult",
    "12:00 PM": "Dr. Davis",
    "1:00 PM": "Vera",
  },
};

export default function SmartCalender() {
  return (
    <div className="sc-calendar-container">
      <h2 className="sc-calendar-title">
        <span className="sc-icon">
          <LuCalendarDays />
        </span>
        Smart Calendar & Reminder
      </h2>
      <table className="sc-calendar-table">
        <thead>
          <tr>
            <th className="sc-header-cell">Day / Time</th>
            {times.map((time) => (
              <th key={time} className="sc-header-cell">{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td className="sc-day-cell">{day}</td>
              {times.map((time) => (
                <td key={time} className={`sc-time-cell ${schedule[day]?.[time] ? 'sc-booked' : ''}`}>
                  {schedule[day]?.[time] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
