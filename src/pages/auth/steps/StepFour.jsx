import React from "react";
import "./StepFour.css"; // create unique CSS with -four suffix
import { MdArrowBackIos } from "react-icons/md";
import { RiCapsuleLine } from "react-icons/ri";

export default function StepFour({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  const vaccinations = [
    "Tetanus",
    "COVID-19",
    "Yellow Fever",
    "Hepatitis B",
    "Polio",
    "Measles",
  ];

  return (
    <div className="form-container-four">
      <h2 className="form-title-four">Create My Health Profile</h2>
      <p className="form-step-four">Step 4 of 5</p>
      <div className="progress-bar-four">
        <div className="progress-fill-four" style={{ width: "80%" }}></div>
      </div>

      <div className="form-section-four">
        <div className="three-section">
          <div className="three-section-header">
            <span className="back-three" onClick={prevStep}>
              <MdArrowBackIos />
            </span>
            <span>
              <RiCapsuleLine />
            </span>
            <h3 className="section-title-three">Medications & Health Status</h3>
          </div>
          <button
            type="button"
            className="btn-three next-three"
            onClick={nextStep}
          >
            Save & Next
          </button>
        </div>

        <form className="step-form-four">
          {/* Current Medications */}
          <h4 className="sub-title-four">Current Medications</h4>
          <div className="form-row-four">
            <div className="form-group-four">
              <label>Medication Name</label>
              <input
                type="text"
                name="medicationName"
                placeholder="Medication Name"
                value={formData.medicationName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-four">
              <label>Dosage</label>
              <input
                type="text"
                name="dosage"
                placeholder="Dosage"
                value={formData.dosage || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-four">
              <label>Frequency</label>
              <input
                type="text"
                name="frequency"
                placeholder="Frequency"
                value={formData.frequency || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="button" className="btn-secondary-four">
            + Add
          </button>

          {/* Allergies */}
          <h4 className="sub-title-four">Allergies</h4>
          <div className="form-row-four">
            <div className="form-group-four">
              <label>Medications</label>
              <select
                name="allergyMedication"
                value={formData.allergyMedication || ""}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Penicillin</option>
                <option>Aspirin</option>
                <option>Ibuprofen</option>
              </select>
            </div>
            <div className="form-group-four">
              <label>Names</label>
              <input
                type="text"
                name="allergyMedicationNames"
                placeholder="Names"
                value={formData.allergyMedicationNames || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row-four">
            <div className="form-group-four">
              <label>Foods</label>
              <select
                name="allergyFood"
                value={formData.allergyFood || ""}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Peanuts</option>
                <option>Seafood</option>
                <option>Dairy</option>
              </select>
            </div>
            <div className="form-group-four">
              <label>Names</label>
              <input
                type="text"
                name="allergyFoodNames"
                placeholder="Names"
                value={formData.allergyFoodNames || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Vaccination Record */}
          <h4 className="sub-title-four">Vaccination Record</h4>
          <div className="checkbox-group-four">
            {vaccinations.map((vaccine) => (
              <label key={vaccine}>
                <input
                  type="checkbox"
                  name="vaccinations"
                  value={vaccine}
                  checked={formData.vaccinations?.includes(vaccine) || false}
                  onChange={handleChange}
                />
                {vaccine}
              </label>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
