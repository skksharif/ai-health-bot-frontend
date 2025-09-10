import React, { useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader";
import UpcomingAppointment from "./components/UpcomingAppointment";
import AIHealthRiskAlerts from "./components/AIHealthRiskAlerts";
import QuickNotes from "./components/QuickNotes";
import WeightHeightBMICard from "./components/WeightHeightBMICard";
import CurrentMedications from "./components/CurrentMedications";
import TelehealthAccess from "./components/TelehealthAccess";
import EPrescription from "./components/EPrescription";
import DrugDelivery from "./components/DrugDelivery";
import AnikaMDAssistant from "./components/AnikaMDAssistant";
import "./Dashboard.css";

const Dashboard = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="dash-container">
      <DashboardHeader />
      <UpcomingAppointment />
      <div className="dash-top-row">
        <div className="ai-health-risks">
          <AIHealthRiskAlerts />
        </div>
        <div className="quick-notes">
          <QuickNotes />
        </div>
      </div>
      <WeightHeightBMICard />
      <div className="dash-middle-row">
        <div className="current-medication">
          <CurrentMedications />
        </div>
        <div className="tele-health">
          <TelehealthAccess />
        </div>
      </div>
      <div className="dash-bottom-row">
        <div className="eprescription">
          <EPrescription />
        </div>
        <div className="drug-delivery">
          <DrugDelivery />
        </div>
      </div>

      <AnikaMDAssistant />
    </div>
  );
};

export default Dashboard;
