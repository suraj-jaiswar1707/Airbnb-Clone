import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaGlobe } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showHostModal, setShowHostModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showGlobalModal, setShowGlobalModal] = useState(false);
  const [activeTab, setActiveTab] = useState("language");

  const location = useLocation();
  const navigate = useNavigate();

  const menuRef = useRef();
  const globalRef = useRef();

  // 🔁 Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
      if (
        globalRef.current && !globalRef.current.contains(event.target) &&
        !event.target.closest(".globe-button")
      ) {
        setShowGlobalModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleHostSelect = (type) => {
    navigate(`/host/${type}`);
    setShowHostModal(false);
    setShowMenu(false);
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
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <span
              className="text-sm font-medium cursor-pointer"
              onClick={() => {
                setShowHostModal(true);
                setShowMenu(false);
                setShowGlobalModal(false);
              }}
            >
              Become a host
            </span>

            {/* 🌐 Globe */}
            <button
              className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 globe-button"
              onClick={() => {
                setShowGlobalModal((prev) => !prev);
                setShowMenu(false);
              }}
            >
              <FaGlobe />
            </button>

            {/* ☰ Menu */}
            <div className="relative" ref={menuRef}>
              <button
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
                onClick={() => {
                  setShowMenu((prev) => !prev);
                  setShowGlobalModal(false);
                }}
              >
                <FaBars />
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg z-50 text-sm overflow-hidden border">
                  <div className="px-4 py-2 font-semibold text-gray-700 border-b">Help Centre</div>
                  <button
                    onClick={() => handleHostSelect("home")}
                    className="flex items-start w-full px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-black">Become a host</div>
                      <div className="text-xs text-gray-500">
                        It’s easy to start hosting and earn extra income.
                      </div>
                    </div>
                    <img
                      src="https://img.icons8.com/emoji/48/house-emoji.png"
                      alt="home"
                      className="w-6 h-6 ml-2"
                    />
                  </button>
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Refer a host</div>
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Find a co-host</div>
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-rose-500 font-medium">
                    Log in or sign up
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center justify-center space-x-10 pb-3 border-b">
          <NavItem to="/" emoji="🏠" label="Homes" active={location.pathname === "/"} />
          <NavItem to="/experiences" emoji="🎈" label="Experiences" isNew active={location.pathname === "/experiences"} />
          <NavItem to="/services" emoji="🛎️" label="Services" isNew active={location.pathname === "/services"} />
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex justify-center py-4">
          <SearchBar />
        </div>
      </div>

      {/* 🏠 Host Modal */}
      {showHostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button className="absolute top-2 right-3 text-xl" onClick={() => setShowHostModal(false)}>
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

      {/* 🌐 Language + Currency Modal */}
      {showGlobalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div
            className="bg-white rounded-xl p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto relative"
            ref={globalRef}
          >
            <button className="absolute top-4 right-4 text-2xl" onClick={() => setShowGlobalModal(false)}>
              &times;
            </button>

            {/* Tabs */}
            <div className="flex border-b mb-4">
              <button
                className={`px-4 py-2 font-semibold ${
                  activeTab === "language" ? "border-b-2 border-black" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("language")}
              >
                Language and region
              </button>
              <button
                className={`px-4 py-2 font-semibold ml-4 ${
                  activeTab === "currency" ? "border-b-2 border-black" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("currency")}
              >
                Currency
              </button>
            </div>

            {/* Language Tab */}
            {activeTab === "language" ? (
              <div className="space-y-6">
                <div>
                  <div className="font-semibold mb-2">Translation</div>
                  <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                    <div>Automatically translate descriptions and reviews to English.</div>
                    <input type="checkbox" className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Suggested languages and regions</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div>English (United States)</div>
                    <div>English (United Kingdom)</div>
                    <div>हिंदी (भारत)</div>
                    <div>ಕನ್ನಡ (ಭಾರತ)</div>
                    <div>मराठी (भारत)</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mt-4 mb-2">Choose a language and region</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                      "English (India)", "Deutsch (Deutschland)", "Français (France)",
                      "Español (España)", "Italiano (Italia)", "Português (Brasil)",
                      "日本語 (日本)", "한국어 (대한민국)", "中文 (中国)", "Русский (Россия)"
                    ].map((lang) => (
                      <div key={lang} className="border rounded px-3 py-2 hover:bg-gray-100 cursor-pointer">
                        {lang}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold mb-4">Choose a currency</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "Indian rupee – ₹", "USD – $", "Euro – €", "Pound – £", "Yen – ¥", "CAD – $",
                    "AUD – $", "CHF – CHF", "CNY – ¥", "KRW – ₩", "BRL – R$", "ZAR – R"
                  ].map((currency) => (
                    <div key={currency} className="border rounded px-3 py-2 hover:bg-gray-100 cursor-pointer">
                      {currency}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

// NavItem Component
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

// ModalOption Component
const ModalOption = ({ emoji, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center p-3 rounded hover:bg-gray-100 transition">
    <span className="text-3xl">{emoji}</span>
    <span className="mt-2 font-medium">{label}</span>
  </button>
);

export default Navbar;
