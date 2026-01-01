import "../styles/login.css";
import loginLogo from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");

  const [loading, setLoading] = useState(false);

  /* ---------- VALIDATION ---------- */

  const validateEmail = (value) => {
    if (!value) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(value)) return "Please enter a valid email";
    return "";
  };

  const validatePassword = (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  /* ---------- HANDLERS ---------- */

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
    setAuthError("");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
    setAuthError("");
  };

  const handleLogin = async () => {
    setAuthError("");

    const emailErr = validateEmail(email);
    const passErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passErr);

    // 🔴 SHOW RED BAR FOR VALIDATION ERRORS TOO
    if (emailErr || passErr) {
      setAuthError("Invalid email or password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email, password }
      );

      if (res.data?.success === true) {
        navigate("/welcome");
      } else {
        setAuthError("Invalid email or password");
      }
    } catch {
      setAuthError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Logo */}
      <div className="logo-box">
        <img src={loginLogo} alt="EduSaaS" />
      </div>

      <h1 className="title">Welcome Back</h1>
      <p className="subtitle">Sign in to continue to EduSaaS</p>

      <div className="login-card">
        {/* 🔴 RED AUTH ERROR BAR */}
        {authError && <div className="auth-error">{authError}</div>}

        {/* EMAIL */}
        <div className={`input-wrapper ${emailError ? "error" : ""}`}>
          <span className="input-icon">✉</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {emailError && <p className="field-error">{emailError}</p>}

        {/* PASSWORD */}
        <div className={`input-wrapper ${passwordError ? "error" : ""}`}>
          <span className="input-icon">🔒</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="input-eye">👁</span>
        </div>
        {passwordError && <p className="field-error">{passwordError}</p>}

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </div>

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

      <a className="forgot-link">Forgot Password?</a>
    </div>
  );
}
