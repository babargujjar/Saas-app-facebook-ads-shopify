import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableForFacebook from "../components/TableForFacebook";

const FacebookLogin = () => {
  return (
    <div className="bg-[#f2f2f2] h-screen">
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <TableForFacebook />
      </div>
    </div>
  );
};

export default FacebookLogin;
