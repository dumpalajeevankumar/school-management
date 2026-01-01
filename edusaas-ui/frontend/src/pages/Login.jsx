import "../styles/login.css";
import loginLogo from "../assets/login.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      {/* Logo */}
      <div className="logo-box">
        <img src={loginLogo} alt="EduSaaS" />
      </div>

      {/* Title */}
      <h1 className="title">Welcome Back</h1>
      <p className="subtitle">Sign in to continue to EduSaaS</p>

      {/* Login Card */}
      <div className="login-card">
        <div className="input-wrapper">
          <span className="input-icon">✉</span>
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-wrapper">
          <span className="input-icon">🔒</span>
          <input type="password" placeholder="Password" />
          <span className="input-eye">👁</span>
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/welcome")}
        >
          Sign In
        </button>
      </div>

      {/* Forgot Password */}
      <a className="forgot-link">Forgot Password?</a>

      {/* Demo Accounts */}
      <div className="demo-box">
        <h3>Demo Accounts</h3>

        <div className="demo-row">
          <span>Admin</span>
          <span>admin@demo.edu</span>
        </div>
        <div className="demo-row">
          <span>Teacher</span>
          <span>teacher@demo.edu</span>
        </div>
        <div className="demo-row">
          <span>Student</span>
          <span>student@demo.edu</span>
        </div>
        <div className="demo-row">
          <span>Parent</span>
          <span>parent@demo.edu</span>
        </div>
      </div>
    </div>
  );
}
