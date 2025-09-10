import React, { useState } from "react";
import "./AppointmentBooking.css";

import ProgressBar from "./components/ProgressBar";
import DoctorSelection from "./setps/DoctorSelection";
import DateTimeSelection from "./setps/DateTimeSelection";
import Confirmation from "./setps/Confirmation";

const AppointmentBooking = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="appointment-container">
      <ProgressBar step={step} totalSteps={totalSteps} />

      {step === 1 && (
        <DoctorSelection
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <DateTimeSelection
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Confirmation formData={formData} prevStep={prevStep} />
      )}
    </div>
  );
};

export default AppointmentBooking;
