import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await login(email, password);
      if (response) {
        navigate("/dashboard"); // ✅ Redirect after successful login
      }
    } catch (err) {
      setError(err.message || "Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Hi !</h1>
        <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome</h2>
        <p className="text-sm text-gray-500 text-center">
          I'm waiting for you, please enter your details
        </p>

        <form onSubmit={handleSubmit} className="mt-6 text-black">
          <input
            type="text"
            placeholder="Username, Email or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600"
            required
          />

          <div className="relative mt-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600"
              required
            />
            <span className="absolute right-2 top-3 text-gray-500 cursor-pointer">👁️</span>
          </div>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-gray-600" />
              <span>Remember Me</span>
            </label>
            <a href="/forgot" className="hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md mt-6 hover:bg-gray-700"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-gray-900 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
