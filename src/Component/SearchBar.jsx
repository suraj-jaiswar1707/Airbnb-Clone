import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    console.log('Searching with:', {
      location,
      checkIn,
      checkOut,
      guests,
    });

    // Example: Redirect or fetch data
    alert(`Searching for:
    Location: ${location}
    Check-in: ${checkIn}
    Check-out: ${checkOut}
    Guests: ${guests}`);
  };

  return (
    <div className="mx-auto mt-4 w-[80%] bg-white shadow-lg rounded-full flex justify-between items-center px-4 py-2">
      {/* Location */}
      <div className="flex-1 px-4">
        <p className="text-xs font-semibold">Where</p>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search destinations"
          className="text-sm text-gray-700 focus:outline-none w-full"
        />
      </div>

      {/* Divider */}
      <div className="border-l h-6" />

      {/* Check in */}
      <div className="flex-1 px-4">
        <p className="text-xs font-semibold">Check in</p>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="text-sm text-gray-700 focus:outline-none w-full"
        />
      </div>

      {/* Divider */}
      <div className="border-l h-6" />

      {/* Check out */}
      <div className="flex-1 px-4">
        <p className="text-xs font-semibold">Check out</p>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="text-sm text-gray-700 focus:outline-none w-full"
        />
      </div>

      {/* Divider */}
      <div className="border-l h-6" />

      {/* Guests */}
      <div className="flex-1 px-4">
        <p className="text-xs font-semibold">Who</p>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="Add guests"
          className="text-sm text-gray-700 focus:outline-none w-full"
        />
      </div>

      {/* Search button */}
      <button
        className="bg-pink-600 rounded-full p-2 ml-2 hover:bg-pink-700"
        onClick={handleSearch}
      >
        <Search className="text-white" size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
