import React from "react";
import reactsvg from '../assets/react.svg'
function Home({ userData , handleOut}) {
  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold"><img src={reactsvg} alt="" /></h1>
          <button
            onClick={handleOut}
            className="text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Welcome, {userData?.displayName || "User"}!
        </h1>
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
