import { GoHome } from "react-icons/go";
import "./StepOne.css";

export default function StepOne({ formData, handleChange, nextStep }) {
  return (
    <div className="pre-form-container">
      <h2 className="pre-form-title">Create My Health Profile</h2>
      <p className="pre-form-step">Step 1 of 5</p>
      <div className="pre-progress-bar">
        <div className="pre-progress-fill pre-step-one"></div>
      </div>

      <div className="pre-form-section">
        <div className="pre-section">
          <div className="pre-section-header">
            <span>
              <GoHome />
            </span>
            <h3 className="pre-section-title">Personal Details</h3>
          </div>
          <button type="button" className="pre-btn pre-next" onClick={nextStep}>
            Save & Next
          </button>
        </div>

        <form className="pre-step-form">
          <div className="pre-form-row">
            <div className="pre-form-group">
              <label>Title</label>
              <select
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
                <option>Dr.</option>
              </select>
            </div>
            <div className="pre-form-group">
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter"
                value={formData.firstName || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pre-form-group">
              <label>Middle Name</label>
              <input
                type="text"
                name="middleName"
                placeholder="Enter"
                value={formData.middleName || ""}
                onChange={handleChange}
              />
            </div>
            <div className="pre-form-group">
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter"
                value={formData.lastName || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="pre-form-row">
            <div className="pre-form-group">
              <label>Date of Birth*</label>
              <input
                type="date"
                name="dob"
                value={formData.dob || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pre-form-group">
              <label>Gender*</label>
              <select
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
                required
              >
                <option value="">Select Your Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="pre-form-row">
            <div className="pre-form-group">
              <label>Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email address"
                value={formData.email || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="pre-form-row">
            <div className="pre-form-group">
              <label>Phone Number*</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pre-form-group">
              <label>Nationality*</label>
              <select
                name="nationality"
                value={formData.nationality || ""}
                onChange={handleChange}
                required
              >
                <option value="">Select Your Nationality</option>
                <option>Indian</option>
                <option>American</option>
                <option>British</option>
              </select>
            </div>
          </div>

          <h4 className="pre-sub-title">Personal Address</h4>
          <div className="pre-sub-form-row">
            <div className="pre-form-group">
              <label>Country of Current Address*</label>
              <select
                name="country"
                value={formData.country || ""}
                onChange={handleChange}
                required
              >
                <option value="">Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
            <div className="pre-form-group pre-full-width">
              <label>Current Address*</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Your Street Address"
                value={formData.address || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
