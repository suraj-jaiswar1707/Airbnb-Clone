import React, { useState, useEffect, useRef } from 'react';
import { Globe, Menu } from 'lucide-react';

const Navbar = ({ setIsLoggedIn }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languageRef = useRef(null);
  const menuRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('loginEmail');
    localStorage.removeItem('loginPassword');
    setIsLoggedIn(false);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setShowLanguageMenu(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-sm bg-white relative">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://cdn.worldvectorlogo.com/logos/airbnb-1.svg"
          alt="Airbnb Logo"
          className="h-6"
        />
        <span className="text-pink-600 font-bold text-xl">airbnb</span>
      </div>

      {/* Middle Tabs */}
      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center">
          <img
            src="https://img.icons8.com/emoji/48/house-emoji.png"
            alt="Homes"
            className="h-6 w-6"
          />
          <span className="text-sm font-semibold">Homes</span>
          <div className="w-full h-[2px] bg-black mt-1"></div>
        </div>
        <div className="flex flex-col items-center relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
            alt="Experiences"
            className="h-6 w-6"
          />
          <span className="text-sm text-gray-600">
            Experiences
            <span className="absolute -top-2 -right-5 text-[10px] bg-blue-700 text-white px-1 rounded-full">
              NEW
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="Services"
            className="h-6 w-6"
          />
          <span className="text-sm text-gray-600">
            Services
            <span className="absolute -top-2 -right-5 text-[10px] bg-blue-700 text-white px-1 rounded-full">
              NEW
            </span>
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 relative">
        <button className="text-sm font-medium">Become a host</button>

        {/* Globe Icon and Language Menu */}
        <div className="relative" ref={languageRef}>
          <Globe
            size={20}
            className="text-gray-600 cursor-pointer"
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
          />
          {showLanguageMenu && (
            <div className="absolute right-10 mt-2 bg-white border rounded shadow-md w-60 z-10 text-sm">
              <div className="px-4 py-2 font-semibold text-gray-700">
                Language and Region
              </div>
              <hr />
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                🌐 English (United States)
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                🌐 हिन्दी (भारत)
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                🌐 Français (France)
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                🌐 Deutsch (Deutschland)
              </div>
              <hr />
              <div className="px-4 py-2 font-semibold text-gray-700">
                Currency
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                💰 USD - U.S. Dollar
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                💰 INR - Indian Rupee
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                💰 EUR - Euro
              </div>
            </div>
          )}
        </div>

        {/* Menu Icon and Logout */}
        <div className="relative" ref={menuRef}>
          <Menu
            size={20}
            className="text-gray-600 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-32 z-10">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
