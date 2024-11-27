import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AdminDashboard from "./AdminDashboard";
import CoachDashboard from "./CoachDashboard";
import ClientDashboard from "./ClientDashboard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Loading...</p>;

  if (user.role === "Admin") return <AdminDashboard />;
  if (user.role === "Coach") return <CoachDashboard />;
  return <ClientDashboard />;
};

export default Dashboard;

