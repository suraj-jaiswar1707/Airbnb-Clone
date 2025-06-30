import React from "react";

const Experience = () => {
  // Airbnb Originals Data
  const originals = [
    {
      id: 1,
      title: "Join the Tropicoqueta vibes with KAROL G",
      location: "Medellín, Colombia",
      price: "Closes 30 June",
      image:
        "https://storage.googleapis.com/a1aa/image/920f8783-0041-4412-a7ad-aab5c5bd99c5.jpg",
      dark: false,
    },
    {
      id: 2,
      title: "Glam up for Lollapalooza with a star makeup artist",
      location: "Berlin, Germany",
      price: "From €20,048 / guest",
      image:
        "https://storage.googleapis.com/a1aa/image/4dce501c-6f7d-4778-e847-1ef0b3b30f74.jpg",
      dark: false,
    },
    {
      id: 3,
      title: "Lunch with fashion icon Lenny Niemeyer in her home",
      location: "Rio de Janeiro, Brazil",
      price: "From €3,905 / guest",
      image:
        "https://storage.googleapis.com/a1aa/image/71e789ba-b7b0-4f84-2f87-dc9d8cd4fe61.jpg",
      dark: false,
    },
    {
      id: 4,
      title: "Create seasonal Ikebana with Watarai Toru",
      location: "Kamakura, Japan",
      price: "From €3,517 / guest",
      image:
        "https://storage.googleapis.com/a1aa/image/3b9a674d-f7f6-4b68-19c2-b44268e30d39.jpg",
      dark: false,
    },
    {
      id: 5,
      title: "Cycle a Tour de France route with Philippe Gilbert",
      location: "Pontarlier, France",
      price: "From €1,542 / guest",
      image:
        "https://storage.googleapis.com/a1aa/image/70b6f85a-42be-4b76-ae71-a6b6e3da1576.jpg",
      dark: false,
    },
    {
      id: 6,
      title: "Learn how to mix with DJ Lady D at Lollapalooza",
      location: "Chicago, United States",
      price: "From €19,232 / guest",
      image:
        "https://storage.googleapis.com/a1aa/image/a4a34bee-c8ff-43c9-faed-593b425c4cbd.jpg",
      dark: false,
    },
    {
      id: 7,
      title: "Bike Alpine trails with Olympian Arianno Fontana",
      location: "Mantello, Italy",
      price: "From €2,606 / guest",
      image:
        "https://storage.googleapis.com/a1aa/image/af45312a-6176-49e3-177a-60deccd7263c.jpg",
      dark: false,
    },
  ];

  // Popular Experiences Data
  const popularExperiences = [
    {
      id: 1,
      title: "Discover coastal paradise in Goa",
      price: "From ₹1,500 / guest",
      rating: "★ 4.94",
      image:
        "https://storage.googleapis.com/a1aa/image/76c79755-6fdf-493d-2eea-c5bf3d6a5b78.jpg",
      liked: false,
    },
    {
      id: 2,
      title: "Uncover Fontainhas' heritage",
      price: "From ₹1,100 / guest",
      rating: "★ 4.9",
      image:
        "https://storage.googleapis.com/a1aa/image/21cd51af-79b9-4e8d-8775-12075c67a8ae.jpg",
      badge: "Popular",
      liked: true,
    },
    {
      id: 3,
      title: "Embark on a heritage walk around Old Goa",
      price: "From ₹1,100 / guest",
      rating: "★ 4.92",
      image:
        "https://storage.googleapis.com/a1aa/image/55b2e568-6527-4d2a-9d02-fc948d108846.jpg",
      badge: "Popular",
      liked: true,
    },
    {
      id: 4,
      title: "Get Goen eating in Panjim with a local foodie",
      price: "From ₹3,300 / guest",
      rating: "★ 4.95",
      image:
        "https://storage.googleapis.com/a1aa/image/c1606753-29d0-4190-6891-c554224cfb94.jpg",
      liked: false,
    },
    {
      id: 5,
      title: "Panjai City Walking Tour",
      price: "From ₹2,000 / guest",
      rating: "★ 4.95",
      image:
        "https://storage.googleapis.com/a1aa/image/1bd17582-7158-44f1-d7a7-2df56b3dfa75.jpg",
      liked: false,
    },
    {
      id: 6,
      title: "Explore Old Goa's heritage",
      price: "From ₹2,000 / group",
      rating: "★ 5.0",
      image:
        "https://storage.googleapis.com/a1aa/image/18b4f473-8543-45f9-7c54-9ae703d616f7.jpg",
      liked: true,
    },
    {
      id: 7,
      title: "Explore Fontainhas heritage",
      price: "From ₹1,000 / guest",
      rating: "★ 5.0",
      image:
        "https://storage.googleapis.com/a1aa/image/c1fdc6b2-a527-48c0-b1d7-38c5762397fc.jpg",
      liked: false,
    },
  ];

  return (
    <div
      className="bg-white text-black"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Airbnb Originals */}
      <section className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold mb-3">Airbnb Originals ›</h2>
        <div className="relative">
          <div
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {originals.map((item) => (
              <div
                key={item.id}
                className={`relative min-w-[180px] max-w-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-sm ${
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

      {/* Popular Experiences */}
      <section className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold mb-4">
          Popular with travellers from your area
        </h2>
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-3">
            Experiences in South Goa ›
          </h3>
          <div
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {popularExperiences.map((exp) => (
              <div
                key={exp.id}
                className="relative min-w-[180px] max-w-[180px] rounded-lg overflow-hidden border border-gray-200 shadow-sm"
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
        </div>
      </section>
    </div>
  );
};

export default Experience;
