import { createContext, useContext, useState } from "react";
import axios from "axios";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchReview = async (code) => {
    if (!code.trim()) return;
    setLoading(true);
    setReview("");
    try {
      const response = await axios.post("/api/ai/get-review", { code });
      setReview(response.data.review || "No review generated.");
    } catch (error) {
      setReview("Error fetching review. Please try again.");
    }
    setLoading(false);
  };

  const clearReview = () => {
    setReview("");
  };

  return (
    <ReviewContext.Provider value={{ review, loading, fetchReview, clearReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReview = () => useContext(ReviewContext);
