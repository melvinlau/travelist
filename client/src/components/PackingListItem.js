import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

function PackingListItem({ name, complete, unComplete, remove }) {

  const [isComplete, setCompletionStatus] = useState(false);

  const checkboxId = `checkbox-${name}`;

  const renderCheckbox = () => {
    const checkbox = (
      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleChange}
      />
    )
    ReactDOM.render(checkbox, document.getElementById(checkboxId));
  }

  useEffect(() => {
    renderCheckbox();
  });

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

  return (
    <div data-cy="packing-list-item">
      <span id={checkboxId}></span>
      &nbsp;
      <label data-cy="item-name">
        {name}
      </label> &nbsp; &nbsp;
      <a className="delete-button" data-cy="delete-button" onClick={handleDelete}>
        <img src="remove_icon.svg" alt="Remove item" title="Remove item" />
      </a>
    </div>
  );
}

export default PackingListItem;
