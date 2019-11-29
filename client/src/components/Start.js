import React, { useState } from "react";
import StartForm from './StartForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Start({ trip, updateTrip }) {
  return (
    <StartForm trip={trip} updateTrip={updateTrip} />
  );
}

export default Start;
