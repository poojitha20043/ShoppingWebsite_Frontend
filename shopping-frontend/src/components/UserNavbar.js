import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiUser,
  HiLogout,
  HiArrowLeft,
  HiShoppingBag,
} from "react-icons/hi";

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">

          {/* LEFT SIDE - LOGO ONLY */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">
                🛒 ShopEasy
              </span>
            </Link>
          </div>

          {/* RIGHT SIDE - DESKTOP */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="flex items-center text-white border border-white/40 px-3 py-2 rounded-md hover:bg-white/10 transition"
            >
              <HiArrowLeft className="h-4 w-4 mr-1" />
              Back
            </button>

            {/* User Info */}
            <div className="flex items-center text-white mx-2">
              <HiUser className="h-5 w-5 mr-2" />
              <span className="font-medium">{user?.name || "User"}</span>
            </div>

            {/* Dashboard */}
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-gray-100 flex items-center"
            >
              <HiShoppingBag className="h-4 w-4 mr-2" />
              Dashboard
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-medium px-4 py-2 rounded-md hover:bg-red-600 flex items-center"
            >
              <HiLogout className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <HiX className="h-8 w-8" />
              ) : (
                <HiMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-4 pt-4 pb-5 space-y-3">

          {/* User */}
          <div className="flex items-center text-white">
            <HiUser className="h-6 w-6 mr-2" />
            <div>
              <p className="font-medium">{user?.name || "User"}</p>
              <p className="text-sm text-blue-200">{user?.email}</p>
            </div>
          </div>

          <hr className="border-blue-500" />

          {/* Back */}
          <button
            onClick={() => {
              handleBack();
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-center text-white border border-white/40 py-3 rounded-md"
          >
            <HiArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>

          {/* Dashboard */}
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center bg-white text-blue-600 py-3 rounded-md"
          >
            <HiShoppingBag className="h-5 w-5 mr-2" />
            Dashboard
          </Link>

          {/* Logout */}
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-center bg-red-500 text-white py-3 rounded-md"
          >
            <HiLogout className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;
