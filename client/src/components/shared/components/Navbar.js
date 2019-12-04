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
            <h3 className="navbar-brand">
              <strong>Travelist</strong>
            </h3>
          </NavLink>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/start" exact className="nav-link">
                  New Trip
                </NavLink>
              </li>

              {auth.isLoggedIn && (
                <li className="nav-item">
                  <NavLink to="/trips" exact className="nav-link">
                    My Trips
                  </NavLink>
                </li>
              )}

              {!auth.isLoggedIn && (
                <li>
                  <NavLink to="/auth">
                    <button>LOGIN</button>
                  </NavLink>
                </li>
              )}
              {auth.isLoggedIn && (
                <li>
                  <button onClick={auth.logout}>LOGOUT</button>
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
