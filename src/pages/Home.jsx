import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableForFacebook from "../components/TableForFacebook";
import TableForShopify from "../components/TableForShopify";

const Home = () => {
 

  return (
    <div className="bg-[#f2f2f2] h-screen">
      <Navbar  />
      <div className="flex items-start">
        <Sidebar />

         <TableForFacebook />
        {/* {selectedPlatform === "shopify" && <TableForShopify />} */}
      </div>
    </div>
  );
};

export default Home;
