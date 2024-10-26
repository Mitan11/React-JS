import React from "react";
import MainSection from "../components/MainSection";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800">
        Welcome to Our Website!
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-xl">
        We are dedicated to providing you with the best service possible.
        Explore our features and see how we can help you achieve your goals.
      </p>
      <div className="mt-6">
        <a
          href="/aboutus"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </a>
      </div>
      <MainSection />
    </div>
  );
}

export default Home;
