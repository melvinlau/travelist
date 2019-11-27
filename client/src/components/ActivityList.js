import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ActivityListItem from './ActivityListItem';

function ActivityList() {
  return (
    <div>
    <ActivityListItem />
    <Link to="/travelist">
      <button className="get-list-button">Generate a Travelist!</button>
    </Link>
    </div>
  );
}

export default ActivityList;
