import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Forgot from "./components/Auth/Forgot";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route
            path="/dashboard"
            element={
             <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            
            }
          />
        </Routes>
      </Router>

  );
};

export default App;