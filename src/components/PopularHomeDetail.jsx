import React from "react";

const PopularHomeDetail = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-semibold mb-4">Modern 2BHK Hideaway in Beautiful Benaulim</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <img src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-4431689/original/4848a93b-274a-446e-9376-0143c3e6ca9f.jpeg" alt="Main" className="col-span-2 rounded-lg object-cover h-96" />
        <div className="grid grid-rows-3 gap-4">
          <img src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-6079700/original/36c49f3e-820b-4e02-8e3e-d5aa7f0ad76a.jpeg" alt="Room 1" className="rounded-lg object-cover h-full" />
          <img src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-6071855/original/cb3ca8b5-fd67-47f8-936f-4cf389d1312b.jpeg" alt="Room 2" className="rounded-lg object-cover h-full" />
          <img src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-6080975/original/ff87cd23-294b-40d8-a791-5f52b3a25768.jpeg" alt="Room 3" className="rounded-lg object-cover h-full" />
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Entire rental unit in Adsuli, India</h2>
        <p>5 guests · 2 bedrooms · 2 beds · 2 bathrooms</p>
      </section>

      <section className="mb-6 flex space-x-4">
        <div className="flex items-center space-x-2">
          <span>🌟</span>
          <span>Guest favourite</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>🏆</span>
          <span>One of the most loved homes on Airbnb, according to guests</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>⭐ 5.0</span>
          <span>24 Reviews</span>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-2">Hosted by Dubinsky</h3>
        <p>Superhost · 3 years hosting</p>
      </section>

      <section className="mb-6">
        <ul className="list-disc list-inside space-y-1">
          <li>Designed for staying cool - Beat the heat with the A/C and ceiling fan.</li>
          <li>Dive right in - This is one of the few places in the area with a pool.</li>
          <li>Free cancellation before 17 Jul - Get a full refund if you change your mind.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-2">Welcome to @casaregalgoa</h3>
        <p>
          Our chic 2BHK hideaway in tranquil Benaulim! 🌴 Perfectly blending comfort and style, it features spacious bedrooms, an open-plan living area, and a fully equipped kitchen.
          Located on the 2nd floor (no lift, but worth the climb!), it’s ideal for peaceful mornings on the balcony or exploring nearby serene beaches and local eateries.
        </p>
        <p>
          Perfect for families or small groups seeking a relaxing Goan retreat. Book now and make unforgettable memories!
        </p>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-2">What this place offers</h3>
        <ul className="grid grid-cols-3 gap-2 list-none">
          <li>Beach access – Beachfront</li>
          <li>Wifi</li>
          <li>Pool</li>
          <li>TV</li>
          <li>Kitchen</li>
          <li>Free parking on premises</li>
          <li>Pets allowed</li>
          <li>Washing machine</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-2">2 nights in Adsuli</h3>
        <p>Check-in: 7/18/2025</p>
        <p>Check-out: 7/20/2025</p>
        <p>Guests: 1 guest</p>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-2">Reviews</h3>
        <div>
          <p><strong>Chaitanya</strong>: GREAT PLACE! VERY SPACIOUS, NICE AND CLEAN. HOST IS VERY HELPFUL AND FRIENDLY. TOTALLY RECOMMENDED.</p>
          <p><strong>Hogen</strong>: We loved our stay. The place is exactly as shown in pictures. It is clean and in a safe residential locality. The host was very good and responsive to any query we had. Thanks to everyone.</p>
          <p><strong>Mark</strong>: Had a wonderful stay! The place was very clean, comfortable and well decorated. The host was responsive and helpful. Highly recommended.</p>
          <p><strong>Nigel</strong>: The location is great. The apartment is spacious. Both bedroom and living room have AC which is plus. We faced minor issues with ants and a few bugs, but the host was very responsive.</p>
          <p><strong>Phulk</strong>: The house was lovely here. The place was accurately described, clean, comfortable and thoughtfully set up for a relaxing vacation. The hosts were warm, responsive and helpful.</p>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-2">Where you'll be</h3>
        <div className="bg-gray-200 h-48 flex items-center justify-center">
          <p>Map placeholder</p>
        </div>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-2">Meet your host</h3>
        <p>Dubinsky is a Superhost</p>
        <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold mb-2">Things to know</h3>
        <ul>
          <li>House rules: Check-in 2:00pm – 10:00pm, Checkout: 10:00am</li>
          <li>Safety & property: Carbon monoxide alarm not reported, Smoke alarm not reported</li>
          <li>Cancellation policy: Free cancellation before 17 Jul. Cancel before check-in for a full refund.</li>
        </ul>
      </section>
    </div>
  );
};

export default PopularHomeDetail;
