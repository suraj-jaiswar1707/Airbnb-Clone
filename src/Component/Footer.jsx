import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 border-t mt-12">
      {/* Top Grid: Future Getaways */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h3 className="text-lg font-semibold mb-4">Inspiration for future getaways</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            ['Yurt Rentals', 'United States'],
            ['Yurt Rentals', 'United Kingdom'],
            ['Castle Rentals', 'United States'],
            ['Houseboats', 'United States'],
            ['Holiday Caravans', 'United Kingdom'],
            ['Private Island Rentals', 'United States'],
            ['Farm Houses', 'United States'],
            ['Farm Cottages', 'United Kingdom'],
            ['Cabin Rentals', 'Australia'],
            ['Luxury Cabins', 'United Kingdom'],
            ['Luxury Cabins', 'United States'],
            ['Holiday Chalets', 'United Kingdom'],
            ['Cottage Rentals', 'United States'],
            ['Holiday Cottages', 'United Kingdom'],
            ['Mansion Rentals', 'United States'],
            ['Villa Rentals', 'United Kingdom'],
            ['Holiday Bungalows', 'United Kingdom']
          ].map(([title, location], index) => (
            <div key={index}>
              <h4 className="font-medium">{title}</h4>
              <p className="text-xs text-gray-500">{location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Grid: Support / Hosting / Airbnb */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          {/* Support */}
          <div>
            <h4 className="font-bold mb-2">Support</h4>
            <ul className="space-y-1">
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h4 className="font-bold mb-2">Hosting</h4>
            <ul className="space-y-1">
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

          {/* Airbnb */}
          <div>
            <h4 className="font-bold mb-2">Airbnb</h4>
            <ul className="space-y-1">
              <li>2025 Summer Release</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-xs text-gray-500 py-4 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto space-y-2 md:space-y-0">
        <p>&copy; 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
        <div className="flex space-x-4 items-center text-sm">
          <span>🌐 English (IN)</span>
          <span>₹ INR</span>
          <span>📘</span>
          <span>𝕏</span>
          <span>📸</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
