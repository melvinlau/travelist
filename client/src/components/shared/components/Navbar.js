import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { AuthContext } from "../context/auth-context";

function Navbar() {
  const auth = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white static-top mb-4 shadow">
        <div className="container">
          <NavLink to="/" exact>
            <h2 className="navbar-brand">
              <strong>Travelist</strong>
            </h2>
          </NavLink>

          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/start" exact className="nav-link">
                  <i className="far fa-compass nav-icon"> </i> New Trip
                </NavLink>
              </li>

              {auth.isLoggedIn && (
                <li className="nav-item">
                  <NavLink to="/trips" exact className="nav-link">
                    <i class="fas fa-suitcase-rolling nav-icon"> </i> My Trips
                  </NavLink>
                </li>
              )}

              {!auth.isLoggedIn && (
                <li>
                  <NavLink to="/auth">
                    <button className="nav-button">LOGIN</button>
                  </NavLink>
                </li>
              )}
              {auth.isLoggedIn && (
                <li>
                  <button onClick={auth.logout} className="nav-button">
                    LOGOUT
                  </button>
                </li>
              )}
            </ul>
            {/* <button className="btn btn-outline-secondary my-2 my-sm-0">
              Login
            </button> */}
            {/* <button onClick={auth.logout}>Logout</button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
