import React, { useState } from "react";

function ActivityListItem({ id, key, name, select, deselect }) {

  const [isSelected, setSelected] = useState(false);

  const toggleCheckbox = e => {
    if (isSelected) {
      deselect(id);
      setSelected(false);
    } else {
      select(name);
      setSelected(true);
    }
  }

  return (
    <div className="activity-list-item">
      <input type="checkbox"
        value={isSelected}
        onChange={toggleCheckbox}
      />
      <label className="activity-list-item-name"> &nbsp;
        {name}
      </label>
    </div>
  );
}

export default ActivityListItem;