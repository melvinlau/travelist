import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../shared/context/auth-context";
import Auth from "../user/Auth";

function StartForm({ trip, updateTrip }) {
  const auth = useContext(AuthContext);
  const [destination, setDestination] = useState("");
  const [dateFrom, setStartDate] = useState("");
  const [dateTo, setEndDate] = useState("");

  let history = useHistory();

  const callUpdateTrip = trip => {
    updateTrip(trip);
  };

  const handleDestinationChange = e => {
    setDestination(e.target.value);
  };

  const handleStartDateChange = e => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = e => {
    setEndDate(e.target.value);
  };

  const handleCreateTrip = () => {
    axios
      .post(
        "http://localhost:3001/api/trips/",
        {
          destination: destination,
          dateFrom: dateFrom,
          dateTo: dateTo,
          user: auth.userId
        },
        {
          headers: { Authorization: "bearer " + auth.token }
        }
      )
      .then(response => {
        callUpdateTrip(response.data.trip);
        console.log("Create trip: response", response.data.trip);
        history.push('/activities');
      })
      .catch(console.log);
  };

  return (
    <div className="card">
      <div className="card-body">

        <div className="row mb-3">
          <div className="col-12">
            <input
              name="destination"
              data-cy="destination"
              type="text"
              placeholder="Destination"
              className="form-control form-control-lg"
              value={destination}
              onChange={handleDestinationChange}
              autoFocus
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6">
            <div className="category-header">From</div>
            <input
              name="start-date"
              data-cy="start-date"
              type="date"
              placeholder="From"
              className="form-control form-control-lg"
              value={dateFrom}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="col-6">
            <div className="category-header">To</div>
            <input
              name="end-date"
              data-cy="end-date"
              type="date"
              placeholder="To"
              className="form-control form-control-lg"
              value={dateTo}
              onChange={handleEndDateChange}
            />
          </div>
        </div>

        <button
          className="start-button float-right"
          data-cy="start-button"
          onClick={handleCreateTrip}
        >
          Start planning!
        </button>

      </div>
    </div>
  );
}

export default StartForm;
