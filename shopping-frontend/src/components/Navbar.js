import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">🛒 ShopEasy</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md border-2 border-white hover:bg-gray-100 transition duration-150"
            >
              Home
            </Link>
            <Link
              to="/register"
              className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md border-2 border-white hover:bg-gray-100 transition duration-150"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md border-2 border-white hover:bg-gray-100 transition duration-150"
            >
            
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <HiX className="h-8 w-8" /> : <HiMenu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-4 pt-2 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-white font-medium px-4 py-2 rounded-md border-2 border-white/30 hover:border-white hover:bg-white/10 transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/register"
            className="block bg-white text-blue-600 font-medium px-4 py-2 rounded-md border-2 border-white hover:bg-gray-100 transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="block text-white font-medium px-4 py-2 rounded-md border-2 border-white/30 hover:border-white hover:bg-white/10 transition duration-150"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
