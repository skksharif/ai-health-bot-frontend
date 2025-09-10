import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ step }) => {
  const steps = ["Select Doctors", "Choose date and time", "Confirmation"];

  return (
    <div className="progressbar-container">
      <div className="progressbar-steps">
        {steps.map((label, index) => (
          <div
            key={index}
            className={`step-label ${step === index + 1 ? "active" : step > index + 1 ? "completed" : ""}`}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="progressbar-track">
        <div
          className="progressbar-fill"
          style={{ width: `${(step ) / (steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
