// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Homes from "./Pages/Homes";
import Experiences from "./Pages/Experiences";
import Services from "./Pages/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
