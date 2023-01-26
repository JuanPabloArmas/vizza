import React from "react";
import { Link } from "@reach/router"

import "./NavBar.css"

const GOOGLE_CLIENT_ID = "474140666473-hpqbbndboq5vglsoghl5j07lfqvtlkpt.apps.googleusercontent.com";

const NavBar = (props) => {
    return (
        <nav className="NavBar-container">
            <div className="NavBar-title">Vizza</div>
            <Link to="/" className="NavBar-link">
                Home
            </Link>
            <Link to="/pages/Profile/" className="NavBar-link"> 
                Profile
            </Link>
            <Link to="/pages/Feed" className="NavBar-link">
                Blog
            </Link>
            <Link to="/pages/News" className="NavBar-link">
                Information
            </Link>
        </nav>
    );
  };
  
  export default NavBar;
  