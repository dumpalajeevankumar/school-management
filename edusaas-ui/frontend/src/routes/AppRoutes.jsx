import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}
