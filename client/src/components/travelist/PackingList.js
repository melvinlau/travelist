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
import CategoryList from './CategoryList';

function PackingList({ trip, updateTrip }) {

  const [items, updateItems] = useState([...trip.items]);
  const [completedItems, updateCompletedItems] = useState([]);

  const renderTravelist = () => {
    const rawCategoryList = items.map((item, index) =>
      item.category
    );

    const uniqueCategoryList = Array.from(new Set(rawCategoryList));

    let finalCategoryList = uniqueCategoryList.filter(e => e !== 'miscellaneous')

    finalCategoryList = [...finalCategoryList, 'miscellaneous']

    const travelist = finalCategoryList.map((category, index) => {
      return (
        <CategoryList category={category} items={items} complete={complete} unComplete={unComplete} remove={remove} />
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

  const findExistingMatches = (itemName, list) => {
    return list.filter(element => element.name === itemName)
  }

  const complete = item => {
    if (findExistingMatches(item.name, completedItems).length > 0) return;
    updateCompletedItems([...completedItems, item]);
  }

  const unComplete = item => {
    if (findExistingMatches(item.name, completedItems).length === 0) return;
    const newCompletedItems = [...completedItems];
    newCompletedItems.splice(completedItems.indexOf(findExistingMatches(item, completedItems)[0]), 1);
    updateCompletedItems(newCompletedItems);
  }

  const createItemObject = (name) => {
    return ({
      activities: [],
      category: '',
      default: false,
      custom: true,
      name: name,
      weather: [],
      _id: ''
    }); // should we make an API call to create an item instead? ID will be autogen
  }

  const add = item => {
    if (findExistingMatches(item, items).length > 0) return;
    updateItems([...items, createItemObject(item)]);
  }

  const remove = async item => {
    if (findExistingMatches(item, items).length === 0) return;
    await unComplete(item);
    const newItems = [...items];
    newItems.splice(items.indexOf(findExistingMatches(item, items)[0]), 1);
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
    alert('Items: ' + items + ' Completed items: ' + completedItems);
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

      {renderHeader()}

      <div id="progress-bar"></div>

      <div id="travelist"></div>

      <Link to="/signup">
        <button onClick={reportCompletedItems}>Save</button>
      </Link>

    </div>
  );
}

export default PackingList;
