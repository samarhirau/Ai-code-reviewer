import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Demo from "../components/Demo";
import LogoutButton from "../components/Auth/LogoutButton";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // ✅ Redirect if user is not logged in
    }
  }, [user, navigate]);

  return user ? (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <LogoutButton />
      <h1 className="text-4xl font-bold mb-4">Welcome, {user?.email}!</h1>
      <p className="text-gray-300 mb-8">You are now logged in.</p>
      <Demo />
    </div>
  ) : null;
};

export default Dashboard;
