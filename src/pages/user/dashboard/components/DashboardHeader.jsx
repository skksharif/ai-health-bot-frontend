import React from "react";
import "./DashboardHeader.css";
import { MdOutlineNotifications } from "react-icons/md";

const DashboardHeader = () => {
  const name = "Sarah";
  return (
    <header className="dash-header">
      <h2 className="dash-welcome">Welcome, {name}</h2>
      <div className="dash-user-actions">
        <button className="dash-notification-btn"><MdOutlineNotifications/></button>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          className="dash-user-avatar"
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
