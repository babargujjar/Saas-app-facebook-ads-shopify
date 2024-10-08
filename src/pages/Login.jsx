import React from 'react';
import facebook from "./../assets/download.png";
import shopify from "./../assets/download (1).png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const handleFacebookLogin = async () => {
    try {
      // Step 1: Get Facebook OAuth URL from backend
      const response = await axios.get('http://127.0.0.1:8000/facebook/login/facebook/');
      console.log(response.data);
      if (response.status === 200) {
        // Step 2: Redirect user to Facebook OAuth page
        window.location.href = response.data.redirect_url;
      } else {
        console.error("Failed to get Facebook login URL.");
      }
    } catch (error) {
      console.error("There was an error with Facebook login:", error);
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
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, a
          <span className="font-bold">
            s opposed to using 'Content here, content
          </span>{" "}
          here', making it look like readable English.
        </p>
      </div>

      <div className="col-span-2 mt-64 p-8">
        <h2 className="text-center text-[#162b33] font-bold text-lg mb-10">
          Log in to Saas App
        </h2>
        <hr className="mb-8" />
        <div 
          onClick={handleFacebookLogin} 
          className="border mb-4 p-1 cursor-pointer rounded-full flex justify-center items-center"
        >
          <img className="w-3 h-3 mr-2" src={facebook} alt="Facebook login" />
          <h2>Log in with Facebook</h2>
        </div>
        <div className="border p-1 cursor-pointer rounded-full flex justify-center items-center">
          <img className="w-3 h-4 mr-2" src={shopify} alt="Shopify login" />
          <h2>Log in with Shopify</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
