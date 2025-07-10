import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import PropertyDetails from "../Pages/PropertyDetails";

const PopularHomes = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      name: 'Popular homes in South Goa',
      services: [
        {
          id: 1,
          location: 'Flat in Adsuli',
          price: '₹3,652 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2NTc4NTY3NzQ0MTE2Njk1MA%3D%3D/original/d66dfc2f-5216-455b-a0dc-439e2ef321a3.png?im_w=960'
        },
        {
          id: 2,
          location: 'apartment in Benaulim',
          price: '₹5,800 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4MTU5NDIzODgyMTcxNTk3NA%3D%3D/original/9ce606cd-f184-44ac-9fa3-e899c4e0bdd3.jpeg?im_w=960'
        },
        {
          id: 3,
          location: 'villa in Varca',
          price: '₹10,954 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1404733101754136415/original/b89c04df-6c66-4bc6-8fb1-8fc3fbfe366f.jpeg?im_w=1200'
        },
        {
          id: 4,
          location: 'apartment in Varca',
          price: '₹6,389 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM0MTAxMjA2NjgxNTM5MDAyMg%3D%3D/original/a6e88fad-cb3f-4e53-932c-1593d2d50059.jpeg?im_w=1200'
        },
        {
          id: 5,
          location: 'home in Candolim',
          price: '₹5,879 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMwODYyNDgyNjE1OTk3MzU0NA%3D%3D/original/bff9aa1e-982e-4ee4-af21-dcf8fb290963.jpeg?im_w=1200'
        },
        {
          id: 6,
          location: 'apartment in Chauri',
          price: '₹5,398 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1304717821219510410/original/e551b30c-0446-42f8-b538-cc48899e5f0e.jpeg?im_w=1200'
        },
        {
          id: 7,
          location: 'apartment in Varca',
          price: '₹4,106 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/miso/Hosting-54010816/original/6c250582-b5dc-431c-929e-9f3c544f7d9a.jpeg?im_w=1200'
        }
      ]
    },
    {
      name: 'Available next month in Pune',
      services: [
        {
          id: 8,
          location: 'rental unit in Gahunje',
          price: '₹6,149 for 2  Nights',
          image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1166641853711758251/original/e989d39a-6f8f-41c9-ba17-087f5f05a93c.jpeg?im_w=1200'
        },
        {
          id: 9,
          location: 'rental unit in Pune',
          price: '₹4,109 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1391559887852240251/original/8fe059db-4e0d-4e46-9c99-f01b88b3bf7d.jpeg?im_w=1200'
        },
        {
          id: 10,
          location: 'Paris, France',
          price: '₹30,000 / event',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ0MzIzODcwODEzNDE5NDk3OA==/original/a2472c73-e967-4c2a-b863-1532f11a35f2.jpeg?im_w=1200'
        },
        {
          id: 11,
          location: ' guest suite in Pune',
          price: '₹5, 136 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/ed6b7db8-e456-4b96-94f4-4c828dbb8bbf.jpg?im_w=1200'
        },
        {
          id: 12,
          location: 'apartment in Pune,',
          price: '₹12,131 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQzMzQ5NzAwODg3ODcyODkyOQ==/original/19ff846e-6fd4-4443-bace-6203da5bf936.jpeg?im_w=1200'
        },
        {
          id: 13,
          location: 'Room in Pune',
          price: '₹2,694 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/miso/Hosting-15531333/original/324ba7ce-54b4-4e24-a191-094719c8d142.jpeg?im_w=1200'
        },
        {
          id: 14,
          location: 'Entire rental unit in Pune',
          price: '₹5,022 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1348451069943031347/original/3a50500a-2ad9-4ac7-99f8-929b09549ca1.jpeg?im_w=1200'
        }
      ]
    },
    {
      name: 'Stay in Udaypur',
      services: [
        {
          id: 15,
          location: 'Entire home in Udaipur',
          price: '₹4,661 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Mjg0Nzg2MDA%3D/original/9deb7904-406b-4902-bdbd-b998b4081ead.jpeg?im_w=1200'
        },
        {
          id: 16,
          location: 'Entire home in Udaipur',
          price: '₹5,034 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-30790493/original/c2a62f25-cb4c-47c2-8c68-8323d2530cf1.jpeg?im_w=1200'
        },
        {
          id: 17,
          location: 'Farm stay in Udaipur',
          price: '₹13,723 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1035320447705129532/original/20960861-de5a-48e5-b036-17bcc3b00612.jpeg?im_w=1200'
        },
        {
          id: 18,
          location: 'Entire home in Udaipur',
          price: '₹4,211 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1394683522415376327/original/c5e7e992-19b0-4840-885e-8cf50cdbc616.jpeg?im_w=1200'
        },
        {
          id: 19,
          location: 'Entire rental unit in Udaipur',
          price: 'From ₹6,400 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4NzM5MDMwNTYwNzk5ODA5Mw%3D%3D/original/102081f8-543d-4d56-9ac1-da00dac01b4c.jpeg?im_w=1200'
        },
        {
          id: 20,
          location: 'Entire bungalow in Udaipur',
          price: '₹4,565 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1321773603158934601/original/9497fb19-bc9b-4f90-a30a-3706b70f3717.jpeg?im_w=1200'
        },
        {
          id: 21,
          location: 'Entire villa in Naya Khera',
          price: 'From ₹13,695 for 2 Nights',
          image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1404707436360412382/original/7661403e-dcd7-456c-9ce7-65e8ba3bfa26.jpeg?im_w=1200'
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-inter">
      <main className="max-w-7xl mx-auto py-8 px-4">
        {serviceCategories.map((category) => (
          <section key={category.name} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.name}</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/property/${service.id}`, { replace: true })}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PopularHomes;
