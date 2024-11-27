import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import CarouselComponent from "./components/reuseableComponents/CarouselComponent";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import './index.css';

import About from "./components/fitnessappDetails/About";
import Register from "./pages/Register";





const App = () => {
  return (
    
  <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<CarouselComponent />} />
        </Routes>
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>
       
        <Routes>
        <Route path="/register" element={<Register />} />
         
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["Admin", "Coach", "Client"]}>
                <Dashboard />
              
              </ProtectedRoute>
            }
          />
        </Routes>
       
      </Router>
    </AuthProvider>




  );
};

export default App;


