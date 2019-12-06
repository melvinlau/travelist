import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "../shared/context/auth-context";

function TripsListHeader() {
  
  const auth = useContext(AuthContext);

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center flex-column align-items-center pb-4">
        <img src="./images/trav01.png" style={{ height: "120px" }} />
        <h2 className="mt-1 mb-2 text-center">
          Hey {auth.name}! <br />
          <strong>Where should we go next?</strong>
        </h2>

        <Link to="/start">
          <button className="btn btn-primary btn-lg">NEW TRIP</button>
        </Link>
      </div>
    </div>
  );
}

export default TripsListHeader;
