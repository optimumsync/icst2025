import React, { useState } from "react";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gogreen text-white shadow">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <img src={logo} alt="ICST" className="" width={"100px"}/>
            <a href="/" className="text-2xl font-bold ms-2">
              <span>ICST</span>
            </a>
          </div>

          <div className="hidden md:flex w-full justify-between mx-40 flex-wrap font-semibold space-x-4">
            <a>Home</a>
            <a>About</a>
            <a>Committee</a>
            <a>Call For Papers</a>
            <a>Track</a>
            <a>Registration</a>
            <a>Conclave</a>
            <a>Contact Us</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-gray-400 focus:outline-none mx-3"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
        </div>
          </div>

      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Committee</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Call For Papers</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Track</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Registration</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Conclave</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
