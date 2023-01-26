// This file manages the profile where we need to show the process for the Visa applicant,
// the state and project the days with the current information and the other people that 
// is applying in the same location

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "474140666473-hpqbbndboq5vglsoghl5j07lfqvtlkpt.apps.googleusercontent.com";

const Profile = ({userId}) => {
    return(
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <NavBar />
            <body>
                <div> Hi this is Domingo Concha </div>
            </body>    
        </GoogleOAuthProvider>
    );
};

export default Profile;