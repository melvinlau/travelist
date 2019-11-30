import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

function StartForm({ trip, updateTrip }) {

  const [destination, setDestination] = useState('');
  const [dateFrom, setStartDate] = useState('');
  const [dateTo, setEndDate] = useState('');

  const handleDestinationChange = e => {
    setDestination(e.target.value);
  }

  const handleStartDateChange = e => {
    setStartDate(e.target.value)
  }

  const handleEndDateChange = e => {
    setEndDate(e.target.value)
  }

  const handleCreateTrip = () => {
    axios.post(
      'http://localhost:3001/api/trips/',
      {
        "destination": destination,
        "dateFrom": dateFrom,
        "dateTo": dateTo
      }
    )
    .then(response => {
      updateTrip(response.data.trip);
      console.log(response.data);
     })
    .catch(console.log);
  }

  return (
    <div className="start-form">
      <input
        name="destination"
        data-cy="destination"
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={handleDestinationChange}
        autoFocus
      /> <br />
      <input
        name="start-date"
        data-cy="start-date"
        type="date"
        placeholder="From"
        value={dateFrom}
        onChange={handleStartDateChange}
      /> <br />
      <input
        name="end-date"
        data-cy="end-date"
        type="date"
        placeholder="To"
        value={dateTo}
        onChange={handleEndDateChange}
      /> <br />
      <Link to="/activities">
        <button className="start-button" data-cy="start-button" onClick={handleCreateTrip}>
          Start planning
        </button>
      </Link>
    </div>
  );
}

export default StartForm;
