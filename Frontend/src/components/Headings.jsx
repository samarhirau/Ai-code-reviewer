import React from "react";

function Headings() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between bg-black min-h-screen py-20 space-y-32 text-center">
        <h1 className="text-2xl md:text-5xl text-white font-bold w-3/4 md:w-1/2">
          Review your code smarter, faster, and more efficiently.
        </h1>
        <h1 className="text-2xl md:text-5xl text-white font-bold w-3/4 md:w-1/2">
          Detect errors, optimize performance, and improve code quality.
        </h1>
        <h1 className="text-2xl md:text-5xl text-white font-bold w-3/4 md:w-1/2">
          Get instant AI-powered suggestions and best practices.
        </h1>
      </div>
    </div>
  );
}

export default Headings;
