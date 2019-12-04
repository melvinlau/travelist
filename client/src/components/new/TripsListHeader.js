import React, { useState, useContext } from "react";

function TripsListHeader() {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center flex-column align-items-center pb-4">
        <img src="./images/char.png" style={{ width: "100px" }} />
        <h2>
          <strong>Where should we go next?</strong>
        </h2>
        <button className="btn btn-primary btn-lg">NEW TRIP</button>
      </div>
    </div>
  );
}

export default TripsListHeader;
