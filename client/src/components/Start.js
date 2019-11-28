import React, { useState } from "react";
import StartForm from './StartForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Start({ setDestination, setDateTo }) {
  return (<StartForm setDestination={setDestination} setDateTo={setDateTo} />);
}

export default Start;
