import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../shared/context/auth-context";
import { getImage } from "./tripImage";

function TripCard({ destination, dateFrom, dateTo, id, link }) {
  
  const auth = useContext(AuthContext);
  let history = useHistory();

  const formatDate = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    };
    return new Date(dateString).toLocaleString(undefined, options);
  }

  const loadListIntoSession = () => {
    axios.get(`https://localhost:3001/api/trips/${id}`)
    .then(response => {
      auth.loadTrip(response.trip);
      history.push('/trips');
    })
    .catch(console.log);
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
        <a onClick={loadListIntoSession} className="btn btn-warning">
          VIEW TRIP
        </a>
      </div>
    </div>
  );
}

export default TripCard;
