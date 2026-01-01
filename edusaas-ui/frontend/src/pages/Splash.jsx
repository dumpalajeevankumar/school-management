import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/splash.css";
import splashImage from "../assets/splash.jpeg";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-logo">
        <img src={splashImage} alt="EduSaaS" />
      </div>

      <h1 className="splash-title">EduSaaS</h1>
      <p className="splash-subtitle">School Management System</p>

      <div className="loader" />
    </div>
  );
}
