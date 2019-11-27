import React, { useState } from "react";

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
      <button className="start-button">
        Start planning
      </button>
    </div>
  );
}

export default StartForm;
