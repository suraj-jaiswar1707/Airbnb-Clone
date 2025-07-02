import React, { useState } from 'react';

/**
 * @param {object} props - The component props.
 * @param {object} props.service - An object containing service details.
 * @param {number} props.service.id - Unique identifier for the service.
 * @param {string} props.service.title - The title of the service.
 * @param {string} props.service.location - The location where the service is offered.
 * @param {string} props.service.price - The price of the service.
 * @param {string} props.service.image - The URL of the service's image.
 */
const ServiceCard = ({ service }) => {
 
  const [liked, setLiked] = useState(false);

 
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    // Main container for the service card.
    // It's responsive, has a shadow, rounded corners, and a hover effect.
    <div className="relative min-w-[250px] max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Heart Icon for liking/unliking the service. */}
      {/* Positioned absolutely at the top-right, with a white background and shadow. */}
      <div
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-sm cursor-pointer flex items-center justify-center"
        onClick={toggleLike}
        // Added for accessibility to describe the button's action.
        aria-label={liked ? "Unlike this service" : "Like this service"}
      >
        {/* SVG icon for the heart. */}
        {/* The 'fill' and 'text-color' properties change based on the 'liked' state. */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // Fill color is pink if liked, otherwise transparent (none).
          fill={liked ? '#ec4899' : 'none'} // Tailwind pink-500 equivalent
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          // Stroke color is pink if liked, otherwise gray.
          className={`w-6 h-6 ${liked ? 'text-pink-500' : 'text-gray-600'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>

      {/* Service Image. */}
      {/* Occupies full width, fixed height, and covers the area without distortion. */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover"
        // Fallback for broken images. Can be a placeholder image or a simple text.
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found`; }}
      />

      {/* Service Details Section. */}
      <div className="p-4">
        {/* Service Title. */}
        {/* Truncates long titles with ellipsis and shows full title on hover. */}
        <h3 className="font-semibold text-lg text-gray-800 truncate" title={service.title}>
          {service.title}
        </h3>
        {/* Service Location. */}
        {/* Truncates long locations with ellipsis and shows full location on hover. */}
        <p className="text-sm text-gray-500 truncate" title={service.location}>
          {service.location}
        </p>
        {/* Service Price. */}
        <p className="text-sm text-gray-700 mt-2 font-medium">
          {service.price}
        </p>
      </div>
    </div>
  );
};

/**
 * Footer component for the Services Page.
 * Provides copyright information and links to various sections.
 * This component is embedded directly within ServicesPage for a self-contained example.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 mt-auto rounded-t-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
          <h4 className="font-bold text-lg mb-4">ABOUT</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">How Airbnb works</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Newsroom</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Investors</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Airbnb Plus</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Airbnb Luxe</a></li>
          </ul>
        </div>

        {/* Column 2: Community */}
        <div>
          <h4 className="font-bold text-lg mb-4">COMMUNITY</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Diversity & Belonging</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Accessibility</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Airbnb Associates</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Frontline Stays</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Guest Referrals</a></li>
          </ul>
        </div>

        {/* Column 3: Host */}
        <div>
          <h4 className="font-bold text-lg mb-4">HOST</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Host your home</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Host an Online Experience</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Host an Experience</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Responsible hosting</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Resource Centre</a></li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div>
          <h4 className="font-bold text-lg mb-4">SUPPORT</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Our COVID-19 Response</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help Centre</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cancellation options</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Neighbourhood Support</a></li>
            <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Trust & Safety</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>© 2024 Airbnb, Inc. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-white transition-colors duration-200 mr-4">Privacy</a>
          <a href="#" className="hover:text-white transition-colors duration-200 mr-4">Terms</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
        </p>
      </div>
    </footer>
  );
};


/**
 * ServicesPage component displays a categorized list of various services.
 * It includes a header, a search bar, and sections for different service categories,
 * each containing a horizontal scrollable list of ServiceCard components.
 */
