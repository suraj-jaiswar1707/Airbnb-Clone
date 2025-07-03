import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleClick = () => {
    navigate(`/service/${service.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer relative min-w-[250px] max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-sm cursor-pointer flex items-center justify-center"
        onClick={toggleLike}
        aria-label={liked ? "Unlike this service" : "Like this service"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={liked ? '#ec4899' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className={`w-6 h-6 ${liked ? 'text-pink-500' : 'text-gray-600'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>

      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found`;
        }}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 truncate" title={service.title}>
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 truncate" title={service.location}>
          {service.location}
        </p>
        <p className="text-sm text-gray-700 mt-2 font-medium">
          {service.price}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
