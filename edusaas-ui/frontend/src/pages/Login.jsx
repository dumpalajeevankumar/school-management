import "../styles/login.css";
import loginLogo from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          email,
          password,
        }
      );

      // ✅ ONLY navigate if backend explicitly says success
      if (res.data?.success === true) {
        navigate("/welcome");
      } else {
        setError(res.data?.message || "Invalid credentials");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("Server error. Please try again later.");
      }
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

      {/* Title */}
      <h1 className="title">Welcome Back</h1>
      <p className="subtitle">Sign in to continue to EduSaaS</p>

      {/* Login Card */}
      <div className="login-card">
        <div className="input-wrapper">
          <span className="input-icon">✉</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <span className="input-icon">🔒</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="input-eye">👁</span>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
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
