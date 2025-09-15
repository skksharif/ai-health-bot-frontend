import React from "react";
import "./DashboardHeader.css";
import { MdOutlineNotifications } from "react-icons/md";

const DashboardHeader = () => {
  const name = "Sarah";
  return (
    <header className="doctor-dash-header">
      <h2 className="doctor-dash-welcome">Welcome, {name}</h2>
      <div className="doctor-dash-user-actions">
        <button className="doctor-dash-notification-btn"><MdOutlineNotifications/></button>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          className="doctor-dash-user-avatar"
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
