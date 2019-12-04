import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function SingleTrip() {

  return (
    <div>
      <h2>{renderName()}</h2>
      <h3>Trips</h3>


      <Link to="/start">
        Create a new trip
      </Link>

    </div>
  );
}

export default SingleTrip;
