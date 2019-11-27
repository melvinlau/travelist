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
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Travelist</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
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
        </div>
      </div>
    </div>
  );
}

export default App;
