import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!fullName || !email || !password) {
      console.error("🚨 Please fill in all fields");
      return;
    }
  
    try {
      await signup(fullName, email, password);
      navigate("/dashboard"); // ✅ Navigate after user is set
    } catch (error) {
      console.error("❌ Signup failed:", error.message);
    }
  };
  


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Hi !</h1>
        <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome</h2>
        <p className="text-sm text-gray-500 text-center">Let's create an account</p>

        <form className="mt-6 text-black"  onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-black p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600 mt-4"
          />
         
          <div className="relative mt-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600"
            />
            <p className="text-xs text-gray-400 mt-1">Must contain a number and at least 6 characters</p>
          </div>

          <div className="relative mt-4">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600"
            />
            <p className="text-xs text-gray-400 mt-1">Must contain a number and at least 6 characters</p>
          </div>

          <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md mt-6 hover:bg-gray-700">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Have an account? <a href="/login" className="text-gray-900 font-semibold hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
