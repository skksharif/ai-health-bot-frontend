import React from "react";
import "./StepTwo.css";
import { GrGroup } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";

export default function StepTwo({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div className="two-form-container">
      <h2 className="two-form-title">Create My Health Profile</h2>
      <p className="two-form-step">Step 2 of 5</p>
      <div className="two-progress-bar">
        <div className="two-progress-fill two-step-two"></div>
      </div>

      <div className="two-form-section">
        <div className="two-section">
          <div className="two-section-header">
            <span type="button" className="two-back" onClick={prevStep}>
              <MdArrowBackIos />
            </span>
            <span>
              <GrGroup />
            </span>
            <h3 className="two-section-title">Family & Emergency</h3>
          </div>

          <button type="button" className="two-btn two-next" onClick={nextStep}>
            Save & Next
          </button>
        </div>

        <form className="two-step-form">
          {/* Marital Status Section */}
          <h4 className="two-sub-title">Marital and Family Status</h4>
          <div className="two-form-row">
            <div className="two-form-group">
              <label className="two-label">Marital Status*</label>
              <select
                className="two-select"
                name="maritalStatus"
                value={formData.maritalStatus || ""}
                onChange={handleChange}
                required
              >
                <option value="">Select Your Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </div>
            <div className="two-form-group">
              <label className="two-label">Number of Children</label>
              <input
                className="two-input"
                type="number"
                name="children"
                placeholder="Enter the number of children you have"
                value={formData.children || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Emergency Contact Section */}
          <h4 className="two-sub-title">Emergency Contact</h4>
          <div className="two-form-row">
            <div className="two-form-group">
              <label className="two-label">Title</label>
              <select
                className="two-select"
                name="emergencyTitle"
                value={formData.emergencyTitle || ""}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
                <option>Dr.</option>
              </select>
            </div>
            <div className="two-form-group">
              <label className="two-label">First Name</label>
              <input
                className="two-input"
                type="text"
                name="emergencyFirstName"
                placeholder="Enter"
                value={formData.emergencyFirstName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="two-form-group">
              <label className="two-label">Middle Name</label>
              <input
                className="two-input"
                type="text"
                name="emergencyMiddleName"
                placeholder="Enter"
                value={formData.emergencyMiddleName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="two-form-group">
              <label className="two-label">Last Name</label>
              <input
                className="two-input"
                type="text"
                name="emergencyLastName"
                placeholder="Enter"
                value={formData.emergencyLastName || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="two-form-row">
            <div className="two-form-group">
              <label className="two-label">Relation</label>
              <select
                className="two-select"
                name="emergencyRelation"
                value={formData.emergencyRelation || ""}
                onChange={handleChange}
              >
                <option value="">Select Relation</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Spouse</option>
                <option>Friend</option>
              </select>
            </div>
            <div className="two-form-group">
              <label className="two-label">Phone Number</label>
              <input
                className="two-input"
                type="tel"
                name="emergencyPhone"
                placeholder="Please provide the phone number"
                value={formData.emergencyPhone || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="two-form-row">
            <div className="two-form-group">
              <label className="two-label">Country of Current Address</label>
              <select
                className="two-select"
                name="emergencyCountry"
                value={formData.emergencyCountry || ""}
                onChange={handleChange}
              >
                <option value="">Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
            <div className="two-form-group two-full-width">
              <label className="two-label">Current Address</label>
              <input
                className="two-input"
                type="text"
                name="emergencyAddress"
                placeholder="Enter Your Street Address"
                value={formData.emergencyAddress || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Family Medical History Section */}
          <h4 className="two-sub-title">Family Medical History</h4>
          <div className="two-checkbox-group">
            {[
              "Diabetes",
              "Heart Disease",
              "Cancer",
              "Alzheimer's",
              "Chronic Respiratory",
              "Stroke",
            ].map((condition) => (
              <label className="two-label" key={condition}>
                <input
                  className="two-checkbox"
                  type="checkbox"
                  name="familyHistory"
                  value={condition}
                  checked={formData.familyHistory?.includes(condition) || false}
                  onChange={handleChange}
                />
                {condition}
              </label>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
