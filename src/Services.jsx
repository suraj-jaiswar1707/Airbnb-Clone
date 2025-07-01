// File: src/pages/Services.jsx
import React from 'react';

const servicesData = [
  {
    category: "Photography",
    services: [
      {
        title: "Stylish vintage car photo shoot Tour",
        location: "Rome, Italy",
        price: "From ₹5,513 / guest",
        rating: "4.95",
        img: "https://source.unsplash.com/400x300/?vintage-car,photoshoot",
      },
      {
        title: "Photo session at the Metropolitan Museum of Art",
        location: "New York, United States",
        price: "From ₹25,643 / guest",
        rating: "5.0",
        img: "https://source.unsplash.com/400x300/?museum,photography",
      }
    ]
  },
  {
    category: "Chefs",
    services: [
      {
        title: "Gourmet dinner by Chef Mario",
        location: "Rome, Italy",
        price: "From ₹8,500 / guest",
        rating: "4.8",
        img: "https://source.unsplash.com/400x300/?chef,food",
      }
    ]
  },
  {
    category: "Training",
    services: [
      {
        title: "Total Body Training by Peter",
        location: "Pasadena, United States",
        price: "From ₹4,274 / guest",
        rating: "5.0",
        img: "https://source.unsplash.com/400x300/?gym,training",
        popular: true
      }
    ]
  },
  {
    category: "Massage",
    services: [
      {
        title: "Recovery and relaxation by Deisy",
        location: "Los Angeles, United States",
        price: "From ₹4,274 / guest",
        rating: "4.9",
        img: "https://source.unsplash.com/400x300/?massage,relax",
      }
    ]
  },
  {
    category: "Make-up",
    services: [
      {
        title: "Parisian makeup artist by Lara",
        location: "Paris, France",
        price: "From ₹8,019 / guest",
        rating: "4.9",
        popular: true,
        img: "https://source.unsplash.com/400x300/?makeup,beauty"
      }
    ]
  }
];

const ServiceCard = ({ service }) => (
  <div className="w-64 shrink-0 rounded-2xl shadow-md bg-white overflow-hidden m-2">
    <img src={service.img} alt={service.title} className="w-full h-40 object-cover" />
    <div className="p-3">
      <div className="flex justify-between">
        <h3 className="text-sm font-semibold">{service.title}</h3>
        {service.popular && <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">Popular</span>}
      </div>
      <p className="text-xs text-gray-500">{service.location}</p>
      <p className="text-sm font-medium mt-1">{service.price}</p>
      <p className="text-sm text-yellow-500">★ {service.rating}</p>
    </div>
  </div>
);

const ServiceCategory = ({ category, services }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold px-4">{category}</h2>
    <div className="flex overflow-x-auto px-4 py-2">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
);

const SearchBar = () => (
  <div className="flex gap-4 bg-white shadow p-4 rounded-xl justify-center items-center mb-6">
    <input type="text" placeholder="Search destinations" className="p-2 rounded border w-64" />
    <input type="date" className="p-2 rounded border" />
    <input type="text" placeholder="Add service" className="p-2 rounded border w-40" />
    <button className="bg-red-500 text-white px-4 py-2 rounded">Search</button>
  </div>
);

const Services = () => (
  <div className="bg-gray-100 min-h-screen py-6">
    <SearchBar />
    {servicesData.map((section, index) => (
      <ServiceCategory key={index} category={section.category} services={section.services} />
    ))}
  </div>
);

export default Services;
