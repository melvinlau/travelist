import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import TripHeader from "./TripHeader";
import TripStatus from "./TripStatus";

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
            <TripHeader />
            <TripStatus />
            {/* //Trip Header goes here // Trip Status goes here */}
            <h2>
              <strong>Here's your packing list</strong>
            </h2>
            <div className="card mb-4 mt-2" style={{ width: "32rem" }}>
              <div className="category mb-4">
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
                <div
                  className="form-check item"
                  style={{ borderBottom: "1px solid #f1f1f1" }}
                >
                  &nbsp;
                  <label data-cy="item-name">Credit cards</label> &nbsp; &nbsp;
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
                <div className="form-inline mt-3">
                  <input
                    type="text"
                    placeholder="Add an item"
                    className="form-control mr-2"
                    style={{ width: "87%" }}
                  />
                  <button className="btn btn-secondary">Add</button>
                </div>
              </div>
              <div className="category mb-3">
                <h4> 👕 Clothing</h4>
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
                <div
                  className="form-check item"
                  style={{ borderBottom: "1px solid #f1f1f1" }}
                >
                  &nbsp;
                  <label data-cy="item-name">Credit cards</label> &nbsp; &nbsp;
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
                <div className="form-inline mt-3">
                  <input
                    type="text"
                    placeholder="Add an item"
                    className="form-control mr-2"
                    style={{ width: "87%" }}
                  />
                  <button className="btn btn-secondary">Add</button>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-warning btn-lg btn-block my-3"
              >
                SAVE LIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripsListNew;
