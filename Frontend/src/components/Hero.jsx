import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          AI-Powered Code Reviews
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Review, debug, and optimize your code with AI-driven insights.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90">
            Get Started
          </button>
          <button className="px-6 py-3 border border-purple-500 text-purple-500 rounded-lg font-semibold hover:bg-purple-500 hover:text-white">
            Try Live Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;