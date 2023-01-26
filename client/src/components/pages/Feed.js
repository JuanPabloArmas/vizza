// This file is the Blog where people can discuss about success stories and tips and tricks
// for the Visa application.

// We make copy-paste from the weblab at the beggining
// We should be able to filter important stories for the client in the future

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "474140666473-hpqbbndboq5vglsoghl5j07lfqvtlkpt.apps.googleusercontent.com";

const Feed = () => {
    
    return (      
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <NavBar />
            <body>
                <div> Hi this is Domingo Concha </div>
            </body>    
        </GoogleOAuthProvider>
    );
};

export default Feed;