import React from "react";
import { NavLink } from "react-router-dom";
import "./section2.css";
import { useTheme } from "../../theme/Themes";
// import Starter from "../starter/Starter";

const Section2 = () => {
  const {darkMode}=useTheme()
  return (
    <div className={darkMode? " dark-theme":"light-theme"}>

      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-6">
            <span className="text-1 fw-bolder w-100 display-5">
              Checkout our
            </span>
            <span className="fw-bolder bg-purples w-100 px-3 display-5">
              menu.
            </span>
          </div>
          <div className="col-md-6">
            <div className="nextlink">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                          }
                        >
                          Starter
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/main"
                          className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                          }
                        >
                          Main
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/desert"
                          className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                          }
                        >
                          Dessert
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/soup"
                          className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                          }
                        >
                          Soup
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
