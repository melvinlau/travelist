import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../shared/context/auth-context";
import Auth from "../user/Auth";

function StartFormNew({ trip, updateTrip }) {
  const auth = useContext(AuthContext);
  const [destination, setDestination] = useState("");
  const [dateFrom, setStartDate] = useState("");
  const [dateTo, setEndDate] = useState("");

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
  console.log(auth.userId);
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
      })
      .catch(console.log);
  };

  return (
    <div className="start-form">
      <form>
        <div className="form-row">
          <div className="form-group col-12">
            <label>
              Destination
              <input
                name="destination"
                data-cy="destination"
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={handleDestinationChange}
                autoFocus
                className="form-control"
                style={{ width: "190%" }}
              />
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <label>
              From
              <input
                name="start-date"
                data-cy="start-date"
                type="date"
                placeholder="From"
                value={dateFrom}
                onChange={handleStartDateChange}
                className="form-control"
                style={{ width: "85%" }}
              />
            </label>
          </div>
          <div className="form-group col-6">
            <label>
              To
              <input
                name="end-date"
                data-cy="end-date"
                type="date"
                placeholder="To"
                value={dateTo}
                onChange={handleEndDateChange}
                className="form-control"
                style={{ width: "85%" }}
              />{" "}
              <br />
            </label>
          </div>
        </div>
        <Link to="/activities">
          <button
            type="submit"
            className="btn btn-warning start-button btn-lg"
            data-cy="start-button"
            onClick={handleCreateTrip}
          >
            Let's go!
          </button>
        </Link>
      </form>
    </div>
  );
}

export default StartFormNew;
