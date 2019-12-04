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

  const imageStyle = {
    background: `url(${trip.image}) no-repeat center center`,
    backgroundSize: "cover",
    height: "16rem"
  }

  return (
    <div className="card">

      <div className="card-img-top" style={imageStyle}></div>

      <div className="card-body pt-4">

        <Link to="/packinglist">
          <button onClick={loadListIntoSession} className="btn btn-warning float-right">
            VIEW TRIP
          </button>
        </Link>
        <h3>
          <strong>{trip.destination}</strong>
        </h3>
        <p className="card-text">
          <span className="text-muted small">FROM: </span>{formatDate(trip.dateFrom)}
          &nbsp;&nbsp;&nbsp;
          <span className="text-muted small">TO: </span>{formatDate(trip.dateTo)}
        </p>

      </div>
    </div>
  );
}

export default TripCard;
