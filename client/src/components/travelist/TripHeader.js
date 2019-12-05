import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import StartFormNew from "./StartFormNew";

import { AuthContext } from "../shared/context/auth-context";

function TripHeader({ trip, formatDate }) {

  const auth = useContext(AuthContext);

  const imageStyle = {
    background: `url(${trip.image}) no-repeat center center`,
    backgroundSize: "cover",
    height: "16rem"
  }

  const renderWeatherEmoji = weather => {
    const emoji = {
      "sunny": "☀️",
      "rainy": "🌧",
      "snowy": " 🌨",
      "hot": "🔥",
      "cold": "❄️"
    }
    const weatherEmojiList = weather.map(text => emoji[text]);
    return weatherEmojiList;
  }

  return (
    <div className="card mb-4">
      <div className="card-img-top" style={imageStyle}></div>

      <div className="card-body pt-4">
        <h3>{auth.trip.destination}</h3>
        <div className="row">
          <div className="col-4">
            <div className="text-muted small">FROM</div>
            <h4>{formatDate(trip.dateFrom)}</h4>
          </div>
          <div className="col-4">
            <div className="text-muted small">TO</div>
            <h4>{formatDate(trip.dateTo)}</h4>
          </div>
          <div className="col-4">
            <div className="text-muted small">WEATHER FORECAST</div>
            { renderWeatherEmoji(trip.weather) }
          </div>
        </div>

      </div>
    </div>
  );
}

export default TripHeader;
