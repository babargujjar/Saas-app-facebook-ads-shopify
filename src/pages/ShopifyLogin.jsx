import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableForShopify from "../components/TableForShopify";

const ShopifyLogin = () => {
  return (
    <div className="bg-[#f2f2f2] h-screen">
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <TableForShopify />
      </div>
    </div>
  );
};

export default ShopifyLogin;