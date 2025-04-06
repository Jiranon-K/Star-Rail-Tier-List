"use client";

import React, { useState } from "react";
import Link from "next/link"; 
import { Home, User, Star, Rocket, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavItems = [
    { icon: <Home size={20} />, label: "หน้าหลัก", href: "/" },
    { icon: <User size={20} />, label: "ตัวละคร", href: "/characters" }, 
    { icon: <Star size={20} />, label: "Tier List", href: "/tier-list" },
    // { icon: <Rocket size={20} />, label: "Light Cone", href: "#" },
  ];

  return (
    <nav className="fixed top-4 inset-x-0 z-999 w-[95%] max-w-6xl mx-auto">
      <div className="navbar bg-black bg-opacity-40 backdrop-blur-md shadow-lg rounded-lg px-4 py-2 relative border border-gray-800">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            href="/"
            className="btn btn-ghost text-xl flex items-center gap-2 text-white"
          >
            <Rocket size={24} className="text-blue-400" />
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              HONKAI STAR RAIL
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden md:flex space-x-2">
          {NavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="btn btn-ghost flex items-center gap-2 text-gray-200 hover:text-white hover:bg-white/10"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>

       
        <div className="navbar-end flex items-center space-x-2">
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn btn-ghost text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-40 backdrop-blur-md rounded-b-lg shadow-md animate-slide-down border border-gray-800 border-t-0">
          <div className="flex flex-col items-center py-4 space-y-2">
            {NavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="btn btn-ghost w-full flex items-center justify-start px-6 gap-3 text-gray-200 hover:text-white hover:bg-white/10"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;