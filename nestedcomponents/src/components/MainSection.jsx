import React from "react";

function MainSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Welcome to Our Application!
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
        Our application provides you with the tools you need to manage your
        tasks efficiently and effectively. Whether you're a student, a
        professional, or anyone in between, we have something for you.
      </p>
      <div className="flex space-x-4">
        <a
          href="/about"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </a>
        <a
          href="/tasks"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Get Started
        </a>
      </div>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Main Section"
        className="rounded-lg shadow-lg mt-6"
      />
    </div>
  );
}

export default MainSection;
