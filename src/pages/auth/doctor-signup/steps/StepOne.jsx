import { GoHome } from "react-icons/go";
import "./StepOne.css";

export default function StepOne({ formData, handleChange, nextStep }) {
  return (
    <div className="pre-form-container">
      <h2 className="pre-form-title">Create My Profile</h2>
      <p className="pre-form-step">Step 1 of 4</p>
      <div className="pre-progress-bar">
        <div className="pre-progress-fill pre-step-one"></div>
      </div>

      <div className="pre-form-section">
        <div className="pre-section">
          <div className="pre-section-header">
            <span>
              <GoHome />
            </span>
            <h3 className="pre-section-title">Personal details</h3>
          </div>
          <button type="button" className="pre-btn pre-next" onClick={nextStep}>
            Save & Next
          </button>
        </div>

        <form className="pre-step-form">
          {/* Title & Name Row */}
          <div className="pre-form-row">
            <div className="pre-form-group">
              <label>Title</label>
              <select
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
              >
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

          {/* DOB & Gender */}
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

          {/* Education & Certificate */}
          <div className="pre-form-row">
            <div className="pre-form-group">
              <label>Education*</label>
              <input
                type="file"
                name="education"
                onChange={handleChange}
              />
            </div>
            <div className="pre-form-group">
              <label>Professional certificate*</label>
              <input
                type="file"
                name="certificate"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Experience */}
          <div className="pre-form-row">
            <div className="pre-form-group pre-full-width">
              <label>Professional experience*</label>
              <textarea
                name="experience"
                placeholder="Describe your professional experience"
                value={formData.experience || ""}
                onChange={handleChange}
                rows={4}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
