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
import ProgressBar from './ProgressBar';

function PackingList({ trip, updateTrip }) {

  const [items, updateItems] = useState(['shirts', 'shoes', 'jeans']);
  const [completedItems, updateCompletedItems] = useState([]);
  // const [percentComplete, setPercentComplete] = useState(
  //   (completedItems.length / items.length) * 100
  // );

  const renderTravelist = () => {
    const travelist = items.map((item, index) => {
      return (
        <PackingListItem
          key={item}
          name={item}
          complete={complete}
          unComplete={unComplete}
          remove={remove}
        />
      );
    });
    ReactDOM.render(travelist, document.getElementById('travelist'));
  }

  const renderProgressBar = () => {
    const percentComplete = Math.round((completedItems.length / items.length) * 100);
    const progressBar = (
      <ProgressBar percentComplete={percentComplete.toString()} />
    );
    ReactDOM.render(progressBar, document.getElementById('progress-bar'));
  }

  const complete = item => {
    if (completedItems.includes(item)) return;
    updateCompletedItems([...completedItems, item]);
  }

  const unComplete = item => {
    if (!completedItems.includes(item)) return;
    const newCompletedItems = [...completedItems];
    newCompletedItems.splice(completedItems.indexOf(item), 1);
    updateCompletedItems(newCompletedItems);
  }

  const add = item => {
    if (items.includes(item)) return;
    updateItems([...items, item]);
  }

  const remove = async item => {
    if (!items.includes(item)) return;
    await unComplete(item);
    const newItems = [...items];
    newItems.splice(items.indexOf(item), 1);
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

  const reportCompletedItems = () => {
    alert( 'Items: ' + items + ' Completed items: ' + completedItems);
  }

  const formattedDateFrom = formattedDate(trip.dateFrom);

  const renderHeader = () => {
    if (trip.destination && trip.dateFrom) {
      return (<h3>Trip to {trip.destination} on {formattedDateFrom}</h3>);
    }
  }

  useEffect(() => {
    renderTravelist();
    renderProgressBar();
    // do the API call here to update the backend intuitively?
    console.log('Items', items);
    console.log('Completed items', completedItems);
  });

  return (
    <div>

      { renderHeader() }

      <div id="progress-bar"></div>

      <AddItemForm add={add} />

      <h5 className="mt-4">General items</h5>
      <div id="travelist"></div>

      <Link to="/signup">
        <button onClick={reportCompletedItems}>Save</button>
      </Link>

    </div>
  );
}

export default PackingList;
