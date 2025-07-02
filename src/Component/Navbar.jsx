import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaGlobe } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="relative z-50 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt="logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl text-rose-500 font-bold">airbnb</span>
        </div>

        {/* Nav Tabs */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavItem
            to="/"
            emoji="🏠"
            label="Homes"
            active={location.pathname === "/"}
          />
          <NavItem
            to="/experiences"
            emoji="🎈"
            label="Experiences"
            isNew
            active={location.pathname === "/experiences"}
          />
          <NavItem
            to="/services"
            emoji="🛎️"
            label="Services"
            isNew
            active={location.pathname === "/services"}
          />
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-sm font-medium cursor-pointer">
            Become a host
          </span>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <FaGlobe />
          </button>
          <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
            <FaBars />
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Search Bar Floating */}
      <div className="flex justify-center -mt-6 mb-4 px-4">
        <SearchBar />
      </div>
    </header>
  );
};

// Individual NavItem Component with Emoji, NEW badge, and underline
const NavItem = ({ to, emoji, label, active, isNew }) => (
  <Link to={to} className="flex flex-col items-center relative group px-3">
    {/* Emoji */}
    <div className="text-2xl">{emoji}</div>

    {/* NEW badge */}
    {isNew && (
      <span className="absolute -top-2 -right-3 text-[10px] font-bold text-white px-2 py-[1px] bg-gray-800 rounded-full shadow">
        NEW
      </span>
    )}

    {/* Label */}
    <div
      className={`text-sm mt-1 font-medium ${
        active ? "text-black font-semibold" : "text-gray-500 group-hover:text-black"
      }`}
    >
      {label}
    </div>

    {/* Active underline */}
    {active && <div className="w-5 h-[3px] mt-1 bg-black rounded-full" />}
  </Link>
);

export default Navbar;
