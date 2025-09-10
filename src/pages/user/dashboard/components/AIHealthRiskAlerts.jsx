import React from "react";
import "./AIHealthRiskAlerts.css";
import { AiOutlineAlert } from "react-icons/ai";

const AIHealthRiskAlerts = () => {
  const alerts = [
    "Based on your profile keep an eye on your blood sugar",
    "Consider regular exercise to maintain a healthy weight",
    "Stay hydrated and monitor your daily water intake",
  ];

  return (
    <div className="dash-alerts">
      <h3 className="dash-card-title">
        <span className="dash-alert-icon"><AiOutlineAlert /></span>
        AI Health Risk Alerts
      </h3>
      <ul className="dash-alert-list">
        {alerts.map((alert, index) => (
          <li key={index}>
            <span className="dash-alert-dot"></span>
            {alert}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIHealthRiskAlerts;
