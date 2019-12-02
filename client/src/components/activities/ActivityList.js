import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { AuthContext } from "../shared/context/auth-context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ActivityListItem from "./ActivityListItem";

function ActivityList({ trip, updateTrip }) {
  const auth = useContext(AuthContext);
  const [activities, setActivities] = useState([
    "skiing",
    "hiking",
    "business"
  ]);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const callUpdateTrip = trip => {
    updateTrip(trip);
  };

  const select = activity => {
    if (selectedActivities.includes(activity)) return;
    setSelectedActivities([...selectedActivities, activity]);
  };

  const deselect = activity => {
    if (!selectedActivities.includes(activity)) return;
    const newSelectedActivities = [...selectedActivities];
    newSelectedActivities.splice(selectedActivities.indexOf(activity), 1);
    setSelectedActivities(newSelectedActivities);
  };

  const handleCreateList = e => {
    axios
      .patch(
        `http://localhost:3001/api/trips/${trip._id}`,
        {
          activities: selectedActivities
        },
        {
          headers: { Authorization: "bearer " + auth.token }
        }
      )
      .then(response => {
        callUpdateTrip(response.data.trip);
        console.log(
          "update trip with activities: response",
          response.data.trip
        );
      })
      .catch(console.log);
  };

  const renderHeader = () => {
    if (trip.destination) {
      return <h3>Things I'll be doing in {trip.destination}</h3>;
    }
  };

  const renderActivitiesList = () => {
    const activitiesList = activities.map((activity, index) => {
      return (
        <ActivityListItem
          key={activity}
          name={activity}
          select={select}
          deselect={deselect}
        />
      );
    });
    ReactDOM.render(activitiesList, document.getElementById("activities-list"));
  };

  useEffect(() => {
    console.log("Activities: trip obj", trip);
    renderActivitiesList();
    console.log("Selected activities", selectedActivities);
  });

  return (
    <div>
      {renderHeader()}

      <div id="activities-list"></div>

      <Link to="/travelist">
        <button data-cy="generate-list-button" onClick={handleCreateList}>
          Generate a Travelist!
        </button>
      </Link>
    </div>
  );
}

export default ActivityList;
