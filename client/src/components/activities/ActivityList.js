import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { AuthContext } from "../shared/context/auth-context";
import MessageHeader from "../shared/components/MessageHeader";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import ActivityListItem from "./ActivityListItem";

function ActivityList() {
  const auth = useContext(AuthContext);
  const trip = auth.trip;
  const updateTrip = auth.updateTrip;

  let history = useHistory();

  const [activities, setActivities] = useState([
    "business",
    "leisure",
    "beach",
    "hiking",
    "skiing"
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

  const getImage = async destination => {
    const formattedDestination = destination.split(" ").join("+");
    const apiKey = process.env.REACT_APP_IMAGE_API_KEY;
    const url = `https://api.pexels.com/v1/search?query=${formattedDestination}&per_page=1&page=1`;

    const imageUrl = await axios
      .get(url, { headers: { Authorization: `${apiKey}` } })
      .then(response => {
        const photoResults = response.data.photos;
        if (photoResults.length > 0) {
          return photoResults[0].src.large;
        } else {
          return 'https://images.pexels.com/photos/171053/pexels-photo-171053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
        }
      })
    return imageUrl;
  };

  const handleCreateList = e => {
    getImage(trip.destination).then(imageUrl => {
      axios
        .patch(
          `http://localhost:3001/api/trips/${trip._id}`,
          {
            destination: trip.destination,
            activities: selectedActivities,
            imageUrl: imageUrl
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
          history.push("/packinglist");
        })
        .catch(console.log);
    });
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
      <MessageHeader
        message="Up to anything fun there?"
        destination={trip.destination}
        image="./images/trav06.png"
      />
      <div className="card mt-2">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-12">
              <div id="activities-list"></div>
              <button
                data-cy="generate-list-button"
                onClick={handleCreateList}
                className="btn btn-warning"
              >
                Generate a Travelist!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityList;
