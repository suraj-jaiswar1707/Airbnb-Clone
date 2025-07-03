import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("Unique stays");
  const [selectedExperience, setSelectedExperience] = useState(null);

  const uniqueStays = [
    { title: "Yurt Rentals", location: "United States" },
    { title: "Yurt Rentals", location: "United Kingdom" },
    { title: "Castle Rentals", location: "United States" },
    { title: "Houseboats", location: "United States" },
    { title: "Holiday Caravans", location: "United Kingdom" },
    { title: "Private Island Rentals", location: "United States" },
    { title: "Farm Houses", location: "United States" },
    { title: "Farm Cottages", location: "United Kingdom" },
    { title: "Cabin Rentals", location: "Australia" },
    { title: "Luxury Cabins", location: "United Kingdom" },
    { title: "Luxury Cabins", location: "United States" },
    { title: "Holiday Chalets", location: "United Kingdom" },
    { title: "Cottage Rentals", location: "United States" },
    { title: "Holiday Cottages", location: "United Kingdom" },
    { title: "Mansion Rentals", location: "United States" },
    { title: "Villa Rentals", location: "United Kingdom" },
    { title: "Holiday Bungalows", location: "United Kingdom" },
    { title: "Show more", location: "" },
  ];

  const categories = [
    "Amazing pools",
    "Arctic",
    "Camping",
    "Camper vans",
    "Castles",
    "Containers",
    "Countryside",
    "Design",
    "Earth homes",
    "Farms",
    "National parks",
    "Vineyards",
    "OMG!",
    "Tiny homes",
    "Towers",
    "Windmills",
    "Luxe",
  ];

  // Airbnb Originals Data
  const originals = [
    {
      id: 1,
      title: "Join the Tropicoqueta vibes with KAROL G",
      location: "Medellín, Colombia",
      price: "Closes 30 June",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQwMDAzNTQ1MjM3MzQ5NTcwNQ==/original/826e3ad8-1fa0-4e8c-9135-ae230d8ef288.png?im_w=1200&im_q=highq",
      dark: false,
    },
    {
      id: 2,
      title: "Glam up for Lollapalooza with a star makeup artist",
      location: "Berlin, Germany",
      price: "From ₹20,236 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6157437/original/7acdcf7a-494c-46a9-aaa9-d8cb30cd11b2.jpeg?im_w=720",
      dark: false,
    },
    {
      id: 3,
      title: "Lunch with fashion icon Lenny Niemeyer in her home",
      location: "Rio de Janeiro, Brazil",
      price: "From ₹8,962 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6201447/original/6b80385e-18e3-4889-b0e8-75784bfbc1d5.jpeg?im_w=720",
      dark: false,
    },
    {
      id: 4,
      title: "Create seasonal Ikebana with Watarai Toru",
      location: "Kamakura, Japan",
      price: "From ₹8,608 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6259920/original/ed0abd96-d2e6-4bd1-b549-08dae16eb858.jpeg?im_w=720",
      dark: false,
    },
    {
      id: 5,
      title: "Cycle a Tour de France route with Philippe Gilbert",
      location: "Pontarlier, France",
      price: "From ₹17,706 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6235333/original/85aa0587-af99-4231-9df7-ae5a72b3bdd2.jpeg?im_w=720",
      dark: false,
    },
    {
      id: 6,
      title: "Learn how to mix with DJ Lady D at Lollapalooza",
      location: "Chicago, United States",
      price: "From ₹19,283 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6280438/original/6e1c0c43-17a7-43e9-9128-12fcfcbbdaf8.jpeg?im_w=720",
      dark: false,
    },
    {
      id: 7,
      title: "Bike Alpine trails with Olympian Arianno Fontana",
      location: "Mantello, Italy",
      price: "From ₹2,631 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6158527/original/d26828d6-8e1e-4ebb-81d0-2db1066617bb.jpeg?im_w=720",
      dark: false,
    },
    {
      id: 8,
      title: "Curate Your Lollapalooza fit with Ann-Marie Hoang",
      location: "Chicago, United States",
      price: "From ₹19,283 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6280380/original/ba501065-8c21-4d2f-bda0-e7f19464396f.jpeg?im_w=960",
      dark: false,
    },
    {
      id: 9,
      title: "Go behind the scenes at 032c's workshop",
      location: "Berlin, Germany",
      price: "From ₹10,118 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6171972/original/fd2d4fee-2baa-465b-b9f5-cedbd28a3353.jpeg?im_w=480",
      dark: false,
    },
    {
      id: 10,
      title: "Shhot a Lollapalooza act with a music photographer",
      location: "Berlin, Germany",
      price: "From ₹20,236 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6146329/original/ac380252-0bb5-419f-8b11-a02b6bdad1bd.jpeg?im_w=720",
      dark: false,
    },
    {
      id: 11,
      title: "Dine with Dalad Kamnhu in design-forward home",
      location: "Berlin, Germany",
      price: "From ₹10,118 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6255922/original/084ebbda-ca4c-4ecc-b598-133555811236.jpeg?im_w=480",
      dark: false,
    },
    // ... (keep your existing originals data)
  ];

  const popularExperiences = [
    {
      id: 1,
      title: "Discover coastal paradise in Goa",
      price: "From ₹1,500 / guest",
      rating: "★ 4.94",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-2842208/original/b33c0c69-cb8a-42a3-8708-36d34c64f15b.jpeg?im_w=720",
      liked: false,
    },
    {
      id: 2,
      title: "Uncover Fontainhas' heritage",
      price: "From ₹1,100 / guest",
      rating: "★ 4.9",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-366069/original/2bc8f8db-8d57-4b5d-854a-655f7762a09f.jpeg?im_w=720",
      badge: "Popular",
      liked: true,
    },
    {
      id: 3,
      title: "Embark on a heritage walk around Old Goa",
      price: "From ₹1,100 / guest",
      rating: "★ 4.92",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-286896/original/e46220d9-3649-43d9-9cbd-40e2e009c39c.jpeg?im_w=720",
      badge: "Popular",
      liked: true,
    },
    {
      id: 4,
      title: "Get Goen eating in Panjim with a local foodie",
      price: "From ₹3,300 / guest",
      rating: "★ 4.95",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-2471473/original/bb7f4cf1-4f19-4ea6-aff1-75d3918f017d.jpeg?im_w=720",
      liked: false,
    },
    {
      id: 5,
      title: "Panjai City Walking Tour",
      price: "From ₹2,000 / guest",
      rating: "★ 4.95",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-247998/original/a56e6ca8-4780-406e-81f0-983639e88f7b.jpeg?im_w=720",
      liked: false,
    },
    {
      id: 6,
      title: "Explore Old Goa's heritage",
      price: "From ₹2,000 / group",
      rating: "★ 5.0",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3983624/original/52fe61c5-a734-4b50-b668-e3cb5b2b4590.jpeg?im_w=720",
      liked: true,
    },
    {
      id: 7,
      title: "Explore Fontainhas heritage",
      price: "From ₹1,000 / guest",
      rating: "★ 5.0",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3978581/original/2b319755-8fe9-4788-a372-98457cfe2bd1.jpeg?im_w=720",
      liked: false,
    },
    {
      id: 8,
      title: "Connect with Divar island's history",
      price: "From ₹1,650 / guest",
      rating: "★ 4.79",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-389380/original/4a667853-4510-4598-86e2-7e0b23aed490.jpeg?im_w=720",
      liked: false,
    },
  ];

  const udaipur = [
    {
      id: 1,
      title: "Learn traditional Udaipur painting",
      price: "From ₹2,000 / guest",
      rating: "",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5434076/original/699806ce-977d-47e3-9d56-497bde1095a9.jpeg?im_w=720",
    },
    {
      id: 2,
      title: "Ride Udaipur's lake and countryside with a guide",
      price: "From ₹2,000 / guest",
      rating: "★ 4.94",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-962409/original/a4eff33f-56d7-4782-ad9c-ae9bc138582f.jpeg?im_w=720",
    },
    {
      id: 3,
      title: "Udaipur Highlights Sightseeing Tour",
      price: "From ₹1,650 / guest",
      rating: "★ 5.00",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3715261/original/4b64a65f-6f56-4c52-9ca7-2dd5eefa441e.jpeg?im_w=720",
    },
    {
      id: 4,
      title: "Explore Udaipur's Forests, Wildlife Watching Walks",
      price: "From ₹3,499 / guest",
      rating: "",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4720680/original/b18b740c-a7c8-4293-aa3a-b3540dcce56a.jpeg?im_w=720",
    },
    {
      id: 5,
      title: "Explore Udaipur's Food Culture",
      price: "From ₹1,800 / guest",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-1139139/original/886adcdc-6990-4e55-9a9e-b9b32dea4065.jpeg?im_w=720",
    },
    {
      id: 6,
      title: "Award-Winning Hari's Enjoy Udaipur Cooking Class",
      price: "From ₹2,199 / guest",
      rating: "★ 5.0",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-373736/original/54534743-ba75-4f83-9983-503daebdf26e.jpeg?im_w=720",
    },
    {
      id: 7,
      title: "Authentic Experience od old city & Local life",
      price: "From ₹850 / guest",
      rating: "★ 5.0",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3662457/original/203d3b92-7b37-4ce3-9f41-cec472ff49c0.jpeg?im_w=720",
    },
    {
      id: 8,
      title: "Explore Udaipur's City Palace and old town",
      price: "From ₹10,000 / guest",
      rating: "★ 4.95",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-2780599/original/dc40c9ff-fad5-4bad-9a2c-41dc62c6c794.jpeg?im_w=720",
    },
    // ... (your existing udaipur data)
  ];

  const mumbai = [
    {
      id: 1,
      title: "Explore Dharavi",
      price: "From ₹850 / guest",
      rating: "★ 4.96",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4690821/original/5a369bb7-3c96-4d44-9655-6be425f8718f.jpeg?im_w=720",
    },
    {
      id: 2,
      title: "Eplore iconic Sights of Mumbai in Four Hours",
      price: "From ₹3,500 / guest",
      rating: "★ 4.99",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4534431/original/36a6680f-caad-4145-b788-50cc9aab0912.jpeg?im_w=720",
    },
    {
      id: 3,
      title: "Experience the offbeat Mumbai",
      price: "From ₹2,699 / guest",
      rating: "★ 4.98",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-587325/original/68f6d549-7a44-459b-bad1-785e767fe518.jpeg?im_w=720",
    },
    {
      id: 4,
      title: "Elephanta caves & A secret 1920's Bar Experience",
      price: "From ₹7,999 / guest",
      rating: "★ 4.99",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3895790/original/ecceed71-58ea-4eb4-a066-5dbec97d95e3.jpeg?im_w=720",
    },
    {
      id: 5,
      title: "Mumbai morning markets: Flowers, fish and more",
      price: "From ₹2,260 / guest",
      rating: "★ 5.0",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-5363945/original/4f707bcc-99e1-4082-9703-5a343c6065bd.jpeg?im_w=720",
    },
    {
      id: 6,
      title: "Taste Mumbai's Authentic Flavors",
      price: "From ₹5,999 / guest",
      rating: "★ 4.97",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3901025/original/e60d8519-7dbb-43b7-9dab-cabd695b1ae5.jpeg?im_w=320",
    },
    {
      id: 7,
      title: "Explore Daravi's hidden gems",
      price: "From ₹1,000 / guest",
      rating: "★ 4.95",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4271321/original/c42e333c-976d-4f9b-ba58-f66d999e25eb.jpeg?im_w=960",
    },
    // ... (your existing mumbai data)
  ];

  const dubai = [
    {
      id: 1,
      title: "Experience Luxury desert safari in Dubai",
      price: "From ₹3,477 / guest",
      rating: "★ 4.97",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3071346/original/a4ae066e-e779-4a25-8d6b-9720aa307b84.png?im_w=720",
    },
    {
      id: 2,
      title: "Premium Sunset Desert Tour, Sandboard & Bpq Dinner",
      price: "From ₹2,567 / guest",
      rating: "★ 4.89",
      image:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3243547-active_media/original/f40f7929-f6e0-4b35-9ae6-57e6252215a1.jpg?im_w=320",
    },
    {
      id: 3,
      title: "Explore the desert by quad, Sandboard & camel",
      price: "From ₹4,084 / guest",
      rating: "★ 4.92",
      image:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3873559-active_media/original/d0e7e671-956a-45ff-aefb-b817b9f3bf0c.jpg?im_w=320",
    },
    {
      id: 4,
      title: "Explore the desert by quad, Sandboard & camel",
      price: "From ₹4,084 / guest",
      rating: "★ 4.92",
      image:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3246000-active_media/original/b018abd2-1371-42d5-a029-3b6f42fdd240.jpg?im_w=320",
    },
    {
      id: 5,
      title: "Explore the desert by quad, Sandboard & camel",
      price: "From ₹4,084 / guest",
      rating: "★ 4.92",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3300945/original/9fb7ec89-11d7-4226-a3ca-ee30e711426b.jpeg?im_w=960",
    },
    {
      id: 6,
      title: "Explore the desert by quad, Sandboard & camel",
      price: "From ₹4,084 / guest",
      rating: "★ 4.92",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3253064/original/edebe2a8-965f-4677-8c7f-d0b5b095932d.jpeg?im_w=320",
    },
    {
      id: 7,
      title: "Explore the desert by quad, Sandboard & camel",
      price: "From ₹4,084 / guest",
      rating: "★ 4.92",
      image:
        "https://a0.muscache.com/im/pictures/Mt/MtTemplate-3873557/original/c8fbb6ec-3e7a-44b2-9e01-fa42624e88cc.jpeg?im_w=320",
    },
    // ... (your existing dubai data)
  ];

  return (
    <div
      className="bg-white text-black"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Airbnb Originals */}
      <section className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-3">Airbnb Originals ›</h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
            {originals.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedExperience(item)}
                className={`cursor-pointer relative min-w-[180px] max-w-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-sm ${
                  item.dark ? "bg-[#4a5a8a]" : "bg-white"
                }`}
              >
                <img
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                  src={item.image}
                />
                <div
                  className={`absolute top-2 left-2 ${
                    item.dark ? "bg-[#2f3a5a] text-white" : "bg-white"
                  } text-[9px] font-semibold rounded-full px-2 py-[2px]`}
                >
                  Original
                </div>
                <button
                  className={`absolute top-2 right-2 ${
                    item.dark
                      ? "bg-[#2f3a5a] text-white hover:text-gray-300"
                      : "bg-white text-gray-600 hover:text-black"
                  } rounded-full p-1`}
                >
                  <i className="fas fa-upload fa-xs"></i>
                </button>
                <div
                  className={`p-2 text-[10px] leading-tight ${
                    item.dark ? "text-white" : ""
                  }`}
                >
                  <h3 className="font-semibold mb-0.5">{item.title}</h3>
                  <p className={item.dark ? "" : "text-gray-600"}>
                    {item.location}
                  </p>
                  <p
                    className={
                      item.dark ? "opacity-80 text-[9px]" : "text-gray-400"
                    }
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repeat for Popular, Udaipur, Mumbai, Dubai */}
      {[
        ["Experiences in South Goa ›", popularExperiences],
        ["Experiences in Udaipur ›", udaipur],
        ["Experiences in Mumbai ›", mumbai],
        ["Experiences in Dubai ›", dubai],
      ].map(([title, data], index) => (
        <section
          key={index}
          className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8"
        >
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
            {data.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setSelectedExperience(exp)}
                className="cursor-pointer relative min-w-[180px] max-w-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-sm"
              >
                <img
                  alt={exp.title}
                  className="w-full h-[180px] object-cover"
                  src={exp.image}
                />
                {exp.badge && (
                  <div className="absolute top-2 left-2 bg-white text-[9px] font-semibold rounded-full px-2 py-[2px]">
                    {exp.badge}
                  </div>
                )}
                <button className="absolute top-2 right-2 text-gray-600 hover:text-black">
                  <i
                    className={`${exp.liked ? "fas" : "far"} fa-heart fa-xs`}
                  ></i>
                </button>
                <div className="p-2 text-[10px] leading-tight">
                  <h3 className="font-semibold mb-0.5">{exp.title}</h3>
                  <p className="text-gray-600">{exp.price}</p>
                  <p className="text-gray-400 text-[9px]">{exp.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <img
              src={selectedExperience.image}
              alt={selectedExperience.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">
              {selectedExperience.title}
            </h3>
            {selectedExperience.location && (
              <p className="text-gray-600 mb-1">
                {selectedExperience.location}
              </p>
            )}
            <p className="text-gray-800 mb-1">{selectedExperience.price}</p>
            {selectedExperience.rating && (
              <p className="text-gray-400 text-sm">
                {selectedExperience.rating}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto mt-10 mb-14 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl  font-semibold mb-6">
          Inspiration for future getaways
        </h2>
        <div className="flex space-x-8 border-b border-gray-300 mb-6">
          <button
            className={`pb-2 font-medium ${
              activeTab === "Unique stays"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Unique stays")}
          >
            Unique stays
          </button>
          <button
            className={`pb-2 font-medium ${
              activeTab === "Categories"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Categories")}
          >
            Categories
          </button>
        </div>

        {activeTab === "Unique stays" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4">
            {uniqueStays.map((item, idx) => (
              <div key={idx}>
                <p className="font-semibold hover:underline cursor-pointer">
                  {item.title}
                </p>
                {item.location && (
                  <p className="text-gray-500 text-sm">{item.location}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "Categories" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-4">
            {categories.map((category, idx) => (
              <p
                key={idx}
                className="font-medium hover:underline cursor-pointer"
              >
                {category}
              </p>
            ))}
          </div>
        )}
      </div>

      <footer className="bg-white border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hosting</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Airbnb your home</li>
              <li>Airbnb your experience</li>
              <li>Airbnb your service</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Join a free Hosting class</li>
              <li>Find a co-host</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Airbnb</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>2025 Summer Release</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-600">
            <div>
              © 2025 Airbnb, Inc. ·<span className="mx-1">Privacy</span> ·
              <span className="mx-1">Terms</span> ·
              <span className="mx-1">Sitemap</span> ·
              <span className="mx-1">Company details</span>
            </div>
            <div className="flex space-x-4 items-center">
              <span>🌐 English (IN)</span>
              <span>₹ INR</span>
              <span>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-600 hover:text-black inline"
                >
                  <svg
                    className="w-5 h-5 inline"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 10-11.6 9.87v-7h-2v-2.87h2V9.5c0-2 1.2-3.13 3-3.13.87 0 1.8.15 1.8.15v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.5l-.4 2.87H14v7A10 10 0 0022 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="text-gray-600 hover:text-black inline ml-2"
                >
                  <svg
                    className="w-5 h-5 inline"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.8 3h-3l-4.5 6.3L8.6 3H3l7.5 9.9L3 21h3l5.4-7.5 4.8 7.5h5l-8-10.5L20.8 3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-600 hover:text-black inline ml-2"
                >
                  <svg
                    className="w-5 h-5 inline"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.5-.2 1.2-.4 2.4-.5z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Experience;
