import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Trips() {
  const [trips,updateTrips] = useState(['London']);
  return (
    <div>
      <h2>My trips</h2>
        {
          trips.map((trip, index) => {
            return trip;
          })
        }
    </div>
  );
}

export default Trips;
