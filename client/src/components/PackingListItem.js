import React, { useState } from "react";

function PackingListItem({ id, name, complete, unComplete, deleteItem }) {

  const [isComplete, setCompletionStatus] = useState(false);
  const toggleCheckbox = e => {
    if (isComplete) {
      unComplete(id);
      setCompletionStatus(false);
    } else {
      complete(name);
      setCompletionStatus(true);
    }
  }

  return (
    <div className="packing-list-item">
      <input type="checkbox"
        checked={isComplete}
        onChange={toggleCheckbox}
      /> &nbsp;
      <label className="packing-list-item-name">
        {name}
      </label> &nbsp; &nbsp;
      <a className="delete-button" onClick={() => { deleteItem(id) }}>
        <img src="remove_icon.svg" alt="Remove item" title="Remove item" />
      </a>
    </div>
  );
}

export default PackingListItem;
