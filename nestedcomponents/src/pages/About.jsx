import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-4">
        We are a dedicated team committed to providing the best services to our
        customers. Our mission is to deliver high-quality products and
        exceptional customer service.
      </p>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-4">
        With years of experience in the industry, we understand the needs of our
        clients and strive to exceed their expectations. Our team is passionate
        about what we do and works tirelessly to ensure your satisfaction.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="About Us"
        className="rounded-lg shadow-lg mt-6 mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
      <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
        <li>Integrity</li>
        <li>Quality</li>
        <li>Customer Satisfaction</li>
        <li>Innovation</li>
      </ul>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Thank you for visiting our website. We look forward to serving you!
      </p>
    </div>
  );
}

export default About;
