import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableForFacebook from "../components/TableForFacebook";

const FacebookLogin = () => {
  const location = useLocation(); // Get the current location
  const { access_token, ads_data } = location.state || {}; // Extract access_token and ads_data
  const firstObject = ads_data[0]; // Access the first object in the array
  const idValue = firstObject.id;  // Access the 'id' property of that object
  
  console.log('1234-----------', access_token, idValue )
  console.log('1234 ----------' , idValue)

  return (
    <div className="bg-[#f2f2f2] h-screen">
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        {/* Pass access_token and ads_data to TableForFacebook */}
        <TableForFacebook access_token={access_token}  account_id={idValue} />
      </div>
    </div>
  );
};

export default FacebookLogin;
