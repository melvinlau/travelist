import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PackingListItem from './PackingListItem';
import AddItemForm from './AddItemForm';

function PackingList({ trip, updateTrip }) {

  const [items, updateItems] = useState(['shirts', 'socks', 'shoes', 'trousers']);

  const [completedItems, updateCompletedItems] = useState([]);

  const complete = (item) => {
    updateCompletedItems([...completedItems, item]);
  }

  const unComplete = (index) => {
    const newCompletedItems = [...completedItems];
    newCompletedItems.splice(index, 1);
    updateCompletedItems(newCompletedItems);
  }

  const addItem = (item) => {
    updateItems([...items, item])
  }

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    updateItems(newItems);
  }

  return (
    <div>

      <h3>Trip to {trip.destination} on the {trip.dateFrom}</h3>
      {
        items.map((item, index) => {
          return (
            <PackingListItem
              key={index}
              id={index}
              name={item}
              complete={complete}
              unComplete={unComplete}
              deleteItem={deleteItem}
            />
          );
        })
      }

      <AddItemForm addItem={addItem} />
      <Link to="/signup">
        <button>
          Save
        </button>
      </Link>
    </div>
  );
}

export default PackingList;
