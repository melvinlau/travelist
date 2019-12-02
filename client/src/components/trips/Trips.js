import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AuthContext } from "../shared/context/auth-context";


function Trips() {

  const auth = useContext(AuthContext);

  const renderName = () => {
    if (auth.name) return (
      <h5>Hey, {auth.name}!</h5>
    );
  }

  return (
    <div>
      <h2>{renderName()}</h2>
      <h3>Trips</h3>

    </div>
  );
}

export default Trips;
