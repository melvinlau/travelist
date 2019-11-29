import React, { useState } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ActivityListItem from './ActivityListItem';

function ActivityList({ trip, updateTrip }) {

  const [activities, setActivities] = useState(['skiing', 'hiking', 'surfing']);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const selectActivity = (activity) => {
    setSelectedActivities([...selectedActivities, activity]);
  }

  const deselectActivity = (index) => {
    const newSelectedActivities = [...selectedActivities];
    newSelectedActivities.splice(index, 1);
    setSelectedActivities(newSelectedActivities);
  }

  const handleCreateList = e => {
    axios.patch(
      `http://localhost:3001/api/trips/${trip._id}`,
      {
        "destination": trip.destination,
        "activity": selectedActivities,
        "items": trip.items
      }
    )
    .then(response => {
      updateTrip(response.data.trip);
      console.log(response.data);
     })
    .catch(console.log);

  }

  const header = () => {
    if (trip.destination) {
      return (<h2>Things I'll be doing in {trip.destination}</h2>);
    }
  }

  return (
    <div>

      { header() }

      {
        activities.map((activity, index) => {
          return (
            <ActivityListItem
              key={index}
              id={index}
              name={activity}
              select={selectActivity}
              deselect={deselectActivity}
            />
          )
        })
      }
      <Link to="/travelist">
        <button data-cy="generate-list-button" onClick={handleCreateList}>
          Generate a Travelist!
        </button>
      </Link>
    </div>
  );
}

export default ActivityList;
