import React, { useState, useEffect } from "react";

function ActivityListItem({ name, select, deselect }) {

  const [isSelected, setSelectedStatus] = useState(false);

  const toggleSelection = () => {
    if (isSelected) {
      deselect(name);
    } else {
      select(name);
    }
    setSelectedStatus(!isSelected)
  }

  useEffect(() => {
    console.log(name + ' is ' + isSelected);
  });

  return (
    <div className="activity-list-item" data-cy="activity-list-item">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={toggleSelection}
      />
      <label data-cy="activity-name"> &nbsp;
        {name}
      </label>
    </div>
  );
}

export default ActivityListItem;
