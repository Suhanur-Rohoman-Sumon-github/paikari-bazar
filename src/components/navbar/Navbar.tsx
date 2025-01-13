"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white shadow-md">
      {/* Left Section: Brand */}
      <div className="text-2xl font-bold text-indigo-600 hidden md:block">
        BrandName
      </div>

      {/* Right Section: Avatar and Balance */}
      <div className="flex items-center space-x-4">
        {/* User Balance */}
        <div className="text-gray-700">
          <span className="text-white bg-indigo-500 font-semibold border p-2 rounded-md">
            $120.50
          </span>
        </div>

        {/* Avatar with Dropdown */}
        <div className="relative">
          {/* Avatar */}
          <div onClick={toggleDropdown} className="cursor-pointer">
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-300"
              width={40}
              height={40}
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
