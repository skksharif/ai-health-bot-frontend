import AnikaMDAssistant from "../../../components/AnikaMDAssistant";
import { useEffect } from "react";
import "./Dashboard.css";
import CaseInvites from "./components/CaseInvites";
import ComplianceNotice from "./components/ComplianceNotice";
import ContinuesLearning from "./components/ContinuesLearning";
import CreatePrescription from "./components/CreatePrescription";
import DashboardHeader from "./components/DashboardHeader";
import PatientRecords from "./components/PatientRecords";
import ProfessionalNetwork from "./components/ProfessionalNetwork";
import SmartCalender from "./components/SmartCalender";

export default function DoctorDashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="doctor-dash-container">
        <DashboardHeader />
        <SmartCalender />
        <PatientRecords />
        <ComplianceNotice />
        <CreatePrescription />
        <CaseInvites />
        <ContinuesLearning />
        <ProfessionalNetwork />
        <AnikaMDAssistant />
      </div>
    </>
  );
}
