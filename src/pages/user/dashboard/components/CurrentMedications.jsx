import React from "react";
import "./CurrentMedications.css";
import { IoMedicalOutline } from "react-icons/io5";
import { RiCapsuleLine } from "react-icons/ri";

const CurrentMedications = () => {
  const meds = [
    { name: "Metformin", dosage: "500 mg" },
    { name: "Lisinopril", dosage: "20 mg" },
    { name: "Amlodipine", dosage: "750 mg" },
    { name: "Metoprolol", dosage: "100 mg" },
  ];

  return (
    <div className="dash-medications">
      <h3 className="dash-card-title"><span><RiCapsuleLine/></span>Current Medications</h3>
      {meds.map((med, idx) => (
        <div key={idx} className="dash-medication-item">
          <span>{med.name} {med.dosage}</span>
          <label className="dash-switch">
            <input type="checkbox" />
            <span className="dash-slider"></span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CurrentMedications;
