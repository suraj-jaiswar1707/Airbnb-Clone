// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import all pages
import Homes from "./Pages/HostHome";
import Experiences from "./Pages/HostExperience";
import Services from "./Pages/HostService";
import HostHome from "./Pages/HostHome";
import HostExperience from "./Pages/HostExperience";
import HostService from "./Pages/HostService";
import ServiceDetail from "./components/ServiceDetail";
import PropertyDetails from "./Pages/PropertyDetails";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/services" element={<Services />} />
          <Route path="/host/home" element={<HostHome />} />
          <Route path="/host/experience" element={<HostExperience />} />
          <Route path="/host/service" element={<HostService />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
