import React, { useState } from "react";

function ActivityListItem() {
  return (
    <div className="activity-list-item">
      <input type="checkbox" /> &nbsp;
      <label className="activity-list-item-name">
        Label
      </label>
    </div>
  );
}

export default ActivityListItem;
