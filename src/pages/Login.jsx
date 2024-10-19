// import React from "react";
// import facebook from "./../assets/download.png";
// import shopify from "./../assets/download (1).png";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = (platform) => {
//     navigate("/", { state: { platform } });
//   };

//   return (
//     <div className="w-full h-screen grid grid-cols-6">
//       <div className="bg-[#e4eaef] px-[100px] py-[150px] col-span-4">
//         <h1 className="font-bold text-5xl text-[#162b33]">
//           Get started with <br /> Saas App
//         </h1>

//         <div className="my-8 space-y-1">
//           <div className="flex items-center ">
//             <span className="text-2xl mr-2">•</span>
//             <h2 className="text-center">Bullet 1</h2>
//           </div>
//           <div className="flex items-center ">
//             <span className="text-2xl mr-2">•</span>
//             <h2 className="text-center">Bullet 2</h2>
//           </div>
//           <div className="flex items-center">
//             <span className="text-2xl mr-2">•</span>
//             <h2 className="text-center">Bullet 3</h2>
//           </div>
//           <div className="flex items-center">
//             <span className="text-2xl mr-2">•</span>
//             <h2 className="text-center">Bullet 4</h2>
//           </div>
//           <div className="flex items-center">
//             <span className="text-2xl mr-2">•</span>
//             <h2 className="text-center">Bullet 5</h2>
//           </div>
//         </div>
//         <p className="w-[475px]">
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout.
//         </p>
//       </div>

//       <div className="col-span-2 mt-64 p-8">
//         <h2 className="text-center text-[#162b33] font-bold text-lg mb-10">
//           Log in to Saas App
//         </h2>
//         <hr className="mb-8" />
//         <div
//           className="border mb-4 p-1 cursor-pointer rounded-full flex justify-center items-center"
//           onClick={() => handleLogin("facebook")}
//         >
//           <img className="w-3 h-3 mr-2" src={facebook} alt="" />
//           <h2>Log in with Facebook</h2>
//         </div>

//         <div
//           className="border p-1 cursor-pointer rounded-full flex justify-center items-center"
//           onClick={() => handleLogin("shopify")}
//         >
//           <img className="w-3 h-4 mr-2" src={shopify} alt="" />
//           <h2>Log in with Shopify</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import facebook from "./../assets/download.png";
import shopify from "./../assets/download (1).png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isFacebookLoggedIn, setIsFacebookLoggedIn] = useState(false); // Track Facebook login state
  const navigate = useNavigate();

  const handleLogin = (platform) => {
    if (platform === "facebook") {
      alert("Please also log in with Shopify.");
      setIsFacebookLoggedIn(true); // After Facebook login, show Shopify button
    } else if (platform === "shopify") {
      // Navigate to home page after Shopify login
      navigate("/");
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-6">
      <div className="bg-[#e4eaef] px-[100px] py-[150px] col-span-4">
        <h1 className="font-bold text-5xl text-[#162b33]">
          Get started with <br /> Saas App
        </h1>

        <div className="my-8 space-y-1">
          <div className="flex items-center ">
            <span className="text-2xl mr-2">•</span>
            <h2 className="text-center">Bullet 1</h2>
          </div>
          <div className="flex items-center ">
            <span className="text-2xl mr-2">•</span>
            <h2 className="text-center">Bullet 2</h2>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">•</span>
            <h2 className="text-center">Bullet 3</h2>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">•</span>
            <h2 className="text-center">Bullet 4</h2>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">•</span>
            <h2 className="text-center">Bullet 5</h2>
          </div>
        </div>
        <p className="w-[475px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="col-span-2 mt-64 p-8">
        <h2 className="text-center text-[#162b33] font-bold text-lg mb-10">
          Log in to Saas App
        </h2>
        <hr className="mb-8" />

        {/* Conditionally render Facebook or Shopify button based on login state */}
        {!isFacebookLoggedIn ? (
          <div
            className="border mb-4 p-1 cursor-pointer rounded-full flex justify-center items-center"
            onClick={() => handleLogin("facebook")}
          >
            <img className="w-3 h-3 mr-2" src={facebook} alt="" />
            <h2>Log in with Facebook</h2>
          </div>
        ) : (
          <div
            className="border p-1 cursor-pointer rounded-full flex justify-center items-center"
            onClick={() => handleLogin("shopify")}
          >
            <img className="w-3 h-4 mr-2" src={shopify} alt="" />
            <h2>Log in with Shopify</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
