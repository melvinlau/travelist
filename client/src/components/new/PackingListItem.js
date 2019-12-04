import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function PackingListItem({ item, complete, unComplete, remove }) {
  const [isComplete, setCompletionStatus] = useState(false);

  const checkboxId = `checkbox-${item.name}`;

  const renderCheckbox = () => {
    const checkbox = (
      <input type="checkbox" checked={isComplete} onChange={handleChange} />
    );
    ReactDOM.render(checkbox, document.getElementById(checkboxId));
  };

  useEffect(() => {
    renderCheckbox();
  });

  const markItemComplete = () => {
    complete(item);
  };

  const markItemIncomplete = () => {
    unComplete(item);
  };

  const handleChange = async () => {
    if (isComplete) {
      markItemIncomplete();
    } else {
      markItemComplete();
    }
    setCompletionStatus(!isComplete);
  };

  const handleDelete = () => {
    remove(item);
  };

  return (
    <div
      className="form-check item"
      style={{ borderBottom: "1px solid #f1f1f1" }}
    >
      <span id={checkboxId}></span>
      &nbsp;
      <label data-cy="item-name">{item.name}</label> &nbsp; &nbsp;
      <a
        className="delete-button float-right"
        data-cy="delete-button"
        onClick={handleDelete}
      >
        <img src="remove_icon.svg" alt="Remove item" title="Remove item" />
      </a>
    </div>
  );
}

export default PackingListItem;
