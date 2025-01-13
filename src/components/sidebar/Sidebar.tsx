"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

// Array of links
const sidebarLinks = [
  { href: "/create-nid", label: "নতুন এনআইডি" },
  { href: "/server-copy", label: "সার্ভার কপি (Unofficial)" },
  { href: "/settings", label: "Settings" },
  { href: "/profile-image", label: "Profile image" },
  { href: "/sign-copy-order", label: "সাইন কপি অর্ডার" },
  { href: "/id-card-order", label: "আইডি কার্ড অর্ডার" },
  { href: "/order-text", label: "অর্ডার টেক্স" },
  { href: "/order-file", label: "অর্ডার ফাইল" },
  { href: "/tin-certificate", label: "টিন সার্টিফিকেট" },
  { href: "/make", label: "মেইক করুন" },
  { href: "/make-list", label: "মেইক লিষ্ট" },
  { href: "/registration-make", label: "নিবন্ধন মেইক" },
  { href: "/registration-list", label: "নিবন্ধন লিষ্ট" },
  { href: "/passport-verify-copy", label: "পাসপোর্ট ভেরিফাই কপি" },
  { href: "/nagad-info", label: "নগদ ইনফো" },
  { href: "/profile", label: "প্রোফাইল" },
  { href: "/recharge", label: "রিচার্জ করুন" },
  { href: "/work-history", label: "কাজের হিস্টোরি" },
  { href: "/balance-adjust", label: "ব্যাল্যন্স যুক্ত/বাদ" },
  { href: "/logout", label: "লগআউট" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 h-screen w-64 bg-gray-100 border-r border-gray-200 transition-transform md:translate-x-0 md:static md:w-[250px]`}
      >
        {/* Sidebar content with scroll behavior */}
        <div className="h-full overflow-y-auto p-4">
          <nav className="space-y-4">
            {sidebarLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Button to toggle Sidebar */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 ${
          isSidebarOpen ? "left-48 bg-red-600" : "left-4"
        } z-50 md:hidden bg-indigo-600 text-white p-2 rounded-md shadow-md`}
      >
        {isSidebarOpen ? <RxCross1 /> : <HiMiniBars3BottomLeft />}
      </button>
    </div>
  );
};

export default Sidebar;
