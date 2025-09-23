import React from "react";
import "./StepTwo.css";
import { MdArrowBackIos } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";

export default function StepTwoBusiness({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div className="biz-form-container">
      {/* Title & Progress */}
      <h2 className="biz-form-title">Create My Profile</h2>
      <p className="biz-form-step">Step 2 of 4</p>
      <div className="biz-progress-bar">
        <div className="biz-progress-fill"></div>
      </div>

      {/* Section Header */}
      <div className="biz-section">
        <div className="biz-section-header">
          <span type="button" className="biz-back" onClick={prevStep}>
            <MdArrowBackIos />
          </span>
          <span>
            <FaRegBuilding />
          </span>
          <h3 className="biz-section-title">Business details</h3>
        </div>
        <button type="button" className="biz-btn biz-next" onClick={nextStep}>
          Save & Next
        </button>
      </div>

      {/* Form */}
      <form className="biz-step-form">
        <h4 className="biz-sub-title">Business Information</h4>
        <div className="biz-form-row">
          <div className="biz-form-group">
            <label className="biz-label">Business Name*</label>
            <input
              className="biz-input"
              type="text"
              name="businessName"
              placeholder="Enter Business Name"
              value={formData.businessName || ""}
              onChange={handleChange}
            />
          </div>
          <div className="biz-form-group">
            <label className="biz-label">Business category*</label>
            <select
              className="biz-select"
              name="businessCategory"
              value={formData.businessCategory || ""}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option>Retail</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>
          </div>
        </div>

        <div className="biz-form-row">
          <div className="biz-form-group">
            <label className="biz-label">Business certificate*</label>
            <input
              className="biz-input"
              type="file"
              name="businessCertificate"
              onChange={handleChange}
            />
          </div>

          <div className="biz-form-group">
            <label className="biz-label">Location*</label>
            <input
              className="biz-input"
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <h4 className="biz-sub-title">Director information</h4>
        <div className="biz-form-row">
          <div className="biz-form-group">
            <label className="biz-label">Director in charge*</label>
            <input
              className="biz-input"
              type="text"
              name="director"
              placeholder="Name of director in charge"
              value={formData.director || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
