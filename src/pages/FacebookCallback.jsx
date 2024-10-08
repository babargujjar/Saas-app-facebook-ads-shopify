import React, { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

const FacebookCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleFacebookCallback = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code'); // Get the `code` parameter from the callback URL
      console.log("code", code);

      if (code) {
        try {
          // Send the code to the backend to exchange for access token
          const response = await axios.get(`http://127.0.0.1:8000/facebook/callback/?code=${code}`);
          
          if (response.status === 200 && response.data.access_token) {
            // Login successful, handle token and ads data
            console.log("Login successful:", response.data);

            // Step 1: Prepare the data to navigate with
            const { access_token, ads_data } = response.data;

            // Step 2: Navigate to the desired route with the data
            navigate('/facebook-login', {
              state: { access_token, ads_data } // Passing data via state
            });
          } else {
            console.log("Failed to log in with Facebook");
          }
        } catch (error) {
          console.error("Error during Facebook login callback:", error);
        }
      }
    };

    handleFacebookCallback();
  }, [location, navigate]);

  return (
    <div>
      <h2>Handling Facebook Login...</h2>
    </div>
  );
};

export default FacebookCallback;
