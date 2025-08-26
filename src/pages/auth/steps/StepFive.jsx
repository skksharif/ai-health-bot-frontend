import { MdArrowBackIos } from "react-icons/md";
import "./StepFive.css"; // unique CSS
import { TbTargetArrow } from "react-icons/tb";

export default function StepFive({
  formData,
  handleChange,
  prevStep,
  onSubmit,
}) {
  return (
    <div className="form-container-five">
      <h2 className="form-title-five">Create My Health Profile</h2>
      <p className="form-step-five">Step 5 of 5</p>
      <div className="progress-bar-five">
        <div className="progress-fill-five" style={{ width: "100%" }}></div>
      </div>

      <div className="form-section-five">
        <div className="five-section">
          <div className="five-section-header">
            <span className="back-five" onClick={prevStep}>
              <MdArrowBackIos />
            </span>
            <span>
              <TbTargetArrow />
            </span>
            <h3 className="section-title-five">Final Step</h3>
          </div>
          <div className="final-submit-btns">
            <button type="button" className="btn-five secondary-five">
              Save as Draft
            </button>
            <button
              type="submit"
              className="btn-five next-five"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        <form className="step-form-five">
          {/* Primary Healthcare Provider */}
          <h4 className="sub-title-five">Primary Healthcare Provider</h4>
          <div className="form-row-five">
            <div className="form-group-five">
              <label>Do you have a primary doctor?</label>
              <select
                name="hasPrimaryDoctor"
                value={formData.hasPrimaryDoctor || ""}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group-five full-width">
              <label>Clinic name + Doctor name</label>
              <input
                type="text"
                name="primaryDoctorName"
                placeholder="Clinic name + Doctor name"
                value={formData.primaryDoctorName || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Insurance Info */}
          <h4 className="sub-title-five">
            Insurance Info <span className="optional-five">(optional)</span>
          </h4>
          <div className="form-row-five">
            <div className="form-group-five full-width">
              <label>Membership ID</label>
              <input
                type="text"
                name="membershipId"
                placeholder="Membership ID"
                value={formData.membershipId || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Stoik AI Settings */}
          <h4 className="sub-title-five">Stoik AI Settings</h4>
          <div className="toggle-group-five">
            <label>
              Send me medication reminders
              <div
                className={`toggle-five ${formData.reminders ? "active" : ""}`}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "reminders",
                      value: !formData.reminders,
                    },
                  })
                }
              >
                <div className="circle-five"></div>
              </div>
            </label>

            <label>
              Suggest health tips
              <div
                className={`toggle-five ${formData.healthTips ? "active" : ""}`}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "healthTips",
                      value: !formData.healthTips,
                    },
                  })
                }
              >
                <div className="circle-five"></div>
              </div>
            </label>

            <label>
              Track my appointments automatically
              <div
                className={`toggle-five ${
                  formData.appointments ? "active" : ""
                }`}
                onClick={() =>
                  handleChange({
                    target: {
                      name: "appointments",
                      value: !formData.appointments,
                    },
                  })
                }
              >
                <div className="circle-five"></div>
              </div>
            </label>
          </div>
        </form>
        <div className="final-submit-btns-mobile">
          <button type="button" className="btn-five secondary-five">
            Save as Draft
          </button>
          <button
            type="submit"
            className="btn-five next-five"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
