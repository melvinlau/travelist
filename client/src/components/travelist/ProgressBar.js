import React, { useState } from "react";

function ProgressBar({ percentComplete }) {
  const styleWidth = () => {
    return { width: `${percentComplete}%` };
  };

  const displayPercentComplete = () => {
    if (percentComplete === "NaN") return "No items in your list!";
    return `${percentComplete}% ready`;
  };

  return (
    <div className="progress" style={{ height: "2rem" }}>
      <div
        className="progress-bar justify-content-center d-flex py-2"
        role="progressbar"
        style={styleWidth()}
        aria-valuenow={percentComplete}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="mx-2 my-1">
          <h6>{displayPercentComplete()}</h6>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