const ServicesPage = () => {
  // Data for different service categories and their respective services.
  const serviceCategories = [
    {
      name: 'Photography',
      services: [
        {
          id: 1,
          title: 'Stylish vintage car photo shoot Tour',
          location: 'Rome, Italy',
          price: 'From ₹5,513 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/4848a93b-274a-446e-9376-0143c3e6ca9f.jpeg'
        },
        {
          id: 2,
          title: 'Photo session at the Metropolitan Museum of Art',
          location: 'New York, United States',
          price: 'From ₹13,647 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-4079305/original/dd46bb9e-8abc-4402-ac70-87cd7da35c5a.jpeg'
        },
        {
          id: 3,
          title: 'Aerial and ground photography by Daniel',
          location: 'Fort Lauderdale, United States',
          price: 'From ₹16,111 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6079700/original/36c49f3e-820b-4e02-8e3e-d5aa7f0ad76a.jpeg'
        },
        {
          id: 4,
          title: 'Neapolitan souvenirs of Giovanni',
          location: 'Naples, Italy',
          price: 'From ₹11,000 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6071855/original/cb3ca8b5-fd67-47f8-936f-4cf389d1312b.jpeg'
        },
        {
          id: 5,
          title: 'Authentic, Inclusive photography by Ashley',
          location: 'Saint Paul, United States',
          price: 'From ₹1,291 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg'
        },
        {
          id: 6,
          title: 'Downtown urban portraits by J C',
          location: 'Mexico City, Mexico',
          price: 'From ₹5,907 / group',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6085467/original/e804e173-7b74-4a7b-aa3e-1da634b8e4b4.jpeg'
        },
        {
          id: 7,
          title: 'Couples photography by Jeff',
          location: 'Greater London, United Kingdom',
          price: 'From ₹11,599 / group',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6080975/original/ff87cd23-294b-40d8-a791-5f52b3a25768.jpeg'
        }
      ]
    },
    {
      name: 'Chefs',
      services: [
        {
          id: 8,
          title: 'Private Chef Experience in Tuscany',
          location: 'Florence, Italy',
          price: 'From ₹25,000 / group',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6068057/original/4bc4102d-3381-40b8-bf43-be3142c040ee.jpeg'
        },
        {
          id: 9,
          title: 'Sushi Making Class with Master Chef',
          location: 'Tokyo, Japan',
          price: 'From ₹15,000 / person',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-5982668/original/7e6bdc5f-27c2-4fac-b323-2943a0402ace.jpeg'
        },
        {
          id: 10,
          title: 'Gourmet Dining at Home with Chef Anna',
          location: 'Paris, France',
          price: 'From ₹30,000 / event',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6096870/original/5a8a7312-5a34-4560-b05c-2f04becf53d4.jpeg'
        },
        {
          id: 11,
          title: 'Vegan Cooking Workshop in Berlin',
          location: 'Berlin, Germany',
          price: 'From ₹8,000 / person',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6044248/original/c0d99254-28be-458e-80b1-1e37d9b8121a.jpeg'
        },
        {
          id: 12,
          title: 'Catalan cuisine by Cristina',
          location: 'Chef in Girona',
          price: 'From ₹4,010',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6093232/original/e4b6f0c2-8816-4c16-80ff-9649a67bc842.jpeg'
        },
        {
          id: 13,
          title: 'Wholesome flavors by Fernanda',
          location: 'I craft food inspired by my Mexican heart and funky - mindful soul.',
          price: 'From ₹4,544 per guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6060430/original/5e3c63ca-ece4-4be8-bf24-ee137e2b2593.jpeg'
        },
        {
          id: 14,
          title: 'Cali Mediterranean by Liza',
          location: 'Chef in Malibu',
          price: 'From ₹2,137 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-5982667/original/867db190-670b-43df-92aa-7ff1725c7880.jpeg'
        }
      ]
    },
    {
      name: 'Training',
      services: [
        {
          id: 15,
          title: 'Total Body Training by Peter',
          location: 'Pasadena, United States',
          price: 'From ₹4,274 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6056059/original/2adb850a-d47f-4d1b-948f-b0f26845c296.jpeg'
        },
        {
          id: 16,
          title: 'Personal Training & Group Fitness',
          location: 'Westmount, Canada',
          price: 'From ₹7,496 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg'
        },
        {
          id: 17,
          title: 'Yoga and embodiment by Julia',
          location: '',
          price: 'From ₹2,137 / guest · ₹17,095 minimum',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6099352/original/4739de7e-1648-41f8-8fba-5c68967ca7a9.jpeg'
        },
        {
          id: 18,
          title: 'Restorative fitness by Taylor',
          location: 'Los Angeles, United States',
          price: 'From ₹7,266 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6058137/original/745cf093-7f9b-4e22-96b6-b036418fe04d.jpeg'
        },
        {
          id: 19,
          title: 'Sun-sweat by Nishant',
          location: 'San Diego, United States',
          price: 'From ₹8,548 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6081161/original/b82efa82-55e2-430f-830f-542fbe98fe6e.jpeg'
        },
        {
          id: 20,
          title: 'High-energy workouts by Vicky',
          location: 'Redondo Beach, United States',
          price: 'From ₹13,676 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089722/original/a9b1fbc7-6912-459f-85bb-ba9749bad9cb.jpeg'
        },
        {
          id: 21,
          title: 'Ritual yoga by Ana',
          location: 'Mexico City, Mexico',
          price: 'From ₹2,045 / guest · ₹4,090 minimum',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-3246613/original/568717ca-33c8-4fec-9e67-5c1b479abca1.jpeg'
        }
      ]
    },
    {
      name: 'Massage',
      services: [
        {
          id: 22,
          title: 'Recovery and relaxation by Deisy',
          location: 'Los Angeles, United States',
          price: 'From ₹4,274 / guest',
          image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/5c0c1378-541d-4316-a64d-913438d97c11.jpeg'
        },
        {
          id: 23,
          title: 'Got Your Back London Massage Therapy',
          location: 'Greater London, United Kingdom',
          price: 'From ₹11,140 / guest · ★ 5.0',
          image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/270ea136-de97-446c-99b7-005f9ed3d63d.jpeg'
        },
        {
          id: 24,
          title: 'Relaxation and Therapeutic Massages by Remi',
          location: 'Santa Monica, United States',
          price: 'From ₹17,095 / guest · ★ 5.0',
          image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/6ba42ce9-01bb-44ad-b5f0-026e2bbe4547.jpeg'
        },
        {
          id: 25,
          title: 'Aromatherapeutic massage by Jenna',
          location: 'Massage therapist in Harwich',
          price: 'From ₹15,386 / guest · ★4.0',
          image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/5efc6b67-937e-46c4-82f8-98bb4d138115.jpeg'
        },
        {
          id: 26,
          title: 'Aromatherapy Massage by Vanessa',
          location: 'Massage therapist in Greater London',
          price: 'From ₹12,899 / guest.',
          image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/765f80bc-3ae0-48fb-b08f-cf98f1186bdf.jpeg'
        },
        {
          id: 27,
          title: 'Relax and Renew by Miguel',
          location: ' therapist in Madrid',
          price: 'From ₹5,012 / guest',
          image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/336e700c-42db-498e-a15e-4dbdee516142.jpeg'
        },
        {
          id: 28,
          title: 'Ayurvedic Therapy with Oils by Tania',
          location: ' therapist in Marratxí',
          price: 'From ₹15,036 / guest',
          image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/3f826a3d-a857-495f-b5e4-d3030897370d.jpeg'
        },
      ]
    },
    {
      name: 'Make-up',
      services: [
        {
          id: 29,
          title: 'Parisian makeup artist by Lara',
          location: '',
          price: 'From ₹8,019 / guest ★ 5.0',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6058149/original/3d13b5b0-96fc-408d-be38-84f8e513cad1.jpeg'
        },
        {
          id: 30,
          title: 'Mobile beauty in Las Vegas by Kailey',
          location: 'Las Vegas, United States',
          price: 'From ₹11,027 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6078439/original/99c13ea2-5264-4706-aba9-a12e90942de8.jpeg'
        },
        {
          id: 31,
          title: 'Vintage-inspired hair and makeup by Ria',
          location: 'Orlando, United States',
          price: 'From ₹10,257 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg'
        },
        {
          id: 32,
          title: 'Beauty by Estelle',
          location: '',
          price: 'From ₹12,822 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6068889/original/762d6148-1f08-428f-a2e0-f611593bb045.jpeg'
        },
        {
          id: 33,
          title: 'Makeup application by Svetlana',
          location: 'Miami, United States',
          price: 'From ₹55,560 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6068149/original/eebf2c84-8e6b-4a30-98eb-85ac1413f09b.jpeg'
        },
        {
          id: 34,
          title: 'Glam Makeup and Hair by Aljane',
          location: 'Los Angeles, United States',
          price: 'From ₹8,548 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073270/original/4e60c830-31b9-474b-89b3-4584fab9a071.jpeg'
        },
        {
          id: 35,
          title: 'Makeup for any occasion by Leslie',
          location: '',
          price: 'From ₹12,822 / guest',
          image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6056079/original/a217ead2-1c18-4ee0-8e87-6b891dfa1b24.jpeg'
        }
      ]
    }
  ];

  return (
    // Main container for the entire Services Page.
    // Uses flexbox for column layout, ensures minimum screen height, and sets background/font.
    <div className="flex flex-col min-h-screen bg-gray-50 font-inter">
      {/* Header section with Airbnb logo, navigation links, and host button */}
      {/* Fixed at the top, with shadow and rounded bottom corners. */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-10 rounded-b-xl">
        <div className="flex items-center space-x-4">
          {/* Airbnb Logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt="Airbnb Logo"
            className="h-8"
          />
          {/* Navigation links (hidden on small screens, visible on medium and up) */}
          <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-black transition-colors duration-200">Homes</a>
            <a href="#" className="hover:text-black transition-colors duration-200">Experiences</a>
            <a href="#" className="flex items-center text-black border-b-2 border-black pb-1">
              <span className="relative">
                Services
                {/* "NEW" badge for Services link, positioned absolutely. */}
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">NEW</span>
              </span>
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* "Become a host" link (hidden on small screens, visible on medium and up) */}
          <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 hidden sm:block">Become a host</a>
          {/* Hamburger menu icon for mobile navigation (simple SVG icon) */}
          <button className="text-gray-600 hover:text-black transition-colors duration-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Search bar section */}
      {/* Padded at the top to clear the fixed header, with shadow and rounded bottom corners. */}
      <section className="pt-24 pb-8 px-6 bg-white shadow-lg rounded-b-xl">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between bg-white border border-gray-300 rounded-full shadow-md py-2 px-4 space-y-2 md:space-y-0 md:flex-nowrap">
          {/* Where input field */}
          <div className="flex-1 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors duration-200 w-full md:w-auto">
            <label htmlFor="where" className="block text-xs font-bold text-gray-800">Where</label>
            <input type="text" id="where" placeholder="Search destinations" className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none" />
          </div>
          {/* Date input field */}
          <div className="flex-1 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors duration-200 w-full md:w-auto md:border-l md:border-r border-gray-200">
            <label htmlFor="date" className="block text-xs font-bold text-gray-800">Date</label>
            <input type="text" id="date" placeholder="Add dates" className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none" />
          </div>
          {/* Type of service input field */}
          <div className="flex-1 px-4 py-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors duration-200 w-full md:w-auto">
            <label htmlFor="service-type" className="block text-xs font-bold text-gray-800">Type of service</label>
            <input type="text" id="service-type" placeholder="Add service" className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none" />
          </div>
          {/* Search button */}
          <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors duration-200 flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <span className="ml-2 hidden md:inline">Search</span>
          </button>
        </div>
      </section>

      {/* Main content area for service categories */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        {serviceCategories.map((category) => (
          <section key={category.name} className="mb-12">
            {/* Category title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.name}</h2>
            {/* Horizontal scrollable container for service cards */}
            {/* The 'scrollbar-hide' class is crucial here to hide the horizontal scrollbar */}
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
              {category.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer section */}
      {/* <Footer /> */}

      {/* Embedded CSS for scrollbar-hide utility */}
      <style>
        {`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
        `}
      </style>
    </div>
  );
};

export default ServicesPage;
