import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 p-1 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold cursor-pointer hover:text-gray-200">
          MyWebsite
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none transition-transform duration-300 transform hover:scale-110"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 mt-4 md:mt-0 ${
            isOpen ? "block" : "hidden"
          } absolute md:static w-full md:w-auto md:flex-row flex flex-col items-center md:items-center  md:py-0 rounded-lg md:rounded-none z-10`}
        >
          <li>
            <Link
              to="/"
              className="text-white no-underline hover:text-gray-300 px-4 py-2 block transition duration-300 rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white no-underline hover:text-gray-300 px-4 py-2 block transition duration-300 rounded-md"
            >
              About Us
            </Link>
          </li>
          {/* Add more links here if needed */}
        </ul>
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white rounded-full shadow-lg overflow-hidden">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="p-2 rounded-l-full w-48 border-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
