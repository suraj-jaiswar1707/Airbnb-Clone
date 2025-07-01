import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Only use Routes/Route here
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Login from './Login';
import ServicesPage from './ServicesPage';
import Footer from './Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('loginEmail');
    const password = localStorage.getItem('loginPassword');
    if (email && password) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Navbar setIsLoggedIn={setIsLoggedIn} />
          <SearchBar />
          <Routes>
            <Route path="/" element={<ServicesPage />} />
            {/* Add more routes here if needed */}
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
