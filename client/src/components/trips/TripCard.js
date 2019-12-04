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

function TripCard({ trip }) {

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

  const loadListIntoSession = async () => {
    await auth.updateTrip(trip);
    history.push('/packinglist');
  }

  return (
    <div className="card" style={{ width: "32rem" }}>
      <div
        className="card-img-top"
        style={{
          background:
            `url(${trip.image}) no-repeat center center`,
          backgroundSize: "100%",
          height: "16rem"
        }}
      ></div>

      <div className="card-body pt-4">
        <h3 className="card-title">
          <strong>{trip.destination}</strong>
        </h3>
        <p className="card-text">
          <span className="text-muted small">FROM: </span>{formatDate(trip.dateFrom)}
          &nbsp;&nbsp;&nbsp;
          <span className="text-muted small">TO: </span>{formatDate(trip.dateTo)}
        </p>
        <Link to="/packinglist">
          <button onClick={loadListIntoSession} className="btn btn-warning">
            VIEW TRIP
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TripCard;
