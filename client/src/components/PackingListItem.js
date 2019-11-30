import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

function PackingListItem({ id, name, complete, unComplete, remove }) {

  const [isComplete, setCompletionStatus] = useState(false);

  const markItemComplete = () => {
    complete(name);
  }

  const markItemIncomplete = () => {
    unComplete(name);
  }

  const handleChange = async () => {
    if (isComplete) {
      markItemIncomplete();
    } else {
      markItemComplete();
    }
    setCompletionStatus(!isComplete);
  }

  const handleDelete = () => {
    remove(name);
  }

  useEffect(() => { // similar to componentDidUpdate()
    console.log(name + ' is now ' + isComplete)
  }); // For manual testing only

  return (
    <div data-cy="packing-list-item">
      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleChange}
      /> &nbsp;
      <label data-cy="item-name">
        {name}
      </label> &nbsp; &nbsp;
      <a class="delete-button" data-cy="delete-button" onClick={handleDelete}>
        <img src="remove_icon.svg" alt="Remove item" title="Remove item" />
      </a>
    </div>
  );
}

export default PackingListItem;
