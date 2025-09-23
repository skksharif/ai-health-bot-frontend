import React from "react";
import "./StepThree.css"; // unique CSS for StepThree
import { MdArrowBack, MdArrowBackIos } from "react-icons/md";
import { RiHealthBookLine } from "react-icons/ri";

export default function StepThree({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  const medicalConditions = [
    "Diabetes",
    "Asthma",
    "Obesity",
    "Arthritis",
    "Anemia",
    "Insomnia",
  ];

  return (
    <div className="form-container-three">
      <h2 className="form-title-three">Create My Health Profile</h2>
      <p className="form-step-three">Step 3 of 5</p>
      <div className="progress-bar-three">
        <div className="progress-fill-three" style={{ width: "60%" }}></div>
      </div>

      <div className="form-section-three">
        <div className="three-section">
          <div className="three-section-header">
            <span className="back-three" onClick={prevStep}>
              <MdArrowBackIos />
            </span>
            <span>
              <RiHealthBookLine />
            </span>
            <h3 className="section-title-three">Medical History</h3>
          </div>
          <button
            type="button"
            className="btn-three next-three"
            onClick={nextStep}
          >
            Save & Next
          </button>
        </div>

        <form className="step-form-three">
          {/* Personal Medical History */}
          <h4 className="sub-title-three">Personal Medical History</h4>
          <div className="checkbox-group-three">
            {medicalConditions.map((condition) => (
              <label key={condition}>
                <input
                  type="checkbox"
                  name="personalHistory"
                  value={condition}
                  checked={
                    formData.personalHistory?.includes(condition) || false
                  }
                  onChange={handleChange}
                />
                {condition}
              </label>
            ))}
          </div>

          {/* Past Surgeries */}
          <div className="form-row-three">
            <div className="form-group-three full-width-three">
              <label>Past Surgeries</label>
              <input
                type="text"
                name="pastSurgeries"
                placeholder="List any previous surgeries you've undergone."
                value={formData.pastSurgeries || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Previous Hospitalizations */}
          <div className="form-row-three">
            <div className="form-group-three full-width-three">
              <label>Previous Hospitalizations</label>
              <input
                type="text"
                name="hospitalizations"
                placeholder="Please share details of past hospital stays, including dates, reasons, and duration."
                value={formData.hospitalizations || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Lifestyle Habits */}
          <h4 className="sub-title-three">Lifestyle Habits</h4>
          <div className="form-row-three">
            <div className="form-group-three">
              <label>Smoking</label>
              <select
                name="smoking"
                value={formData.smoking || ""}
                onChange={handleChange}
              >
                <option value="">Select One</option>
                <option>Never</option>
                <option>Occasionally</option>
                <option>Regularly</option>
              </select>
            </div>
            <div className="form-group-three">
              <label>Alcohol Use</label>
              <select
                name="alcohol"
                value={formData.alcohol || ""}
                onChange={handleChange}
              >
                <option value="">Select One</option>
                <option>Never</option>
                <option>Occasionally</option>
                <option>Regularly</option>
              </select>
            </div>
          </div>

          <div className="form-row-three">
            <div className="form-group-three">
              <label>Exercise Level</label>
              <select
                name="exercise"
                value={formData.exercise || ""}
                onChange={handleChange}
              >
                <option value="">Select One</option>
                <option>Sedentary</option>
                <option>Moderate</option>
                <option>Active</option>
              </select>
            </div>
            <div className="form-group-three">
              <label>Diet Preference</label>
              <select
                name="diet"
                value={formData.diet || ""}
                onChange={handleChange}
              >
                <option value="">Select One</option>
                <option>Vegetarian</option>
                <option>Non-Vegetarian</option>
                <option>Vegan</option>
                <option>Pescatarian</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
