import "./MedicalRecords.css";
import MedicalAnalytics from "./components/MedicalAnalytics";
import MedicalReports from "./components/MedicalReports";

export default function MedicalRecords() {
  return (
    <>
      <>
        <div className="medical-wrapper">
          <h2 className="medical-title">Medical Records</h2>

          <MedicalReports/>
          <MedicalAnalytics />
        </div>
      </>
    </>
  );
}
