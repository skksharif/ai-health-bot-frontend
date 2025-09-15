import { CiMedicalClipboard } from "react-icons/ci";
import "./CreatePrescription.css";
import { GiMedicalPackAlt } from "react-icons/gi";

export default function CreatePrescription() {
  const prescriptions = [
    {
      patient: "James Wilson",
      medicines: [
        { name: "Metformin", dose: "500mg" },
        { name: "Lisinopril", dose: "10mg" },
        { name: "Amlodipine", dose: "5mg" },
      ],
    },
    {
      patient: "Michael Thompson",
      medicines: [
        { name: "Rosuvastatin", dose: "10mg" },
        { name: "Lisinopril", dose: "20mg" },
      ],
    },
  ];

  return (
    <div className="cp-prescription-wrapper">
      <h3 className="cp-title">
        <span className="sc-icon"><GiMedicalPackAlt /> </span> E-Prescription
      </h3>

      {prescriptions.map((item, index) => (
        <div key={index} className="cp-prescription-card">
          <h4 className="cp-patient-name">For {item.patient}</h4>
          <ul className="cp-medicine-list">
            {item.medicines.map((med, idx) => (
              <li key={idx} className="cp-medicine-item">
                <span>{med.name}</span>
                <span className="cp-dose">{med.dose}</span>
              </li>
            ))}
          </ul>
          <div className="cp-actions">
            <button className="cp-btn-outline">Add new medicines</button>
            <button className="cp-btn-outline">keep the same prescription</button>
          </div>
        </div>
      ))}

      <button className="cp-btn-primary">Create New Prescription</button>
    </div>
  );
}
