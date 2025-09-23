import React from "react";
import "./StepFour.css";
import { MdArrowBackIos } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

export default function StepFour({
  formData,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div className="form-container-four">
      {/* Title & Progress */}
      <h2 className="form-title-four">Create My Profile</h2>
      <p className="form-step-four">Step 4 of 4</p>
      <div className="progress-bar-four">
        <div className="progress-fill-four" style={{ width: "100%" }}></div>
      </div>

      {/* Section Header */}
      <div className="form-section-four">
        <div className="four-section">
          <div className="four-section-header">
            <span className="back-four" onClick={prevStep}>
              <MdArrowBackIos />
            </span>
            <span>
              <FaUniversity />
            </span>
            <h3 className="section-title-four">Banking & Payment Setup</h3>
          </div>

          {/* Top Buttons (hidden on mobile) */}
          <div className="action-buttons-four desktop-buttons-four">
            <button type="button" className="btn-four draft-four">
              Save as Draft
            </button>
            <button
              type="button"
              className="btn-four next-four"
              onClick={nextStep}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="step-form-four">
          {/* Identity Verification */}
          <h4 className="sub-title-four">Identity Verification</h4>
          <div className="form-row-four">
            <div className="form-group-four">
              <label>Bank Name*</label>
              <input
                type="text"
                name="bankName"
                placeholder="Enter your bank name"
                value={formData.bankName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-four">
              <label>Account Number / IBAN*</label>
              <input
                type="text"
                name="accountNumber"
                placeholder="Enter A/c Number"
                value={formData.accountNumber || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row-four">
            <div className="form-group-four">
              <label>Account Holder Name*</label>
              <input
                type="text"
                name="accountHolder"
                placeholder="Enter A/c holder name"
                value={formData.accountHolder || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-four">
              <label>Branch Code / Routing Number*</label>
              <input
                type="text"
                name="branchCode"
                placeholder="Enter Branch Code"
                value={formData.branchCode || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Payment Method Setup */}
          <h4 className="sub-title-four">Payment Method Setup</h4>
          <div className="form-row-four">
            <div className="form-group-four">
              <label>Preferred Payment Method*</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod || ""}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Bank Transfer</option>
                <option>UPI</option>
                <option>PayPal</option>
              </select>
            </div>
            <div className="form-group-four">
              <label>Currency Preference*</label>
              <input
                type="text"
                name="currencyPreference"
                placeholder="Enter Currency"
                value={formData.currencyPreference || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row-four">
            <div className="form-group-four">
              <label>UPI ID</label>
              <input
                type="text"
                name="upiId"
                placeholder="Enter UPI ID"
                value={formData.upiId || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group-four">
              <label>Cancelled Cheque / Bank Verification Document</label>
              <input
                className="input-file-four"
                type="file"
                name="bankDoc"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>

        {/* Bottom Buttons (mobile only) */}
        <div className="action-buttons-four mobile-buttons-four">
          <button type="button" className="btn-four draft-four">
            Save as Draft
          </button>
          <button
            type="button"
            className="btn-four next-four"
            onClick={nextStep}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
