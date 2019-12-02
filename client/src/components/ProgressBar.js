import React, { useState } from "react";

function ProgressBar({ percentComplete }) {

  const styleWidth = () => {
    return (
      { width: `${percentComplete}%` }
    );
  }

  return (
    <div className="progress">
      <div className="progress-bar"
        role="progressbar"
        style={styleWidth()}
        aria-valuenow={percentComplete}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percentComplete}% ready
      </div>
    </div>
  );
}

export default ProgressBar;
