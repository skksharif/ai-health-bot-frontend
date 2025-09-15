import { FaNetworkWired } from "react-icons/fa";
import "./ProfessionalNetwork.css";
import { IoChatboxOutline } from "react-icons/io5";

export default function ProfessionalNetwork() {
  const doctors = [
    { name: "Dr. John Smith", specialty: "Neurologist" },
    { name: "Dr. Emily Davis", specialty: "Cardiologist" },
    { name: "Dr. Michael Johnson", specialty: "Pediatrician" },
    { name: "Dr. Sarah Wilson", specialty: "Dermatologist" },
  ];

  return (
    <div className="pn-network-wrapper">
      <h3 className="pn-title">
        <span className="sc
        -icon"><FaNetworkWired /></span> Professional Network
      </h3>

      <div className="pn-doctor-list">
        {doctors.map((doc, index) => (
          <div key={index} className="pn-doctor-card">
            <div className="pn-doctor-info">
              <span className="pn-doctor-name">{doc.name}</span>
              <span className="pn-doctor-specialty">{doc.specialty}</span>
            </div>
            <button className="pn-btn-chat">
            <IoChatboxOutline/> Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
