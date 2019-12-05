import React, { useState, useContext } from "react";
import StartForm from "./StartForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AuthContext } from "../shared/context/auth-context";

function Start() {
  const auth = useContext(AuthContext);
  const trip = auth.trip;
  const updateTrip = auth.updateTrip;

  const renderName = () => {
    if (auth.name) return <h4 className="text-center">Hey, {auth.name}!</h4>;
  };
  
  return (
    <div className="mt-3">
      {renderName()}
      <h2>Create a new Travelist</h2>
      <StartForm trip={trip} updateTrip={updateTrip} />
    </div>
  );
}

export default Start;
