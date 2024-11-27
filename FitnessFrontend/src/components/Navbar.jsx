import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="font-bold text-lg">
        Fitness App
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
        <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>

      {/* Conditional Render for User */}
      <div className="flex items-center space-x-4">
        {user && <span>Welcome, {user?.name || user?.email}</span>}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;





