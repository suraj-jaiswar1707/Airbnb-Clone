import React from "react";
import { useParams } from "react-router-dom";
import { CalendarDays, Star, Umbrella, Waves } from "lucide-react";

const propertiesData = {
  1: {
    title: "Stylish vintage car photo shoot Tour",
    location: "Rome, Italy",
    price: "From ₹5,513 / guest",
    images: [
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/4848a93b-274a-446e-9376-0143c3e6ca9f.jpeg",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/4848a93b-274a-446e-9376-0143c3e6ca9f.jpeg",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/4848a93b-274a-446e-9376-0143c3e6ca9f.jpeg"
    ],
    rating: 4.83,
    reviewsCount: 35,
    host: "Maria",
    amenities: [
      { icon: Umbrella, text: "12-min walk to the beach" },
      { icon: Waves, text: "Dive right in - includes pool" },
      { icon: CalendarDays, text: "Free cancellation before 28 Aug" },
    ],
    description: [
      "Welcome to your tranquil retreat in the heart of Candolim, Goa 5 minutes from the beach.",
      "This private room is your escape to relaxation, featuring a queen-sized bed with plush, inviting linens for unwinding after a day on the beach...",
    ],
    priceTotal: "₹6,678",
    nights: 2,
    checkIn: "8/29/2025",
    checkOut: "8/31/2025",
    guests: 1,
    reviews: [
      {
        name: "Govind",
        duration: "New to Airbnb",
        time: "1 week ago",
        text: "Absolutely loved staying in this cozy 1BHK apartment in Goa! The location was perfect, with beautiful beaches and local attractions within walking distance. The apartment was clea...",
      },
      {
        name: "Sanidhya",
        duration: "1 year on Airbnb",
        time: "1 week ago",
        text: "Great experience, the room is same like in the pictures,same for the pool,highly suggested. Fully worth the money. (This isn't a paid review)*",
      },
      {
        name: "Abhinav",
        duration: "3 months on Airbnb",
        time: "2 weeks ago",
        text: "Lovely stay, thank you for the hospitality. Definitely coming back if I was back in Goa",
      },
      {
        name: "Aakash",
        duration: "6 years on Airbnb",
        time: "2 weeks ago",
        text: "Good cosy place in the midst of the Candolim-calungute road. everything is at a stone throw and the place is well kept and safe for all.",
      },
      {
        name: "Divesh",
        duration: "10 months on Airbnb",
        time: "3 weeks ago",
        text: "Felt like home away from home. Very responsive host and helped us with the local activities too..",
      },
      {
        name: "Bhavya",
        duration: "8 years on Airbnb",
        time: "3 weeks ago",
        text: "Very cute and cozy place and felt just like home. The amenities were good and room service ensured the place was spotless. Had a great stay!",
      },
    ],
  },
  2: {
    title: "Photo session at the Metropolitan Museum of Art",
    location: "New York, United States",
    price: "From ₹13,647 / guest",
    images: [
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4079305/original/dd46bb9e-8abc-4402-ac70-87cd7da35c5a.jpeg",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4079305/original/dd46bb9e-8abc-4402-ac70-87cd7da35c5a.jpeg",
      "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4079305/original/dd46bb9e-8abc-4402-ac70-87cd7da35c5a.jpeg"
    ],
    rating: 4.83,
    reviewsCount: 35,
    host: "Maria",
    amenities: [
      { icon: Umbrella, text: "12-min walk to the beach" },
      { icon: Waves, text: "Dive right in - includes pool" },
      { icon: CalendarDays, text: "Free cancellation before 28 Aug" },
    ],
    description: [
      "Welcome to your tranquil retreat in the heart of Candolim, Goa 5 minutes from the beach.",
      "This private room is your escape to relaxation, featuring a queen-sized bed with plush, inviting linens for unwinding after a day on the beach...",
    ],
    priceTotal: "₹6,678",
    nights: 2,
    checkIn: "8/29/2025",
    checkOut: "8/31/2025",
    guests: 1,
    reviews: [
      {
        name: "Govind",
        duration: "New to Airbnb",
        time: "1 week ago",
        text: "Absolutely loved staying in this cozy 1BHK apartment in Goa! The location was perfect, with beautiful beaches and local attractions within walking distance. The apartment was clea...",
      },
      {
        name: "Sanidhya",
        duration: "1 year on Airbnb",
        time: "1 week ago",
        text: "Great experience, the room is same like in the pictures,same for the pool,highly suggested. Fully worth the money. (This isn't a paid review)*",
      },
      {
        name: "Abhinav",
        duration: "3 months on Airbnb",
        time: "2 weeks ago",
        text: "Lovely stay, thank you for the hospitality. Definitely coming back if I was back in Goa",
      },
      {
        name: "Aakash",
        duration: "6 years on Airbnb",
        time: "2 weeks ago",
        text: "Good cosy place in the midst of the Candolim-calungute road. everything is at a stone throw and the place is well kept and safe for all.",
      },
      {
        name: "Divesh",
        duration: "10 months on Airbnb",
        time: "3 weeks ago",
        text: "Felt like home away from home. Very responsive host and helped us with the local activities too..",
      },
      {
        name: "Bhavya",
        duration: "8 years on Airbnb",
        time: "3 weeks ago",
        text: "Very cute and cozy place and felt just like home. The amenities were good and room service ensured the place was spotless. Had a great stay!",
      },
    ],
  },
  // Add more properties keyed by id similarly for all services...
};

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData[id];

  if (!property) {
    return <div className="max-w-7xl mx-auto p-6 font-sans">Property not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      {/* Main Content Grid: Listing Details & Booking Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Property Details */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-2xl font-semibold">{property.title}</h1>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-2 h-[300px] overflow-hidden rounded-xl">
            <img src={property.images[0]} alt="main" className="col-span-2 object-cover w-full h-full rounded-xl" />
            <div className="grid grid-rows-2 gap-2">
              <img src={property.images[1]} className="w-full h-full object-cover rounded-xl" alt="img1" />
              <img src={property.images[2]} className="w-full h-full object-cover rounded-xl" alt="img2" />
            </div>
          </div>

          {/* Rating & Host */}
          <div className="flex items-center justify-between">
            <div>
              <p className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold">{property.rating}</span> · {property.reviewsCount} Reviews · Guest favourite
              </p>
            </div>
            <div className="text-sm text-gray-600">Hosted by <span className="font-medium">{property.host}</span></div>
          </div>

          {/* Amenities */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {property.amenities.map(({ icon: Icon, text }, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="text-sm text-gray-700">
            {property.description.map((para, idx) => (
              <p key={idx} className={idx === 1 ? "mt-2" : ""}>{para}</p>
            ))}
            <button className="mt-1 text-blue-500 font-medium">Show more</button>
          </div>
        </div>

        {/* Right Section: Sticky Booking Box */}
        <div className="border rounded-xl p-5 shadow-md sticky top-20 h-fit">
          <div className="text-xl font-semibold">{property.priceTotal} <span className="text-sm font-normal">for {property.nights} nights</span></div>
          <div className="grid grid-cols-2 gap-2 mt-4 text-sm border rounded-md overflow-hidden">
            <div className="border-r px-3 py-2">
              <label className="block font-medium">Check-in</label>
              <p className="text-gray-600">{property.checkIn}</p>
            </div>
            <div className="px-3 py-2">
              <label className="block font-medium">Checkout</label>
              <p className="text-gray-600">{property.checkOut}</p>
            </div>
          </div>
          <div className="mt-3 border rounded-md px-3 py-2">
            <label className="block text-sm font-medium">Guests</label>
            <p className="text-gray-600">{property.guests} guest{property.guests > 1 ? "s" : ""}</p>
          </div>
          <button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold transition">
            Reserve
          </button>
          <p className="text-xs text-center text-gray-500 mt-2">You won't be charged yet</p>
        </div>
      </div>

      {/* Horizontal Separator */}
      <hr className="my-10 border-gray-300" />

      {/* Reviews Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Guest Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {property.reviews.map((review, idx) => (
            <div key={idx} className="border-b pb-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center uppercase font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-medium">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.duration}</p>
                </div>
              </div>
              <p className="text-sm">★★★★★ <span className="text-gray-500">{review.time}</span></p>
              <p className="text-sm text-gray-700 mt-1">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <button className="text-sm font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            Show all {property.reviewsCount} reviews
          </button>
          <button className="text-sm font-medium text-gray-600 hover:underline">
            Learn how reviews work
          </button>
        </div>
      </div>

      {/* Horizontal Separator */}
      <hr className="my-10 border-gray-300" />

      {/* Map Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Where you'll be</h2>
        <p className="text-gray-600">{property.location}</p>
        <div className="w-full h-[400px] overflow-hidden rounded-xl shadow-md">
          <iframe
            title={`${property.location} Map`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-none w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Horizontal Separator */}
      <hr className="my-10 border-gray-300" />

      {/* Footer Location Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700 mb-10">
        <div>
          <h3 className="font-semibold mb-2">Explore other options in and around Candolim</h3>
          <div className="grid grid-cols-2 gap-1">
            <span>South Goa</span>
            <span>Calangute</span>
            <span>Anjuna</span>
            <span>Sindhudurg</span>
            <span>Arambol</span>
            <span>Gokarna</span>
            <span>Candolim</span>
            <span>Morjim</span>
            <span>Vagator</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Other types of stays on Airbnb</h3>
          <div className="space-y-1">
            <p>North Goa holiday rentals</p>
            <p>North Goa monthly stays</p>
            <p>Holiday rentals with a pool in Goa</p>
            <p>Holiday rentals with a pool in North Goa</p>
            <p>Holiday rentals with a pool in India</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 list-none p-0">
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Hosting</h3>
            <ul className="space-y-1 list-none p-0">
              <li>Airbnb your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Airbnb</h3>
            <ul className="space-y-1 list-none p-0">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Footer Bar */}
      <hr className="mb-4 border-gray-300" />
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pb-10 gap-2">
        <p>© 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
        <div className="flex items-center gap-4">
          <p>🌐 English (IN)</p>
          <p>₹ INR</p>
          <div className="flex gap-3">
            <span className="hover:underline cursor-pointer">🌐</span>
            <span className="hover:underline cursor-pointer">📘</span>
            <span className="hover:underline cursor-pointer">📸</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
