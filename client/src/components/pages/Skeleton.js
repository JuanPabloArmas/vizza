import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "474140666473-hpqbbndboq5vglsoghl5j07lfqvtlkpt.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {userId ? (
        <button
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
      )}
     <body>
      <div class="topnav">
        <a href="#news">News</a>
        <a href="#contact">Blog</a>
        <a href="#about">About</a>
        <a class="active" href="#home">Home</a>
      </div> 
      
      <h1><center>Vizza</center></h1>
      <p>
        <font size="4">
        <center>Our mission is to enable safe and secure international travel experiences by providing reliable, comprehensive visa information and support. We strive to make visa applications easier and more streamlined, so that people can spend more time enjoying their trips and less time worrying about the paperwork. We believe that visa applications should be accessible and straightforward for all, and offer our resources to ensure that everyone can travel with confidence.</center>
        </font>
      </p>
      <center>
          <img src = "https://drive.google.com/uc?export=view&id=1lGCcwZAG75nkQjfC6O9PB8814O6Vfz8y"
          width = "400"
          height = "267"/>
      </center>
      <h1><center> How we help? </center></h1>
      <p><center> Here I am thinking on add 3 icons that show how users benefit from the website </center></p>
    </body>
    </GoogleOAuthProvider>
  );
};

export default Skeleton;
