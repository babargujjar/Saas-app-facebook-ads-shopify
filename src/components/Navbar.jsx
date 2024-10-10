// import React, { useState } from "react";
// import avatar from "../assets/Avatar.png";
// import dayjs from "dayjs";
// import { DatePicker } from "antd";

// const Navbar = () => {
//   const { RangePicker } = DatePicker;
//   const [selectedDates, setSelectedDates] = useState([]); // State to store the selected date range

//   const handleDateChange = (dates, dateStrings) => {
//     setSelectedDates(dateStrings); // Update the selected date range
//   };

//   return (
//     <div className="bg-[#f2f2f2] pb-2 px-7">
//       <div className="flex justify-between items-center py-4">
//         <p className="text-xl font-semibold">Campaigns</p>

//         <div className="flex justify-center items-center">
//           <p>Name</p>
//           <img className="w-10 ml-2 h-10" src={avatar} alt="" />
//         </div>
//       </div>
//       <div className="flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <button className="px-2 py-1 rounded-md border bg-white">
//             <i className="bx bx-filter-alt"></i>
//           </button>
//           <button className="px-2 py-1 border rounded-md bg-white">
//             All Ads
//           </button>
//           <button className="px-2 py-1 border rounded-md bg-white">
//             Active Ads
//           </button>
//           <button className="px-2 py-1 border rounded-md bg-white">
//             Had Delivery
//           </button>
//         </div>
//         <div className="flex items-center">
//           <span className="ml-2">
//             {selectedDates.length
//               ? `${selectedDates[0]} - ${selectedDates[1]}`
//               : "Select Date Range"}
//           </span>
//           <RangePicker
//             value={
//               selectedDates.length
//                 ? [dayjs(selectedDates[0]), dayjs(selectedDates[1])]
//                 : []
//             } // Use dayjs to format the dates
//             onChange={handleDateChange} // Handle date change
//             className="ml-2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import avatar from "../assets/Avatar.png";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import facebook from "../assets/facebook.png";
import shopify from "../assets/shopify.png";

const Navbar = ({ onPlatformSelect, selectedPlatform }) => {
  const { RangePicker } = DatePicker;
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (dates, dateStrings) => {
    setSelectedDates(dateStrings);
  };

  return (
    <div className="bg-[#f2f2f2] pb-2 px-7">
      <div className="flex justify-between items-center py-4">
        <p className="text-xl font-semibold">Campaigns</p>

        <div className="flex justify-center items-center">
          <p>Name</p>
          <img className="w-10 ml-2 h-10" src={avatar} alt="" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button className="px-2 py-1 rounded-md border bg-white">
            <i className="bx bx-filter-alt"></i>
          </button>
          <button className="px-2 py-1 border rounded-md bg-white">
            All Ads
          </button>
          <button className="px-2 py-1 border rounded-md bg-white">
            Active Ads
          </button>
          <button className="px-2 py-1 border rounded-md bg-white">
            Had Delivery
          </button>
        </div>
        <div className="flex items-center">
          <span className="ml-2">
            {selectedDates.length
              ? `${selectedDates[0]} - ${selectedDates[1]}`
              : "Select Date Range"}
          </span>
          <RangePicker
            value={
              selectedDates.length
                ? [dayjs(selectedDates[0]), dayjs(selectedDates[1])]
                : []
            }
            onChange={handleDateChange}
            className="ml-2"
          />

          {selectedPlatform !== "facebook" && (
            <button
              onClick={() => onPlatformSelect("facebook")}
              className="px-4 flex justify-center items-center ml-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login with Facebook
              <img className="w-8 h-8 ml-2" src={facebook} alt="Facebook" />
            </button>
          )}

          {selectedPlatform !== "shopify" && (
            <button
              onClick={() => onPlatformSelect("shopify")}
              className="px-4 flex justify-center items-center ml-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
            >
              Login with Shopify
              <img className="w-6 h-6 my-1 ml-2" src={shopify} alt="Shopify" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
