import React, { useState, useEffect, useContext } from "react";
import ReactDOM from 'react-dom';
import { AuthContext } from "../shared/context/auth-context";

function PackingListItem({ item, complete, unComplete, remove, completedItems }) {

  const auth = useContext(AuthContext);

  const findExistingMatches = (itemName, list) => {
    // Finds an item name (passed in as a string) within a list containing item objects.
    return list.filter(element => element.name === itemName)
  }

  const checkCompletionStatus = () => {
    if (findExistingMatches(item.name, completedItems).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  const [isComplete, setCompletionStatus] = useState(checkCompletionStatus());

  const checkboxId = `checkbox-${item.name}`;

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
    complete(item);
  }

  const markItemIncomplete = () => {
    unComplete(item);
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
    remove(item);
  }

  return (
    <div data-cy="packing-list-item">
      <span id={checkboxId}></span>
      &nbsp;
      <span data-cy="item-name">
        {item.name}
      </span> &nbsp; &nbsp;
      <a className="delete-button float-right" data-cy="delete-button" onClick={handleDelete}>
        <img src="remove_icon.svg" alt="Remove item" title="Remove item" />
      </a>
    </div>
  );
}

export default PackingListItem;
