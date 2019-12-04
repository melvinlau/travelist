import React, { useState } from "react";

function ProgressBar({ percentComplete }) {

  const styleWidth = () => {
    return (
      { width: `${percentComplete}%` }
    );
  }

  const displayPercentComplete = () => {
    if (percentComplete === "NaN") return 'No items in your list!';
    return `${percentComplete}% ready`;
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
        {displayPercentComplete()}
      </div>
    </div>
  );
}

export default ProgressBar;
