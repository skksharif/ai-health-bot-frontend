import React from "react";
import "./EPrescription.css";
import { LiaNotesMedicalSolid } from "react-icons/lia";

const EPrescription = () => {
  const prescriptions = [
    {
      doctor: "Dr. Joseph McCall",
      meds: [
        { name: "Metformin", dosage: "500mg" },
        { name: "Glyburide", dosage: "2mg" },
      ],
    },
    {
      doctor: "Dr. Emily Carter",
      meds: [
        { name: "Glimepiride", dosage: "2mg" },
        { name: "Rosiglitazone", dosage: "4mg" },
      ],
    },
  ];

  return (
    <div className="dash-prescriptions">
      <h3 className="dash-card-title">
        <span><LiaNotesMedicalSolid /></span>E-Prescription
      </h3>
      {prescriptions.map((presc, idx) => (
        <div key={idx} className="dash-prescription-item">
          <h4>{presc.doctor}</h4>
          <div className="dash-meds-list">
            {presc.meds.map((med, i) => (
              <div key={i} className="dash-med-item">
            
                    <p>{med.name} <br />{med.dosage}</p>
              
                <button className="dash-refill-btn">Refill</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EPrescription;
