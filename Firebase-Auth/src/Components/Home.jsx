// src/Components/Home.js
import React from "react";

import { useNavigate } from "react-router"; // For routing
import toast from "react-hot-toast"; // For toast notifications
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

function Home({ userData, setUserData }) {
  const navigate = useNavigate();

  // Handle sign out
  function handleOut() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user"); // Clear user data from localStorage
        setUserData({});
        toast.success("User signed out");
        window.location.reload()
        navigate("/"); // Redirect to login page
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to sign out");
      });
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">App Name</h1>

          {/* Logout Button */}
          <button
            onClick={handleOut}
            className="text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Welcome, {userData?.displayName || "User"}!
        </h1>

        {/* User Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            User Information
          </h3>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> {userData?.email}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email Verified:</strong>{" "}
            {userData?.emailVerified ? "Yes" : "No"}
          </p>
          <p className="text-lg text-gray-600">
            <strong>User UID:</strong> {userData?.uid}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Last Login:</strong>{" "}
            {new Date(userData?.metadata?.lastSignInTime).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
