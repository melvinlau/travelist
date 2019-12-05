import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import StartFormNew from "./StartFormNew";

import { AuthContext } from "../shared/context/auth-context";
import { getImage } from "./tripImage";

function TripCard({ destination, dateFrom, dateTo, id, link }) {
  const auth = useContext(AuthContext);

  const formatDate = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    };
    return new Date(dateString).toLocaleString(undefined, options);
  }


  return (
    <div className="card" style={{ width: "32rem" }}>
      <div
        className="card-img-top"
        style={{
          background:
            `url(${link}) no-repeat center center`,
          backgroundSize: "100%",
          height: "16rem"
        }}
      ></div>

      <div className="card-body pt-4">
        <h3 className="card-title">
          <strong>{destination}</strong>
        </h3>
        <p className="card-text">
          <span className="text-muted small">FROM: </span>{formatDate(dateFrom)}
          &nbsp;&nbsp;&nbsp;
          <span className="text-muted small">TO: </span>{formatDate(dateTo)}
        </p>
        <a href="#" className="btn btn-warning">
          VIEW TRIP
        </a>
      </div>
    </div>
  );
}

export default TripCard;
