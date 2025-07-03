import React, { useState } from 'react';

const footerData = {
  inspiration: [
    {
      title: 'Unique stays',
      items: [
        { label: 'Yurt Rentals', location: 'United States' },
        { label: 'Yurt Rentals', location: 'United Kingdom' },
        { label: 'Castle Rentals', location: 'United States' },
        { label: 'Houseboats', location: 'United States' },
        { label: 'Holiday Caravans', location: 'United Kingdom' },
        { label: 'Private Island Rentals', location: 'United States' },
        { label: 'Farm Houses', location: 'United States' },
        { label: 'Farm Cottages', location: 'United Kingdom' },
        { label: 'Cabin Rentals', location: 'Australia' },
        { label: 'Luxury Cabins', location: 'United Kingdom' },
        { label: 'Luxury Cabins', location: 'United States' },
        { label: 'Holiday Chalets', location: 'United Kingdom' },
        { label: 'Cottage Rentals', location: 'United States' },
        { label: 'Holiday Cottages', location: 'United Kingdom' },
        { label: 'Mansion Rentals', location: 'United States' },
        { label: 'Villa Rentals', location: 'United Kingdom' },
        { label: 'Holiday Bungalows', location: 'United Kingdom' },
      ],
    },
    {
      title: 'Categories',
      items: [
        // Add categories if needed
      ],
    },
  ],
  support: [
    'Help Centre',
    'AirCover',
    'Anti-discrimination',
    'Disability support',
    'Cancellation options',
    'Report neighbourhood concern',
  ],
  hosting: [
    'Airbnb your home',
    'Airbnb your experience',
    'Airbnb your service',
    'AirCover for Hosts',
    'Hosting resources',
    'Community forum',
    'Hosting responsibly',
    'Join a free Hosting class',
    'Find a co-host',
  ],
  airbnb: [
    '2025 Summer Release',
    'Newsroom',
    'Careers',
    'Investors',
    'Airbnb.org emergency stays',
  ],
};

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Unique stays');

  const tabs = ['Unique stays', 'Categories'];

  const renderInspirationItems = () => {
    const current = footerData.inspiration.find(tab => tab.title === activeTab);
    if (!current) return null;

    return (
      <div className="grid grid-cols-3 gap-6">
        {current.items.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="font-semibold">{item.label}</div>
            <div className="text-sm text-gray-500">{item.location}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <footer className="bg-gray-100 p-8 mt-12">
      <h2 className="text-xl font-semibold mb-6">Inspiration for future getaways</h2>
      <div className="flex space-x-6 border-b mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`pb-2 font-semibold ${activeTab === tab ? 'border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderInspirationItems()}

      <div className="mt-10 grid grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul>
            {footerData.support.map((item, idx) => (
              <li key={idx} className="mb-2 cursor-pointer hover:underline">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Hosting</h3>
          <ul>
            {footerData.hosting.map((item, idx) => (
              <li key={idx} className="mb-2 cursor-pointer hover:underline">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Airbnb</h3>
          <ul>
            {footerData.airbnb.map((item, idx) => (
              <li key={idx} className="mb-2 cursor-pointer hover:underline">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
