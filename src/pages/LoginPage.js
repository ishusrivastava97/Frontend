
import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div>
        <LoginForm />
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-700 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
