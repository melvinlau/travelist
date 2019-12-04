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
              <strong>Where should we go next?</strong>
            </h2>
            <button className="btn btn-primary btn-lg">NEW TRIP</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="card" style={{ width: "32rem" }}>
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
                </p>
                <a href="#" className="btn btn-warning">
                  VIEW TRIP
                </a>
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
