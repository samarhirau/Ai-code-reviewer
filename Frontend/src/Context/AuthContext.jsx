import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser && storedUser !== "undefined" && storedUser !== "null"
        ? JSON.parse(storedUser)
        : null;
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return null;
    }
  });
  
  

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  // const signup = async (fullName, email, password) => {
  //   const response = await fetch("/api/users/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ fullName, email, password }, { withCredentials: true }),
  //   });

  //   if (!response.ok) {
  //     const errorData = await response.json();
  //     throw new Error(errorData.message || "Signup failed");
  //   }

  //   return response.json();
  // };
  const signup = async (fullName, email, password) => {
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password }),
      credentials: "include",
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Signup failed");
    }
  
    const data = await response.json();
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data;
  };
  
  


  const login = async (email, password) => {
    try {
      const res = await axios.post("/api/users/login", { email, password }, { withCredentials: true });

      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ Store in localStorage

      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/api/users/profile", { withCredentials: true });
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ Store in localStorage
    } catch (error) {
      setUser(null);
      localStorage.removeItem("user"); // ❌ Remove user if fetch fails
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        credentials: "include", // ✅ 
      });
  
      if (!response.ok) {
        throw new Error("Logout failed");
      }
  
      localStorage.removeItem("user"); // Remove user data
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  
  return (
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
