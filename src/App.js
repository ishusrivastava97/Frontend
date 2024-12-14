
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import { setToken, isAuthenticated } from "./utils/auth";
import SignupPage from "./pages/SignupPage";

function AppWrapper() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      
      setToken(token);
      toast.success("Logged in successfully!");
      
      navigate("/");
    } else if (isAuthenticated()) {

      if (location.pathname === "/login") {
        navigate("/");
      }
    }
  }, [location, navigate]);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
