// Here we are going to deploy the News and the Charts
// We call this in the NavBar 'Information'

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { Chart } from "react-google-charts";
import Chart_Element, {Generate_Chart} from "../modules/news/Chart_Element";
import New from "../modules/news/New";

import "./News.css";

const GOOGLE_CLIENT_ID = "474140666473-hpqbbndboq5vglsoghl5j07lfqvtlkpt.apps.googleusercontent.com";

const News = (props) => {

    const[link, setLink] = useState("");
    

    //const change_link = () =>{
        //setLink("www.emol.com");
    // }

    let test_title = "test"
    return (      
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <NavBar />
            <br/>
            <div class ="news-parent">
                <div>
                    <div class = "news-child">
                        <New title = {test_title} link="www.emol.com" country = "Chile" />
                    </div>
                    <div class = "news-child">
                        <New title = "Covid vaccine required to enter to the US" link ="ft.com" country = "US"/>
                    </div>
                    <div class = "news-child">
                        <New title = "Bla Bla" link = "wallstreetjournal.com" country = "US"/>
                    </div>
                </div> 
                <br/>
                <br/>
                <br/>
                <br/>
                <div class = "news-child">
                    <Generate_Chart/>
                </div>
                <div class = "news-child">
                    <Generate_Chart/>
                </div>
            </div>
        
        </GoogleOAuthProvider>
    );
};

export default News;
