import React from "react";

const Demo = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Live Code Review Demo</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <textarea
            className="w-full h-64 p-4 bg-gray-700 text-white rounded-lg"
            placeholder="Paste your code here..."
          />
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90">
            Get AI Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Demo;