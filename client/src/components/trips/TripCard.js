import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import StartFormNew from "./StartFormNew";

import { AuthContext } from "../shared/context/auth-context";

function TripCard() {
  const auth = useContext(AuthContext);

  return (
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
  );
}

export default TripCard;
