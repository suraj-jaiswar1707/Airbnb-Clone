import React from "react";
import { useParams } from "react-router-dom";

const services = [
  {
    id: "1",
    title: "Stylish vintage car photo shoot Tour",
    location: "Rome, Italy",
    price: "From ₹5,565 / guest",
    description: "Ride through Rome in a vintage Fiat 500, capturing authentic, fun moments.",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/4848a93b-274a-446e-9376-0143c3e6ca9f.jpeg",
    options: [
      {
        title: "Single location photo shoot",
        price: "₹5,565 / guest · 30 mins",
        info: "Photoshoot at Colosseum, 50 unedited + 10 edited photos."
      },
      {
        title: "Ride with the car and get photos",
        price: "₹8,904 / guest · 1 hr 30 mins",
        info: "Photos at 3 locations, includes 80-100 JPEGs."
      },
      {
        title: "Deluxe tour",
        price: "₹17,099 / guest · 3 hrs",
        info: "Includes 4+ places, 100–150 JPEGs + pickup."
      }
    ]
  },
  {
    id: "2",
    title: "Photo session at the Metropolitan Museum of Art",
    location: "New York, United States",
    price: "From ₹25,710 / guest",
    description: "A one hour photo session at the Met. Includes 45+ edited photos.",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-4079305/original/dd46bb9e-8abc-4402-ac70-87cd7da35c5a.jpeg",
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  // You can continue adding more services using the same format
  {
    id: "3",
    title: "Aerial and ground photography by Daniel",
    location: "Fort Lauderdale, United States",
    price: "From ₹16,111 / guest",
    description: "A one hour photo session at the Met. Includes 45+ edited photos.",
    image: "https://a0.muscache.com/im/pictures/Mt/MtTemplate-6079700/original/36c49f3e-820b-4e02-8e3e-d5aa7f0ad76a.jpeg",
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "4",
    title: 'Neapolitan souvenirs of Giovanni',
    location: 'Naples, Italy',
    price: 'From ₹11,000 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6071855/original/cb3ca8b5-fd67-47f8-936f-4cf389d1312b.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "5",
    title: 'Authentic, Inclusive photography by Ashley',
    location: 'Saint Paul, United States',
    price: 'From ₹1,291 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089040/original/5c28966a-17a0-4295-ac40-5b679b82e42f.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "6",
    title: 'Downtown urban portraits by J C',
    location: 'Mexico City, Mexico',
    price: 'From ₹5,907 / group',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6085467/original/e804e173-7b74-4a7b-aa3e-1da634b8e4b4.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "7",
    title: 'Couples photography by Jeff',
    location: 'Greater London, United Kingdom',
    price: 'From ₹11,599 / group',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6080975/original/ff87cd23-294b-40d8-a791-5f52b3a25768.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "8",
    title: 'Private Chef Experience in Tuscany',
    location: 'Florence, Italy',
    price: 'From ₹25,000 / group',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6068057/original/4bc4102d-3381-40b8-bf43-be3142c040ee.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "9",
    title: 'Sushi Making Class with Master Chef',
    location: 'Tokyo, Japan',
    price: 'From ₹15,000 / person',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-5982668/original/7e6bdc5f-27c2-4fac-b323-2943a0402ace.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "10",
    title: 'Gourmet Dining at Home with Chef Anna',
    location: 'Paris, France',
    price: 'From ₹30,000 / event',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6096870/original/5a8a7312-5a34-4560-b05c-2f04becf53d4.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "11",
    title: 'Vegan Cooking Workshop in Berlin',
    location: 'Berlin, Germany',
    price: 'From ₹8,000 / person',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6044248/original/c0d99254-28be-458e-80b1-1e37d9b8121a.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "12",
    title: 'Catalan cuisine by Cristina',
    location: 'Chef in Girona',
    price: 'From ₹4,010',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6093232/original/e4b6f0c2-8816-4c16-80ff-9649a67bc842.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "13",
    title: 'Wholesome flavors by Fernanda',
    location: 'I craft food inspired by my Mexican heart and funky - mindful soul.',
    price: 'From ₹4,544 per guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6060430/original/5e3c63ca-ece4-4be8-bf24-ee137e2b2593.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "14",
    title: 'Cali Mediterranean by Liza',
    location: 'Chef in Malibu',
    price: 'From ₹2,137 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-5982667/original/867db190-670b-43df-92aa-7ff1725c7880.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "15",
    title: 'Total Body Training by Peter',
    location: 'Pasadena, United States',
    price: 'From ₹4,274 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6056059/original/2adb850a-d47f-4d1b-948f-b0f26845c296.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "16",
    title: 'Personal Training & Group Fitness',
    location: 'Westmount, Canada',
    price: 'From ₹7,496 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073353/original/4b5b77b0-540a-4f76-9522-f83a5999e558.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "17",
    title: 'Yoga and embodiment by Julia',
    location: '',
    price: 'From ₹2,137 / guest · ₹17,095 minimum',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6099352/original/4739de7e-1648-41f8-8fba-5c68967ca7a9.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "18",
    title: 'Restorative fitness by Taylor',
    location: 'Los Angeles, United States',
    price: 'From ₹7,266 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6058137/original/745cf093-7f9b-4e22-96b6-b036418fe04d.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "19",
    title: 'Sun-sweat by Nishant',
    location: 'San Diego, United States',
    price: 'From ₹8,548 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6081161/original/b82efa82-55e2-430f-830f-542fbe98fe6e.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "20",
    title: 'High-energy workouts by Vicky',
    location: 'Redondo Beach, United States',
    price: 'From ₹13,676 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6089722/original/a9b1fbc7-6912-459f-85bb-ba9749bad9cb.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "21",
    title: 'Ritual yoga by Ana',
    location: 'Mexico City, Mexico',
    price: 'From ₹2,045 / guest · ₹4,090 minimum',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-3246613/original/568717ca-33c8-4fec-9e67-5c1b479abca1.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "22",
    title: 'Recovery and relaxation by Deisy',
    location: 'Los Angeles, United States',
    price: 'From ₹4,274 / guest',
    image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/5c0c1378-541d-4316-a64d-913438d97c11.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "23",
    title: 'Got Your Back London Massage Therapy',
    location: 'Greater London, United Kingdom',
    price: 'From ₹11,140 / guest · ★ 5.0',
    image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/270ea136-de97-446c-99b7-005f9ed3d63d.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "24",
    title: 'Relaxation and Therapeutic Massages by Remi',
    location: 'Santa Monica, United States',
    price: 'From ₹17,095 / guest · ★ 5.0',
    image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/6ba42ce9-01bb-44ad-b5f0-026e2bbe4547.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "25",
    title: 'Aromatherapeutic massage by Jenna',
    location: 'Massage therapist in Harwich',
    price: 'From ₹15,386 / guest · ★4.0',
    image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/5efc6b67-937e-46c4-82f8-98bb4d138115.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "26",
    title: 'Aromatherapy Massage by Vanessa',
    location: 'Massage therapist in Greater London',
    price: 'From ₹12,899 / guest.',
    image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/765f80bc-3ae0-48fb-b08f-cf98f1186bdf.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "27",
    title: 'Relax and Renew by Miguel',
    location: ' therapist in Madrid',
    price: 'From ₹5,012 / guest',
    image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/336e700c-42db-498e-a15e-4dbdee516142.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "28",
    title: 'Ayurvedic Therapy with Oils by Tania',
    location: ' therapist in Marratxí',
    price: 'From ₹15,036 / guest',
    image: 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Services-123/original/3f826a3d-a857-495f-b5e4-d3030897370d.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "29",
    title: 'Parisian makeup artist by Lara',
    location: '',
    price: 'From ₹8,019 / guest ★ 5.0',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6058149/original/3d13b5b0-96fc-408d-be38-84f8e513cad1.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "30",
    title: 'Mobile beauty in Las Vegas by Kailey',
    location: 'Las Vegas, United States',
    price: 'From ₹11,027 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6078439/original/99c13ea2-5264-4706-aba9-a12e90942de8.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "31",
    title: 'Vintage-inspired hair and makeup by Ria',
    location: 'Orlando, United States',
    price: 'From ₹10,257 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6069696/original/6211244c-8944-467d-ad55-a6c87f5be1fc.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "32",
    title: 'Beauty by Estelle',
    location: '',
    price: 'From ₹12,822 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6068889/original/762d6148-1f08-428f-a2e0-f611593bb045.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "33",
    title: 'Makeup application by Svetlana',
    location: 'Miami, United States',
    price: 'From ₹55,560 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6068149/original/eebf2c84-8e6b-4a30-98eb-85ac1413f09b.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "34",
    title: 'Glam Makeup and Hair by Aljane',
    location: 'Los Angeles, United States',
    price: 'From ₹8,548 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6073270/original/4e60c830-31b9-474b-89b3-4584fab9a071.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
  {
    id: "35",
    title: 'Makeup for any occasion by Leslie',
    location: '',
    price: 'From ₹12,822 / guest',
    image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-6056079/original/a217ead2-1c18-4ee0-8e87-6b891dfa1b24.jpeg',
    options: [
      {
        title: "1 Hour Photo Session at the Met",
        price: "₹25,710 / guest · 1 hr",
        info: "Includes general admission + 45 edited photos. Delivered in 2–3 days."
      }
    ]
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className="p-8 text-center text-xl">Service not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Image + Host */}
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="rounded-2xl w-full h-[400px] object-cover"
        />
        
      </div>

      {/* Right: Content */}
      <div className="pt-8 lg:pt-0 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{service.subtitle}</p>

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="mr-2">🌐</span> Automatically translated
        </div>

        <p className="text-gray-700 mb-6">{service.description}</p>

        <div className="bg-gray-100 rounded-2xl p-6 max-w-sm">
          <p className="text-xl font-semibold text-gray-800 mb-1">
            From {service.price} <span className="text-sm text-gray-500">/ guest</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Minimum {service.minimumBooking} to book
          </p>
          <p className="text-sm text-pink-600 font-medium mb-4">
            Free cancellation
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full text-lg w-full">
            Reserve
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default ServiceDetail;
