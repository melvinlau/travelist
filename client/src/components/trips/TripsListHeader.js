import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function TripsListHeader() {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center flex-column align-items-center pb-4">
        <img src="./images/char.png" style={{ width: "100px" }} />
        <h2>
          <strong>Where should we go next?</strong>
        </h2>

        <Link to="/">
          <button className="btn btn-primary btn-lg">NEW TRIP</button>
        </Link>

      </div>
    </div>
  );
}

export default TripsListHeader;
