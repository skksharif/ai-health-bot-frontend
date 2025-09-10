import React from "react";
import "./TelehealthAccess.css";
import { BsTelephonePlus } from "react-icons/bs";
import { AiFillVideoCamera, AiFillMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoChatboxEllipses, IoVideocam } from "react-icons/io5";

const TelehealthAccess = () => {
  const services = [
    { name: "Video Call", icon: <IoVideocam /> },
    { name: "Voice Call", icon: <FaPhoneAlt /> },
    { name: "Chat", icon: <IoChatboxEllipses /> },
  ];

  return (
    <div className="dash-telehealth">
      <h3 className="dash-card-title">
        <span className="dash-telehealth-icon"><BsTelephonePlus /></span>
        Telehealth Access
      </h3>
      {services.map((service, idx) => (
        <div key={idx} className="dash-telehealth-item">
          <p><span className="dash-service-icon">{service.icon}</span>{service.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TelehealthAccess;
