// Here we are going to deploy the News and the Charts
import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "474140666473-hpqbbndboq5vglsoghl5j07lfqvtlkpt.apps.googleusercontent.com";

const News = () => {
    
    return (      
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <NavBar />
            <body>
                <div> Hi this is Domingo Concha </div>
            </body>    
        </GoogleOAuthProvider>
    );
};

export default News;