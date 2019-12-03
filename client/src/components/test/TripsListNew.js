import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AuthContext } from "../shared/context/auth-context";

function TripsListNew() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="row justify-content-center">
            <div className="col-8">
              <a className="navbar-brand" href="#">
                Travelist
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

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
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
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card" style={{ width: "32rem" }}>
              <img
                src={
                  "https://i.pinimg.com/564x/2e/f2/e4/2ef2e4499e030b2c7e4709d6309e0a5f.jpg"
                }
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">
                  <strong>Destination</strong>
                </h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripsListNew;
