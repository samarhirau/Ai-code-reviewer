import React from "react";
import { useNavigate } from "react-router-dom";

import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Robo from "../components/Robo";
import Headings from "../components/Headings";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen flex flex-col bg-[url(./Images/landing-bg-image.png)] bg-cover bg-center bg-no-repeat">
        {/* Navbar */}
        <nav className="py-4 px-6 flex justify-between items-center">
          <h1 className="font-bold md:text-2xl">AI Code Reviewer</h1>
          <div className="space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white"
            >
              Signup
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="md:text-8xl text-4xl font-bold text-center bg-clip-text text-white "
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "2px",
            }}
          >
            AI-Powered <br /> Code Reviews
            <img
              className="inline-block w-10 md:w-28"
              src="./Images/bolt.png"
              alt=""
            />
          </h1>
          <p className="mt-4  text-gray-300 max-w-2xl">
            Review, debug, and optimize your code with AI-driven insights.
          </p>
          <div className="mt-8 space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 border border-purple-500 text-purple-500 rounded-lg font-semibold hover:bg-purple-500 hover:text-white"
            >
              Try Live Demo
            </button>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <Features />

      <Testimonials />
      <Headings />
      <Pricing />
      <Robo />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
