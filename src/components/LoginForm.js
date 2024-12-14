
import React, { useState } from "react";
import { toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  const handleLocalLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      toast.success("Logged in successfully!");
      window.location.href = "/";
    } else {
      toast.error(data.error || "Login failed");
    }
  };

  return (
    <div className="bg-white shadow-lg p-8 rounded max-w-sm w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form className="flex flex-col space-y-4" onSubmit={handleLocalLogin}>
        <input
          type="email"
          placeholder="Enter email..."
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password..."
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-purple-700 text-white py-2 rounded font-semibold hover:bg-purple-800"
        >
          Login
        </button>
      </form>
      <div className="text-center text-sm text-gray-600 mt-4">Or</div>
      <button
        onClick={handleGoogleLogin}
        className="bg-purple-700 text-white py-2 rounded hover:bg-purple-800 w-full mt-2 font-semibold"
      >
        Login With Google
      </button>
      <div className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?
        <br />
        You will be prompted to create one on Google login if not existing.
      </div>
    </div>
  );
}

export default LoginForm;
