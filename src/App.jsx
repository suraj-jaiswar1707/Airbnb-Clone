import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage login
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
        </>
      )}
    </div>
  );
}

export default App;
