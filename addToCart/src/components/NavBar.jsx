import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { cartcontext } from "../App";
import { Link } from "react-router";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [cartCount,setcartCount] = useContext(cartcontext);
  return (
    <>
      <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-4 py-4 md:px-8 sticky top-0 z-50">
        <div className="md:flex items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>

            {/* Hamburger button */}
            <div className="md:hidden">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {navbarOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className={`md:flex ${navbarOpen ? "block" : "hidden"}`}>
            <ul className="md:flex md:items-center font-semibold justify-between space-x-4 md:space-x-6">
              {[
                { name: "Dashboard", href: "#", current: true },
                { name: "Search", href: "#", current: false },
                { name: "Explore", href: "#", current: false },
                { name: "About", href: "#", current: false },
                { name: "Contact", href: "#", current: false },
              ].map((link) => (
                <li
                  key={link.name}
                  className={`py-2 md:my-0 ${
                    link.current ? "text-indigo-500" : "hover:text-indigo-400"
                  }`}
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
            <div className="md:ml-6 mt-3 md:mt-0">
              <Link to={'/cart'}>
                <button className="px-4 py-2 flex items-center">
                  <FaShoppingCart />{" "}
                  {cartCount ? (
                    <sup className="bg-red-500 text-white text-xs rounded-full w-[19px] h-[19px]">
                      <small>{cartCount}</small>
                    </sup>
                  ) : (
                    ""
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
