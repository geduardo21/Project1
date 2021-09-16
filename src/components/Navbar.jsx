import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <React.Fragment>
         <div className="container-fluid">
          <div className="collapse navbar-collapse navbar" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/Home">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">Sweet Creations By Belen</a>
              </li>
              </NavLink>
              <NavLink to="/About">
              <li className="nav-item">
              <a className="nav-link tabs">About</a>
              </li>
              </NavLink>
              <NavLink to="/Menu">
              <li className="nav-item ">
              <a className="nav-link tabs">Menu</a>
              </li>
              </NavLink>
              <NavLink to="/GiftBoxes">
              <li className="nav-item">
              <a className="nav-link tabs">Gift Boxes</a>
              </li>
              </NavLink>
            </ul>
          </div>
        </div>
  
      </React.Fragment>
    );
   

}
export default Navbar;