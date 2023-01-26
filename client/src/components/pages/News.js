// Here we are going to deploy the News and the Charts
// We call this in the NavBar 'Information'

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { Chart } from "react-google-charts";
import {Generate_Chart} from "../modules/news/Chart_Element"

const GOOGLE_CLIENT_ID = "474140666473-hpqbbndboq5vglsoghl5j07lfqvtlkpt.apps.googleusercontent.com";

const News = () => {
    
    return (      
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <NavBar />
            <body>
                <br/>
                <Generate_Chart/>
            </body>    
        </GoogleOAuthProvider>
    );
};

export default News;
