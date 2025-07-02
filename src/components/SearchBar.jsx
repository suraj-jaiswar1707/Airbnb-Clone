import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";

const destinations = [
  "Nearby",
  "North Goa, Goa",
  "South Goa, Goa",
  "Mumbai, Maharashtra",
  "Lonavala, Maharashtra",
  "Udaipur, Rajasthan",
  "Jaipur, Rajasthan",
];

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [showDestinations, setShowDestinations] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const wrapperRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDestinations(false);
        setShowGuests(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalGuests =
    guests.adults + guests.children + guests.infants + guests.pets;

  return (
    <div
      ref={wrapperRef}
      className="bg-white shadow-md rounded-full border border-gray-200 flex items-center justify-between px-4 py-2 w-full max-w-4xl mx-auto mt-4 relative"
    >
      <div className="flex items-center justify-between w-full text-sm font-medium text-gray-800 relative">
        {/* Where */}
        <div className="px-4 border-r relative w-48">
          <p className="text-xs font-semibold mb-1">Where</p>
          <input
            className="outline-none w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent"
            placeholder="Search destinations"
            value={location}
            onFocus={() => setShowDestinations(true)}
            onChange={(e) => setLocation(e.target.value)}
          />
          {showDestinations && (
            <div className="absolute bg-white z-20 mt-2 left-0 w-full border rounded-xl shadow-lg max-h-60 overflow-y-auto">
              {destinations.map((dest, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setLocation(dest);
                    setShowDestinations(false);
                  }}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  {dest}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Check In */}
        <div className="px-4 border-r w-40">
          <p className="text-xs font-semibold mb-1">Check in</p>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            placeholderText="Add dates"
            className="outline-none text-sm w-full text-gray-600 bg-transparent"
          />
        </div>

        {/* Check Out */}
        <div className="px-4 border-r w-40">
          <p className="text-xs font-semibold mb-1">Check out</p>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            placeholderText="Add dates"
            className="outline-none text-sm w-full text-gray-600 bg-transparent"
          />
        </div>

        {/* Guests */}
        <div className="px-4 relative w-40">
          <p className="text-xs font-semibold mb-1">Who</p>
          <input
            className="outline-none w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent"
            placeholder="Add guests"
            value={totalGuests ? `${totalGuests} guest(s)` : ""}
            onFocus={() => setShowGuests(true)}
            readOnly
          />
          {showGuests && (
            <div className="absolute bg-white z-20 mt-2 left-0 w-64 border rounded-xl shadow-lg p-4 space-y-4">
              {["adults", "children", "infants", "pets"].map((type) => (
                <div
                  key={type}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="capitalize">{type}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      disabled={guests[type] === 0}
                      onClick={() =>
                        setGuests((prev) => ({
                          ...prev,
                          [type]: Math.max(prev[type] - 1, 0),
                        }))
                      }
                      className="p-1 border rounded-full disabled:opacity-30"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span>{guests[type]}</span>
                    <button
                      onClick={() =>
                        setGuests((prev) => ({
                          ...prev,
                          [type]: prev[type] + 1,
                        }))
                      }
                      className="p-1 border rounded-full"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Search Button */}
      <button className="ml-2 bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition">
        <FaSearch size={14} />
      </button>
    </div>
  );
};

export default SearchBar;
