import React, { useState, useContext } from "react";
import StartForm from './StartForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AuthContext } from "../shared/context/auth-context";

function Start({ trip, updateTrip }) {
  const auth = useContext(AuthContext);

  const renderName = () => {
    if (auth.name) return (
      <h5>Hey, {auth.name}!</h5>
    );
  }

  return (
    <div>
      {renderName()}
      <StartForm trip={trip} updateTrip={updateTrip} />
    </div>

  );
}

export default Start;
