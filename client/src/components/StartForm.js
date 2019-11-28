import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function StartForm({ setDestination, setDateTo, setDateFrom }) {

  const [userInputDestination, setUserInputDestination] = useState('')
  const [dateTo, setUserEndDate] = useState('')
  const [dateFrom, setUserStartDate] = useState('')

  const handleDestinationChange = e => {
    setUserInputDestination(e.target.value);
  }

  const handleEndDateChange = e => {
    setUserEndDate(e.target.value)
  }

  const handleStartDateChange = e => {
    setUserStartDate(e.target.value)
  }

  const submitStartForm = () => {
    setDestination(userInputDestination);    
    setDateTo(dateTo);
    setDateFrom(dateFrom);
    postStartFormToAPI()
  }
  //test output 
  const postStartFormToAPI = () => {
    console.log(dateTo)
  }


  return (
    <div className="start-form">
      <input
        type="text"
        name="destination"
        placeholder="Destination"
        value={userInputDestination}
        onChange={handleDestinationChange}
      /> <br />
      <input
        type="date"
        name="date-from"
        placeholder="From"
        value={dateFrom}
        onChange={handleStartDateChange}
      /> <br />
      <input
        type="date"
        name="date-to"
        placeholder="To"
        value={dateTo}
        onChange={handleEndDateChange}
      /> <br />
      <Link to="/activities">
        <button className="start-button" onClick={submitStartForm}>
          Start planning
        </button>
      </Link>
    </div>
  );
}

export default StartForm;
