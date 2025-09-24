import { FaClipboardList, FaFileUpload } from "react-icons/fa";
import "./MedicalReports.css";

export default function MedicalReports() {
  return (
    <div className="medicalreports-grid">
      {/* Report Section */}
      <div className="medicalreports-report">
        <div className="medicalreports-report-header">
          <FaClipboardList className="medicalreports-report-icon" />
          <span className="medicalreports-report-label">Report</span>
        </div>

        <div className="medicalreports-report-filters">
          <select className="medicalreports-filter">
            <option>Patient Records</option>
          </select>
          <select className="medicalreports-filter">
            <option>Prescription History</option>
          </select>
          <select className="medicalreports-filter">
            <option>Appointment Schedule</option>
          </select>
        </div>

        <div className="medicalreports-report-list">
          <div className="medicalreports-report-item">
            <span className="medicalreports-report-test">HbA1c Test</span>
            <span className="medicalreports-report-doctor">By Dr. Patel</span>
            <span className="medicalreports-report-status">Result</span>
          </div>
          <div className="medicalreports-report-item">
            <span className="medicalreports-report-test">Chest X-ray</span>
            <span className="medicalreports-report-doctor">By Dr. Smith</span>
            <span className="medicalreports-report-status">Result</span>
          </div>
          <div className="medicalreports-report-item">
            <span className="medicalreports-report-test">Metformin</span>
            <span className="medicalreports-report-doctor">By Dr. Lee</span>
            <span className="medicalreports-report-status">Dosage</span>
          </div>
          <div className="medicalreports-report-item">
            <span className="medicalreports-report-test">Appendix Removal</span>
            <span className="medicalreports-report-doctor">By Dr. Kim</span>
            <span className="medicalreports-report-status">Surgery</span>
          </div>
          <div className="medicalreports-report-item">
            <span className="medicalreports-report-test">MRI</span>
            <span className="medicalreports-report-doctor">By Dr. Kim</span>
            <span className="medicalreports-report-status">
              Physical examination
            </span>
          </div>
        </div>

        <div className="medicalreports-report-actions">
          <button className="medicalreports-expand-btn">Expand</button>
          <button className="medicalreports-upload-btn">
            <FaFileUpload /> Upload new document
          </button>
        </div>
      </div>

      {/* Quick Notes Section */}
      <div className="medicalreports-notes">
        <div className="medicalreports-notes-header">
          <span className="medicalreports-notes-label">Quick Notes</span>
        </div>

        <textarea
          className="medicalreports-notes-input"
          placeholder="Write new note..."
        ></textarea>

        <div className="medicalreports-notes-list">
          <div className="medicalreports-note-item">
            <span>Filling a bit dizzy</span>
            <span className="medicalreports-note-time">9:45</span>
          </div>
          <div className="medicalreports-note-item">
            <span>Experiencing a mild headache</span>
            <span className="medicalreports-note-time">10:30</span>
          </div>
          <div className="medicalreports-note-item">
            <span>Noticing a sore throat</span>
            <span className="medicalreports-note-time">10:45</span>
          </div>
          <div className="medicalreports-note-item">
            <span>Having difficulty concentrating</span>
            <span className="medicalreports-note-time">11:00</span>
          </div>
          <div className="medicalreports-note-item">
            <span>Feeling occasional dizziness</span>
            <span className="medicalreports-note-time">11:15</span>
          </div>
          <div className="medicalreports-note-item">
            <span>Experiencing muscle aches</span>
            <span className="medicalreports-note-time">11:45</span>
          </div>
          <div className="medicalreports-note-item">
            <span>Feeling fatigued despite sleep</span>
            <span className="medicalreports-note-time">11:30 AM</span>
          </div>
          <div className="medicalreports-note-item">
            <span>Sore throat</span>
            <span className="medicalreports-note-time">12:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
