import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaGlobe } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showHostModal, setShowHostModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHostSelect = (type) => {
    navigate(`/host/${type}`);
    setShowHostModal(false);
  };

  return (
    <header className="relative z-50 bg-white border-b shadow-sm">
      <div className="w-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-10 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt="logo"
              className="w-15 h-12 object-contain"
            />
            <span className="text-xl text-rose-500 font-bold"></span>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <span
              className="text-sm font-medium cursor-pointer"
              onClick={() => setShowHostModal(true)}
            >
              Become a host
            </span>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <FaGlobe />
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              <FaBars />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center justify-center space-x-10 pb-3 border-b">
          <NavItem to="/" emoji="🏠" label="Homes" active={location.pathname === "/"} />
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

        {/* Search Bar Below Tabs */}
        <div className="hidden md:flex justify-center py-4">
          <SearchBar />
        </div>
      </div>

      {/* Host Modal */}
      {showHostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setShowHostModal(false)}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center">
              What would you like to host?
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <ModalOption emoji="🏠" label="Home" onClick={() => handleHostSelect("home")} />
              <ModalOption emoji="🎈" label="Experience" onClick={() => handleHostSelect("experience")} />
              <ModalOption emoji="🛎️" label="Service" onClick={() => handleHostSelect("service")} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Nav Tab
const NavItem = ({ to, emoji, label, active, isNew }) => (
  <Link to={to} className="flex flex-col items-center relative group px-3">
    <div className="text-2xl">{emoji}</div>
    {isNew && (
      <span className="absolute -top-2 -right-3 text-[10px] font-bold text-white px-2 py-[1px] bg-gray-800 rounded-full shadow">
        NEW
      </span>
    )}
    <div
      className={`text-sm mt-1 font-medium ${
        active ? "text-black font-semibold" : "text-gray-500 group-hover:text-black"
      }`}
    >
      {label}
    </div>
    {active && <div className="w-5 h-[3px] mt-1 bg-black rounded-full" />}
  </Link>
);

// Modal Option
const ModalOption = ({ emoji, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center p-3 rounded hover:bg-gray-100 transition"
  >
    <span className="text-3xl">{emoji}</span>
    <span className="mt-2 font-medium">{label}</span>
  </button>
);

export default Navbar;
