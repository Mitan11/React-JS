import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import { useNavigate } from "react-router-dom"; // For logout functionality

function Navbar({ handleOut, userData }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-semibold">App Name</h1>

        {/* Nav Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="text-white text-lg hover:text-gray-300 transition-colors"
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="text-white text-lg hover:text-gray-300 transition-colors"
          >
            Settings
          </Link>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleOut}
          className="text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
