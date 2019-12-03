import React, { useState, useEffect, useContext } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../shared/context/auth-context";
import PackingListItem from './PackingListItem';
import AddItemForm from './AddItemForm';
import ProgressBar from './ProgressBar';
import CategoryList from './CategoryList';

function PackingList() {

  const auth = useContext(AuthContext);
  const trip = auth.trip;
  const updateTrip = auth.updateTrip;

  const [items, updateItems] = useState([...trip.items]);
  const [completedItems, updateCompletedItems] = useState([]);

  const renderTravelist = async () => {
    console.log('items', items)

    const rawCategoryList = await items.map(item => item.category);
    const uniqueCategoryList = await Array.from(new Set(rawCategoryList));
    let finalCategoryList = await uniqueCategoryList.filter(category => category !== 'miscellaneous');
    finalCategoryList = await [...finalCategoryList, 'miscellaneous'];

    console.log('finalCategoryList', finalCategoryList);

    const travelist = finalCategoryList.map(category =>
       (
        <CategoryList
          key={category}
          category={category}
          items={items}
          add={add}
          remove={remove}
          complete={complete}
          unComplete={unComplete}
          completedItems={completedItems}
        />
      )
    );

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
    // Finds an item name (passed in as a string) within a list containing item objects.
    return list.filter(element => element.name === itemName)
  }

  const complete = item => {
    if (findExistingMatches(item.name, completedItems).length > 0) return;
    updateCompletedItems([...completedItems, item]);
  }

  const unComplete = item => {
    const foundExistingItems = findExistingMatches(item.name, completedItems)
    if (foundExistingItems.length === 0) return;
    const newCompletedItems = [...completedItems];
    newCompletedItems.splice(completedItems.indexOf(foundExistingItems[0]), 1);
    updateCompletedItems(newCompletedItems);
  }

  const callUpdateItems = trip => {
    updateItems(trip);
  };

  const createItemObject = (name, category) => {
    axios
      .post(
        'http://localhost:3001/api/items/custom',
        {
          name: name,
          category: category
        },
        {
          headers: { Authorization: "bearer " + auth.token }
        }
      )
      .then(response => {
        console.log('Create custom item: response', response.data.item);
        callUpdateItems([...items, response.data.item]);
      })
      .catch(console.log);
  }

  const add = async (name, category) => {
    if (findExistingMatches(name, items).length > 0) return;
    createItemObject(name, category);
  }

  const remove = async item => {
    const foundExistingItems = findExistingMatches(item.name, items);
    if (foundExistingItems.length === 0) return;
    await unComplete(item);
    const newItems = [...items];
    newItems.splice(items.indexOf(foundExistingItems[0]), 1);
    await updateItems(newItems);
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

  const callUpdateTrip = trip => {
    updateTrip(trip);
  };

  const handleSaveList = e => {
    axios
      .patch(
        `http://localhost:3001/api/trips/${trip._id}/items/packed`,
        {
          items: items,
          packedItems: completedItems
        },
        {
          headers: { Authorization: "bearer " + auth.token }
        }
      )
      .then(response => {
        callUpdateTrip(response.data.trip);
        console.log(
          "update trip with packed list: response",
          response.data.trip
        );
      })
      .catch(console.log);
  };


  return (
    <div>

      {renderHeader()}

      <div id="progress-bar"></div>

      <div id="travelist"></div>

      <Link to="/signup">
        <button onClick={handleSaveList}>Save</button>
      </Link>

    </div>
  );
}

export default PackingList;
