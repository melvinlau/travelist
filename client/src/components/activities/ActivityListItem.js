import React, { useState, useEffect } from "react";

function ActivityListItem({ name, select, deselect }) {
  const [isSelected, setSelectedStatus] = useState(false);

  const capitalize = word => {
    return (
      <span>
        {word.charAt(0).toUpperCase() + word.slice(1)}
      </span>
    );
  }

  const toggleSelection = () => {
    if (isSelected) {
      deselect(name);
    } else {
      select(name);
    }
    setSelectedStatus(!isSelected);
  };

  useEffect(() => {
    console.log(name + " is " + isSelected);
  });

  return (
    <div className="activity-list-item" data-cy="activity-list-item">
      <input type="checkbox" checked={isSelected} onChange={toggleSelection} />
      <label data-cy="activity-name">
        {" "}
        &nbsp;
        {capitalize(name)}
      </label>
    </div>
  );
}

export default ActivityListItem;
