import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Countdown({ dateFrom }) {

  const getDays = (dateFrom) => {
    const now = new Date()
    const date = new Date(dateFrom)
    const result = (date - now)
    const days = (Math.floor(result / (1000 * 60 * 60 * 24))) + 1
    if (days === 1) {
      return (days.toString() + " day")
    } else {
      return (days.toString() + " days")
    }
  }

  return (
    <h2>{getDays(dateFrom)}</h2>
  );
}

export default Countdown;