import React, { useState, useRef, useEffect } from "react";
import { useReview } from "../Context/ReviewContext";

const Demo = () => {
  const [code, setCode] = useState("");
  const reviewRef = useRef(null);
  const { review, loading, fetchReview, clearReview } = useReview();

  const handleReview = () => fetchReview(code);
  const handleClear = () => {
    setCode("");
    clearReview();
  };

  useEffect(() => {
    if (review && reviewRef.current) {
      reviewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [review]);

  return (
    <section className="py-20 bg-black text-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Live Code Review Demo</h2>
        <div className="bg-gray-800 p-6 rounded-lg w-full">
          <textarea
            className="w-full h-64 p-4 bg-gray-700 text-white rounded-lg"
            placeholder="Paste your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <div className="flex gap-4 mt-4">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90"
              onClick={handleReview}
              disabled={loading}
            >
              {loading ? "Reviewing..." : "Get AI Review"}
            </button>
            <button
              className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-500"
              onClick={handleClear}
              disabled={!code && !review}
            >
              Clear
            </button>
          </div>
          {review && (
            <div ref={reviewRef} className="mt-6 p-4 bg-gray-700 rounded-lg text-white">
              <h3 className="font-semibold text-lg">AI Review:</h3>
              <p className="mt-2 whitespace-pre-line">{review}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;
