import React, { useState } from "react";
import StartForm from './StartForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Start({ setDestination, setDateTo, setDateFrom }) {
  return (<StartForm setDestination={setDestination} setDateTo={setDateTo} setDateFrom={setDateFrom} />);
}

export default Start;
