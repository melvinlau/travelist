import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
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

  const renderTravelist = () => {
    const travelist = items.map((item, index) =>
      <PackingListItem
        key={index}
        id={index}
        name={item}
        complete={complete}
        unComplete={unComplete}
        remove={remove}
      />
    );
    ReactDOM.render(travelist, document.getElementById('travelist'));
  }

  // COMPLETE & UNCOMPLETE

  const complete = item => {
    updateCompletedItems([...completedItems, item]);
  } // OK

  const unComplete = item => {
    if (completedItems.includes(item) === false) return;
    const newCompletedItems = [...completedItems];
    newCompletedItems.splice(completedItems.indexOf(item), 1);
    updateCompletedItems(newCompletedItems);
  } // OK

  // ADD & REMOVE

  const add = item => {
    updateItems([...items, item]);
  } // OK

  const remove = async item => {
    if (items.includes(item) === false) return;
    await unComplete(item);
    const newItems = [...items];
    newItems.splice(items.indexOf(item), 1);
    updateItems(newItems);
  }

  useEffect(() => {
    // update the list that will be passed to backend
    renderTravelist();
    // do the API call here? intuitive option -> no need to click save
    console.log('Items', items);
    console.log('Completed items', completedItems);
  });

  const formattedDate = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return new Date(dateString).toLocaleString(undefined, options);
  }

  const reportCompletedItems = () => {
    alert( 'Items: ' + items + ' Completed items: ' + completedItems);
  }

  const formattedDateFrom = formattedDate(trip.dateFrom);

  const renderHeader = () => {
    if (trip.destination && trip.dateFrom) {
      return (<h3>Trip to {trip.destination} on {formattedDateFrom}</h3>);
    }
  }

  return (
    <div>

      { renderHeader() }

      <AddItemForm add={add} />

      <div id="travelist"></div>

      <Link to="/signup">
        <button onClick={reportCompletedItems}>
          Save
        </button>
      </Link>
    </div>
  );
}

export default PackingList;
