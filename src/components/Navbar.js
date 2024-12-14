
import React from "react";
import { isAuthenticated, clearToken } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-purple-700 text-white">
      <Link to="/" className="font-bold text-xl">
        Customer Service App
      </Link>
      <div>
        {isAuthenticated() ? (
          <button
            onClick={handleLogout}
            className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-100"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-100"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
