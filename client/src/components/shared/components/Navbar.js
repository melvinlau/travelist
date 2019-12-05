import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

function Navbar() {

  const auth = useContext(AuthContext);
  let history = useHistory();

  const doLogout = () => {
    auth.logout();
    history.push('/');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white static-top mb-4 shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h4>
              <strong>Travelist</strong>
            </h4>
          </a>
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
                <a className="nav-link" href="#">
                  New Trip
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Trip
                </a>
              </li>
            </ul>
            <button className="btn btn-outline-secondary my-2 my-sm-0">
              Login
            </button>
            <button onClick={doLogout}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
