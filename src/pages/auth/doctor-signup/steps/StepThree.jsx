import React from "react";
import "./StepThree.css";
import { MdArrowBackIos } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";

export default function StepThreeVerification({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div className="verify-form-container">
      {/* Title & Progress */}
      <h2 className="verify-form-title">Create My Profile</h2>
      <p className="verify-form-step">Step 3 of 4</p>
      <div className="verify-progress-bar">
        <div className="verify-progress-fill"></div>
      </div>

      {/* Section Header */}
      <div className="verify-section">
        <div className="verify-section-header">
          <span type="button" className="verify-back" onClick={prevStep}>
            <MdArrowBackIos />
          </span>
          <span>
            <FaFileAlt />
          </span>
          <h3 className="verify-section-title">Verification & Documents</h3>
        </div>
        <button
          type="button"
          className="verify-btn verify-next"
          onClick={nextStep}
        >
          Save & Next
        </button>
      </div>

      {/* Form */}
      <form className="verify-step-form">
        {/* Identity Verification */}
        <h4 className="verify-sub-title">Identity Verification</h4>
        <div className="verify-form-row">
          <div className="verify-form-group">
            <label className="verify-label">Government ID Type*</label>
            <select
              className="verify-select"
              name="govIdType"
              value={formData.govIdType || ""}
              onChange={handleChange}
            >
              <option value="">Type of ID</option>
              <option>Passport</option>
              <option>Driver's License</option>
              <option>National ID</option>
            </select>
          </div>
          <div className="verify-form-group">
            <label className="verify-label">Upload Government ID*</label>
            <input
              className="verify-input"
              type="file"
              name="govIdFile"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="verify-form-row">
          <div className="verify-form-group verify-full-width">
            <label className="verify-label">Government ID Number*</label>
            <input
              className="verify-input"
              type="text"
              name="govIdNumber"
              placeholder="Enter your ID number"
              value={formData.govIdNumber || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Medical Council Verification */}
        <h4 className="verify-sub-title">
          Medical Council / License Verification
        </h4>
        <div className="verify-form-row">
          <div className="verify-form-group">
            <label className="verify-label">Issuing Authority*</label>
            <select
              className="verify-select"
              name="licenseAuthority"
              value={formData.licenseAuthority || ""}
              onChange={handleChange}
            >
              <option value="">Type of ID</option>
              <option>Medical Council of India</option>
              <option>US Medical Board</option>
              <option>UK Medical Council</option>
            </select>
          </div>
          <div className="verify-form-group">
            <label className="verify-label">Upload License Copy*</label>
            <input
              className="verify-input"
              type="file"
              name="licenseFile"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="verify-form-row">
          <div className="verify-form-group verify-full-width">
            <label className="verify-label">Medical License Number*</label>
            <input
              className="verify-input"
              type="text"
              name="licenseNumber"
              placeholder="Enter your ID number"
              value={formData.licenseNumber || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Insurance Verification */}
        <h4 className="verify-sub-title">Insurance Verification</h4>
        <div className="verify-form-row">
          <div className="verify-form-group">
            <label className="verify-label">Insurance Provider*</label>
            <select
              className="verify-select"
              name="insuranceProvider"
              value={formData.insuranceProvider || ""}
              onChange={handleChange}
            >
              <option value="">Type of ID</option>
              <option>Aetna</option>
              <option>Blue Cross</option>
              <option>Cigna</option>
            </select>
          </div>
          <div className="verify-form-group">
            <label className="verify-label">Insurance Document*</label>
            <input
              className="verify-input"
              type="file"
              name="insuranceFile"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="verify-form-row">
          <div className="verify-form-group verify-full-width">
            <label className="verify-label">Insurance Policy Number*</label>
            <input
              className="verify-input"
              type="text"
              name="insuranceNumber"
              placeholder="Enter your ID number"
              value={formData.insuranceNumber || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
