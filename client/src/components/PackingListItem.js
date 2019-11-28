import React, { useState } from "react";

function PackingListItem({ id, name, complete, unComplete, addItem, deleteItem }) {

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
      <button>
        Delete
      </button>
    </div>
  );
}

export default PackingListItem;
