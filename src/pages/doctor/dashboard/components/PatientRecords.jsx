import { FaDownload, FaCommentDots, FaPhoneAlt } from "react-icons/fa";
import "./PatientRecords.css";
import { LuNotepadText } from "react-icons/lu";

const records = [
  { time: "9:41 AM", report: "Rita Reports" },
  { time: "10:30 AM", report: "Sophia's imaging results" },
  { time: "11:15 AM", report: "Liam's diabetic report" },
  { time: "12:45 PM", report: "Sophia's blood pressure analysis" },
  { time: "1:30 PM", report: "Mia's imaging results" },
];

export default function PatientRecords() {
  return (
    <div className="pr-records-container">
      <h2 className="pr-title"><span className="sc-icon"><LuNotepadText /></span> Patient Records</h2>
      <div className="pr-records-list">
        {records.map((rec, idx) => (
          <div className="pr-record-item" key={idx}>
            <div className="pr-record-time">{rec.time}</div>
            <div className="pr-record-report">{rec.report}</div>
            <div className="pr-record-actions">
              <button className="pr-action-btn pr-download"><FaDownload /></button>
              <button className="pr-action-btn pr-message"><FaCommentDots /></button>
              <button className="pr-action-btn pr-call"><FaPhoneAlt /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
