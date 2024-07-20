import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Navtheme from "../../theme/Navtheme";
import { useTheme } from "../../theme/Themes";
const Nav = () => {
  const{darkMode}=useTheme()
  
                                                

  return (
    <div  className={darkMode ? 'dark-theme' : 'light-theme'}>
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link className="navbar-brand px-5" to="#">
            <span className="btn btn-primary">T</span>
            Treat
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/password">
                  Password Generator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/database">
                  Database
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
            
            <div className="navbar-nav ml-2 ">
              <button className="btn btn-primary rounded m-2 btnc">
                <Link className="nav-link text-white btn btn-primary" to="/sign">
                  Sign Up
                </Link>
              </button>
              <button className="btn btn-primary rounded m-2 btnc">
                <Link className="nav-link text-white btn btn-primary" to="/login">
                  Login
                </Link>
              </button>
            </div>
          </div>
          <Navtheme/>
        </div>
      </nav>
    </div>
  );
};

export default Nav;


