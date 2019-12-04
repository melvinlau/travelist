import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

import { AuthContext } from "../shared/context/auth-context";

function TripStatus() {
  const auth = useContext(AuthContext);

  return (
    <div className="card mb-5" style={{ width: "32rem" }}>
      <span className="text-muted small">YOUR TRIP IS IN:</span>
      <h2>8 day</h2>
      <ProgressBar />
    </div>
  );
}

export default TripStatus;
