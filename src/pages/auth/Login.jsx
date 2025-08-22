import { FcGoogle } from "react-icons/fc";
import "./Login.css";

export default function Login() {
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
          <p className="login-subtitle">Log in to manage your health</p>

          <form className="login-form">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <div className="login-options">
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>

          <div className="divider">or</div>

          <button className="google-btn">
            <FcGoogle className="google-icon" /> Continue with Google
          </button>

          <p className="signup-text">
            New here?{" "}
            <a href="#" className="signup-link">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
