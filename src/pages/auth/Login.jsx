import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [activeTab, setActiveTab] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (activeTab === "patient") {
      console.log("Patient login with:", email, password);
      navigate("/patient-dashboard");
    } else {
      console.log("Doctor login with:", email, password);
      navigate("/doctor-dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Side Illustration */}
        <div className="login-illustration">
          <img
            src="/login.png"
            alt="Doctors Illustration"
            className="illustration-img"
          />
        </div>

        {/* Right Side Form */}
        <div className="login-form-section">
          <img src="/logo.png" alt="Logo" className="login-logo" />
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Log in to access your health dashboard</p>

          {/* Tabs */}
          <div className="login-tabs">
            <button
              className={`tab-btn ${activeTab === "patient" ? "active" : ""}`}
              onClick={() => setActiveTab("patient")}
            >
              Patient Login
            </button>
            <button
              className={`tab-btn ${activeTab === "doctor" ? "active" : ""}`}
              onClick={() => setActiveTab("doctor")}
            >
              Doctor Login
            </button>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-options">
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="button" className="login-btn" onClick={handleLogin}>
              {activeTab === "patient" ? "Log In as Patient" : "Log In as Doctor"}
            </button>
          </form>

          <div className="divider">or</div>

          <button className="google-btn">
            <FcGoogle className="google-icon" /> Continue with Google
          </button>

          <p className="signup-text">
            New here?{" "}
            {activeTab === "patient" ? (
              <NavLink to="/patient-signup" className="signup-link">
                Create a patient account
              </NavLink>
            ) : (
              <NavLink to="/doctor-signup" className="signup-link">
                Create a doctor account
              </NavLink>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
