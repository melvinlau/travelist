import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AuthContext } from "../shared/context/auth-context";
import axios from 'axios';

import TripCard from "./TripCard";
import TripsListHeader from "./TripsListHeader";
// import { updatePackedItems } from "../../../../backend/src/controllers/trips";

function Trips() {

  const auth = useContext(AuthContext);
  const trip = auth.trip;
  const updateTrip = auth.updateTrip;
  const [userTrips, setUserTrips] = useState([])

  const renderName = () => {
    if (auth.name) return (
      <h5>Hey, {auth.name}!</h5>
    );
  }

  const renderTrips = () => {
    const response = handleGetTrips()
    return response.map(trip => (
      < TripCard
        key={trip.id}
        destination={trip.destination}
        dateFrom={trip.dateFrom}
        dateTo={trip.dateTo}
        id={trip.id} />
    ))
    // trips.map(trip => trip.destination)
  }

  // const callSetUserTrips = trips => {
  //   setUserTrips(trips)
  // }

  // useEffect(() => {
  //   renderTrips()
  // }, []);

  // const callUpdateTrips = (tripsarray) => {
  //   updateTrips(tripsarray)
  // }

  const handleGetTrips = () => {

    let tripsArray = axios
      .get(
        `http://localhost:3001/api/users/${auth.userId}/trips`,
        {
          headers: { Authorization: "bearer " + auth.token }
        }
      )
      .then(response => { return response.data.trips })
      .catch(console.log);
    console.log('trips array', tripsArray)
    return tripsArray
  };

  return (
    <div className="justify-content-center d-flex flex-column align-items-center">
      <TripsListHeader />

      <h2>{renderName()}</h2>
      <h3>Trips</h3>
      {renderTrips()}

    </div>
  );
}

export default Trips;
