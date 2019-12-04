import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../shared/context/auth-context";
import PackingListItem from "./PackingListItem";
import AddItemForm from "./AddItemForm";
import ProgressBar from "./ProgressBar";
import TripHeader from "./TripHeader";
import TripStatus from "./TripStatus";
import CategoryList from "./CategoryList";
import Navbar from "./Navbar";
import Navbar from "./Footer";

function PackingList() {
  const auth = useContext(AuthContext);
  const trip = auth.trip;
  const updateTrip = auth.updateTrip;

  const [items, updateItems] = useState([...trip.items]);
  const [completedItems, updateCompletedItems] = useState([]);

  const renderTravelist = async () => {
    console.log("items", items);

    const rawCategoryList = await items.map(item => item.category);
    const uniqueCategoryList = await Array.from(new Set(rawCategoryList));
    let finalCategoryList = await uniqueCategoryList.filter(
      category => category !== "miscellaneous"
    );
    finalCategoryList = await [...finalCategoryList, "miscellaneous"];

    console.log("finalCategoryList", finalCategoryList);

    const travelist = finalCategoryList.map(category => (
      <CategoryList
        category={category}
        items={items}
        add={add}
        remove={remove}
        complete={complete}
        unComplete={unComplete}
      />
    ));

    ReactDOM.render(travelist, document.getElementById("travelist"));
  };

  const renderProgressBar = () => {
    const percentComplete = Math.round(
      (completedItems.length / items.length) * 100
    );
    const progressBar = (
      <ProgressBar percentComplete={percentComplete.toString()} />
    );
    ReactDOM.render(progressBar, document.getElementById("progress-bar"));
  };

  const findExistingMatches = (item, list) => {
    return list.filter(element => element.name === item.name);
  };

  const complete = item => {
    if (findExistingMatches(item, completedItems).length > 0) return;
    updateCompletedItems([...completedItems, item]);
  };

  const unComplete = item => {
    if (findExistingMatches(item, completedItems).length === 0) return;
    const newCompletedItems = [...completedItems];
    newCompletedItems.splice(
      completedItems.indexOf(findExistingMatches(item, completedItems)[0]),
      1
    );
    updateCompletedItems(newCompletedItems);
  };

  const createItemObject = (name, category) => {
    axios
      .post(
        `http://localhost:3001/api/items/custom`,
        {
          name: name,
          category: category,
          custom: true
        },
        {
          headers: { Authorization: "bearer " + auth.token }
        }
      )
      .then(response => {
        console.log("Create custom item: response", response.data.item);
        return response.data.item;
      })
      .catch(console.log);
  };

  const add = async (name, category) => {
    const item = await createItemObject(name, category);
    if (findExistingMatches(item, items).length > 0) return;
    updateItems([...items, item]);
  };

  const remove = async item => {
    if (findExistingMatches(item, items).length === 0) return;
    await unComplete(item);
    const newItems = [...items];
    newItems.splice(items.indexOf(findExistingMatches(item, items)[0]), 1);
    updateItems(newItems);
  };

  const formattedDate = dateString => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric"
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  const formattedDateFrom = formattedDate(trip.dateFrom);

  // const renderHeader = () => {
  //   if (trip.destination && trip.dateFrom) {
  //     return (
  //       <h3>
  //         Trip to {trip.destination} on {formattedDateFrom}
  //       </h3>
  //     );
  //   }
  // };

  useEffect(() => {
    renderTravelist();
    renderProgressBar();
    // do the API call here to update the backend intuitively?
    console.log("Items", items);
    console.log("Completed items", completedItems);
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
      <Navbar />
      {/* {renderHeader()} */}
      <TripHeader />
      <TripStatus />

      {/* <div id="progress-bar"></div> */}
      <div className="card mb-4 mt-2" style={{ width: "32rem" }} id="list-card">
        <div id="travelist"></div>

        <Link to="/signup">
          <button
            onClick={handleSaveList}
            type="button"
            class="btn btn-warning btn-lg btn-block my-3"
          >
            Save
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default PackingList;
