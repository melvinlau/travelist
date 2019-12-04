import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

import { AuthContext } from "../shared/context/auth-context";

function TripsListNew() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center flex-column align-items-center pb-4">
            <img src="./images/char.png" style={{ width: "100px" }} />
            <h2>
              <strong>Let's start packing!</strong>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center flex-column align-items-center">
            <div className="card pb-4" style={{ width: "32rem" }}>
              <div
                className="card-img-top"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) no-repeat center center",
                  backgroundSize: "100%",
                  height: "16rem"
                }}
              ></div>
              <div className="card-body pt-4">
                <h3 className="card-title">
                  <strong>Rio de Janeiro</strong>
                </h3>
                <p className="card-text">
                  <span className="text-muted small">FROM:</span>{" "}
                  16/12/2019&nbsp;&nbsp;&nbsp;
                  <span className="text-muted small">TO:</span> 23/01/2020
                  <div className="card-weather">
                    <span className="text-muted small">WEATHER:</span>
                    <br />
                    <div className="dropdown-divider"></div>
                    🥵 hot, 🥶 cold, ☃ snowy, ☔️ rainy, ☀️ sunny
                  </div>
                </p>
              </div>
            </div>
            <div className="card pb-4" style={{ width: "32rem" }}>
              <span className="text-muted small">YOUR TRIP IS IN:</span>
              <h2>8 day</h2>
              <span className="text-muted small">PACKING PROGRESS:</span>
              <div
                className="progress"
                style={{ width: "100%", height: "30px" }}
              >
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  ariaValuenow="25"
                  style={{ width: "25%" }}
                  ariaValuemin="0"
                  ariaValuemax="100"
                >
                  25%
                </div>
              </div>
            </div>
            <h2>
              <strong>Here's your packing list</strong>
            </h2>
            <div className="card pb-4" style={{ width: "32rem" }}>
              <div className="category">
                <h4> 💵 Documents and money</h4>
                <div className="dropdown-divider"></div>
                <div
                  className="form-check item"
                  style={{ borderBottom: "1px solid #f1f1f1" }}
                >
                  <span></span>
                  &nbsp;
                  <label data-cy="item-name">Passport</label> &nbsp; &nbsp;
                  <a
                    className="delete-button float-right"
                    data-cy="delete-button"
                  >
                    <img
                      src="remove_icon.svg"
                      alt="Remove item"
                      title="Remove item"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="raw justify-content-center">
          <div className="col text-muted text-center small pt-5 pb-3">
            Made with ❤️ by Melvin, Zaira, Olly &amp; Brad
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripsListNew;
