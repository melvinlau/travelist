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
    updateItems([item, ...items])
  }

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    updateItems(newItems);
  }

  const formattedDate = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return new Date(dateString).toLocaleString(undefined, options);
  }

  const formattedDateFrom = formattedDate(trip.dateFrom);

  const header = () => {
    if (trip.destination && trip.dateFrom) {
      return (<h3>Trip to {trip.destination} on {formattedDateFrom}</h3>);
    }
  }

  return (
    <div>

      { header() }

      <AddItemForm addItem={addItem} />

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

      <Link to="/signup">
        <button>
          Save
        </button>
      </Link>
    </div>
  );
}

export default PackingList;
