import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableForFacebook from "../components/TableForFacebook";
import TableForShopify from "../components/TableForShopify";

const Home = () => {
  const location = useLocation();
  const [selectedPlatform, setSelectedPlatform] = useState(
    location.state?.platform || null
  );

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <div className="bg-[#f2f2f2] h-screen">
      <Navbar
        onPlatformSelect={handlePlatformSelect}
        selectedPlatform={selectedPlatform}
      />
      <div className="flex items-start">
        <Sidebar />

        {selectedPlatform === "facebook" && <TableForFacebook />}
        {selectedPlatform === "shopify" && <TableForShopify />}
      </div>
    </div>
  );
};

export default Home;
