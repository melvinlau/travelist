import React, { useState, useContext, useEffect } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";
import axios from 'axios';
import TripCard from "./TripCard";

function Trips() {

  const auth = useContext(AuthContext);
  const trip = auth.trip;
  const updateTrip = auth.updateTrip;
  console.log('trip loaded into tripcard', auth.trip);

  const [userTrips, setUserTrips] = useState([]);

  const handleGetTrips = async () => {
    let tripsArray = await axios.get(
        `http://localhost:3001/api/users/${auth.userId}/trips`,
        {
          headers: { Authorization: "bearer " + auth.token }
        }
      )
      .then(response => {
        return response.data.trips;
      })
      .catch(console.log);
    return tripsArray;
  };

  useEffect( () => {
    handleGetTrips().then(data => setUserTrips(data));
  }, []);

  return (
    <div>
      <Link to="/">
        <button className="btn btn-primary btn-lg float-right">NEW TRIP</button>
      </Link>
      <h2 className="mb-4"><strong>{auth.name}</strong>'s trips</h2>
      <div>
        {
          userTrips.map(trip => {
              return (< TripCard key={trip._id} trip={trip} />)
          })
        }
      </div>
    </div>
  );
}

export default Trips;
