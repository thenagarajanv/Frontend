"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* <a href="" className="text-2xl font-bold text-purple-600">
              FinestShare
            </a> */}
            <img src="/Logo.png" className="h-[50px] cursor-pointer" href='/'></img>
          </div>

          <div className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-purple-600 font-medium"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex flex-col md:flex-row gap-4">
            <a
              href="/signup"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-md"
            >
              Sign Up
            </a>
            <a
              href="/auth/login"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-md"
            >
              Log In
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block text-gray-600 hover:text-purple-600 font-medium"
            >
              Features
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-purple-600 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-purple-600 font-medium"
            >
              Contact
            </a>
            <a
              href="/signup"
              className="block mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-md"
            >
              Sign Up
            </a>
            <a
              href="/auth/login"
              className="block mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-md"
            >
              Login In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
