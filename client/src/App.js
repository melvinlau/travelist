import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import StartForm from './components/StartForm';
import ActivityList from './components/ActivityList';
import PackingList from './components/PackingList';

function App() {
  return (
    <Router>
      <Link to="/">Step 1: Start view</Link> &nbsp;
      <Link to="/activities">Step 2: Activities</Link> &nbsp;
      <Link to="/travelist">Step 3: Travelist</Link> &nbsp;
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/activities">
          <ActivityList />
        </Route>
        <Route path="/travelist">
          <PackingList />
        </Route>
        <Route path="/">
          <StartForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
