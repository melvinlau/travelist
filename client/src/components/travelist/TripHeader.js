import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import StartFormNew from "./StartFormNew";

import { AuthContext } from "../shared/context/auth-context";

function TripHeader({ destination, dateFrom, dateTo, id, link, weather }) {
  const auth = useContext(AuthContext);

  const formatDate = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    };
    return new Date(dateString).toLocaleString(undefined, options);
  }

  const displayWeather = (weatherArray) => {
    const emojiHash = { "hot": "🥵", "cold": "🥶", "snowy": "☃", "rainy": "☔️", "sunny": "☀️", "moderate": "⛅" }
    console.log('weatherArray', weatherArray)
    const weather = weatherArray.map(tag => {
      console.log('tag', tag)
      return (
        emojiHash[tag] + tag + "  "
      )
    })
    return weather
  }

  return (
    <div className="card mb-4" style={{ width: "32rem" }}>
      <div
        className="card-img-top"
        style={{
          background:
            `url(${link}) no-repeat center center`,
          backgroundSize: "100%",
          height: "16rem"
        }}
      ></div>
      <div className="card-body pt-4">
        <h3 className="card-title">
          <strong>{destination}</strong>
        </h3>
        <p className="card-text">
          <span className="text-muted small">FROM: </span>{formatDate(dateFrom)}
          &nbsp;&nbsp;&nbsp;
          <span className="text-muted small">TO: </span>{formatDate(dateTo)}
          <div className="card-weather">
            <div className="dropdown-divider"></div>
            <span className="text-muted small">WEATHER:</span>
            <br />
            <div>{displayWeather(weather)}</div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default TripHeader;
