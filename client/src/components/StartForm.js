import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function StartForm() {
  return (
    <div className="start-form">
      <input
        type="text"
        name="destination"
        placeholder="Destination"
      /> <br />
      <input
        type="date"
        name="date-from"
        placeholder="From"
      /> <br />
      <input
        type="date"
        name="date-to"
        placeholder="To"
      /> <br />
      <Link to="/activities">
        <button className="start-button">
          Start planning
        </button>
      </Link>
    </div>
  );
}

export default StartForm;
