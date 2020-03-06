import React from "react";
//import { Link } from "react-router-dom";
//import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       className="navbar-brand" to="/">
        Pupster
      
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            
          </li>
          <li className="nav-item">
            
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Discover
            
          </li>
          <li className="nav-item">
            
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;